'use client'
import React from 'react'
import { ButtonSubmit } from '@/shared/Components/Form/Buttons';
import { useForm } from 'react-hook-form';
import { Button, ModalBody, ModalFooter } from '@nextui-org/react';
import { parseDate } from "@internationalized/date";
function ActualizarMatriculaForm({ row, onClose }) {


    const { register, handleSubmit, getValues, setValue, reset, formState: { errors, isSubmitting } } = useForm();

    const RegistrarDocente = handleSubmit(async (data) => {

    })
    console.log(row)
    return (
        <section>
            <form onSubmit={RegistrarDocente}>
                <ModalBody>
                    <div className="grid gap-6 mb-6 grid-cols-1 md:grid-cols-3">
                        <div className='col-span-1'>
                            <label htmlFor="tipoDocumento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de Documento</label>
                            <select id="tipoDocumento"
                                defaultValue={row.tipoDocumento}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">SELECCIONAR</option>
                                <option value="1">DNI</option>
                                <option value="2">CARNET DE EXTRANJERIA</option>
                            </select>
                            {
                                errors.numeroDocumento && (
                                    <span className="text-red-500 text-xs">{errors.numeroDocumento.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-2'>
                            <label htmlhtmlFor="numeroDocumento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número de Documento </label>
                            <input
                                {...register('numeroDocumento', {
                                    required: {
                                        value: true,
                                        message: 'El campo numero de documento es obligatorio'
                                    },
                                })}
                                defaultValue={row.numeroDocumento}
                                type="text" id="numeroDocumento" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {
                                errors.numeroDocumento && (
                                    <span className="text-red-500 text-xs">{errors.numeroDocumento.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-1'>
                            <label htmlhtmlFor="primerApellido" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido Paterno </label>
                            <input
                                {...register('primerApellido', {
                                    required: {
                                        value: true,
                                        message: 'El campo apellido paterno es obligatorio'
                                    },
                                })}
                                defaultValue={row.primerApellido}
                                type="text" id="primerApellido" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {
                                errors.primerApellido && (
                                    <span className="text-red-500 text-xs">{errors.primerApellido.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-1'>
                            <label htmlhtmlFor="apellidoMaterno" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido Materno </label>
                            <input
                                {...register('segundoApellido', {
                                    required: {
                                        value: true,
                                        message: 'El campo apellido paterno es obligatorio'
                                    },
                                })}
                                defaultValue={row.segundoApellido}
                                type="text" id="segundoApellido" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {
                                errors.segundoApellido && (
                                    <span className="text-red-500 text-xs">{errors.segundoApellido.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-1'>
                            <label htmlhtmlFor="nombres" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombres</label>
                            <input
                                {...register('nombres', {
                                    required: {
                                        value: true,
                                        message: 'El campo nombreso es obligatorio'
                                    },
                                })}
                                defaultValue={row.nombres}
                                type="text" id="nombres" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {
                                errors.nombres && (
                                    <span className="text-red-500 text-xs">{errors.nombres.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-1'>
                            <label htmlhtmlFor="fechaNacimiento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de Nacimiento</label>
                            <input
                                {...register('fechaNacimiento', {
                                    required: {
                                        value: true,
                                        message: 'El campo hora inicio es requerido'
                                    },
                                })}
                                defaultValue={parseDate(row.fechaNacimiento)}
                                type="date" className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {
                                errors.fechaNacimiento && (
                                    <span className="text-red-500 text-xs">{errors.fechaNacimiento.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-1'>
                            <label htmlFor="institucion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Institución</label>
                            <select id="institucion"
                                defaultValue={row.idInstitucion}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">SELECCIONAR</option>
                                <option value="1">MONTESSORI</option>
                                <option value="2">LAMAS</option>
                            </select>
                            {
                                errors.numeroDocumento && (
                                    <span className="text-red-500 text-xs">{errors.numeroDocumento.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-1'>
                            <label htmlFor="especialidad" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Especialidad</label>
                            <select id="especialidad"
                                defaultValue={row.idEspecialidad}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">SELECCIONAR</option>
                                <option value="1">EDUCACIÓN INICIAL</option>
                            </select>
                            {
                                errors.numeroDocumento && (
                                    <span className="text-red-500 text-xs">{errors.numeroDocumento.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-1'>
                            <label htmlFor="idCiclo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ciclo</label>
                            <select id="idCiclo"
                                defaultValue={row.idCiclo}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">SELECCIONAR</option>
                                <option value="1">PRIMER CICLO</option>
                                <option value="2">SEXTO CICLO</option>
                                <option value="3">DÉCIMO CICLO</option>
                            </select>
                            {
                                errors.numeroDocumento && (
                                    <span className="text-red-500 text-xs">{errors.numeroDocumento.message}</span>
                                )
                            }
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <ButtonSubmit label="Registrar" />
                    <Button color="danger" variant="flat" onPress={onClose}   >
                        Cerrar
                    </Button>
                </ModalFooter>
            </form>
        </section>
    )

}

export default ActualizarMatriculaForm
