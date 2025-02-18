'use client'
import React, { use, useState } from 'react'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import TemplateAlert from '@/shared/Components/Templates/TemplateAlert'
import { useSession } from 'next-auth/react'
import { usePerfilService } from '../Hooks/usePerfilService'
import TemplateErrorData from '@/shared/Components/Templates/TemplateErrorData'
import LoadingSpinner from '@/shared/Components/Loaders/LoadingSpinner'
import { PassworInput } from '@/shared/Components/Form/Inputs'
import { useForm } from 'react-hook-form'
import { ButtonSubmit } from '@/shared/Components/Buttons/ButtonSubmit'
import { toast } from 'react-toastify'
import { useSWRConfig } from 'swr'
import { PasswordField } from '@/shared/Components/Form/Fields/PasswordField'
import SelectField from '@/shared/Components/Form/Fields/SelectField'
import NumberField from '@/shared/Components/Form/Fields/NumberField'
import InputField from '@/shared/Components/Form/Fields/InputField'
import DateField from '@/shared/Components/Form/Fields/DateField'
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

const PerfilForm = () => {
    const { data: session } = useSession()
    const { mutate } = useSWRConfig()
    const { actualizarPerfil, FetchPerfil } = usePerfilService()
    const [errorValidation, setErrorValidation] = useState([])
    const perfil = FetchPerfil(session?.user?.idPersona)
    const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    if (perfil.isLoading) return <LoadingSpinner />
    if (perfil.error) return <TemplateErrorData />
    const persona = perfil.data.data

    const perfilSubmit = handleSubmit(async (data) => {
        const request = {
            ...data,
            conUsuario: true,
            estado: 1
        }
        try {
            const response = await actualizarPerfil(request, session?.user?.idPersona)
            if (response.success === true) {
                setErrorValidation([])
                mutate("informacion_persona_" + session?.user?.idPersona)
                toast.success('Perfil actualizado correctamente')
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
        persona &&
        (
            <form onSubmit={perfilSubmit} >
                <div className="space-y-5">


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
                                        value={persona.tipoDocumento}
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
                                        isDisabled={true}
                                        isRequired={false}
                                        maxLength={12}
                                        value={persona.numeroDocumento}
                                        minLength={7}
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
                                        value={persona.apellidoPaterno}
                                        register={register}
                                        error={errors.primerApellido}
                                    />

                                </div>

                                <div className="sm:col-span-2">
                                    <InputField
                                        id="segundoApellido"
                                        label="apellido materno"
                                        isRequired={true}
                                        value={persona.apellidoMaterno}
                                        register={register}
                                        error={errors.segundoApellido}
                                    />

                                </div>

                                <div className="sm:col-span-2">
                                    <InputField
                                        id="nombres"

                                        label="nombres"
                                        isRequired={true}
                                        value={persona.nombres}
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
                                        value={persona.sexo}
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
                                        value={persona.fechaNacimiento}
                                        isRequired={true}
                                        register={register}
                                        error={errors.fechaNacimiento}
                                    />

                                </div>
                                <div className="sm:col-span-2">
                                    <InputField
                                        type='email'
                                        id="correo"
                                        value={persona.correo}
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
                                        value={persona.celular}
                                        maxLength={12}
                                        minLength={9}
                                        register={register}
                                        error={errors.celular}
                                    />

                                </div>


                            </div>
                        </div>

                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">CREDENCIAL DEL PERFIL</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                Aquí podras ver y modificar tus credenciales de acceso
                            </p>
                            <div className='grid mt-10 grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6' >
                                <div className="sm:col-span-3">

                                    <PasswordField
                                        id={"clave"}
                                        isRequired={false}
                                        label="contraseña"
                                        register={register}
                                        error={errors.clave}
                                    />

                                    <br />

                                </div>

                            </div>
                        </div>


                    </div>
                </div>


                <div className="mt-6 flex items-center justify-end gap-x-6">

                    <ButtonSubmit label="Actualizar" isSubmitting={isSubmitting} />
                    <Link href={'/'} className="text-sm font-semibold leading-6 text-gray-900">
                        Regresar
                    </Link>
                </div>
            </form >
        )


    )
}

export default PerfilForm