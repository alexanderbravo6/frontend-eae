
import TemplateAlert from '@/shared/Components/Templates/TemplateAlert';
import { useGlobal } from '@/shared/Providers/GlobalProvider';
import { Button, ModalBody, ModalFooter } from '@nextui-org/react';
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { useMatriculaService } from '../../Hooks/useMatriculaService';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { ButtonSubmit } from '@/shared/Components/Buttons/ButtonSubmit';
import { useSWRConfig } from 'swr';

const CargaMasivaMatriculaForm = ({ onClose }) => {
    const [data, setData] = useState([]);
    const [jsonData, setJsonData] = useState([]);
    const [fileName, setFileName] = useState('');
    const { mutate } = useSWRConfig()
    const { register, handleSubmit, getValues, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const [errorValidation, setErrorValidation] = useState('');
    const { cargaMasiva } = useMatriculaService();
    const { page, query } = useGlobal();
    const handleFileChange = (event) => {
        const file = event.target.files[0];

        setFileName(file.name);

        const reader = new FileReader();
        reader.onload = (e) => {
            const ab = e.target.result;
            const workbook = XLSX.read(ab, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const json = XLSX.utils.sheet_to_json(sheet);

            setData(json);

            // Excluir la cabecera (primera fila)
            const header = json[0];
            const body = json.slice(1);
            setJsonData(body);
        };

        reader.readAsArrayBuffer(file);
    };


    const formulario = handleSubmit(async (data) => {
        const formData = new FormData();

        const request = {
            archivo: data.archivo[0],
        }


        try {

            const response = await cargaMasiva(request)
            if (response.success === true) {
                toast.success(response.messages[0])
                onClose()
                reset()
                mutate(`matriculas_${page}_${JSON.stringify(query)}`)
                setErrorValidation("")
            } else {
                if (response.errors) {
                    const nuevosErrores = Object.values(response.errors).flat();
                    setErrorValidation(nuevosErrores)
                }
                if (response.validations) {
                    const nuevosErrores = Object.values(response.validations).flat();
                    setErrorValidation(nuevosErrores)
                }
            }
        } catch (error) {
            console.log(error)
        }

    })

    return (
        <>
            <form onSubmit={formulario} >
                <ModalBody>

                    {
                        errorValidation.length === 0 ? null : (
                            <section>
                                <TemplateAlert message={errorValidation} type={'errorList'} />
                            </section>
                        )
                    }
                    <input
                        type="file"
                        id="archivo"
                        accept=".xlsx, .xls"
                        onChange={handleFileChange}
                        {...register('archivo', { required: true })}
                        className="mb-4 p-2 border border-gray-300 rounded"
                    />
                    {
                        errors.archivo && (
                            <span className="text-red-500 text-xs">{errors.archivo.message}</span>
                        )
                    }
                    {
                        data.length > 0 && (
                            <>
                                <section>
                                    <p className='font-semibold'>Nombre de Archivo: </p> <span>{fileName} </span>
                                    <p className='font-semibold'>Cantidad de matriculados: </p> <span> {data.length}</span>
                                </section>
                            </>
                        )
                    }


                </ModalBody >
                <ModalFooter>
                    <ButtonSubmit label="Cargar" isSubmitting={isSubmitting} />
                    <Button color="danger" variant="flat" onPress={onClose}   >
                        Cerrar
                    </Button>
                </ModalFooter>
            </form >
        </>

    );
};

export default CargaMasivaMatriculaForm;
