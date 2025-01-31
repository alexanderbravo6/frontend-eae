'use client'
import React, { useState } from 'react'
import { RadioGroup, Radio } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { useEvaluacion } from '../../Context/useEvaluacion';
import { useEvaluacionService } from '../../Hooks/useEvaluacionService';
import { toast } from 'react-toastify';

function PreguntaSeguridadForm() {
    const { preguntasSeguridad, validationLoading, setValidationLoading, matriculaSelected, setInstrucciones, setEstudianteEncontrado, setErrorValidation, handleLimpiarValidacion, pruebaSelected } = useEvaluacion();
    const [primerPregunta, setPrimeraPregunta] = useState('');
    const [segundaPregunta, setSegundaPregunta] = useState('');
    const { validarPreguntasSeguridad } = useEvaluacionService();
    const router = useRouter();
    const validarRespuestas = async (event) => {

        event.preventDefault();
        setValidationLoading(true)
        const request = {
            idMatricula: matriculaSelected,
            idPrueba: pruebaSelected,
            primeraPregunta: primerPregunta,
            segundaPregunta: segundaPregunta
        }

        try {
            const response = await validarPreguntasSeguridad(request)

            if (response.success === true) {

                toast.success('Validación exitosa')
                setInstrucciones(response.data)
                handleLimpiarValidacion()
                router.push(`/indicaciones/${response.data.token}`)
            } else {
                if (response.errors) {
                    setEstudianteEncontrado(false)
                    const nuevosErrores = Object.values(response.errors).flat();
                    setErrorValidation(nuevosErrores)
                }
                if (response.validations) {
                    setEstudianteEncontrado(false)
                    const nuevosErrores = Object.values(response.validations).flat();
                    setErrorValidation(nuevosErrores)
                }
                setValidationLoading(false)
            }
        } catch (error) {
            setEstudianteEncontrado(false)
            setValidationLoading(false)
            console.log(error)
        }

    }

    return (
        <>
            <form onSubmit={validarRespuestas} >
                <div className='flex gap-8  flex-col '>
                    {
                        preguntasSeguridad?.map((item, index) => (

                            <RadioGroup

                                onValueChange={
                                    (value) => {
                                        if (index === 0) {
                                            setPrimeraPregunta(
                                                {
                                                    id: item.id,
                                                    respuesta: value
                                                }
                                            )
                                        }
                                        else {
                                            setSegundaPregunta(
                                                {
                                                    id: item.id,
                                                    respuesta: value
                                                }
                                            )
                                        }
                                    }
                                }
                                key={`radio-group-${index}`}
                                className='gap-4 '
                                label={`${item.pregunta}`}
                                orientation="horizontal"
                            >
                                <Radio key={`radio-${index}`} value={item.primeraPosicion}>{item.primeraPosicion} </Radio>
                                <Radio key={`radio-${index + 1}`} value={item.segundaPosicion}>{item.segundaPosicion}</Radio>
                                <Radio key={`radio-${index + 2}`} value={item.terceraPosicion}>{item.terceraPosicion}</Radio>

                            </RadioGroup>

                        )
                        )
                    }
                </div>
                <div className='mt-10 flex gap-4 items-center'>

                    <button

                        disabled={validationLoading}
                        className='z-0 group relative h-[40px] inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none text-primary-foreground data-[hover=true]:opacity-hover bg-[#04C8C8] disabled:opacity-75 px-8' color="primary">
                        {
                            validationLoading ?

                                (
                                    <>
                                        Cargando...
                                    </>
                                )
                                : "Validar"
                        }
                    </button>
                    <button onClick={handleLimpiarValidacion} className='px-8 hover:bg-gray-300 hover:text-black text-white  bg-gray-400 h-[40px] text-center font-extralight rounded-xl flex items-center text-sm ' href={`../../../prueba/`}>
                        Limpiar
                    </button>
                </div>
            </form>
        </>
    )
}

export default PreguntaSeguridadForm