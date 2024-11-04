'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@nextui-org/react'
import 'quill/dist/quill.snow.css';
import Image from 'next/image'
import { redirect, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useEvaluacion } from '../Context/useEvaluacion';
import TestEnding from './Test/TestEnding';
import { useEvaluacionService } from '../Hooks/useEvaluacionService';

function InstruccionesCard() {
    const router = useRouter();
    const [submit, setSubmit] = useState(false);
    const { iniciarEvaluacion } = useEvaluacionService();
    const { instrucciones, pruebaSelected, setEstudianteEncontrado, matriculaSelected } = useEvaluacion();

    if (!instrucciones) return redirect('/');

    async function handleIniciarEvaluacion() {

        setSubmit(true);
        const request = {
            idPrueba: pruebaSelected,
            idMatricula: matriculaSelected,
        }

        try {
            const response = await iniciarEvaluacion(request)

            if (response.success === true) {
                router.push(`/aplicacion/${response.data.tokenEvaluacion}`)
            } else {
                setSubmit(false)

                if (response.errors) {
                    setEstudianteEncontrado(false)
                    toast.error('Error al iniciar la evaluación')
                }
                if (response.validations) {
                    setEstudianteEncontrado(false)
                    toast.error('Error al iniciar la evaluación')
                }

            }
        } catch (error) {
            setEstudianteEncontrado(false)
            setSubmit(false)
            console.log(error)
        }
    }


    if (instrucciones.evaluacionTerminada) return <TestEnding />
    return (
        <>
            {
                !instrucciones &&
                <>
                    <div className="mt-6">
                        <div className='text-center text-red-500'>No se encontró la evaluación</div>
                    </div>
                    <div className='mt-10 mb-10 flex gap-4 items-center justify-center'>
                        <Link className='px-8 hover:bg-gray-300 hover:text-black text-white  bg-gray-400 h-[40px] text-center font-extralight rounded-xl flex items-center text-sm ' href={`../../../seguridad/persona/${params.idprueba}/${params.idmatricula}`}>
                            Regresar
                        </Link>
                    </div>
                </>
            }
            {
                instrucciones &&
                <>
                    <div className='grid grid-cols-2 lg:grid-cols-5 mt-6 gap-1'>
                        <div className='flex col-span-2  lg:col-span-3  items-center bg-[#DCF3F3] py-5 px-8 gap-3'>
                            <Image src="/icon-prueba-comprension.svg" width={45} height={45} alt="libro icon" />
                            <div>
                                <p className='font-bold text-lg'>
                                    {instrucciones.nombrePrueba}
                                </p>
                                <span className='text-base' >
                                    {instrucciones.ciclo}
                                </span>
                            </div>
                        </div>
                        <div className='flex col-span-2 lg:col-span-2 items-center bg-[#DCF3F3] p-5 gap-3 '>
                            <Image src="/icon-person.svg" width={45} height={45} alt="icono de persona" />
                            <div>
                                <p className='text-gray-400'>
                                    Espacios disponibles
                                </p>
                                <span className='font-bold'>{instrucciones.espaciosDisponibles}</span>
                            </div>
                        </div>
                    </div>
                    <div className='mt-6'>

                        <div className='ql-editor'>
                            <span dangerouslySetInnerHTML={{ __html: instrucciones.descripcion }} >
                            </span>
                        </div>

                    </div>
                    <div className='mt-10 mb-10 flex gap-4 items-center justify-center'>

                        {
                            instrucciones.existeEvaluacion === false ? (
                                <>
                                    <Button
                                        onPress={() => {
                                            handleIniciarEvaluacion();
                                        }}
                                        disabled={submit}
                                        className='bg-[#04C8C8] px-8 disabled:bg-teal-200 ' color="primary">
                                        {
                                            submit ? 'Iniciando...' : 'Iniciar Evaluación'
                                        }
                                    </Button>
                                    <Link className='px-8 hover:bg-gray-300 hover:text-black text-white  bg-gray-400 h-[40px] text-center font-extralight rounded-xl flex items-center text-sm ' href={`/`}>
                                        Regresar
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Button
                                        onPress={() => {
                                            handleIniciarEvaluacion();
                                        }}
                                        disabled={submit}
                                        className='bg-[#04C8C8] px-8 disabled:bg-teal-200 ' color="primary">
                                        {
                                            submit ? 'Cargando...' : 'Continuar con Evaluación'
                                        }
                                    </Button>
                                    <Link className='px-8 hover:bg-gray-300 hover:text-black text-white  bg-gray-400 h-[40px] text-center font-extralight rounded-xl flex items-center text-sm ' href={`/`}>
                                        Regresar
                                    </Link>
                                </>
                            )
                        }

                    </div>
                </>
            }
        </>
    )
}
export default InstruccionesCard