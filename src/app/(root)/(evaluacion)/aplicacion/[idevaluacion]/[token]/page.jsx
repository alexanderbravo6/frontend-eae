'use client'
import Test from '@/modules/Evaluacion/Components/Main/Test';
import TestLoading from '@/modules/Evaluacion/Components/Test/TestLoading';
import { useEvaluacion } from '@/modules/Evaluacion/Context/useEvaluacion';
import React, { useEffect, useState } from 'react'
function EvaluacionPage({ params }) {
  const [isLoading, setIsLoading] = useState(true)
  const { testParams, setTestParams } = useEvaluacion()
  useEffect(() => {
    setIsLoading(false)
    setTestParams(params)
  }, [params])

  if (isLoading) return <TestLoading message="Validando Token" />
  return (
    <>
      <Test params={testParams} />

    </>
  )
}

export default EvaluacionPage