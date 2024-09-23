'use client'
import React, { useState } from 'react'
import { ButtonSubmit } from '@/shared/Components/Form/Buttons';
import { useForm } from 'react-hook-form';
import { Button, ModalBody, ModalFooter } from '@nextui-org/react';
import { parseDate } from "@internationalized/date";
import { useMatricula } from '../../Providers/MatriculaProvider';
import TemplateBaseAlert from '@/shared/Components/Templates/TemplateBaseAlert';
import { useSWRConfig } from 'swr';
import { useMatriculaService } from '../../Hooks/useMatriculaService';
import { toast } from 'react-toastify';
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
                                <TemplateBaseAlert message={errorValidation} type={'errorList'} />
                            </section>
                        )
                    }
                    <div className="grid gap-6 mb-6 grid-cols-1 md:grid-cols-3">
                        <div className='col-span-1'>
                            <label htmlFor="tipoDocumento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de Documento</label>
                            <select id="tipoDocumento"
                                {...register('tipoDocumento', {
                                    required: {
                                        value: true,
                                        message: 'El campo tipo de documento es requerido'
                                    },
                                })}

                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">SELECCIONAR</option>
                                <option value="1">DNI</option>
                                <option value="2">CARNET DE EXTRANJERIA</option>
                            </select>
                            {
                                errors.tipoDocumento && (
                                    <span className="text-red-500 text-xs">{errors.tipoDocumento.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="numeroDocumento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número de Documento </label>
                            <input
                                {...register('numeroDocumento', {
                                    required: {
                                        value: true,
                                        message: 'El campo numero de documento es obligatorio'
                                    },
                                })}
                                type="text" id="numeroDocumento" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {
                                errors.numeroDocumento && (
                                    <span className="text-red-500 text-xs">{errors.numeroDocumento.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-1'>
                            <label htmlFor="primerApellido" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido Paterno </label>
                            <input
                                {...register('primerApellido', {
                                    required: {
                                        value: true,
                                        message: 'El campo apellido paterno es obligatorio'
                                    },
                                })}
                                type="text" id="primerApellido" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {
                                errors.primerApellido && (
                                    <span className="text-red-500 text-xs">{errors.primerApellido.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-1'>
                            <label htmlFor="segundoApellido" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido Materno </label>
                            <input
                                {...register('segundoApellido', {
                                    required: {
                                        value: true,
                                        message: 'El campo apellido paterno es obligatorio'
                                    },
                                })}
                                type="text" id="segundoApellido" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {
                                errors.segundoApellido && (
                                    <span className="text-red-500 text-xs">{errors.segundoApellido.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-1'>
                            <label htmlFor="nombres" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombres</label>
                            <input
                                {...register('nombres', {
                                    required: {
                                        value: true,
                                        message: 'El campo nombreso es obligatorio'
                                    },
                                })}
                                type="text" id="nombres" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {
                                errors.nombres && (
                                    <span className="text-red-500 text-xs">{errors.nombres.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-1'>
                            <label htmlFor="fechaNacimiento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de Nacimiento</label>
                            <input
                                {...register('fechaNacimiento', {
                                    required: {
                                        value: true,
                                        message: 'El campo hora inicio es requerido'
                                    },
                                })}
                                id='fechaNacimiento'
                                type="date" className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {
                                errors.fechaNacimiento && (
                                    <span className="text-red-500 text-xs">{errors.fechaNacimiento.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="formInstitucion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Institución</label>
                            <select id="formInstitucion"
                                {...register('idInstitucion', {
                                    required: {
                                        value: true,
                                        message: 'El campo institución es requerido'
                                    },
                                })}

                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {utils && utils.isLoading ? (
                                    <option value="">Cargando...</option>
                                ) : (
                                    <>
                                        <option value="">Seleccionar</option>
                                        {
                                            utils?.data?.data?.instituciones.map((item, i) => (
                                                <option key={i} value={item.id}>{item.region} - {item.nombre}</option>
                                            ))
                                        }
                                    </>
                                )
                                }
                            </select>
                            {
                                errors.idInstitucion && (
                                    <span className="text-red-500 text-xs">{errors.idInstitucion.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-1'>
                            <label htmlFor="formEspecialidad" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Especialidad</label>
                            <select id="formEspecialidad"
                                {...register('idEspecialidad', {
                                    required: {
                                        value: true,
                                        message: 'El campo especialidad es requerido'
                                    },
                                })}

                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {utils && utils.isLoading ? (
                                    <option value="">Cargando...</option>
                                ) : (
                                    <>
                                        <option value="">Seleccionar</option>
                                        {
                                            utils?.data?.data?.especialidades.map((item, i) => (
                                                <option key={i} value={item.id}> {item.descripcion}</option>
                                            ))
                                        }
                                    </>
                                )
                                }
                            </select>
                            {
                                errors.idEspecialidad && (
                                    <span className="text-red-500 text-xs">{errors.idEspecialidad.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-1'>
                            <label htmlFor="formPeriodoAcademico" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Periodo Académico</label>
                            <select id="formPeriodoAcademico"
                                {...register('idPeriodoAcademico', {
                                    required: {
                                        value: true,
                                        message: 'El campo periodo académico es requerido'
                                    },
                                })}

                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {utils && utils.isLoading ? (
                                    <option value="">Cargando...</option>
                                ) : (
                                    <>
                                        <option value="">Seleccionar</option>
                                        {
                                            utils?.data?.data?.periodosAcademicos.map((item, i) => (
                                                <option key={i} value={item.id}> {item.descripcion}</option>
                                            ))
                                        }
                                    </>
                                )
                                }
                            </select>
                            {
                                errors.idPeriodoAcademico && (
                                    <span className="text-red-500 text-xs">{errors.idPeriodoAcademico.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-1'>
                            <label htmlFor="idCiclo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ciclo</label>
                            <select id="idCiclo"
                                {...register('idCiclo', {
                                    required: {
                                        value: true,
                                        message: 'El campo ciclo es requerido'
                                    },
                                })}

                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {utils && utils.isLoading ? (
                                    <option value="">Cargando...</option>
                                ) : (
                                    <>
                                        <option value="">Seleccionar</option>
                                        {
                                            utils?.data?.data?.ciclos.map((item, i) => (
                                                <option key={i} value={item.id}> {item.descripcion}</option>
                                            ))
                                        }
                                    </>
                                )
                                }
                            </select>
                            {
                                errors.idCiclo && (
                                    <span className="text-red-500 text-xs">{errors.idCiclo.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-1'>
                            <label htmlFor="sexo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sexo</label>
                            <select id="sexo"
                                {...register('sexo', {
                                    required: {
                                        value: true,
                                        message: 'El campo sexo es requerido'
                                    },
                                })}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">SELECCIONAR</option>
                                <option value="1">MASCULINO</option>
                                <option value="2">FEMENINO</option>
                            </select>
                            {
                                errors.sexo && (
                                    <span className="text-red-500 text-xs">{errors.sexo.message}</span>
                                )
                            }
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <ButtonSubmit label="Registrar" isSubmitting={isSubmitting} />
                    <Button color="danger" variant="flat" onPress={onClose}   >
                        Cerrar
                    </Button>
                </ModalFooter>
            </form>
        </section>
    )

}

export default RegistrarMatriculaForm
