import { Button } from '@nextui-org/react';
import React, { useState } from 'react'

function DistribucionInstitucionalBard() {
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
                        <div className='my-4' style={{ display: 'block' }} id="distribucion_15">
                            <br />
                            <div className="fs-6">
                                <div className="fw-semibold">EDUCACION FISICA</div>
                                <div className="fw-bold flex" style={{ color: 'white', textAlign: 'center' }}>
                                    <div style={{ minWidth: 'fit-content', padding: '0 5px', width: '97%', background: '#FB7539' }}>97%</div>
                                    <div style={{ minWidth: 'fit-content', padding: '0 5px', width: '3%', background: '#04c8c8' }}>3%</div>
                                </div>
                            </div>

                            <br />
                            <div className="fs-6">
                                <div className="fw-semibold">EDUCACIÓN INICIAL</div>
                                <div className="fw-bold flex" style={{ color: 'white', textAlign: 'center' }}>
                                    <div style={{ minWidth: 'fit-content', padding: '0 5px', width: '98%', background: '#FB7539' }}>98%</div>
                                    <div style={{ minWidth: 'fit-content', padding: '0 5px', width: '2%', background: '#04c8c8' }}>2%</div>
                                </div>
                            </div>

                            <br />
                            <div className="fs-6">
                                <div className="fw-semibold">EDUCACIÓN PRIMARIA INTERCULTURAL BILINGÜE</div>
                                <div className="fw-bold flex" style={{ color: 'white', textAlign: 'center' }}>
                                    <div style={{ minWidth: 'fit-content', padding: '0 5px', width: '100%', background: '#FB7539' }}>100%</div>
                                    <div style={{ minWidth: 'fit-content', padding: '0 5px', width: '0%', background: '#04c8c8' }}>
                                        0%
                                    </div>
                                </div>
                            </div>

                            <br />
                            <div className="fw-bold flex" style={{ textAlign: 'center' }}>
                                <div style={{ width: '25%', borderLeft: '1px solid black', borderRight: '1px solid black' }}>25%</div>
                                <div style={{ width: '25%', borderRight: '1px solid black' }}>50%</div>
                                <div style={{ width: '25%', borderRight: '1px solid black' }}>75%</div>
                                <div style={{ width: '25%', borderRight: '1px solid black' }}>100%</div>
                            </div>

                            <br />
                            <div className="flex items-center justify-center gap-3 ">
                                <span className='flex items-center gap-2' style={{ color: '#FB7539' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checks">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M7 12l5 5l10 -10" />
                                        <path d="M2 12l5 5m5 -5l5 -5" />
                                    </svg> En Proceso
                                </span>
                                <span className='flex items-center gap-2' style={{ color: '#04c8c8', marginLeft: '10px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checks">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M7 12l5 5l10 -10" />
                                        <path d="M2 12l5 5m5 -5l5 -5" />
                                    </svg> Satisfactorio
                                </span>
                            </div>
                        </div>


                    </>
                )
            }

        </>
    )
}

export default DistribucionInstitucionalBard