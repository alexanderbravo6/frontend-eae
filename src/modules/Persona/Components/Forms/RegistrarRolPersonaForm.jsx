
import React, { useState } from 'react'
import SedePorTipoSelect from './SedePorTipoSelect'
import { useUtils } from '@/shared/Hooks/useUtils'
import { Button, ModalBody, ModalFooter } from '@nextui-org/react';
import TemplateAlert from '@/shared/Components/Templates/TemplateAlert';
import { usePersonaService } from '../../Hooks/usePersonaService';
import { useForm } from 'react-hook-form';
import { useSWRConfig } from 'swr';
import { toast } from 'react-toastify';
import ButtonCloseModal from '@/shared/Components/Buttons/ButtonCloseModal';
import { ButtonSubmit } from '@/shared/Components/Buttons/ButtonSubmit';

function RegistrarRolPersonaForm({ onClose, row }) {
    const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const [errorValidation, setErrorValidation] = useState('');
    const { mutate } = useSWRConfig()
    const [sede, setSede] = useState(0)
    const [selectTipoSede, setSelectTipoSede] = useState(0)
    const [selectRolFuncional, setSelectRolFuncional] = useState(0)
    const { asignarRol } = usePersonaService()
    const { FetchAllRoles, FetchAllSedes, FetchAllTipoSedes } = useUtils()
    const roles = FetchAllRoles()
    const sedes = FetchAllSedes()
    const tipoSede = FetchAllTipoSedes()

    const formSubmit = handleSubmit(async (data) => {

        const request = {
            idPersona: row.id,
            porDefecto: data.porDefecto,
            idRolFuncional: data.idRolFuncional,
            idSede: sede,
        };

        try {
            const response = await asignarRol(request)

            if (response.success === true) {
                toast.success(response.messages[0])
                onClose()
                reset()
                mutate('roles_asignados_' + row.id)
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
        <form onSubmit={formSubmit} >
            <ModalBody>
                {
                    errorValidation.length === 0 ? null : (
                        <section>
                            <TemplateAlert message={errorValidation} type={'errorList'} />
                        </section>
                    )
                }
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-3">

                        <label htmlFor="rolFuncional" className="block mb-2 uppercase text-xs font-medium text-gray-900 dark:text-white">
                            ROL FUNCIONAL   <span className="text-red-500">*</span>
                        </label>

                        <select id="rolFuncional"
                            {...register('idRolFuncional', {
                                required: {
                                    value: true,
                                    message: 'El rol funcional es requerido'
                                },
                            })}
                            onChange={(e) => setSelectRolFuncional(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="" >
                                {
                                    roles?.loading ? 'Cargando...' : 'Seleccionar'
                                }
                            </option>
                            {
                                roles?.data?.data.map((rol) => (
                                    <option key={rol.id} value={rol.id}>{rol.nombre}</option>
                                ))
                            }
                        </select>

                        {
                            errors.idRolFuncional && (
                                <span className="text-red-500 text-xs">{errors.idRolFuncional.message}</span>
                            )
                        }
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="tipoSede" className="block mb-2 uppercase text-xs font-medium text-gray-900 dark:text-white">
                            TIPO DE SEDE  <span className="text-red-500">*</span>
                        </label>


                        <select id="idTipoSede"
                            {...register('idTipoSede', {

                                required: {
                                    value: true,
                                    message: 'El campo tipo de sede es requerido'
                                },
                            })}
                            onChange={(e) => setSelectTipoSede(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="" >
                                {
                                    tipoSede?.isLoading ? 'Cargando...' : 'Seleccionar'
                                }
                            </option>
                            {
                                tipoSede?.data?.data
                                    .filter((item) => selectRolFuncional == 1 || selectRolFuncional == 2 ? item.id == 1 : selectRolFuncional == 3 ? item.id == 2 : selectRolFuncional == 4 ? item.id == 4 : selectRolFuncional == 5 ? item.id == 3 : null
                                    )
                                    .map((item) => (
                                        <option key={item.id} value={item.id}>{item.nombre}</option>
                                    ))
                            }

                        </select>
                        {
                            errors.idTipoSede && (
                                <span className="text-red-500 text-xs">{errors.idTipoSede.message}</span>
                            )
                        }
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="sede" className="block mb-2 uppercase text-xs font-medium text-gray-900 dark:text-white">
                            SEDE  <span className="text-red-500">*</span>
                        </label>
                        <SedePorTipoSelect
                            sede={sede}
                            setSede={setSede}
                            data={sedes}
                            selectTipoSede={selectTipoSede}
                            register={register}
                            errors={errors} />

                    </div>
                    <div className="col-span-3">
                        <label htmlFor="porDefecto" className="block mb-2 uppercase text-xs font-medium text-gray-900 dark:text-white">
                            POR DEFECTO  <span className="text-red-500">*</span>
                        </label>

                        <select id="porDefecto"
                            {...register('porDefecto', {

                                required: {
                                    value: true,
                                    message: 'El campo por defecto es requerido'
                                },
                            })}

                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="" >Seleccionar
                            </option>
                            <option value="1" >SI
                            </option>
                            <option value="0" >NO
                            </option>
                        </select>
                        {
                            errors.porDefecto && (
                                <span className="text-red-500 text-xs">{errors.porDefecto.message}</span>
                            )
                        }
                    </div>
                </div>

            </ModalBody>
            <ModalFooter>
                <ButtonSubmit isSubmitting={isSubmitting} label={'Registrar'} />
                <ButtonCloseModal onClose={onClose} />
            </ModalFooter>
        </form>
    )
}

export default RegistrarRolPersonaForm