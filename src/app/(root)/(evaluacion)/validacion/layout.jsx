
import EvaluacionFooter from '@/modules/Layout/Components/Footer/EvaluacionFooter'
import Image from 'next/image'
import React from 'react'


function ValidacionLayout({ children }) {
    return (
        <>
            <div className="flex items-center w-full h-full min-h-[640px]">
                <div className="lg:w-3/5 w-full  h-full flex flex-col justify-between   ">
                    <div className="h-full flex items-center">
                        <div className=" mx-auto p-3 flex-col flex  justify-center  lg:w-[460px] lg:overflow-auto">
                            <Image src="/icon-minedu.svg" width={150} height={150} alt="Icono Ministerio de Educación" />
                            <h2 className="object-fill mt-6 text-lg font-semibold">
                                Validación de Identidad
                            </h2>
                            <p className="text-gray-400 text-sm font-extralight">
                                Ingrese correctamente su información personal
                            </p>
                            <div className="mt-7">
                                {children}
                            </div>
                        </div>
                    </div>

                    <EvaluacionFooter />
                </div>

                <div className="lg:w-2/5 lg:flex h-full hidden  overflow-hidden">
                    <img src="/main-eae.png" className="object-fill w-full   h-full" alt="Foto eae" />
                </div>
            </div>
        </>
    )
}

export default ValidacionLayout