'use client'
import React, { useState } from 'react'
import { ButtonSubmit } from '@/shared/Components/Buttons/ButtonSubmit';
import { useForm } from 'react-hook-form';
import {  ModalBody, ModalFooter } from '@nextui-org/react';
import { usePruebaService } from '@/modules/Pruebas/Hooks/usePruebaService';
import TemplateAlert from '@/shared/Components/Templates/TemplateAlert';
import { useSWRConfig } from 'swr';
import { toast } from 'react-toastify';
import ButtonCloseModal from '@/shared/Components/Buttons/ButtonCloseModal';
import NumberField from '@/shared/Components/Form/Fields/NumberField';

function RegistrarCortePuntajeForm({ onClose, idPrueba }) {


    const { registrarCortePuntaje } = usePruebaService()
    const { mutate } = useSWRConfig()
    const [errorValidation, setErrorValidation] = useState('');
    const { register, handleSubmit, getValues, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const form = handleSubmit(async (data) => {
        const request = {
            idPrueba: idPrueba,
            ...data,
        }

        try {
            const response = await registrarCortePuntaje(request)

            if (response.success === true) {
                setErrorValidation([])
                mutate(`listado_cortes_puntajes_${idPrueba}`)
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
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div className='md:col-span-2  '>
                            <NumberField
                                id="puntaje"
                                label="puntaje"
                                isRequired={true}
                                min={1}
                                max={999}
                                minLength={1}
                                maxLength={3}
                                register={register}
                                error={errors.puntaje}
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

export default RegistrarCortePuntajeForm
