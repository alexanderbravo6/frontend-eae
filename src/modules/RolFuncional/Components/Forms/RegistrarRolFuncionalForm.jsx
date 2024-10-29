import { ButtonSubmit } from '@/shared/Components/Form/Buttons'
import { Button, ModalBody, ModalFooter } from '@nextui-org/react'
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useSWRConfig } from "swr";
import TemplateBaseAlert from "@/shared/Components/Templates/TemplateBaseAlert";
import { useRolFuncionalService } from '../../Hooks/useRolFuncionalService';
function RegistrarRolFuncionalForm({ onClose }) {

    const { mutate } = useSWRConfig()
    const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const [errorValidation, setErrorValidation] = useState('');
    const { registrarRolFuncional } = useRolFuncionalService()

    const formulario = handleSubmit(async (data) => {

        try {
            const response = await registrarRolFuncional(data)
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
                                <TemplateBaseAlert message={errorValidation} type={'errorList'} />
                            </section>
                        )
                    }
                    <div className="grid grid-cols-1 gap-4">

                        <div className="col-span-1">
                            <label htmlFor="nombre" className="block  text- mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Nombre
                            </label>
                            <input
                                {...register('nombre', {

                                    required: {
                                        value: true,
                                        message: 'El campo nombre es requerido'
                                    },
                                })}
                                type="text" id="nombre" className="bg-gray-50 uppercase border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                            {
                                errors.nombre && (
                                    <span className="text-red-500 text-xs">{errors.nombre.message}</span>
                                )
                            }
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="estado" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Estado
                            </label>
                            <select id="estado"
                                {...register('estado', {

                                    required: {
                                        value: true,
                                        message: 'El estado es requerido'
                                    },
                                })}

                                className="bg-gray-50 border border-gray-300 uppercase text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
                    <Button color="danger" variant="light" onPress={
                        () => {
                            reset()
                            onClose()
                        }}>
                        Cerrar
                    </Button>

                    <ButtonSubmit isSubmitting={isSubmitting} label={'Actualizar'} />
                </ModalFooter>
            </form>
        </>
    )
}

export default RegistrarRolFuncionalForm