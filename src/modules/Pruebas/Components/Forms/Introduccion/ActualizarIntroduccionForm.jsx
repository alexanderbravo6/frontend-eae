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

const contenido = '<p>Contenido de introducción</p>'
function ActualizarIntroduccionForm({ onClose }) {

    const [content, setContent] = useState(contenido);
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

                        <div className='col-span-1'>
                            <label htmlhtmlFor="contenido" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contenido de Introducción</label>
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

export default ActualizarIntroduccionForm
