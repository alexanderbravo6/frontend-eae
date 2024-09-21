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


function RegistrarPreguntaGrupalForm({ onClose }) {

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
                    <div className="grid gap-6 mb-6 md:grid-cols-1">
                        <div className='col-span-2'>
                            <label forHtml="enunciado" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enunciado</label>
                            <select id="enunciado" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">SELECCIONAR</option>
                                <option value="1">ENUNCIADO 1</option>
                                <option value="2">ENUNCIADO 2</option>

                            </select>
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="contenido" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pregunta</label>
                            <ReactQuill value={content} onChange={handleChange} modules={toolbarSetting} />
                        </div>
                        <div className='col-span-1'>
                            <label forHtml="grupo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Grupo</label>
                            <select id="grupo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">SELECCIONAR</option>
                                <option value="1">GRUPO 01</option>
                                <option value="2">GRUPO 02</option>
                                <option value="3">GRUPO 03</option>
                                <option value="4">GRUPO 04</option>
                                <option value="5">GRUPO 05</option>
                                <option value="6">GRUPO 06</option>
                                <option value="7">GENERAL</option>
                                <option value="8">GRUPO 07</option>

                            </select>
                        </div>
                        <div className='col-span-1'>
                            <label forHtml="estado" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estado</label>
                            <select id="estado" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">SELECCIONAR</option>
                                <option value="1">ACTIVO</option>
                                <option value="2">INACTIVO</option>

                            </select>
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

export default RegistrarPreguntaGrupalForm
