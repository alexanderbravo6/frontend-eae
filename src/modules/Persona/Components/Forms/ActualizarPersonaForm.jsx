'use client'
import React, { use, useState } from 'react'
import { Button, ModalBody, ModalFooter } from '@nextui-org/react'
import TemplateAlert from '@/shared/Components/Templates/TemplateAlert'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { ButtonSubmit } from '@/shared/Components/Buttons/ButtonSubmit'
import { toast } from 'react-toastify'
import { PassworInput } from '@/shared/Components/Form/Inputs'
import { usePerfilService } from '@/modules/Perfil/Hooks/usePerfilService'
import { usePersona } from '../../Providers/PersonaProvider'
import { useSWRConfig } from 'swr'

function ActualizarPersonaForm({ row, onClose }) {
    const { query, pagination } = usePersona();
    const { actualizarPerfil } = usePerfilService()
    const [errorValidation, setErrorValidation] = useState('');
    const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const { mutate } = useSWRConfig()

    const perfilSubmit = handleSubmit(async (data) => {

        try {
            const response = await actualizarPerfil(data, row.id)

            if (response.success === true) {
                setErrorValidation([])
                mutate(`personas_${pagination?.pageIndex + 1}_${JSON.stringify(query)}`)
                onClose()
                toast.success(response.messages[0])
            } else {

                const nuevosErrores = Object.values(response.validations).flat();
                setErrorValidation(nuevosErrores)
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
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Información Personal</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600"> Aquí podrás modificar tu información personal </p>
                            <div className='mt-10 grid grid-cols-1 sm:grid-cols-4 gap-x-6 gap-y-8   '>
                                <div className="sm:col-span-2">
                                    <label htmlFor="tipoDocumentoForm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de Documento</label>
                                    <select id="tipoDocumentoForm"
                                        disabled
                                        defaultValue={row.tipoDocumento}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 disabled:bg-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="">Seleccionar</option>
                                        <option value="1"> DOCUMENTO NACIONAL DE IDENTIDAD</option>
                                        <option value="2">CARNET DE EXTRANJERÍA</option>

                                    </select>
                                    {
                                        errors.tipoDocumento && (
                                            <span className="text-red-500 text-xs">{errors.tipoDocumento.message}</span>
                                        )
                                    }
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="numeroDocumentoForm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">N° Documento</label>
                                    <input
                                        disabled
                                        defaultValue={row.numeroDocumento}
                                        type="number" id="numeroDocumentoForm" className="bg-gray-50 border disabled:bg-gray-200 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    {
                                        errors.numeroDocumento && (
                                            <span className="text-red-500 text-xs">{errors.numeroDocumento.message}</span>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


                                <div className="sm:col-span-2">
                                    <label htmlFor="primerApellidoForm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido Paterno</label>
                                    <input type="text"
                                        {...register('primerApellido', {
                                            required: {
                                                value: true,
                                                message: 'El campo apellido paterno es requerido'
                                            },
                                        })
                                        }
                                        defaultValue={row.apellidoPaterno}
                                        id="primerApellidoForm" className="bg-gray-50 uppercase border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    {
                                        errors.primerApellido && (
                                            <span className="text-red-500 text-xs">{errors.primerApellido.message}</span>
                                        )
                                    }
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="segundoApellidoForm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido Materno</label>
                                    <input type="text" id="segundoApellidoForm"
                                        {...register('segundoApellido', {
                                            required: {
                                                value: true,
                                                message: 'El campo apellido materno es requerido'
                                            },
                                        })}
                                        defaultValue={row.apellidoMaterno}
                                        className="bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    {
                                        errors.segundoApellido && (
                                            <span className="text-red-500 text-xs">{errors.segundoApellido.message}</span>
                                        )
                                    }
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="nombresForm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombres</label>
                                    <input type="text" id="nombresForm"
                                        {...register('nombres', {
                                            required: {
                                                value: true,
                                                message: 'El campo nombres es requerido'
                                            },
                                        })}
                                        defaultValue={row.nombres}
                                        className="bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
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
                                        defaultValue={row.sexo}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="">Seleccionar</option>
                                        <option value="1">Masculino</option>
                                        <option value="2">Femenino</option>

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
                                        {...register('fechaNacimiento', {
                                            required: {
                                                value: true,
                                                message: 'El campo fecha de nacimiento es requerido'
                                            },
                                        })}
                                        defaultValue={row.fechaNacimiento}
                                        id="fechaNacimiento" className="w-full h-11 p-2" />
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
                                        defaultValue={row.correo}
                                        autoComplete="off"
                                        className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    {
                                        errors.correo && (
                                            <span className="text-red-500 text-xs">{errors.correo.message}</span>
                                        )
                                    }
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="celular" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Celular</label>

                                    <input
                                        autoComplete="off"
                                        {...register('celular', {
                                            required: {
                                                value: true,
                                                message: 'El campo celular es requerido'
                                            },
                                        })}
                                        defaultValue={row.celular}
                                        id="celular"
                                        type="number"
                                        className="bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    {
                                        errors.celular && (
                                            <span className="text-red-500 text-xs">{errors.celular.message}</span>
                                        )
                                    }
                                </div>


                            </div>
                        </div>
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Credenciales del Perfil</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                Aquí podras ver y modificar tus credenciales de acceso
                            </p>
                            <div className='grid mt-10 grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6' >
                                <div className="sm:col-span-3">
                                    <label htmlFor="contraseña" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                    <PassworInput value={row.clave} register={register} />
                                    <span className='text-gray-500'>
                                        La contraseña debe contener como mínimo un caracter especial (@#$%*,-.()/{ }%?¿!), una mayúscula, una minúscula, un número y una longitud entre 8 y 30 caracteres.
                                    </span>
                                    <br />
                                    {
                                        errors.clave && (
                                            <span className="text-red-500 text-xs">{errors.clave.message}</span>
                                        )
                                    }
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="estado" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estado de la cuenta</label>
                                    <select id="estado"
                                        {...register('estado', {
                                            required: {
                                                value: true,
                                                message: 'El campo sexo es requerido'
                                            },
                                        })}
                                        defaultValue={row.estado}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="">Seleccionar</option>
                                        <option value="1">Activo</option>
                                        <option value="0">Inactivo</option>

                                    </select>
                                    {
                                        errors.estado && (
                                            <span className="text-red-500 text-xs">{errors.estado.message}</span>
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={
                        () => {
                            reset()
                            onClose()
                        }}>
                        Cerrar
                    </Button>
                    <ButtonSubmit label={'Actualizar'} isSubmitting={isSubmitting} />

                </ModalFooter>
            </form>
        </>
    )
}

export default ActualizarPersonaForm