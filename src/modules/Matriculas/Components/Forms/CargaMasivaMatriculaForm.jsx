import TemplateAlert from '@/shared/Components/Templates/TemplateAlert';
import { ModalBody, ModalFooter } from '@nextui-org/react';
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { useMatriculaService } from '../../Hooks/useMatriculaService';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { ButtonSubmit } from '@/shared/Components/Buttons/ButtonSubmit';
import { useSWRConfig } from 'swr';
import { useMatricula } from '../../Providers/MatriculaProvider';
import ButtonCloseModal from '@/shared/Components/Buttons/ButtonCloseModal';

const CargaMasivaMatriculaForm = ({ onClose }) => {
    const [data, setData] = useState([]);
    const [jsonData, setJsonData] = useState([]);
    const [fileName, setFileName] = useState('');
    const [errorValidation, setErrorValidation] = useState('');
    const { mutate } = useSWRConfig();
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
    const { cargaMasiva } = useMatriculaService();
    const { query, pagination } = useMatricula()

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

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
            const body = json.slice(1);
            setJsonData(body);
        };

        reader.readAsArrayBuffer(file);
    };

    const onSubmit = handleSubmit(async (formData) => {
        const request = { archivo: formData.archivo[0] };

        try {
            const response = await cargaMasiva(request);
            if (response.success) {
                toast.success(response.messages[0]);
                onClose();
                reset();
                mutate(`matriculas_${pagination?.pageIndex + 1}_${JSON.stringify(query)}`)
                setErrorValidation('');
            } else {
                const errores = [
                    ...Object.values(response.errors || {}).flat(),
                    ...Object.values(response.validations || {}).flat(),
                ];
                setErrorValidation(errores);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });

    return (
        <form onSubmit={onSubmit}>
            <ModalBody>
                {errorValidation.length > 0 && (
                    <section>
                        <TemplateAlert message={errorValidation} type="errorList" />
                    </section>
                )}
                <section className='flex items-center justify-between'>
                    <label htmlFor="archivo" className="block uppercase mb-2 text-xs font-medium text-gray-900 dark:text-white">
                        ARCHIVO <span className="text-red-500">*</span>
                    </label>
                    <div className='flex gap-4'>
                        <a href="/formatos/FORMATO_CARGA_MASIVA_MATRICULA.xlsx" className='text-[#338ef7] hover:text-blue-800' title='Descargar' download="formato_carga_masiva.xlsx">
                            DESCARGAR PLANTILLA
                        </a>
                        <a href="/formatos/DICCIONARIO_DATOS_MATRICULA.xlsx" className='text-[#338ef7] hover:text-blue-800' title='Descargar Diccionario' download="diccionario_datos.xlsx">
                            DIRECCIONARIO DE DATOS
                        </a>
                    </div>
                </section>
                <input
                    type="file"
                    id="archivo"
                    accept=".xlsx, .xls"
                    {...register('archivo', { required: 'Este campo es obligatorio.' })}
                    onChange={handleFileChange}
                    className="mb-4 p-2 border border-gray-300 rounded"
                />
                {errors.archivo && (
                    <span className="text-red-500 text-xs">{errors.archivo.message}</span>
                )}
                {data.length > 0 && (
                    <section>
                        <p className="font-semibold">Nombre de Archivo:</p>
                        <span>{fileName}</span>
                        <p className="font-semibold">Cantidad de matriculados:</p>
                        <span>{data.length}</span>
                    </section>
                )}
            </ModalBody>
            <ModalFooter>
                <ButtonSubmit label="Cargar" isSubmitting={isSubmitting} />
                <ButtonCloseModal onClose={onClose} />
            </ModalFooter>
        </form>
    );
};

export default CargaMasivaMatriculaForm;
