import React from 'react'
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

import NivelDesempenioRegionalBard from '../Charts/NivelDesempenioRegionalBard';
import NivelDesempenioInstitucionalCard from '../Cards/NivelDesempenioInstitucionalCard';
import CantidadParticipantesCard from '../Cards/ParticipantePruebaCard';
import CantidadProgramaTable from '../Tables/CantidadProgramaTable';
import NivelDesempenioInstitucionalTab from './NivelDesempenioInstitucionalTab';
import ParticipantePruebaTab from './ParticipantePruebaTab';

function ResultadoInstitucionalTab({ row, idCiclo, descripcionCiclo }) {
    return (
        <>
            <Tabs color={"primary"} aria-label="Options">
                <Tab key="nivel_desempenio" title="NIVEL DE DESEMPEÑO">
                    <div className="px-4 py-5 sm:px-0">
                        <h3 className="text-base/7 font-semibold text-gray-900">NIVEL DE DESEMPEÑO</h3>
                        <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">A continuación, podrá visualizar el nivel de desempeño de los estudiantes a nivel institucional en las pruebas del  {descripcionCiclo}.</p>
                    </div>
                    <section className='my-7'>
                        <NivelDesempenioInstitucionalTab row={row} idCiclo={idCiclo} />

                    </section>
                </Tab>
                <Tab key="cantidad_participantes" title="PARTICIPANTES POR PRUEBA">
                    <Card>
                        <CardBody className='p-7' >
                            <div className="px-4 py-5 sm:px-0">
                                <h3 className="text-base/7 font-semibold text-gray-900">CANTIDAD DE PARTICIPANTES POR PRUEBA</h3>
                                <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">A continuación, podrá visualizar el total de estudiantes que han rendido la prueba en el  {descripcionCiclo}.</p>
                            </div>
                            <section className='my-7'>
                                <ParticipantePruebaTab idCiclo={idCiclo} row={row} />
                            </section>

                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="participantes_programa" title="PARTICIPANTES POR PROGRAMA">
                    <Card>
                        <CardBody className='mx-5'>
                            <div className="px-4 py-5 sm:px-0">
                                <h3 className="text-base/7 font-semibold text-gray-900">PARTICIPANTES POR PROGRAMA DE ESTUDIOS</h3>
                                <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">A continuación, podrá visualizar el total de estudiantes que han rendido la prueba en el  {descripcionCiclo}.</p>
                            </div>
                            <CantidadProgramaTable idCiclo={idCiclo} row={row} />
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </>
    )
}

export default ResultadoInstitucionalTab