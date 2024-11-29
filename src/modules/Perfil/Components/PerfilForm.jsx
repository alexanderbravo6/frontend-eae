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
                        errorValidation.length > 0 && <TemplateAlert message={errorValidation} type="errorList" />
                    }


                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Credenciales del Perfil</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Aquí podras ver y modificar tus credenciales de acceso
                        </p>
                        <div className='grid mt-10 grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6' >


                            <div className="sm:col-span-3 ">
                                <label htmlFor="usuario" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                                <input type="text" disabled id="usuario" value={persona.numeroDocumento} className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Usuario" />
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="contraseña"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>

                                <PassworInput value={persona.clave} register={register} />
                                <span className='text-gray-500'>
                                    La contraseña debe contener como mínimo un caracter especial (@#$%*,-.()/{ }%?¿!), una mayúscula, una minúscula, un número y una longitud entre 8 y 30 caracteres.

                                </span>
                                {
                                    errors.clave && (
                                        <span className="text-red-500 text-xs">{errors.clave.message}</span>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Información Personal</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600"> Aquí podrás modificar tu información personal </p>
                        <div className='mt-10 grid grid-cols-1 sm:grid-cols-4 gap-x-6 gap-y-8   '>
                            <div className="sm:col-span-2">
                                <label htmlFor="tipoDocumento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de Documento</label>
                                <select id="tipoDocumento"
                                    disabled
                                    defaultValue={persona.tipoDocumento}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="">Seleccionar una opción</option>
                                    <option value="1">DNI</option>
                                    <option value="2">CARNET DE EXTRANJERIA</option>

                                </select>

                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="nroDocumento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número de Documento</label>
                                <input type="text" id="nroDocumento"
                                    disabled
                                    defaultValue={persona.numeroDocumento}
                                    className="bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                            </div>
                        </div>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-2">
                                <label htmlFor="apellidoPaterno" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido Paterno</label>
                                <input type="text" id="apellidoPaterno"
                                    {...register('primerApellido', {

                                        required: {
                                            value: true,
                                            message: 'El campo apellido paterno es requerido'
                                        },
                                    })}
                                    defaultValue={persona.apellidoPaterno}
                                    className="bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {
                                    errors.primerApellido && (
                                        <span className="text-red-500 text-xs">{errors.primerApellido.message}</span>
                                    )
                                }
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="apellidoMaterno" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido Materno</label>
                                <input type="text" id="apellidoMaterno"
                                    {...register('segundoApellido', {

                                        required: {
                                            value: true,
                                            message: 'El campo apellido materno es requerido'
                                        },
                                    })}
                                    defaultValue={persona.apellidoMaterno}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {
                                    errors.segundoApellido && (
                                        <span className="text-red-500 text-xs">{errors.segundoApellido.message}</span>
                                    )
                                }
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="nombres" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombres</label>
                                <input type="text" id="nombres"
                                    {...register('nombres', {

                                        required: {
                                            value: true,
                                            message: 'El campo nombres es requerido'
                                        },
                                    })}
                                    defaultValue={persona.nombres}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {
                                    errors.nombres && (
                                        <span className="text-red-500 text-xs">{errors.nombres.message}</span>
                                    )
                                }
                            </div>

                            <div className="sm:col-span-1">
                                <label htmlFor="sexo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sexo</label>
                                <select id="sexo"
                                    {...register('sexo', {

                                        required: {
                                            value: true,
                                            message: 'El campo sexo es requerido'
                                        },
                                    })}
                                    defaultValue={persona.sexo}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="">Seleccionar una opción</option>
                                    <option value="1">MASCULINO</option>
                                    <option value="2">FEMENINO</option>

                                </select>
                                {
                                    errors.sexo && (
                                        <span className="text-red-500 text-xs">{errors.sexo.message}</span>
                                    )
                                }
                            </div>
                            <div className="sm:col-span-1">
                                <label htmlFor="fechaNacimiento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de Nacimiento</label>
                                <input type="date"
                                    defaultValue={persona.fechaNacimiento}
                                    {...register('fechaNacimiento', {
                                        required: {
                                            value: true,
                                            message: 'El campo fecha de nacimiento es requerido'
                                        },
                                    })} id="fechaNacimiento" className="w-full h-11 p-2" />
                                {
                                    errors.fechaNacimiento && (
                                        <span className="text-red-500 text-xs">{errors.fechaNacimiento.message}</span>
                                    )
                                }
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="correo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
                                <input type="text" id="correo"
                                    {...register('correo', {

                                        required: {
                                            value: true,
                                            message: 'El campo correo es requerido'
                                        },
                                    })}
                                    defaultValue={persona.correo}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {
                                    errors.correo && (
                                        <span className="text-red-500 text-xs">{errors.correo.message}</span>
                                    )
                                }
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="celular" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Celular</label>
                                <div className="mt-2">
                                    <div className="flex gap-3 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">+51 </span>
                                        <input
                                            {...register('celular', {

                                                required: {
                                                    value: true,
                                                    message: 'El campo celular es requerido'
                                                },
                                            })}
                                            defaultValue={persona.celular}
                                            id="celular"
                                            name="celular"
                                            type="number"
                                            autoComplete="celular"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        />

                                    </div>
                                    {
                                        errors.celular && (
                                            <span className="text-red-500 text-xs">{errors.celular.message}</span>
                                        )
                                    }
                                </div>
                            </div>


                        </div>
                    </div>


                </div>


                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <Link href={'/'} className="text-sm font-semibold leading-6 text-gray-900">
                        Regresar
                    </Link>
                    <ButtonSubmit label="Actualizar" isSubmitting={isSubmitting} />
                </div>
            </form >
        )


    )
}

export default PerfilForm