'use client'
import React, { useState } from 'react'
import { ButtonSubmit } from '@/shared/Components/Buttons/ButtonSubmit';
import { useForm } from 'react-hook-form';
import { Button, DatePicker, Divider, ModalBody, ModalFooter, Radio, RadioGroup } from '@nextui-org/react';
import { usePrueba } from '@/modules/Pruebas/Providers/PruebaProvider';
import { useSession } from 'next-auth/react';
import { usePruebaService } from '@/modules/Pruebas/Hooks/usePruebaService';
import TemplateAlert from '@/shared/Components/Templates/TemplateAlert';
import { useSWRConfig } from 'swr';
import { toast } from 'react-toastify';
import { useUtils } from '@/shared/Hooks/useUtils';
import ButtonCloseModal from '@/shared/Components/Buttons/ButtonCloseModal';
import InputField from '@/shared/Components/Form/Fields/InputField';
import SelectField from '@/shared/Components/Form/Fields/SelectField';
import DateField from '@/shared/Components/Form/Fields/DateField';
import TimeField from '@/shared/Components/Form/Fields/TimeField';
import NumberField from '@/shared/Components/Form/Fields/NumberField';
import { cierreAutomaticoOptions, nivelDesempenio } from '@/shared/Constants/GlobalConstants';
import TextAreaField from '@/shared/Components/Form/Fields/TextAreaField';

function ActualizarDescripcionForm({ onClose, row }) {


    const { actualizarDescripcion } = usePruebaService()
    const { mutate } = useSWRConfig()
    const [errorValidation, setErrorValidation] = useState('');
    const { register, handleSubmit, getValues, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const form = handleSubmit(async (data) => {
        const request = {
            idPrueba: row.idPrueba,
            ...data,
        }

        try {
            const response = await actualizarDescripcion(request, row.id)

            if (response.success === true) {
                setErrorValidation([])
                mutate(`listado_descripcion_nivel_desempenio_${idPrueba}`
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
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div className='md:col-span-2  '>
                            <SelectField
                                id="nivel"
                                label="nivel de desempeño"
                                options={nivelDesempenio}
                                setValue={setValue}
                                isRequired={true}
                                value={row.nivel}
                                register={register}
                                error={errors.nivel}
                            />


                        </div>
                        <div className='md:col-span-2  '>
                            <TextAreaField
                                id="descripcion"
                                label="descripción"
                                isRequired={true}
                                value={row.descripcion}
                                register={register}
                                error={errors.descripcion}
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

export default ActualizarDescripcionForm
