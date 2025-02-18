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
import ButtonCloseModal from '@/shared/Components/Buttons/ButtonCloseModal';
import InputField from '@/shared/Components/Form/Fields/InputField';
import SelectField from '@/shared/Components/Form/Fields/SelectField';
import DateField from '@/shared/Components/Form/Fields/DateField';
import TimeField from '@/shared/Components/Form/Fields/TimeField';
import NumberField from '@/shared/Components/Form/Fields/NumberField';
import { cierreAutomaticoOptions } from '@/shared/Constants/GlobalConstants';

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
                            <InputField
                                id="nombre"
                                label="nombre de prueba"
                                isRequired={true}
                                register={register}
                                error={errors.nombre}
                            />

                        </div>
                        <div className='md:col-span-1'>
                            <SelectField
                                id="idTipoPrueba"
                                label="tipo de prueba"
                                options={utils?.data?.data?.tiposPrueba?.map(item => ({
                                    value: item.id,
                                    label: `${item.descripcion}`
                                })) || []}
                                isLoading={utils?.isLoading}
                                isRequired={true}
                                setValue={setValue}
                                register={register}
                                error={errors.idTipoPrueba}
                            />

                        </div>
                        <div className='md:col-span-1'>
                            <SelectField
                                id="idEspecialidad"
                                label="especialidades"
                                options={[
                                    { value: 0, label: "TODAS LAS ESPECIALIDADES" },
                                    ...(utils?.data?.data.especialidades?.map(item => ({
                                        value: item.id,
                                        label: `${item.descripcion}`
                                    })) || [])
                                ]}
                                isLoading={utils?.isLoading}
                                isRequired={true}
                                setValue={setValue}
                                register={register}
                                error={errors.idEspecialidad}
                            />

                        </div>
                        <div className='col-span-1'>
                            <SelectField
                                id="idCiclo"
                                label="ciclo"
                                options={utils?.data?.data.ciclos?.map(item => ({
                                    value: item.id,
                                    label: `${item.descripcion}`
                                })) || []}
                                isLoading={utils?.isLoading}
                                isRequired={true}
                                setValue={setValue}
                                register={register}
                                error={errors.idCiclo}
                            />


                        </div>
                        <div className='col-span-1'>
                            <SelectField
                                id="idPeriodoAcademico"
                                label="periodo académico"
                                options={utils?.data?.data?.periodosAcademicos?.map(item => ({
                                    value: item.id,
                                    label: `${item.descripcion}`
                                })) || []}
                                isLoading={utils?.isLoading}
                                isRequired={true}
                                setValue={setValue}
                                register={register}
                                error={errors.idPeriodoAcademico}
                            />


                        </div>
                        <div className='col-span-1'>
                            <SelectField
                                id="idIndicacion"
                                label="Indicaciones"
                                options={utils?.data?.data?.indicaciones?.map(item => ({
                                    value: item.id,
                                    label: `${item.nombre}`
                                })) || []}
                                isLoading={utils?.isLoading}
                                isRequired={true}
                                setValue={setValue}
                                register={register}
                                error={errors.idIndicacion}
                            />


                        </div>
                        <div className='col-span-1'>
                            <DateField
                                id="fechaPrueba"
                                label="fecha"
                                isRequired={true}
                                register={register}
                                error={errors.fechaPrueba}
                            />

                        </div>
                        <div className='col-span-1' >
                            <TimeField
                                id="horaInicio"
                                label="hora de inicio"
                                isRequired={true}
                                register={register}
                                error={errors.horaInicio}
                            />

                        </div>
                        <div className='col-span-1' >
                            <TimeField
                                id="horaFin"
                                label="hora de finalización"
                                isRequired={true}
                                register={register}
                                error={errors.horaFin}
                            />


                        </div>

                        <div className='col-span-1  '>
                            <NumberField
                                id="duracion"
                                label="duración de pruebas en minutos"
                                isRequired={true}

                                register={register}
                                error={errors.duracion}
                            />

                        </div>
                        <div className='col-span-1'>
                            <SelectField
                                id="cierreAutomatico"
                                label="¿requiere cierre automático?"
                                options={cierreAutomaticoOptions}
                                setValue={setValue}
                                isRequired={true}
                                register={register}
                                error={errors.cierreAutomatico}
                            />


                        </div>
                    </div>
                    <Divider className="my-4" />

                    <div className=" mb-4 ">
                        <div className="space-y-2 ">
                            <h4 className="text-medium font-medium">REPLICAR PREGUNTAS DE PRUEBAS</h4>
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
                                        <Radio value="1">SI REPLICAR</Radio>
                                        <Radio value="0">NO</Radio>
                                    </RadioGroup>

                                </div>
                            </div>
                        </div>
                        {showSelects == "1" && (
                            <>
                                <div className='col-span-1'>
                                    <label htmlFor="replicaPeriodoAcademico" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        PERIODO ACADÉMICO</label>
                                    <select id="replicaPeriodoAcademico"
                                        onChange={e => setPeriodoReplica(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        {utils && utils.isLoading ? (
                                            <option value="">Cargando...</option>
                                        ) : (
                                            <>
                                                <option value="">SELECCIONAR</option>
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
                                    <label htmlFor="replicaPruebas" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PRUEBAS</label>
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
                    <ButtonCloseModal onClose={onClose} />
                </ModalFooter>
            </form>
        </section>
    )

}

export default RegistrarPruebaForm
