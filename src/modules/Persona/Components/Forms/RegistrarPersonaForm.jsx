import { ButtonSubmit } from '@/shared/Components/Buttons/ButtonSubmit';
import TemplateAlert from '@/shared/Components/Templates/TemplateAlert';
import { Button, ModalBody, ModalFooter } from '@nextui-org/react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useSWRConfig } from 'swr';
import { usePersona } from '../../Providers/PersonaProvider';
import { usePersonaService } from '../../Hooks/usePersonaService';

function RegistrarPersonaForm({ onClose }) {
    const { mutate } = useSWRConfig()
    const { query, pagination } = usePersona()
    const { registrarPersona } = usePersonaService()
    const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const [errorValidation, setErrorValidation] = useState('');
    const formSubtmit = handleSubmit(async (data) => {
        try {
            const response = await registrarPersona(data)
            if (response.success === true) {
                toast.success(response.messages[0])
                onClose()
                reset()
                mutate(`personas_${pagination?.pageIndex + 1}_${JSON.stringify(query)}`)

                setErrorValidation("")
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
            <form onSubmit={formSubtmit} >
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
                                        {...register('tipoDocumento', {
                                            required: {
                                                value: true,
                                                message: 'El campo tipo de documento es requerido'
                                            },
                                        })}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
                                        {
                                        ...register('numeroDocumento', {
                                            required: {
                                                value: true,
                                                message: 'El campo número de documento es requerido'
                                            },
                                        })
                                        }
                                        type="number" id="numeroDocumentoForm" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
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
                                    <input type="password"
                                        {...register('clave', {
                                            required: {
                                                value: true,
                                                message: 'El campo contraseña es requerido'
                                            },
                                        })}
                                        id="clave" autoComplete="off" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*********" />
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
                    <ButtonSubmit label={'Registrar'} isSubmitting={isSubmitting} />

                </ModalFooter>
            </form>
        </>
    )
}

export default RegistrarPersonaForm