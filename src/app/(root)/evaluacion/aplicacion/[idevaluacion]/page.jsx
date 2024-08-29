'use client'
import Test from '@/modules/Evaluacion/Components/Main/Test';
import TestEnding from '@/modules/Evaluacion/Components/Test/TestEnding';
import TestErrorLanding from '@/modules/Evaluacion/Components/Test/TestErrorLanding';
import TestLoading from '@/modules/Evaluacion/Components/Test/TestLoading';
import TestTimeout from '@/modules/Evaluacion/Components/Test/TestTimeout';
import { useEvaluacionService } from '@/modules/Evaluacion/Hooks/useEvaluacionService';

import React, { useEffect, useState } from 'react'
function EvaluacionPage({ params }) {

  const { FetchPreguntasByToken } = useEvaluacionService()
  const evaluacion = FetchPreguntasByToken(params.idevaluacion)
  if (evaluacion.isLoading) return <TestLoading message="Generando Evaluación" />
  if (evaluacion.isValidating) return <TestLoading message="Validando Evaluación" />
  if (evaluacion.error) return <TestErrorLanding />
  if (evaluacion?.data.data.estado === 'TC') return <TestTimeout />
  if (evaluacion?.data.data.estado === 'EC') return <TestEnding />


  return (
    <>
      <Test token={params.idevaluacion} info={evaluacion?.data.data.info} data={evaluacion?.data.data.pregunta} />
    </>
  )
}

export default EvaluacionPage