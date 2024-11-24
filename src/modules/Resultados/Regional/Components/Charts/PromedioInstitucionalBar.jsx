import React from 'react'

import { PromedioBarSkeleton } from '@/shared/Components/Skeletons';
import TemplateBaseAlert from '@/shared/Components/Templates/TemplateBaseAlert';
import { useResultadoRegionalService } from '../../Hooks/useResultadoRegionalService';

function PromedioInstitucionalBar({ idPrueba, row }) {
    const { FetchPromedioRegional } = useResultadoRegionalService();
    const promedio = FetchPromedioRegional(idPrueba, row.id);
    if (promedio.isLoading) return <PromedioBarSkeleton />
    if (promedio.error) return <TemplateBaseAlert type="Attention" message="No se encontraron resultados dentro de esta prueba." />



    const niveles = promedio?.data?.data[0].nivelDesempenio


    return (
        <>
            {
                promedio?.data ? (
                    <>
                        <div className="regiones grid grid-cols-[1fr,3fr,1fr] py-4">
                            <div id="nombre_region" className="text-black"></div>
                            <div id="bar_nivel" className=" flex justify-center gap-4 items-center" >
                                {
                                    niveles?.map((nivel) => (
                                        <>
                                            <div id="nivel_proceso" className={`min-w-fit ${nivel.nivel == "En Inicio" ? "bg-[#f1416c]" : nivel.nivel === "En Proceso" ? "bg-[#FB7539]" : "bg-[#04c8c8]"} h-4  pl-[1%] text-white w-5 `} ></div>{nivel.nivel}
                                        </>
                                    )
                                    )
                                }
                            </div>
                            <div id="promedio" className="font-semibold pr-[3%] text-center">Medida Promedio</div>
                        </div>
                        {
                            promedio?.data?.data?.map((item) => (
                                <>
                                    <div className="regiones grid grid-cols-[1fr,3fr,1fr] py-4">
                                        <div id="nombre_region" className="text-black">{item.institucion}</div>
                                        <div id="bar_nivel" className="w-full flex">

                                            {
                                                item.nivelDesempenio.map((nivel, index) => {
                                                    const porcentaje = nivel.porcentaje;

                                                    return (

                                                        nivel.porcentaje > 0 &&
                                                        <div
                                                            key={index}
                                                            id="nivel_proceso"
                                                            style={{ width: `${porcentaje}%` }}
                                                            className={`
                                                            min-w-fit
                                                            ${nivel.nivel === "En Inicio" ? "bg-[#f1416c]" : nivel.nivel === "En Proceso" ? "bg-[#FB7539]" : "bg-[#04c8c8]"}
                                                            h-6 px-3 py-1 text-white 
            `}
                                                        >
                                                            {nivel.porcentaje}%
                                                        </div>

                                                    );
                                                })
                                            }

                                        </div>
                                        <div id="promedio" className="font-semibold  pr-[3%] text-center">{item.promedio}</div>
                                    </div >
                                </>
                            ))
                        }

                    </>
                ) : null
            }

        </>
    )
}

export default PromedioInstitucionalBar