'use client'
import React from 'react'
import { ButtonSubmit } from '@/shared/Components/Form/Buttons';
import { useForm } from 'react-hook-form';
import { Button, DatePicker, ModalBody, ModalFooter } from '@nextui-org/react';

function RegistrarPruebaForm({ onClose }) {

    const { register, handleSubmit, getValues, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const RegistrarDocente = handleSubmit(async (data) => {
        console.log(content)
    })

    return (
        <section>
            <form onSubmit={RegistrarDocente}>
                <ModalBody>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div className='md:col-span-2  '>
                            <label htmlhtmlFor="prueba" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de Prueba</label>
                            <input
                                {...register('nombrePrueba', {
                                    required: {
                                        value: true,
                                        message: 'El campo nombre de prueba es requerido'
                                    },
                                })}
                                type="text" id="prueba" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {
                                errors.nombrePrueba && (
                                    <span className="text-red-500 text-xs">{errors.nombrePrueba.message}</span>
                                )
                            }
                        </div>
                        <div className='md:col-span-2'>
                            <label htmlhtmlFor="programaEstudio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Programa de Estudios</label>
                            <select id="programaEstudio"
                                {...register('idPrograma', {
                                    required: {
                                        value: true,
                                        message: 'El campo programa de estudios es requerido'
                                    },
                                })}

                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">SELECCIONAR</option>
                                <option value="1">TODOS LOS PROGRAMAS</option>
                                <option value="2">EDUCACIÓN INICIAL</option>
                            </select>
                            {
                                errors.idPrograma && (
                                    <span className="text-red-500 text-xs">{errors.idPrograma.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-1'>
                            <label htmlhtmlFor="ciclo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ciclo</label>
                            <select id="ciclo"
                                {...register('idCiclo', {
                                    required: {
                                        value: true,
                                        message: 'El campo ciclo es requerido'
                                    },
                                })}

                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">SELECCIONAR</option>
                                <option value="1">PRIMER CICLO</option>
                                <option value="2">SEXTO CICLO</option>
                                <option value="2">DECIMO CICLO</option>
                            </select>
                            {
                                errors.idCiclo && (
                                    <span className="text-red-500 text-xs">{errors.idCiclo.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-1'>
                            <label htmlhtmlFor="periodoAcademico" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Periodo Académico</label>
                            <select id="periodoAcademico"
                                {...register('idPeriodoAcademico', {
                                    required: {
                                        value: true,
                                        message: 'El campo periodo académico es requerido'
                                    },
                                })}

                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">SELECCIONAR</option>
                                <option value="1">2024-I</option>
                                <option value="2">2024-II</option>
                                <option value="3">2025-I</option>
                            </select>
                            {
                                errors.idPeriodoAcademico && (
                                    <span className="text-red-500 text-xs">{errors.idPeriodoAcademico.message}</span>
                                )
                            }
                        </div>

                        <div className='col-span-1' >
                            <label htmlhtmlFor="horaInicio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hora de Inicio</label>
                            <div className="relative">

                                <input type="time"
                                    {...register('horaInicio', {
                                        required: {
                                            value: true,
                                            message: 'El campo hora inicio es requerido'
                                        },
                                    })}

                                    id="horaInicio" className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            {
                                errors.horaInicio && (
                                    <span className="text-red-500 text-xs">{errors.horaInicio.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-1' >

                            <label htmlhtmlFor="horaFin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hora de Fin</label>
                            <div className="relative">
                                <input type="time" id="horaFin"
                                    {...register('horaFin', {
                                        required: {
                                            value: true,
                                            message: 'El campo hora inicio es requerido'
                                        },
                                    })}

                                    className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            {
                                errors.horaFin && (
                                    <span className="text-red-500 text-xs">{errors.horaFin.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-1'>
                            <label htmlhtmlFor="fecha" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha</label>
                            <input
                                {...register('fecha', {
                                    required: {
                                        value: true,
                                        message: 'El campo hora inicio es requerido'
                                    },
                                })}

                                type="date" className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {
                                errors.fecha && (
                                    <span className="text-red-500 text-xs">{errors.fecha.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-1  '>
                            <label htmlhtmlFor="duracion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Duración de prueba en horas</label>
                            <input
                                {...register('duracion', {
                                    required: {
                                        value: true,
                                        message: 'El campo duración de prueba en horas es requerido'
                                    },
                                })}

                                type="text" id="duracion" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {
                                errors.duracion && (
                                    <span className="text-red-500 text-xs">{errors.duracion.message}</span>
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

export default RegistrarPruebaForm
