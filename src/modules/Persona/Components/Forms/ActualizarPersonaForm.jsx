'use client'
import React, { use, useEffect, useState } from 'react'
import { Button, Checkbox, ModalBody, ModalFooter } from '@nextui-org/react'
import TemplateAlert from '@/shared/Components/Templates/TemplateAlert'

import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { usePerfilService } from '@/modules/Perfil/Hooks/usePerfilService'

import { useSWRConfig } from 'swr'
import { PasswordField } from '@/shared/Components/Form/Fields/PasswordField'
import NumberField from '@/shared/Components/Form/Fields/NumberField'
import InputField from '@/shared/Components/Form/Fields/InputField'
import DateField from '@/shared/Components/Form/Fields/DateField'
import SelectField from '@/shared/Components/Form/Fields/SelectField'
import { ButtonSubmit } from '@/shared/Components/Buttons/ButtonSubmit'
import { usePersona } from '../../Providers/PersonaProvider'
import ButtonCloseModal from '@/shared/Components/Buttons/ButtonCloseModal'
const tiposDocumento = [
    { id: 1, nombre: 'DOCUMENTO NACIONAL DE IDENTIDAD' },
    { id: 2, nombre: 'CARNET DE EXTRANJERÍA' }
]
const sexos = [
    { id: 1, nombre: 'MASCULINO' },
    { id: 2, nombre: 'FEMENINO' }
]
const estados = [
    { id: 1, nombre: 'ACTIVO' },
    { id: 0, nombre: 'INACTIVO' }
]
function ActualizarPersonaForm({ row, onClose }) {
    const { query, pagination } = usePersona();
    const { actualizarPerfil } = usePerfilService()
    const [errorValidation, setErrorValidation] = useState('');
    const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            conUsuario: row.tieneUsuario
        }
    });

    const { mutate } = useSWRConfig()
    const [checkbox, setCheckbox] = useState(row.tieneUsuario)

    const perfilSubmit = handleSubmit(async (data) => {

        try {
            const response = await actualizarPerfil(data, row.id)

            if (response.success === true) {
                setErrorValidation([])
                mutate(`personas_${pagination?.pageIndex + 1}_${JSON.stringify(query)}`)
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
        <>
            <form onSubmit={perfilSubmit} >
                <ModalBody>
                    {
                        errorValidation.length === 0 ? null : (
                            <section>
                                <TemplateAlert message={errorValidation} type={'errorList'} />
                            </section>
                        )
                    }
                    <div className="space-y-5">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">INFORMACIÓN PERSONAL</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600"> Aquí podrás modificar tu información personal </p>
                            <div className='mt-10 grid grid-cols-1 sm:grid-cols-4 gap-x-6 gap-y-8   '>
                                <div className="sm:col-span-2">
                                    <SelectField
                                        id="tipoDocumento"
                                        label="tipo de documento"
                                        options={tiposDocumento?.map(item => ({
                                            value: item.id,
                                            label: `${item.nombre}`
                                        })) || []}
                                        value={row.tipoDocumento}
                                        isRequired={false}
                                        isDisabled={true}
                                        setValue={setValue}
                                        register={register}
                                        error={errors.tipoDocumento}
                                    />

                                </div>
                                <div className="sm:col-span-2">

                                    <NumberField
                                        id="numeroDocumento"
                                        label="número de documento"
                                        isRequired={false}
                                        maxLength={12}
                                        value={row.numeroDocumento}
                                        minLength={7}
                                        isDisabled={true}
                                        register={register}
                                        error={errors.numeroDocumento}
                                    />

                                </div>
                            </div>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
                                <div className="sm:col-span-2">
                                    <InputField
                                        id="primerApellido"
                                        label="apellido paterno"
                                        isRequired={true}
                                        value={row.apellidoPaterno}
                                        register={register}
                                        error={errors.primerApellido}
                                    />

                                </div>

                                <div className="sm:col-span-2">
                                    <InputField
                                        id="segundoApellido"
                                        label="apellido materno"
                                        isRequired={true}
                                        value={row.apellidoMaterno}
                                        register={register}
                                        error={errors.segundoApellido}
                                    />

                                </div>

                                <div className="sm:col-span-2">
                                    <InputField
                                        id="nombres"

                                        label="nombres"
                                        isRequired={true}
                                        value={row.nombres}
                                        register={register}
                                        error={errors.nombres}
                                    />

                                </div>

                                <div className="sm:col-span-2">
                                    <SelectField
                                        id="sexo"
                                        label="sexo"
                                        options={sexos?.map(item => ({
                                            value: item.id,
                                            label: `${item.nombre}`
                                        })) || []}
                                        value={row.sexo}
                                        isRequired={true}
                                        setValue={setValue}
                                        register={register}
                                        error={errors.sexo}
                                    />

                                </div>
                                <div className="sm:col-span-2">
                                    <DateField
                                        id="fechaNacimiento"
                                        label="fecha de nacimiento"
                                        type={"max-date-today"}
                                        value={row.fechaNacimiento}
                                        isRequired={true}
                                        register={register}
                                        error={errors.fechaNacimiento}
                                    />

                                </div>
                                <div className="sm:col-span-2">
                                    <InputField
                                        type='email'
                                        id="correo"
                                        value={row.correo}
                                        label="correo"
                                        isRequired={true}
                                        uppercase={false}
                                        register={register}
                                        error={errors.correo}
                                    />

                                </div>

                                <div className="sm:col-span-2">
                                    <NumberField
                                        id="celular"
                                        label="celular"
                                        isRequired={true}
                                        value={row.celular}
                                        maxLength={12}
                                        minLength={9}
                                        register={register}
                                        error={errors.celular}
                                    />

                                </div>
                                <div className="sm:col-span-2">

                                    <label htmlFor={"checkbox"} className="block uppercase mb-2 text-xs font-medium text-gray-900 dark:text-white">
                                        ¿Desea crear un usuario para esta persona?
                                    </label>
                                    <Checkbox defaultSelected={row.tieneUsuario} isDisabled={row.tieneUsuario} radius="lg" onChange={
                                        () => {
                                            setCheckbox(!checkbox)
                                            setValue('conUsuario', !checkbox)
                                        }
                                    }>
                                        Si deseo
                                    </Checkbox>
                                </div>

                            </div>
                        </div>
                        {
                            checkbox && (
                                <div className="border-b border-gray-900/10 pb-12">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">CREDENCIAL DEL PERFIL</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        Aquí podras ver y modificar tus credenciales de acceso
                                    </p>
                                    <div className='grid mt-10 grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6' >
                                        <div className="sm:col-span-3">

                                            <PasswordField
                                                id={"clave"}
                                                isRequired={row.tieneUsuario === true ? false : (row.estado === 1 ? false : (checkbox && true))}
                                                label="contraseña"
                                                register={register}
                                                error={errors.clave}
                                            />

                                            <br />

                                        </div>
                                        <div className="sm:col-span-3">
                                            <SelectField
                                                id="estado"
                                                label="estado"
                                                options={estados?.map(item => ({
                                                    value: item.id,
                                                    label: `${item.nombre}`
                                                })) || []}
                                                isRequired={true}
                                                value={row.estado}
                                                setValue={setValue}
                                                register={register}
                                                error={errors.estado}
                                            />

                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </ModalBody>
                <ModalFooter>

                    <ButtonSubmit label={'Actualizar'} isSubmitting={isSubmitting} />
                    <ButtonCloseModal onClose={onClose} />
                </ModalFooter>
            </form>
        </>
    )
}

export default ActualizarPersonaForm