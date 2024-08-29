'use client'

import PreguntaSeguridadForm from '@/modules/Evaluacion/Components/Validacion/PreguntasSeguridadForm';
import { useEvaluacion } from '@/modules/Evaluacion/Context/useEvaluacion';
import { useEvaluacionService } from '@/modules/Evaluacion/Hooks/useEvaluacionService';
import TemplateBaseAlert from '@/shared/Components/Templates/TemplateBaseAlert';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

function ValidacionPage() {
  const { pruebaSelected, setMatriculaSelected, errorValidation, setErrorValidation, setPreguntasSeguridad, estudianteEncontrado, setEstudianteEncontrado } = useEvaluacion();
  const { validarMatricula } = useEvaluacionService();
  const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitting } } = useForm();
  const router = useRouter();

  const formSubmit = handleSubmit(async (data) => {

    const request = {
      numeroDocumento: data.numeroDocumento,
      idPrueba: pruebaSelected
    }
    try {
      const response = await validarMatricula(request)

      if (response.success === true) {

        setEstudianteEncontrado(true)
        setErrorValidation("")
        setPreguntasSeguridad(response.data.preguntas)
        setMatriculaSelected(response.data.idMatricula)
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

  if (!pruebaSelected || pruebaSelected == null) {
    redirect('/evaluacion')
  }
  return (
    <>
      {
        !estudianteEncontrado ? (
          <>
            <form onSubmit={formSubmit} >
              {
                errorValidation.length === 0 ? null : (
                  <section>
                    <TemplateBaseAlert message={errorValidation} type={'errorList'} />
                  </section>
                )
              }
              <section className='flex flex-wrap gap-3 w-full  justify-between '>
                <div className="w-full">
                  <label htmlFor="numeroDocumento" className="block mb-2 text-sm w-full font-medium text-gray-900 dark:text-white">Número de Documento</label>
                  <input  {...register('numeroDocumento', {
                    required: {
                      value: true,
                      message: 'El número de documento de identidad es requerido'
                    }
                  })} type="text" id="numeroDocumento" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  {
                    errors.numeroDocumento && (
                      <span className="text-red-500 text-xs">{errors.numeroDocumento.message}</span>
                    )
                  }
                </div>

                <div className='flex gap-4 items-end'>

                  <button

                    disabled={isSubmitting}
                    className='z-0 group relative h-[40px] inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none text-primary-foreground data-[hover=true]:opacity-hover bg-[#04C8C8] disabled:opacity-75 px-8' color="primary">
                    {
                      isSubmitting ?

                        (

                          "Cargando..."

                        )
                        : "Buscar"
                    }
                  </button>
                  <button
                    onClick={() => {
                      reset()
                      setErrorValidation("")
                      setEstudianteEncontrado(false)
                      router.push(`/evaluacion`)
                    }}

                    className='px-8 hover:bg-gray-300 hover:text-black text-white  bg-gray-400 h-[40px] text-center font-extralight rounded-xl flex items-center text-sm ' href={`/evaluacion`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-square-arrow-left">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 8l-4 4l4 4" />
                      <path d="M16 12h-8" />
                      <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                    </svg>
                  </button>

                </div >
              </section>

            </form>
          </>
        ) : null
      }
      {
        estudianteEncontrado ? <PreguntaSeguridadForm /> : null
      }

    </>
  )
}

export default ValidacionPage