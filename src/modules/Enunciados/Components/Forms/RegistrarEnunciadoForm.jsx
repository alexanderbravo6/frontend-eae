'use client'
import React from 'react'
import { useState } from 'react';

import 'quill/dist/quill.snow.css';
import { toolbarSetting } from '@/shared/Constants/GlobalConstants';
import { ButtonSubmit } from '@/shared/Components/Form/Buttons';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import { Button, ModalBody, ModalFooter } from '@nextui-org/react';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


function RegistrarEnunciadoForm({ onClose }) {

    const [content, setContent] = useState('');
    const { register, handleSubmit, getValues, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const handleChange = (value) => {
        setContent(value); // Aquí el valor es el HTML generado por Quill
    };
    const RegistrarDocente = handleSubmit(async (data) => {
        console.log(content)
    })
    return (
        <section>
            <form onSubmit={RegistrarDocente}>
                <ModalBody>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div className='col-span-2'>
                            <label htmlhtmlFor="titulo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título de Enunciado  </label>
                            <input
                                {...register('titulo', {
                                    required: {
                                        value: true,
                                        message: 'Debe registrar el titulo'
                                    },
                                })}
                                type="text" id="titulo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {
                                errors.titulo && (
                                    <span className="text-red-500 text-xs">{errors.titulo.message}</span>
                                )
                            }
                        </div>
                        <div className='col-span-2'>
                            <label htmlhtmlFor="contenido" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contenido de Enunciado</label>
                            <ReactQuill value={content} onChange={handleChange} modules={toolbarSetting} />
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

export default RegistrarEnunciadoForm
