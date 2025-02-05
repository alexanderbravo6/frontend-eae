'use client'

import 'quill/dist/quill.snow.css';
import { Button } from "@nextui-org/react";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import HeaderTest from "./HeaderTest";
import { Radio, RadioGroup } from "@nextui-org/react";
import TestLoading from "../Test/TestLoading";
import { useEvaluacionService } from "../../../Hooks/useEvaluacionService";
import { useSWRConfig } from "swr";
import { useEvaluacion } from "../../../Context/EvaluacionProvider";
import TestErrorLanding from '../Test/TestErrorLanding';
import TestTimeout from '../Test/TestTimeout';
import TestEnding from '../Test/TestEnding';


function Test({ params }) {


  const { mutate } = useSWRConfig()
  const { handleCerrarEvaluacion, opcionSeleccionada, isLoadingClose, setOpcionSeleccionada } = useEvaluacion()
  const [isLoading, setIsLoading] = useState(false);

  const { FetchPreguntasByToken, guardarRespuesta } = useEvaluacionService(params?.token)

  const evaluacion = FetchPreguntasByToken(params.idevaluacion)
  const token = params.idevaluacion
  const info = evaluacion?.data?.data?.info
  const data = evaluacion?.data?.data?.pregunta
  const handleSiguientePregunta = async () => {
    setIsLoading(true)
    const request = {
      idPregunta: data[0]?.id,
      respuesta: opcionSeleccionada
    }

    try {
      const response = await guardarRespuesta(token, request)

      if (response.success === true) {
        const nextQuestion = response.data
        toast.success(response.messages[0])
        mutate("evaluacion_preguntas_" + token, { data: nextQuestion }, false)
        setIsLoading(false)
        setOpcionSeleccionada(null)
      } else {

        if (response.errors) {
          toast.error('Error al guardar respuesta')
        }
        if (response.validations) {
          toast.error('Error en validación  al guardar respuesta')

        }
        setIsLoading(false)
      }
    } catch (error) {
      toast.error('Error en el servidor')
      setIsLoading(false)
      console.log(error)
    }
  }
  if (evaluacion.isLoading) return <TestLoading message="Generando Evaluación" />
  if (evaluacion.isValidating) return <TestLoading message="Validando Evaluación" />
  if (evaluacion.error) return <TestErrorLanding />
  if (evaluacion?.data.data.estado === 'TC') return <TestTimeout />
  if (evaluacion?.data.data.estado === 'EC') return <TestEnding />
  if (isLoadingClose) return <TestLoading message="Cerrando evaluación" />
  if (isLoading) return <TestLoading message="Guardando respuesta" />


  return (
    <>

      <div className='w-full max-h-[200px] z-20 p-4 py-0 flex bg-white items-center justify-center fixed top-0 left-0 right-0'>
        <HeaderTest data={info} idPregunta={data[0]?.id} />
      </div>
      <div className='w-full p-4 flex items-center justify-center md:mt-[140px] mt-[200px] '>
        <div className='lg:max-w-[60%] lg:min-w-[60%] lg:min-h-[550px]  min-w-full rounded-xl shadow-lg flex flex-wrap gap-8 py-8  px-10'>
          <div className="text-justify">
            <div className='ql-editor'>
              <span dangerouslySetInnerHTML={{ __html: data[0]?.problema }} >
              </span>
              <br />
              <span dangerouslySetInnerHTML={{ __html: data[0]?.pregunta }} >
              </span>
            </div>
          </div>
          <div className="mt-1 w-full px-3 " >
            <RadioGroup
              className='gap-8 z-10 '
              onValueChange={setOpcionSeleccionada}
            >
              {
                data[0]?.opciones.map((opcion, index) => (
                  <Radio key={index} className='items-baseline' value={opcion.id} >
                    <div className='flex gap-2'>
                      <strong>{opcion.ordenFake}.</strong>
                      <p className='text-justify' dangerouslySetInnerHTML={{ __html: opcion.opcion }} />
                    </div>
                  </Radio>
                ))
              }

            </RadioGroup>

            <div className="mt-14 float-end ">
              {
                info?.ultimaPregunta === info?.totalPreguntas ? (
                  <Button
                    onPress={() => {
                      handleCerrarEvaluacion(params.idevaluacion, data[0]?.id)
                    }}
                    disabled={isLoadingClose}
                    className='bg-[#04C8C8] px-12 disabled:text-teal-300 ' color="primary">
                    {
                      isLoadingClose ? 'Finalizando...' : 'Finalizar Evaluación'
                    }
                  </Button>
                ) : (

                  isLoading ? (
                    <Button
                      disabled={isLoading}
                      className='bg-[#04C8C8] px-12 disabled:text-teal-300 ' color="primary">
                      Guardando...
                    </Button>
                  ) : (
                    <Button
                      onPress={() => {
                        handleSiguientePregunta()
                      }}
                      className='bg-[#04C8C8] px-12 ' color="primary">
                      Siguiente
                    </Button>
                  )
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Test