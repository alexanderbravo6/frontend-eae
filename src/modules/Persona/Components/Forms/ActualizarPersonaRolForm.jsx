
import React, { useState } from 'react'
import SedePorTipoSelect from './SedePorTipoSelect'
import { useUtils } from '@/shared/Hooks/useUtils'
import { Button, ModalBody, ModalFooter } from '@nextui-org/react';
import { ButtonSubmit } from '@/shared/Components/Buttons/ButtonSubmit';
import TemplateAlert from '@/shared/Components/Templates/TemplateAlert';
import { usePersonaService } from '../../Hooks/usePersonaService';
import { useForm } from 'react-hook-form';
import { useSWRConfig } from 'swr';
import { toast } from 'react-toastify';

function ActualizarPersonaRolForm({ onClose, data }) {
    const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const [errorValidation, setErrorValidation] = useState('');
    const { mutate } = useSWRConfig()
    const { actualizarRolAsignado } = usePersonaService()

    const formSubmit = handleSubmit(async (request) => {


        const response = await actualizarRolAsignado(data.idPersonaRol, request)

        if (response.success === true) {
            toast.success(response.messages)
            onClose()
            reset()
            mutate('roles_asignados_' + data.idPersona)
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
                        <label htmlFor="rolFuncional" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Rol Funcional
                        </label>
                        <input type="text" disabled defaultValue={data.rol} id="rolFuncionalForm" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                    </div>
                    <div className="col-span-3">
                        <label htmlFor="tipoSede" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Tipo de Sede
                        </label>
                        <input type="text" disabled defaultValue={data.sede.descripcionTipoSede} id="rolFuncionalForm" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                    </div>
                    <div className="col-span-3">
                        <label htmlFor="sede" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Sede
                        </label>
                        <input type="text" disabled defaultValue={data.sede.descripcionSede} id="rolFuncionalForm" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="porDefecto" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Por defecto
                        </label>

                        <select id="porDefecto"
                            {...register('porDefecto', {

                                required: {
                                    value: true,
                                    message: 'El campo por defecto es requerido'
                                },
                            })}
                            defaultValue={data.porDefecto}
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
                <Button color="danger" variant="light" onPress={() => { onClose(), reset() }}>
                    Cerrar
                </Button>
                <ButtonSubmit label={"Registrar"} isSubmitting={isSubmitting} />
            </ModalFooter>
        </form>



    )
}

export default ActualizarPersonaRolForm