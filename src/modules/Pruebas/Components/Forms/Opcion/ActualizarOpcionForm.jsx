'use client'
import React from 'react'
import { useState } from 'react';

import 'quill/dist/quill.snow.css';
import { toolbarSetting } from '@/shared/Constants/GlobalConstants';
import { ButtonSubmit } from '@/shared/Components/Buttons/ButtonSubmit';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import { Button, ModalBody, ModalFooter } from '@nextui-org/react';
import TemplateAlert from '@/shared/Components/Templates/TemplateAlert';
import { toast } from 'react-toastify';
import { useSWRConfig } from 'swr';
import { useOpcionService } from '@/modules/Pruebas/Hooks/useOpcionService';
import ButtonCloseModal from '@/shared/Components/Buttons/ButtonCloseModal';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


function ActualizarOpcionForm({ row, onClose }) {
    const { actualizarOpcion } = useOpcionService()
    const [enunciado, setEnunciado] = useState(row.contenido);
    const [pregunta, setPregunta] = useState('');
    const { register, handleSubmit, getValues, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const [errorValidation, setErrorValidation] = useState('');
    const { mutate } = useSWRConfig()
    const form = handleSubmit(async (data) => {

        const request = {
            contenido: enunciado
        }
        try {
            const response = await actualizarOpcion(row.id, request)

            if (response.success === true) {
                setErrorValidation([])
                mutate(`preguntas_opciones_${row.idPregunta}`,
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
                    <div className="grid gap-6 mb-6 md:grid-cols-1">
                        <div className='col-span-2'>
                            <label className="block mb-2 uppercase text-sm font-medium text-gray-900 dark:text-white">Opcion {row.letra} ({row.esCorrecta ? "CORRECTA" : "INCORRECTA"})</label>
                            <ReactQuill value={enunciado} onChange={(e) => { setEnunciado(e) }} modules={toolbarSetting} />
                        </div>

                    </div>
                </ModalBody>
                <ModalFooter>
                    <ButtonSubmit label="Actualizar" isSubmitting={isSubmitting} />
                    <ButtonCloseModal onClose={onClose} />
                </ModalFooter>
            </form>
        </section>
    )

}

export default ActualizarOpcionForm
