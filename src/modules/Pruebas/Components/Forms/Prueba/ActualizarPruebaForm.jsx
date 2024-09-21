'use client'
import React, { useState } from 'react'
import { ButtonSubmit } from '@/shared/Components/Form/Buttons';
import { useForm } from 'react-hook-form';
import { Button, DatePicker, ModalBody, ModalFooter } from '@nextui-org/react';
import { parseDate } from "@internationalized/date";
function ActualizarPruebaForm({ row, onClose }) {

    const { register, handleSubmit, getValues, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const actualizarDocente = handleSubmit(async (data) => {
        console.log(data)
    })


    return (
        <section>
            <form onSubmit={actualizarDocente}>
                <ModalBody>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div className='md:col-span-2  '>
                            <label htmlFor="prueba" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de Prueba</label>
                            <input
                                {...register('nombrePrueba', {
                                    required: {
                                        value: true,
                                        message: 'El campo nombre de prueba es requerido'
                                    },
                                })}
                                type="text" defaultValue={row.nombrePrueba} id="prueba" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {
                                errors.nombrePrueba && (
                                    <span className="text-red-500 text-xs">{errors.nombrePrueba.message}</span>
                                )
                            }
                        </div>
                        <div className='md:col-span-2'>
                            <label htmlFor="programaEstudio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Programa de Estudios</label>
                            <select id="programaEstudio"
                                {...register('idPrograma', {
                                    required: {
                                        value: true,
                                        message: 'El campo programa de estudios es requerido'
                                    },
                                })}
                                defaultValue={row.idPrograma}
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
                            <label htmlFor="ciclo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ciclo</label>
                            <select id="ciclo"
                                {...register('idCiclo', {
                                    required: {
                                        value: true,
                                        message: 'El campo ciclo es requerido'
                                    },
                                })}
                                defaultValue={row.idCiclo}
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
                            <label htmlFor="periodoAcademico" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Periodo Académico</label>
                            <select id="periodoAcademico"
                                {...register('idPeriodoAcademico', {
                                    required: {
                                        value: true,
                                        message: 'El campo periodo académico es requerido'
                                    },
                                })}
                                defaultValue={row.idPeriodoAcademico}
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
                            <label htmlFor="horaInicio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hora de Inicio</label>
                            <div className="relative">

                                <input type="time"
                                    {...register('horaInicio', {
                                        required: {
                                            value: true,
                                            message: 'El campo hora inicio es requerido'
                                        },
                                    })}
                                    defaultValue={row.horaInicio}
                                    id="horaInicio" className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            {
                                errors.horaInicio && (
                                    <span className="text-red-500 text-xs">{errors.horaInicio.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-1' >

                            <label htmlFor="horaFin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hora de Fin</label>
                            <div className="relative">
                                <input type="time" id="horaFin"
                                    {...register('horaFin', {
                                        required: {
                                            value: true,
                                            message: 'El campo hora inicio es requerido'
                                        },
                                    })}
                                    defaultValue={row.horaFin}
                                    className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            {
                                errors.horaFin && (
                                    <span className="text-red-500 text-xs">{errors.horaFin.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-1'>
                            <label htmlFor="fecha" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha</label>
                            <input
                                {...register('fecha', {
                                    required: {
                                        value: true,
                                        message: 'El campo hora inicio es requerido'
                                    },
                                })}
                                defaultValue={parseDate(row.fecha)}
                                type="date" className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {
                                errors.fecha && (
                                    <span className="text-red-500 text-xs">{errors.fecha.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-1  '>
                            <label htmlFor="duracion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Duración de prueba en horas</label>
                            <input
                                {...register('duracion', {
                                    required: {
                                        value: true,
                                        message: 'El campo duración de prueba en horas es requerido'
                                    },
                                })}
                                defaultValue={row.duracion}
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

export default ActualizarPruebaForm
