'use client'
import React from 'react'
import { useState } from 'react';

import 'quill/dist/quill.snow.css';
import { toolbarSetting } from '@/shared/Constants/GlobalConstants';
import { ButtonSubmit } from '@/shared/Components/Buttons/ButtonSubmit';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import { Button, ModalBody, ModalFooter } from '@nextui-org/react';
import { useEnunciadoService } from '../../Hooks/useEnunciadoService';
import TemplateAlert from '@/shared/Components/Templates/TemplateAlert';
import { useSWRConfig } from 'swr';
import { toast } from 'react-toastify';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


function ActualizarEnunciadoForm({ onClose, row }) {

    const [content, setContent] = useState(row.contenido);
    const { actualizarEnunciado } = useEnunciadoService()
    const [errorValidation, setErrorValidation] = useState('');
    const { mutate } = useSWRConfig()
    const { register, handleSubmit, getValues, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const handleChange = (value) => {
        setContent(value); // Aquí el valor es el HTML generado por Quill
    };
    const form = handleSubmit(async (data) => {

        const request = {
            ...data,
            contenido: content
        }
        try {
            const response = await actualizarEnunciado(row.id, request)

            if (response.success === true) {
                setErrorValidation([])
                mutate(`enunciados`,
                    // Aquí se actualiza la data
                    (res) => res
                        ? {
                            ...res,
                            data: res.data.map(item => item.id === row.id ? response.data : item)
                        }
                        : res,
                    false
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
                        <div className='col-span-2'>
                            <label htmlFor="titulo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título de Enunciado  </label>
                            <input
                                {...register('titulo', {
                                    required: {
                                        value: true,
                                        message: 'El campo titulo es requerido'
                                    },
                                })}
                                type="text" id="titulo" defaultValue={row.titulo} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {
                                errors.titulo && (
                                    <span className="text-red-500 text-xs">{errors.titulo.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-1'>
                            <label htmlFor="estado" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estado</label>
                            <select id="estado"
                                {...register('estado', {
                                    required: {
                                        value: true,
                                        message: 'El campo estado es requerido'
                                    },
                                })}
                                defaultValue={row.estado}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">SELECCIONAR</option>
                                <option value="1">ACTIVO</option>
                                <option value="2">INACTIVO</option>
                            </select>
                            {
                                errors.estado && (
                                    <span className="text-red-500 text-xs">{errors.estado.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="contenido" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contenido de Enunciado</label>
                            <ReactQuill value={content} onChange={handleChange} modules={toolbarSetting} />
                        </div>

                    </div>
                </ModalBody>
                <ModalFooter>
                    <ButtonSubmit label="Actualizar" isSubmitting={isSubmitting} />
                    <Button color="danger" variant="flat" onPress={onClose}   >
                        Cerrar
                    </Button>
                </ModalFooter>
            </form>
        </section>
    )

}

export default ActualizarEnunciadoForm
