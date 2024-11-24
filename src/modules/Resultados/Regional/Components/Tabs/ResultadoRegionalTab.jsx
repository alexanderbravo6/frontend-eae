import React from 'react'
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

import CantidadProgramarRegionTable from '../Tables/CantidadProgramarRegionTable';
import NivelDesempenioRegionalTab from './NivelDesempenioRegionalTab';
import ParticipantePruebaRegionalTab from './ParticipantePruebaRegionalTab';
import PromedioInstitucional from '../PromedioInstitucional';

function ResultadoRegionalTab({ descripcionCiclo, idCiclo, row }) {
    return (
        <>
            <Tabs color={"primary"} aria-label="Options">
                <Tab key="nivel_desempenio" title="NIVEL DE DESEMPEÑO">
                    <div className="px-4 py-5 sm:px-0">
                        <h3 className="text-base/7 font-semibold text-gray-900">NIVEL DE DESEMPEÑO</h3>
                        <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">A continuación, podrá visualizar el nivel de desempeño de los estudiantes a nivel institucional en las pruebas del  {descripcionCiclo}.</p>
                    </div>
                    <section className='my-7'>
                        <NivelDesempenioRegionalTab idCiclo={idCiclo} row={row} />
                    </section>
                </Tab>
                <Tab key="cantidad_participantes" title="PARTICIPANTES POR PRUEBA">
                    <Card>
                        <CardBody className='p-7' >
                            <div className="px-4 py-5 sm:px-0">
                                <h3 className="text-base/7 font-semibold text-gray-900">CANTIDAD DE PARTICIPANTES POR PRUEBA</h3>
                                <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">A continuación, podrá visualizar el total de estudiantes que han rendido la prueba en el ciclo {descripcionCiclo}.</p>
                            </div>
                            <section className='my-7'>
                                <ParticipantePruebaRegionalTab
                                    idCiclo={idCiclo}
                                    row={row}
                                />

                            </section>

                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="participantes_programa" title="PARTICIPANTES POR PROGRAMA">
                    <Card>
                        <CardBody className='mx-5'>
                            <div className="px-4 py-5 sm:px-0">
                                <h3 className="text-base/7 font-semibold text-gray-900">PARTICIPANTES POR PROGRAMA DE ESTUDIOS</h3>
                                <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">A continuación, podrá visualizar el total de estudiantes que han rendido la prueba en el ciclo {descripcionCiclo}.</p>
                            </div>
                            <CantidadProgramarRegionTable
                                idCiclo={idCiclo}
                                row={row}
                            />
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="promedio_regional" title="PROMEDIO INSTITUCIONAL">
                    <Card>
                        <CardBody className='mx-5'>
                            <div className="px-4 py-5 sm:px-0">
                                <h3 className="text-base/7 font-semibold text-gray-900">PROMEDIOS INSTITUCIONALES</h3>
                                <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">A continuación, podrá visualizar el total de estudiantes que han rendido la prueba en el ciclo {descripcionCiclo}.</p>
                            </div>
                            <PromedioInstitucional idCiclo={idCiclo} row={row} />
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </>
    )
}

export default ResultadoRegionalTab