'use client'
import React, { useState } from 'react'
import { ButtonSubmit } from '@/shared/Components/Buttons/ButtonSubmit';
import { useForm } from 'react-hook-form';
import { Button, ModalBody, ModalFooter } from '@nextui-org/react';
import { parseDate } from "@internationalized/date";
import { useMatricula } from '../../Providers/MatriculaProvider';
import TemplateAlert from '@/shared/Components/Templates/TemplateAlert';
import { useSWRConfig } from 'swr';
import { useMatriculaService } from '../../Hooks/useMatriculaService';
import { toast } from 'react-toastify';
import ButtonCloseModal from '@/shared/Components/Buttons/ButtonCloseModal';
import SelectField from '@/shared/Components/Form/Fields/SelectField';
import InputField from '@/shared/Components/Form/Fields/InputField';
import DateField from '@/shared/Components/Form/Fields/DateField';
import { sexoOptions } from '@/shared/Constants/GlobalConstants';
function RegistrarMatriculaForm({ onClose }) {


    const { register, handleSubmit, getValues, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const { utils } = useMatricula()
    const { mutate } = useSWRConfig()
    const { query, pagination } = useMatricula()
    const { registrarMatricula } = useMatriculaService()
    const [errorValidation, setErrorValidation] = useState('');
    const form = handleSubmit(async (data) => {

        try {
            const response = await registrarMatricula(data)

            if (response.success === true) {
                setErrorValidation([])
                mutate(`matriculas_${pagination?.pageIndex + 1}_${JSON.stringify(query)}`)
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
                                label="Tipo de Documento"
                                options={[
                                    { value: "1", label: "DNI" },
                                    { value: "2", label: "CARNET DE EXTRANJERÍA" },
                                ]}
                                setValue={setValue}
                                isRequired={true}
                                register={register}
                                error={errors.tipoDocumento}
                            />

                        </div>
                        <div className='col-span-2'>
                            <InputField
                                id="numeroDocumento"
                                label="Número de Documento"
                                isRequired={true}
                                register={register}
                                error={errors.numeroDocumento}
                            />
                        </div>
                        <div className='col-span-1'>
                            <InputField
                                id="primerApellido"
                                label="Primer Apellido"
                                isRequired={true}
                                register={register}
                                error={errors.primerApellido}
                            />
                        </div>
                        <div className='col-span-1'>
                            <InputField
                                id="segundoApellido"
                                label="Segundo Apellido"
                                isRequired={true}
                                register={register}
                                error={errors.segundoApellido}
                            />
                        </div>
                        <div className='col-span-1'>
                            <InputField
                                id="nombres"
                                label="Nombres"
                                isRequired={true}
                                register={register}
                                error={errors.nombres}
                            />
                        </div>
                        <div className='col-span-1'>
                            <DateField
                                id="fechaNacimiento"
                                label="Fecha de Nacimiento"
                                type={"max-date-today"}
                                isRequired={true}
                                register={register}
                                error={errors.fechaNacimiento}
                            />
                        </div>
                        <div className='col-span-2'>

                            <SelectField
                                id="idInstitucion"
                                label="Institución"
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
                                label="Especialidad"
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
                                label="Periodo Académico"
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
                                label="Ciclos"
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
                                label="Sexo"
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
                    <ButtonSubmit label="Registrar" isSubmitting={isSubmitting} />
                    <ButtonCloseModal onClose={onClose} />
                </ModalFooter>
            </form>
        </section>
    )

}

export default RegistrarMatriculaForm
