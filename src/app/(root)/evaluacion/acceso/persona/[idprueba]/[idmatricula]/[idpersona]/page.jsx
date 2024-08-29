'use client'
import React, { useState } from 'react'
import { RadioGroup, Radio, Button } from "@nextui-org/react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useSWR, { useSWRConfig } from 'swr';
import useClienteAxios from '@/shared/Hooks/useClienteAxios';
import LoadingSpinner from '@/components/Utils/LoadingSpinner';
import { set, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useClienteAxiosSia from '@/shared/Hooks/useClienteAxiosSia';
function Page({ params }) {
    const [selectedFirts, setSelectedFirts] = useState(false);
    const [selectedSecond, setSelectedSecond] = useState(false);
    const [isSubmitting, setSubmitting] = useState(false);
    const { mutate } = useSWRConfig();
    const router = useRouter();
    const ClienteAxios = useClienteAxiosSia();
    const FetchPreguntas = () => ClienteAxios.get("/api/preguntas/validar/" + params.idmatricula).then(data => data.data);
    const { data: preguntas, error: errorPreguntas, isLoading: LoadingPreguntas } = useSWR('PreguntasSeguridad' + params.idmatricula, FetchPreguntas, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });
    const { register, handleSubmit, formState: { errors } } = useForm();

    const ValidarRespuestas = handleSubmit(async (data) => {
        setSubmitting(true)

        if (!selectedFirts) {
            toast.error('Primera pregunta incorrecta')
            mutate('PreguntasSeguridad' + params.idmatricula)
            router.push(`../../../prueba`)
            setSubmitting(false)
        }
        if (!selectedSecond) {
            toast.error('Segunda pregunta incorrecta')
            mutate('PreguntasSeguridad' + params.idmatricula)
            router.push(`../../../prueba`)
            setSubmitting(false)
        }

        if (selectedFirts && selectedSecond) {
            toast.success('Información correcta')
            router.push(`../../../../instrucciones/${params.idprueba}/${params.idmatricula}/${params.idpersona}`)
            setSubmitting(false)
        }
    })

    if (LoadingPreguntas) return <LoadingSpinner />
    return (
        <>
            <form onSubmit={ValidarRespuestas} >
                <div className='flex gap-8 flex-col '>
                    {
                        preguntas?.data.map((model, index) => (

                            <RadioGroup

                                onValueChange={
                                    (value) => {
                                        if (index === 0) {
                                            if (model.respuesta === value) {
                                                setSelectedFirts(true)
                                            } else {
                                                setSelectedFirts(false)
                                            }

                                        }
                                        else {
                                            if (model.respuesta === value) {
                                                setSelectedSecond(true)
                                            }
                                            else {
                                                setSelectedSecond(false)
                                            }
                                        }
                                    }
                                }
                                key={`radio-group-${index}`}
                                className='gap-4 '
                                label={`${model.pregunta}`}
                                orientation="horizontal"
                            >
                                <Radio key={`radio-${index}`} value={model.posicion_1}>{model.posicion_1} </Radio>
                                <Radio key={`radio-${index + 1}`} value={model.posicion_2}>{model.posicion_2}</Radio>
                                <Radio key={`radio-${index + 2}`} value={model.posicion_3}>{model.posicion_3}</Radio>

                            </RadioGroup>

                        )
                        )
                    }
                </div>
                <div className='mt-10 flex gap-4 items-center'>

                    <button

                        disabled={isSubmitting}
                        className='z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none text-primary-foreground data-[hover=true]:opacity-hover bg-[#04C8C8] disabled:opacity-75 px-8' color="primary">
                        {
                            isSubmitting ?

                                (
                                    <>
                                        <svg
                                            className="animate-spin h-5 w-5 text-current"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        Cargando
                                    </>
                                )
                                : "Buscar"
                        }
                    </button>
                    <Link className='px-8 hover:bg-gray-300 hover:text-black text-white  bg-gray-400 h-[40px] text-center font-extralight rounded-xl flex items-center text-sm ' href={`../../../prueba/`}>
                        Regresar
                    </Link>
                </div>
            </form>
        </>
    )
}

export default Page