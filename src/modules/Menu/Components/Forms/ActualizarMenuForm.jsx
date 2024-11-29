import { ButtonSubmit } from '@/shared/Components/Buttons/ButtonSubmit'
import TemplateAlert from '@/shared/Components/Templates/TemplateAlert'
import { Button, ModalBody, ModalFooter } from '@nextui-org/react'
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useSWRConfig } from "swr";
import { useMenuService } from "../../Hooks/useMenuService";
function ActualizarMenuForm({ row, onClose }) {


    const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const { FetchMenusPadres, actualizarMenu } = useMenuService()
    const menus = FetchMenusPadres();
    const { mutate } = useSWRConfig()
    const [errorValidation, setErrorValidation] = useState('');

    const formulario = handleSubmit(async (data) => {

        try {
            const response = await actualizarMenu(row.id, data)

            if (response.success === true) {
                toast.success(response.messages[0])
                onClose()
                mutate('menu')
                mutate('menus_padres')
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
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-1">
                            <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
                            <label htmlFor="rutaRelativa" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Ruta relativa
                            </label>
                            <input
                                {...register('rutaRelativa', {

                                    required: {
                                        value: true,
                                        message: 'El campo ruta relativa es requerido'
                                    },
                                })}
                                defaultValue={row.rutaRelativa}
                                type="text" id="rutaRelativa" placeholder="seguridad/menu/..." className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                            {
                                errors.rutaRelativa && (
                                    <span className="text-red-500 text-xs">{errors.rutaRelativa.message}</span>
                                )
                            }
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="descripcion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Descripción
                            </label>
                            <input
                                defaultValue={row.descripcion}
                                {...register('descripcion', {

                                    required: {
                                        value: true,
                                        message: 'El campo descripcion es requerido'
                                    },
                                })}
                                type="text" id="name" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                            {
                                errors.descripcion && (
                                    <span className="text-red-500 text-xs">{errors.descripcion.message}</span>
                                )
                            }
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="icono" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Icono
                            </label>


                            <select id="icono"

                                {...register('icono', {

                                    required: {
                                        value: true,
                                        message: 'El campo icono es requerido'
                                    },
                                })}
                                defaultValue={row.icono}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="" >Seleccionar</option>
                                <option value="home">home</option>
                                <option value="person">person</option>
                                <option value="management">management</option>
                                <option value="eyes-config">eyes-config</option>
                                <option value="checklist">checklist</option>
                                <option value="directions">directions</option>
                                <option value="config">config</option>
                            </select>
                            {
                                errors.icono && (
                                    <span className="text-red-500 text-xs">{errors.icono.message}</span>
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
                                        message: 'El campo estado es requerido'
                                    },
                                })}
                                defaultValue={row.estado}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">Seleccionar</option>
                                <option value="1">Activo</option>
                                <option value="2">Inactivo</option>
                            </select>
                            {
                                errors.estado && (
                                    <span className="text-red-500 text-xs">{errors.estado.message}</span>
                                )
                            }
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="codigo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Codigo Interno
                            </label>
                            <input
                                {...register('codigo', {

                                    required: {
                                        value: true,
                                        message: 'El codigo interno es requerido'
                                    },
                                })}
                                type="text" id="codigo" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                            {
                                errors.codigo && (
                                    <span className="text-red-500 text-xs">{errors.codigo.message}</span>
                                )
                            }
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="estado" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Orden
                            </label>


                            <input

                                {...register('orden', {

                                    required: {
                                        value: true,
                                        message: 'El orden es requerido'
                                    },
                                })}
                                defaultValue={row.orden}
                                type="text" id="orden" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                            {
                                errors.orden && (
                                    <span className="text-red-500 text-xs">{errors.orden.message}</span>
                                )
                            }
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="idMenuPadre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Menú Padre
                            </label>


                            <select id="idMenuPadre"
                                {...register('idMenuPadre')}
                                defaultValue={row.idMenuPadre}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="0" >Seleccionar</option>
                                {
                                    menus &&
                                        menus.error ? (<option value="" >No hay datos</option>) :
                                        menus.isLoading ? (<option value="" >Cargando...</option>) : (
                                            menus?.data?.data.map((menu) => (
                                                <option key={menu.id} value={menu.id}>{menu.nombre}</option>
                                            )))
                                }
                            </select>

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

                    <ButtonSubmit isSubmitting={isSubmitting} label={"Actualizar"} />
                </ModalFooter>
            </form>
        </>
    )
}

export default ActualizarMenuForm