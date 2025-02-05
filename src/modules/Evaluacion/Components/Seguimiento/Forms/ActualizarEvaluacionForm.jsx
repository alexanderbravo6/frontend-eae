'use client'
import React, { useState } from 'react'
import { ButtonSubmit } from '@/shared/Components/Buttons/ButtonSubmit';
import { useForm } from 'react-hook-form';
import { Button, DatePicker, Divider, ModalBody, ModalFooter, Radio, RadioGroup } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import { usePruebaService } from '@/modules/Pruebas/Hooks/usePruebaService';
import TemplateAlert from '@/shared/Components/Templates/TemplateAlert';
import { useSWRConfig } from 'swr';
import { toast } from 'react-toastify';
import ButtonCloseModal from '@/shared/Components/Buttons/ButtonCloseModal';
import SelectField from '@/shared/Components/Form/Fields/SelectField';
import { useSeguimientoEvaluacion } from '@/modules/Evaluacion/Context/SeguimientoEvaluacionProvider';
import { useSeguimientoService } from '@/modules/Evaluacion/Hooks/useSeguimientoService';

const estadoOptions = [
    { value: '1', label: 'FINALIZADO' },
    { value: '0', label: 'EN PROCESO' }
]

function ActualizarEvaluacionForm({ onClose, row }) {

    const { data: session } = useSession()
    const { actualizarEvaluacion } = useSeguimientoService()
    const { mutate } = useSWRConfig()
    const [errorValidation, setErrorValidation] = useState('');
    const { query, pagination } = useSeguimientoEvaluacion()
    const { register, handleSubmit, getValues, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const form = handleSubmit(async (data) => {


        try {
            const response = await actualizarEvaluacion(row.id, data)

            if (response.success === true) {
                setErrorValidation([])
                mutate(`evaluaciones_${pagination?.pageIndex + 1}_${JSON.stringify(query)}`)
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

                    <div className='col-span-1'>
                        <SelectField
                            id="estado"
                            value={row.estado}
                            label="Estado"
                            options={estadoOptions}
                            setValue={setValue}
                            isRequired={true}
                            register={register}
                            error={errors.estado}
                        />


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

export default ActualizarEvaluacionForm
