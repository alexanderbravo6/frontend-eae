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

function ActualizarPreguntaForm({ onClose, data }) {

    const [enunciado, setEnunciado] = useState(data.enunciado);
    const [pregunta, setPregunta] = useState(data.pregunta);
    const { register, handleSubmit, getValues, setValue, reset, formState: { errors, isSubmitting } } = useForm();

    const RegistrarDocente = handleSubmit(async (data) => {
        console.log(enunciado, pregunta)
    })

    return (
        <section>
            <form onSubmit={RegistrarDocente}>
                <ModalBody>
                    <div className="grid gap-6 mb-6 md:grid-cols-1">
                        <div className='col-span-2'>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enunciado</label>
                            <ReactQuill value={enunciado} onChange={(e) => { setEnunciado(e) }} modules={toolbarSetting} />
                        </div>
                        <div className='col-span-2'>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pregunta</label>
                            <ReactQuill value={pregunta} onChange={(e) => { setPregunta(e) }} modules={toolbarSetting} />
                        </div>

                        <div className='col-span-1'>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estado</label>
                            <select id="estado" defaultValue={data.estado} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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

export default ActualizarPreguntaForm
