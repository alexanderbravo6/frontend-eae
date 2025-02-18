'use client'
import React from 'react'
import { useState } from 'react';

import 'quill/dist/quill.snow.css';
import { estadoOptions, toolbarSetting } from '@/shared/Constants/GlobalConstants';
import { ButtonSubmit } from '@/shared/Components/Buttons/ButtonSubmit';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import { Button, ModalBody, ModalFooter } from '@nextui-org/react';
import TemplateAlert from '@/shared/Components/Templates/TemplateAlert';
import { useSWRConfig } from 'swr';
import { toast } from 'react-toastify';
import { useIndicacionService } from '../../Hooks/useIndicacionService';
import ButtonCloseModal from '@/shared/Components/Buttons/ButtonCloseModal';
import SelectField from '@/shared/Components/Form/Fields/SelectField';
import InputField from '@/shared/Components/Form/Fields/InputField';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


function ActualizarIndicacionForm({ onClose, row }) {

  const [content, setContent] = useState(row.contenido);
  const { actualizarIndicacion } = useIndicacionService()
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
      const response = await actualizarIndicacion(row.id, request)

      if (response.success === true) {
        setErrorValidation([])
        mutate(`indicaciones`,
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
              <InputField
                id="nombre"
                label="nombre"
                isRequired={true}
                value={row.nombre}
                register={register}
                error={errors.nombre}
              />
            </div>
            <div className='col-span-1'>
              <SelectField
                id="estado"
                label="tipo de documento"
                options={estadoOptions}
                setValue={setValue}
                value={row.estado}
                isRequired={true}
                register={register}
                error={errors.estado}
              />

            </div>
            <div className='col-span-2'>
              <label htmlFor="contenido" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CONTENIDO <span className="text-red-500">*</span></label>
              <ReactQuill value={content} onChange={handleChange} modules={toolbarSetting} />
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

export default ActualizarIndicacionForm
