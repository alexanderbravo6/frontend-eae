'use client'
import React, { useState } from 'react'
import { ButtonSubmit } from '@/shared/Components/Buttons/ButtonSubmit';
import { useForm } from 'react-hook-form';
import { Button, ModalBody, ModalFooter } from '@nextui-org/react';
import { parseDate } from "@internationalized/date";
import { useMatricula } from '../../Providers/MatriculaProvider';
import TemplateAlert from '@/shared/Components/Templates/TemplateAlert';
import { useMatriculaService } from '../../Hooks/useMatriculaService';
import { useSWRConfig } from 'swr';
import { toast } from 'react-toastify';
import SelectField from '@/shared/Components/Form/Fields/SelectField';
import DateField from '@/shared/Components/Form/Fields/DateField';
import InputField from '@/shared/Components/Form/Fields/InputField';
import NumberField from '@/shared/Components/Form/Fields/NumberField';
import { sexoOptions, tipoDocumentoOptions } from '@/shared/Constants/GlobalConstants';
import ButtonCloseModal from '@/shared/Components/Buttons/ButtonCloseModal';
function ActualizarMatriculaForm({ row, onClose }) {
    const { actualizarMatricula } = useMatriculaService()
    const [errorValidation, setErrorValidation] = useState('');
    const { query, pagination, utils } = useMatricula()
    const { register, handleSubmit, getValues, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const { mutate } = useSWRConfig()
    const form = handleSubmit(async (data) => {

        try {
            const response = await actualizarMatricula(row.id, data)

            if (response.success === true) {
                setErrorValidation([])
                mutate(`matriculas_${pagination?.pageIndex + 1}_${JSON.stringify(query)}`,

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
                    <div className="grid gap-6 mb-6 grid-cols-1 md:grid-cols-3">
                        <div className='col-span-1'>
                            <SelectField
                                id="tipoDocumento"
                                value={row.tipoDocumento}
                                label="tipo de documento"
                                options={tipoDocumentoOptions}
                                setValue={setValue}
                                isRequired={true}
                                register={register}
                                error={errors.tipoDocumento}
                            />

                        </div>
                        <div className='col-span-2'>
                            <NumberField
                                id="numeroDocumento"
                                value={row.numeroDocumento}
                                label="número de documento"
                                isRequired={true}
                                maxLength={8}
                                minLength={8}
                                register={register}
                                error={errors.numeroDocumento}
                            />

                        </div>
                        <div className='col-span-1'>
                            <InputField
                                id="primerApellido"
                                value={row.primerApellido}
                                label="primer apellido"
                                isRequired={true}
                                register={register}
                                error={errors.primerApellido}
                            />
                        </div>
                        <div className='col-span-1'>
                            <InputField
                                id="segundoApellido"
                                label="segundo apellido"
                                value={row.segundoApellido}
                                isRequired={true}
                                register={register}
                                error={errors.segundoApellido}
                            />
                        </div>
                        <div className='col-span-1'>
                            <InputField
                                id="nombres"
                                value={row.nombres}
                                label="nombres"
                                isRequired={true}
                                register={register}
                                error={errors.nombres}
                            />
                        </div>
                        <div className='col-span-1'>
                            <DateField
                                id="fechaNacimiento"
                                value={row.fechaNacimiento}
                                label="fecha de nacimiento"
                                type={"max-date-today"}
                                isRequired={true}
                                register={register}
                                error={errors.fechaNacimiento}
                            />
                        </div>
                        <div className='col-span-2'>

                            <SelectField
                                id="idInstitucion"
                                value={row.idInstitucion}
                                label="institución"
                                options={utils?.data?.data?.instituciones?.map(item => ({
                                    value: item.id,
                                    label: `${item.region} - ${item.nombre}`
                                })) || []}
                                isLoading={utils?.isLoading}
                                isRequired={true}
                                setValue={setValue}
                                register={register}
                                error={errors.idInstitucion}
                            />
                        </div>
                        <div className='col-span-2'>
                            <SelectField
                                id="idEspecialidad"
                                value={row.idEspecialidad}
                                label="especialidad"
                                options={utils?.data?.data?.especialidades?.map(item => ({
                                    value: item.id,
                                    label: ` ${item.descripcion}`
                                })) || []}
                                isLoading={utils?.isLoading}
                                isRequired={true}
                                setValue={setValue}
                                register={register}
                                error={errors.idEspecialidad}
                            />

                        </div>
                        <div className='col-span-1'>
                            <SelectField
                                id="idPeriodoAcademico"
                                value={row.idPeriodoAcademico}
                                label="periodo académico"
                                options={utils?.data?.data?.periodosAcademicos?.map(item => ({
                                    value: item.id,
                                    label: ` ${item.descripcion}`
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
                                id="idCiclo"
                                label="ciclo"
                                value={row.idCiclo}
                                options={utils?.data?.data?.ciclos?.map(item => ({
                                    value: item.id,
                                    label: ` ${item.descripcion}`
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
                                id="sexo"
                                label="sexo"
                                value={row.sexo}
                                options={sexoOptions}
                                isLoading={utils?.isLoading}
                                isRequired={true}
                                setValue={setValue}
                                register={register}
                                error={errors.sexo}
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

export default ActualizarMatriculaForm
