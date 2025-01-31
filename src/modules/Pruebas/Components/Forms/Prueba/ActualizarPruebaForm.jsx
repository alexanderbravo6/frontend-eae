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
import SelectField from '@/shared/Components/Form/Fields/SelectField';
import NumberField from '@/shared/Components/Form/Fields/NumberField';
import TimeField from '@/shared/Components/Form/Fields/TimeField';
import DateField from '@/shared/Components/Form/Fields/DateField';
import { cierreAutomaticoOptions } from '@/shared/Constants/GlobalConstants';
import InputField from '@/shared/Components/Form/Fields/InputField';

function ActualizarPruebaForm({ onClose, row }) {
    const { utils } = usePrueba()
    const { data: session } = useSession()
    const { actualizarPrueba } = usePruebaService()
    const { mutate } = useSWRConfig()
    const [errorValidation, setErrorValidation] = useState('');

    const { register, handleSubmit, getValues, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const form = handleSubmit(async (data) => {


        try {
            const response = await actualizarPrueba(row.id, data)

            if (response.success === true) {
                setErrorValidation([])
                mutate(`pruebas_${session?.user.anio}`,
                    // Aquí se actualiza la data
                    (res) => res
                        ? {
                            ...res,
                            data: res.data.map(item => item.id === row.id ? response.data : item)
                        }
                        : res,
                    false
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
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div className='md:col-span-2  '>
                            <InputField
                                id="nombre"
                                value={row.nombre}
                                label="nombre de prueba"
                                isRequired={true}
                                register={register}
                                error={errors.nombre}
                            />

                        </div>
                        <div className='md:col-span-1'>
                            <SelectField
                                id="idTipoPrueba"
                                label="tipo de prueba"
                                value={row.idTipoPrueba}
                                options={utils?.data?.data?.tiposPrueba?.map(item => ({
                                    value: item.id,
                                    label: `${item.descripcion}`
                                })) || []}
                                isLoading={utils?.isLoading}
                                isRequired={true}
                                setValue={setValue}
                                register={register}
                                error={errors.idTipoPrueba}
                            />

                        </div>
                        <div className='md:col-span-1'>
                            <SelectField
                                id="idEspecialidad"
                                label="especialidades"
                                options={[
                                    { value: 0, label: "TODAS LAS ESPECIALIDADES" },
                                    ...(utils?.data?.data.especialidades?.map(item => ({
                                        value: item.id,
                                        label: `${item.descripcion}`
                                    })) || [])
                                ]}
                                value={row.idEspecialidad}
                                isLoading={utils?.isLoading}
                                isRequired={true}
                                setValue={setValue}
                                register={register}
                                error={errors.idEspecialidad}
                            />

                        </div>
                        <div className='col-span-1'>
                            <SelectField
                                id="idCiclo"
                                label="ciclo"
                                value={row.idCiclo}
                                options={utils?.data?.data.ciclos?.map(item => ({
                                    value: item.id,
                                    label: `${item.descripcion}`
                                })) || []}
                                isLoading={utils?.isLoading}
                                isRequired={true}
                                setValue={setValue}
                                register={register}
                                error={errors.idCiclo}
                            />


                        </div>
                        <div className='col-span-1'>
                            <SelectField
                                id="idPeriodoAcademico"
                                label="periodo académico"
                                value={row.idPeriodoAcademico}
                                options={utils?.data?.data?.periodosAcademicos?.map(item => ({
                                    value: item.id,
                                    label: `${item.descripcion}`
                                })) || []}
                                isLoading={utils?.isLoading}
                                isRequired={true}
                                setValue={setValue}
                                register={register}
                                error={errors.idPeriodoAcademico}
                            />


                        </div>
                        <div className='col-span-1'>
                            <SelectField
                                id="idIndicacion"
                                value={row.idIndicacion}
                                label="Indicaciones"
                                options={utils?.data?.data?.indicaciones?.map(item => ({
                                    value: item.id,
                                    label: `${item.nombre}`
                                })) || []}
                                isLoading={utils?.isLoading}
                                isRequired={true}
                                setValue={setValue}
                                register={register}
                                error={errors.idIndicacion}
                            />


                        </div>
                        <div className='col-span-1'>
                            <DateField
                                value={row.fechaPrueba}
                                id="fechaPrueba"
                                label="fecha"
                                isRequired={true}
                                register={register}
                                error={errors.fechaPrueba}
                            />

                        </div>
                        <div className='col-span-1' >
                            <TimeField
                                id="horaInicio"

                                value={row.horaInicio}
                                label="hora de inicio"
                                isRequired={true}
                                register={register}
                                error={errors.horaInicio}
                            />

                        </div>
                        <div className='col-span-1' >
                            <TimeField
                                id="horaFin"
                                value={row.horaFin}
                                label="hora de finalización"
                                isRequired={true}
                                register={register}
                                error={errors.horaFin}
                            />


                        </div>

                        <div className='col-span-1  '>
                            <NumberField
                                id="duracion"
                                label="duración de pruebas en minutos"
                                isRequired={true}
                                value={row.duracion}
                                register={register}
                                error={errors.duracion}
                            />

                        </div>
                        <div className='col-span-1'>
                            <SelectField
                                id="cierreAutomatico"
                                value={row.cierreAutomatico}
                                label="¿requiere cierre automático?"
                                options={cierreAutomaticoOptions}
                                setValue={setValue}
                                isRequired={true}
                                register={register}
                                error={errors.cierreAutomatico}
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

export default ActualizarPruebaForm
