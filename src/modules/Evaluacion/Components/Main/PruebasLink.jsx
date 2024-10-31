'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useEvaluacionService } from '../../Hooks/useEvaluacionService';
import { PruebaSkeleton } from '@/shared/Components/Skeletons';
import { useEvaluacion } from '../../Context/useEvaluacion';
import { useLocalStorage } from '@/shared/Hooks/useLocalStorage';

// lstrgprb: Información de la prueba en local storage
// lstrgpsn: Información de la persona en local storage 

function PruebasLink() {
    const router = useRouter();
    const { setPruebaSelected } = useEvaluacion();
    const { FetchPruebasActivas } = useEvaluacionService();
    const pruebas = FetchPruebasActivas();
    if (pruebas.error) return <p className="text-gray-400 text-sm font-extralight">No hay pruebas disponibles</p>
    if (pruebas.isLoading) return <PruebaSkeleton />


    return (
        <>
            {
                pruebas &&
                pruebas?.data.data.map((item, index) => (
                    <button onClick={
                        () => {
                            setPruebaSelected(item.id)
                            router.push(`/validacion`)
                        }} key={index} className="hover:bg-[#97e4e4] text-left  w-full gap-3 mt-4 flex px-5 py-2 items-center bg-[#DCF3F3] rounded-md " >
                        <Image src={`/icon-prueba-${item.tipoPrueba}.svg`} width={40} height={40} alt="libro icon" />
                        <div >
                            <p className="font-bold" >
                                {item.nombrePrueba}
                            </p>
                            <span>
                                {item.ciclo}
                            </span>
                        </div>
                    </button >
                ))
            }
        </>
    )
}

export default PruebasLink