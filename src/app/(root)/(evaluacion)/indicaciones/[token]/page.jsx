'use client'
import Image from 'next/image'
import React, { useEffect } from 'react';
import 'quill/dist/quill.snow.css';
import InstruccionesCard from '@/modules/Evaluacion/Components/Aplicacion/InstruccionesCard';
import { useEvaluacion } from '@/modules/Evaluacion/Context/EvaluacionProvider';


function IntruccionesPage({ params }) {
    const { setValidationLoading } = useEvaluacion();

    useEffect(() => {
        setValidationLoading(false)
    }, [])
    return (
        <div className='lg:w-full w-[90%] flex items-center  h-full relative lg:my-0 lg:mx-0 mx-[5%] my-[5%] '>
            <div className='lg:w-[791px] min-h-[550px] m-auto  '>
                <div className='flex  items-center justify-center'>
                    <Image src="/icon-minedu.svg" width={180} height={180} alt="Icono Ministerio de Educación" />
                </div>
                <InstruccionesCard token={params.token} />
            </div>
        </div>
    )
}

export default IntruccionesPage