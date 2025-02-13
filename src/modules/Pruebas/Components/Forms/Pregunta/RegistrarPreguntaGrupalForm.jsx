'use client'
import React from 'react'
import { useState } from 'react';

import 'quill/dist/quill.snow.css';
import { estadoOptions, toolbarSetting } from '@/shared/Constants/GlobalConstants';
import { ButtonSubmit } from '@/shared/Components/Buttons/ButtonSubmit';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import { Button, ModalBody, ModalFooter } from '@nextui-org/react';
import ButtonCloseModal from '@/shared/Components/Buttons/ButtonCloseModal';
import SelectField from '@/shared/Components/Form/Fields/SelectField';
import { usePreguntaService } from '@/modules/Pruebas/Hooks/usePreguntaService';
import TemplateAlert from '@/shared/Components/Templates/TemplateAlert';
import { useSWRConfig } from 'swr';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


function RegistrarPreguntaGrupalForm({ onClose, idPrueba }) {
    const [pregunta, setPregunta] = useState('');
    const [errorValidation, setErrorValidation] = useState('');
    const { FetchUtils, registrarPregunta } = usePreguntaService()
    const { register, handleSubmit, getValues, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const utils = FetchUtils()
    const { mutate } = useSWRConfig()
    const form = handleSubmit(async (data) => {
        const request = {
            ...data,
            idPrueba: idPrueba,
            esGrupal: true,
            pregunta: pregunta
        }

        try {
            const response = await registrarPregunta(request)

            if (response.success === true) {
                setErrorValidation([])
                mutate(`pruebas_preguntas_${idPrueba}`,
                    // Aquí se actualiza la data
                    (res) => {

                        return { ...res, data: [...res.data, response.data] }
                    }
                    , false
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
                        <div className='col-span-1'>

                            <SelectField
                                id="idEnunciado"
                                label="enunciado"
                                options={utils?.data?.data?.enunciados?.map(item => ({
                                    value: item.id,
                                    label: ` ${item.titulo}`
                                })) || []}
                                isLoading={utils?.isLoading}
                                isRequired={true}
                                setValue={setValue}
                                register={register}
                                error={errors.idEnunciado}
                            />

                        </div>
                        <div className='col-span-1'>
                            <label htmlFor="contenido" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PREGUNTA <span className="text-red-500">*</span></label>
                            <ReactQuill value={pregunta} onChange={(e) => { setPregunta(e) }} modules={toolbarSetting} />
                        </div>
                        <div className='col-span-1'>

                            <SelectField
                                id="idGrupo"
                                label="grupo"
                                options={utils?.data?.data?.grupos?.map(item => ({
                                    value: item.id,
                                    label: ` ${item.nombre}`
                                })) || []}
                                isLoading={utils?.isLoading}
                                isRequired={true}
                                setValue={setValue}
                                register={register}
                                error={errors.idGrupo}
                            />
                        </div>
                        <div className='col-span-1'>
                            <SelectField
                                id="estado"
                                label="estado"
                                options={estadoOptions}
                                setValue={setValue}
                                isRequired={true}
                                register={register}
                                error={errors.estado}
                            />

                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <ButtonSubmit label="Registrar" isSubmitting={isSubmitting} />
                    <ButtonCloseModal onClose={onClose} />
                </ModalFooter>
            </form>
        </section>
    )

}

export default RegistrarPreguntaGrupalForm
