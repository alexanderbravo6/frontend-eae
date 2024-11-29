'use client'
import React, { useState } from 'react'
import { ButtonSubmit } from '@/shared/Components/Buttons/ButtonSubmit';
import { useForm } from 'react-hook-form';
import { Button, DatePicker, Divider, ModalBody, ModalFooter, Radio, RadioGroup } from '@nextui-org/react';
import { usePrueba } from '@/modules/Pruebas/Providers/PruebaProvider';
import { useSession } from 'next-auth/react';
import { usePruebaService } from '@/modules/Pruebas/Hooks/usePruebaService';
import TemplateAlert from '@/shared/Components/Templates/TemplateAlert';
import { useSWRConfig } from 'swr';
import { toast } from 'react-toastify';
import { useUtils } from '@/shared/Hooks/useUtils';

function RegistrarPruebaForm({ onClose }) {
    const { utils } = usePrueba()
    const { data: session } = useSession()
    const [showSelects, setShowSelects] = useState("0")
    const { registrarPrueba } = usePruebaService()
    const { mutate } = useSWRConfig()
    const [errorValidation, setErrorValidation] = useState('');
    const [periodoReplica, setPeriodoReplica] = useState('')
    const { register, handleSubmit, getValues, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const form = handleSubmit(async (data) => {


        try {
            const response = await registrarPrueba(data)

            if (response.success === true) {
                setErrorValidation([])
                mutate(`pruebas_${session?.user.anio}`,
                    // Aquí se actualiza la data
                    (res) => {

                        return { ...res, data: [...res.data, response.data] }
                    }
                    , false
                )
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
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div className='md:col-span-2  '>
                            <label htmlFor="prueba" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de Prueba</label>
                            <input
                                {...register('nombre', {
                                    required: {
                                        value: true,
                                        message: 'El campo nombre de prueba es requerido'
                                    },
                                })}
                                type="text" id="prueba" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {
                                errors.nombre && (
                                    <span className="text-red-500 text-xs">{errors.nombre.message}</span>
                                )
                            }
                        </div>
                        <div className='md:col-span-1'>
                            <label htmlFor="tipoPrueba" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de Prueba</label>
                            <select id="tipoPrueba"
                                {...register('idTipoPrueba', {
                                    required: {
                                        value: true,
                                        message: 'El campo tipo de prueba es requerido'
                                    },
                                })}

                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {utils && utils.isLoading ? (
                                    <option value="">Cargando...</option>
                                ) : (
                                    <>
                                        <option value="">Seleccionar</option>
                                        {
                                            utils?.data?.data.tiposPrueba.map((item, i) => (
                                                <option key={i} value={item.id}> {item.descripcion}</option>
                                            ))
                                        }
                                    </>
                                )
                                }
                            </select>
                            {
                                errors.idTipoPrueba && (
                                    <span className="text-red-500 text-xs">{errors.idTipoPrueba.message}</span>
                                )
                            }
                        </div>
                        <div className='md:col-span-1'>
                            <label htmlFor="especialidad" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Especialidades</label>
                            <select id="especialidad"
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
                                        <option value="0">TODAS LAS ESPECIALIDADES</option>
                                        {
                                            utils?.data?.data.especialidades.map((item, i) => (
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
                            <label htmlFor="ciclo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ciclo</label>
                            <select id="ciclo"
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
                                            utils?.data?.data.ciclos.map((item, i) => (
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
                            <label htmlFor="periodoAcademico" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Periodo Académico</label>
                            <select id="periodoAcademico"
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
                                            utils?.data?.data.periodosAcademicos.map((item, i) => (
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
                            <label htmlFor="indicacion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Indicaciones</label>
                            <select id="indicacion"
                                {...register('idIndicacion', {
                                    required: {
                                        value: true,
                                        message: 'El campo indicación es requerido'
                                    },
                                })}

                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {utils && utils.isLoading ? (
                                    <option value="">Cargando...</option>
                                ) : (
                                    <>
                                        <option value="">Seleccionar</option>
                                        {
                                            utils?.data?.data.indicaciones.map((item, i) => (
                                                <option key={i} value={item.id}> {item.nombre}</option>
                                            ))
                                        }
                                    </>
                                )
                                }
                            </select>
                            {
                                errors.idIndicacion && (
                                    <span className="text-red-500 text-xs">{errors.idIndicacion.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-1'>
                            <label htmlFor="fecha" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha</label>
                            <input
                                {...register('fechaPrueba', {
                                    required: {
                                        value: true,
                                        message: 'El campo hora inicio es requerido'
                                    },
                                })}

                                type="date" className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {
                                errors.fechaPrueba && (
                                    <span className="text-red-500 text-xs">{errors.fechaPrueba.message}</span>
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

                                    className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            {
                                errors.horaFin && (
                                    <span className="text-red-500 text-xs">{errors.horaFin.message}</span>
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

                                type="text" id="duracion" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {
                                errors.duracion && (
                                    <span className="text-red-500 text-xs">{errors.duracion.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-1'>
                            <label htmlFor="fechaCorteMatricula" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de corte de Matrícula</label>
                            <input
                                {...register('fechaCorteMatricula', {
                                    required: {
                                        value: true,
                                        message: 'El campo fecha de corte de matrícula es requerido'
                                    },
                                })}

                                type="date" className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {
                                errors.fechaCorteMatricula && (
                                    <span className="text-red-500 text-xs">{errors.fechaCorteMatricula.message}</span>
                                )
                            }
                        </div>
                    </div>
                    <Divider className="my-4" />

                    <div className=" mb-4 ">
                        <div className="space-y-2 ">
                            <h4 className="text-medium font-medium">Replicar Preguntas de Pruebas</h4>
                            <p className="text-small text-default-400">Tiene la opción de replicar la configuración de una prueba previamente registrada, con el objetivo de no iniciar de cero.</p>
                        </div>
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div className='col-span-2'>
                            <div className="space-y-4">

                                <div className="flex space-x-4">

                                    <RadioGroup
                                        value={showSelects}
                                        orientation="horizontal"
                                        onValueChange={setShowSelects}
                                    >
                                        <Radio value="1">Si replicar</Radio>
                                        <Radio value="0">No</Radio>
                                    </RadioGroup>

                                </div>
                            </div>
                        </div>
                        {showSelects == "1" && (
                            <>
                                <div className='col-span-1'>
                                    <label htmlFor="replicaPeriodoAcademico" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Periodo Académico</label>
                                    <select id="replicaPeriodoAcademico"
                                        onChange={e => setPeriodoReplica(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        {utils && utils.isLoading ? (
                                            <option value="">Cargando...</option>
                                        ) : (
                                            <>
                                                <option value="">Seleccionar</option>
                                                {
                                                    utils?.data?.data.periodosAcademicos.map((item, i) => (
                                                        <option key={i} value={item.id}> {item.descripcion}</option>
                                                    ))
                                                }
                                            </>
                                        )
                                        }
                                    </select>
                                </div>
                                <div className='col-span-1'>
                                    <label htmlFor="replicaPruebas" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pruebas</label>
                                    <select id="replicaPruebas"
                                        {...register('idPrueba', {
                                            required: {
                                                value: showSelects == "1" ? true : false,
                                                message: 'El campo prueba es requerido'
                                            },
                                        })}

                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        {utils && utils.isLoading ? (
                                            <option value="">Cargando...</option>
                                        ) : (
                                            <>
                                                <option value="">Seleccionar</option>

                                                {
                                                    utils?.data?.data.pruebas
                                                        .filter(item => item.idPeriodo == periodoReplica)
                                                        .map((item, i) => (
                                                            <option key={i} value={item.id}> {item.nombrePrueba}</option>
                                                        ))
                                                }
                                            </>
                                        )
                                        }
                                    </select>
                                    {
                                        errors.idPrueba && (
                                            <span className="text-red-500 text-xs">{errors.idPrueba.message}</span>
                                        )
                                    }
                                </div>
                            </>
                        )}
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

export default RegistrarPruebaForm
