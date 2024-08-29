'use client'
import useClienteAxiosSia from '@/hooks/useClienteAxiosSia'
import React from 'react'
import useSWR from 'swr'

function PageTest() {

    const ClienteAxios = useClienteAxiosSia();
    const FetchEvaluacion = () => ClienteAxios.get("/api/matricula/infopersona/911410").then(data => data.data);
    const { data: evaluacionData, error: errorEvaluacion, isValidating, isLoading: LoadingEvaluacion } = useSWR('Evaluacion', FetchEvaluacion,
        {
            revalidateOnMount: true,
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: true
        });

    if (LoadingEvaluacion) return <div>Loading...</div>
    console.log(evaluacionData.data.Apellido_materno)
    return (
        <div>
            <h1>Test</h1>
            {
                evaluacionData && <div>
                    <h2>{evaluacionData.data.DNI}</h2>
                    <h2>{evaluacionData.data.Apellido_materno}</h2>
                    <h2>{evaluacionData.data.Apellido_paterno}</h2>
                </div>
            }
        </div>
    )
}

export default PageTest