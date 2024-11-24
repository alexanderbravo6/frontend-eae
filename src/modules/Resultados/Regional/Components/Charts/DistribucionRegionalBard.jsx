import { Button } from '@nextui-org/react';
import React, { useState } from 'react'

function DistribucionRegionalBard({ data }) {
    const [isOpen, SetIsOpen] = useState(false);
    return (
        <>
            <Button onPress={() => {
                SetIsOpen(!isOpen)
            }} size="sm" title='Ver Gráficos' className='mt-3 w-full' variant="shadow" color="secondary" >
                Ver distribución por niveles de desempeño
            </Button>
            {
                isOpen &&
                (
                    <>
                        <div className="w-full my-4" id="distribucion_15">
                            <br />
                            {
                                data.map((item, index) => (
                                    <>
                                        <div className="fs-6">
                                            <div className="fw-semibold">{item.programa}</div>
                                            <div className="fw-bold flex" style={{ color: 'white', textAlign: 'center' }}>
                                                {
                                                    item.nivel.map((nivel, index) => (
                                                        <>
                                                            {
                                                                nivel.porcentaje > 0 &&
                                                                <div style={{ minWidth: 'fit-content', padding: '0 5px', width: `${nivel.porcentaje}%` }}
                                                                    className={nivel.nivel === "En Inicio" ? "bg-[#f1416c]" : nivel.nivel === "En Proceso" ? "bg-[#FB7539]" : "bg-[#04c8c8]"
                                                                    }>
                                                                    {nivel.porcentaje}%
                                                                </div>
                                                            }
                                                        </>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <br />
                                    </>
                                ))
                            }





                            <br />
                            <div className="fw-bold flex" style={{ textAlign: 'center' }}>
                                <div style={{ width: '25%', borderLeft: '1px solid black', borderRight: '1px solid black' }}>25%</div>
                                <div style={{ width: '25%', borderRight: '1px solid black' }}>50%</div>
                                <div style={{ width: '25%', borderRight: '1px solid black' }}>75%</div>
                                <div style={{ width: '25%', borderRight: '1px solid black' }}>100%</div>
                            </div>

                            <br />
                            <div className="flex items-center justify-center gap-3 ">
                                {
                                    data[0]?.nivel.map((nivel, index) => (
                                        <>
                                            <span className={`flex items-center gap-2 ${nivel.nivel === "En Inicio" ? "text-[#f1416c]" : nivel.nivel === "En Proceso" ? "text-[#FB7539]" : "text-[#04c8c8]"}`}  >
                                                < svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checks">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M7 12l5 5l10 -10" />
                                                    <path d="M2 12l5 5m5 -5l5 -5" />
                                                </svg> {nivel.nivel}
                                            </span >
                                        </>
                                    ))
                                }

                            </div>
                        </div>


                    </>
                )
            }

        </>
    )
}

export default DistribucionRegionalBard