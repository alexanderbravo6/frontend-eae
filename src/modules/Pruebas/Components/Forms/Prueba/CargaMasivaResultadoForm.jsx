import TemplateAlert from '@/shared/Components/Templates/TemplateAlert';
import { Chip, ModalBody, ModalFooter } from '@nextui-org/react';
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { ButtonSubmit } from '@/shared/Components/Buttons/ButtonSubmit';
import { useSWRConfig } from 'swr';
import ButtonCloseModal from '@/shared/Components/Buttons/ButtonCloseModal';
import { useResultadoEstudianteService } from '../../../../Resultados/Estudiantes/Hooks/useResultadoEstudianteService';
import { useResultadoEstudiante } from '../../../../Resultados/Estudiantes/Providers/ResultadoEstudianteProvider';
import { useSession } from 'next-auth/react';

const CargaMasivaResultadoForm = ({ onClose, row }) => {
    const [data, setData] = useState([]);
    const { data: session } = useSession();
    const [jsonData, setJsonData] = useState([]);
    const [fileName, setFileName] = useState('');
    const [errorValidation, setErrorValidation] = useState('');
    const { mutate } = useSWRConfig();
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
    const { cargaMasiva } = useResultadoEstudianteService();


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
        const request = {
            idPrueba: row.id,
            archivo: formData.archivo[0]
        };

        try {
            const response = await cargaMasiva(request);
            if (response.success) {
                toast.success(response.messages[0]);
                onClose();
                reset();
                mutate(`pruebas_${session?.user?.anio}`);
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
            {
                row.existeCorte ?
                    <>
                        <ModalBody>
                            {errorValidation.length > 0 && (
                                <section>
                                    <TemplateAlert message={errorValidation} type="errorList" />
                                </section>
                            )}
                            <div className='mb-4'>
                                <Chip color="primary">
                                    TOTAL DE RESULTADOS REGISTRADOS : {row.resultados}
                                </Chip>
                            </div>
                            <section className='flex items-center justify-between'>
                                <label htmlFor="archivo" className="block uppercase mb-2 text-xs font-medium text-gray-900 dark:text-white">
                                    ARCHIVO <span className="text-red-500">*</span>
                                </label>
                                <div className='flex gap-4'>
                                    <a href="/Formatos/FORMATO_CARGA_MASIVA_RESULTADOS.xlsx" className='text-[#338ef7] hover:text-blue-800' title='Descargar' download="formato_carga_masiva.xlsx">
                                        DESCARGAR PLANTILLA
                                    </a>
                                    <a href="/Formatos/DICCIONARIO_DATOS_RESULTADOS.xlsx" className='text-[#338ef7] hover:text-blue-800' title='Descargar Dieccionario' download="diccionario_datos.xlsx">
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
                                    <p className="font-semibold">Nombre de archivo:</p>
                                    <span>{fileName}</span>
                                    <p className="font-semibold">Cantidad de resultados:</p>
                                    <span>{data.length}</span>
                                </section>
                            )}
                        </ModalBody>
                        <ModalFooter>
                            <ButtonSubmit label="Cargar" isSubmitting={isSubmitting} />
                            <ButtonCloseModal onClose={onClose} />
                        </ModalFooter>
                    </>
                    :
                    <>
                        <ModalBody>
                            <section>
                                <TemplateAlert message='No se puede cargar resultados a una prueba sin cortes de nivel de desempeño.' type="Error" />
                            </section>
                        </ModalBody>
                        <ModalFooter>
                            <ButtonCloseModal onClose={onClose} />
                        </ModalFooter>
                    </>
            }
        </form>
    );
};

export default CargaMasivaResultadoForm;
