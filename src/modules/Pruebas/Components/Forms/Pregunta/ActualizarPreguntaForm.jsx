'use client'
import React from 'react'
import { useState } from 'react';

import 'quill/dist/quill.snow.css';
import { estadoOptions, toolbarSetting } from '@/shared/Constants/GlobalConstants';
import { ButtonSubmit } from '@/shared/Components/Buttons/ButtonSubmit';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import { Button, ModalBody, ModalFooter } from '@nextui-org/react';
import TemplateAlert from '@/shared/Components/Templates/TemplateAlert';
import { usePreguntaService } from '@/modules/Pruebas/Hooks/usePreguntaService';
import { useSWRConfig } from 'swr';
import { toast } from 'react-toastify';
import ButtonCloseModal from '@/shared/Components/Buttons/ButtonCloseModal';
import SelectField from '@/shared/Components/Form/Fields/SelectField';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

function ActualizarPreguntaForm({ onClose, row }) {
    const { actualizarPregunta } = usePreguntaService()
    const [enunciado, setEnunciado] = useState(row.enunciado);
    const [pregunta, setPregunta] = useState(row.pregunta);
    const { mutate } = useSWRConfig()
    const { register, handleSubmit, getValues, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const [errorValidation, setErrorValidation] = useState('');
    const form = handleSubmit(async (data) => {

        const request = {
            ...data,
            idPrueba: row.idPrueba,
            enunciado: enunciado,
            pregunta: pregunta
        }

        try {
            const response = await actualizarPregunta(row.id, request)

            if (response.success === true) {
                setErrorValidation([])
                mutate(`pruebas_preguntas_${row.idPrueba}`,
                    // Aquí se actualiza la data
                    (res) => res
                        ? {
                            ...res,
                            data: res.data.map(item => item.id === row.id ? response.data : item)
                        }
                        : res,
                    false
                )
                onClose()
                toast.success(response.messages[0])
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
        <section>
            <form onSubmit={form}>
                <ModalBody>
                    {
                        errorValidation.length === 0 ? null : (
                            <section>
                                <TemplateAlert message={errorValidation} type={'errorList'} />
                            </section>
                        )
                    }
                    <div className="grid gap-6 mb-6 md:grid-cols-1">
                        <div className='col-span-2'>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ENUNCIADO <span className="text-red-500">*</span></label>
                            <ReactQuill value={enunciado} onChange={(e) => { setEnunciado(e) }} modules={toolbarSetting} />
                        </div>
                        <div className='col-span-2'>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PREGUNTA <span className="text-red-500">*</span></label>
                            <ReactQuill value={pregunta} onChange={(e) => { setPregunta(e) }} modules={toolbarSetting} />
                        </div>

                        <div className='col-span-1'>
                            <SelectField
                                id="estado"
                                label="estado"
                                options={estadoOptions}
                                setValue={setValue}
                                value={row.estado}
                                isRequired={true}
                                register={register}
                                error={errors.estado}
                            />

                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <ButtonSubmit label="Actualizar" isSubmitting={isSubmitting} />
                    <ButtonCloseModal onClose={onClose} />
                </ModalFooter>
            </form>
        </section>
    )

}

export default ActualizarPreguntaForm
