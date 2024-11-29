'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

function ResultadoDashboard() {
    const { data: session, status } = useSession()
    if (session?.user?.idRol === 1) return null
    return (
        <section className='grid md:grid-cols-2 grid-cols-1 gap-2 justify-items-center'>
            <div className="max-w-sm p-6 my-5 bg-white border border-gray-200 rounded-lg shadow ">

                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-presentation">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 4l18 0" />
                    <path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" />
                    <path d="M12 16l0 4" />
                    <path d="M9 20l6 0" />
                    <path d="M8 12l3 -3l2 2l3 -3" />
                </svg>
                <h5 className="my-2 text-2xl font-semibold tracking-tight text-gray-900 ">EAE CICLO VI Y X</h5>
                <p className="mb-3 font-normal text-gray-500 ">El siguiente documento contiene el reporte nacional de la evaluación realizada a estudiantes del ciclo VI y X del año 2021.</p>
                <div className="flex gap-3">
                    <a
                        href="/REPORTE_EAE_2021.pdf"
                        download
                        className="p-2 flex  items-center justify-center text-blue-600 transition-colors"
                        aria-label="Descargar EAE CICLO VI Y X"
                    >

                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-download">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                            <path d="M7 11l5 5l5 -5" />
                            <path d="M12 4l0 12" />
                        </svg>

                    </a>

                </div>
            </div>


            <div className="max-w-sm p-6 my-5 bg-white border border-gray-200 rounded-lg shadow ">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-presentation">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 4l18 0" />
                    <path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" />
                    <path d="M12 16l0 4" />
                    <path d="M9 20l6 0" />
                    <path d="M8 12l3 -3l2 2l3 -3" />
                </svg>
                <h5 className="mb-2 text-2xl mt-4 font-semibold tracking-tight text-gray-900 ">EAE CICLO I</h5>
                <p className="mb-3 font-normal text-gray-500 ">El siguiente documento contiene el reporte nacional de la evaluación realizada a estudiantes del ciclo I del año 2023. </p>
                <div className="flex gap-3">

                    <a
                        href="/REPORTE_EAE_CICLOI_2023.pdf"
                        download
                        className="p-2 flex items-center justify-center text-blue-600 transition-colors"
                        aria-label="Descargar EAE CICLO VI Y X"
                    >

                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-download">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                            <path d="M7 11l5 5l5 -5" />
                            <path d="M12 4l0 12" />
                        </svg>

                    </a>
                </div>
            </div>

        </section>
    )
}

export default ResultadoDashboard