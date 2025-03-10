import { ButtonSubmit } from '@/shared/Components/Buttons/ButtonSubmit'
import { Button, ModalBody, ModalFooter } from '@nextui-org/react'
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useSWRConfig } from "swr";
import TemplateAlert from "@/shared/Components/Templates/TemplateAlert";
import { useRolFuncionalService } from '../../Hooks/useRolFuncionalService';
import ButtonCloseModal from '@/shared/Components/Buttons/ButtonCloseModal';
function ActualizarRolFuncionalForm({ onClose, row }) {

    const { mutate } = useSWRConfig()
    const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const [errorValidation, setErrorValidation] = useState('');
    const { actualizarRolFuncional } = useRolFuncionalService()

    const formulario = handleSubmit(async (data) => {

        try {
            const response = await actualizarRolFuncional(row.id, data)
            if (response.success === true) {
                toast.success(response.messages[0])
                onClose()
                reset()
                mutate('rol_funcional')
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
            <form onSubmit={formulario} >
                <ModalBody>
                    {
                        errorValidation.length === 0 ? null : (
                            <section>
                                <TemplateAlert message={errorValidation} type={'errorList'} />
                            </section>
                        )
                    }
                    <div className="grid grid-cols-1 gap-4">

                        <div className="col-span-1">
                            <label htmlFor="nombre" className="block uppercase text- mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Nombre
                            </label>
                            <input
                                {...register('nombre', {

                                    required: {
                                        value: true,
                                        message: 'El campo nombre es requerido'
                                    },
                                })}
                                defaultValue={row.nombre}
                                type="text" id="nombre" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                            {
                                errors.nombre && (
                                    <span className="text-red-500 text-xs">{errors.nombre.message}</span>
                                )
                            }
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="estado" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                ESTADO
                            </label>
                            <select id="estado"
                                {...register('estado', {

                                    required: {
                                        value: true,
                                        message: 'El estado es requerido'
                                    },
                                })}
                                defaultValue={row.estado}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="" >Seleccionar</option>
                                <option value="1">Activo</option>
                                <option value="2">Inactivo</option>
                            </select>
                            {
                                errors.estado && (
                                    <span className="text-red-500 text-xs">{errors.estado.message}</span>
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
        </>
    )
}

export default ActualizarRolFuncionalForm