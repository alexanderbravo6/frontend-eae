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


function ActualizarOpcionForm({ onClose }) {

    const [enunciado, setEnunciado] = useState('');
    const [pregunta, setPregunta] = useState('');
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
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Opcion A (Correcta)</label>
                            <ReactQuill value={enunciado} onChange={(e) => { setEnunciado(e) }} modules={toolbarSetting} />
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

export default ActualizarOpcionForm
