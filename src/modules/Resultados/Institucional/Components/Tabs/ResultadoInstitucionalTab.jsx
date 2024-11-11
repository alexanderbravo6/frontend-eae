import React from 'react'
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

import NivelDesempenioRegionalBard from '../Charts/NivelDesempenioRegionalBard';
import NivelDesempenioInstitucionalCard from '../Cards/NivelDesempenioInstitucionalCard';
import CantidadParticipantesCard from '../Cards/CantidadParticipantesCard';
import CantidadProgramaTable from '../Tables/CantidadProgramaTable';
import NivelDesempenioInstitucionalTab from './NivelDesempenioInstitucionalTab';

function ResultadoInstitucionalTab({ row, idCiclo, descripcionCiclo }) {
    return (
        <>
            <Tabs color={"primary"} aria-label="Options">
                <Tab key="nivel_desempenio" title="NIVEL DE DESEMPEÑO">
                    <div class="px-4 py-5 sm:px-0">
                        <h3 class="text-base/7 font-semibold text-gray-900">NIVEL DE DESEMPEÑO</h3>
                        <p class="mt-1 max-w-2xl text-sm/6 text-gray-500">A continuación, podrá visualizar el nivel de desempeño de los estudiantes a nivel institucional en las pruebas del  {descripcionCiclo}.</p>
                    </div>
                    <section className='my-7'>
                        <NivelDesempenioInstitucionalTab row={row} idCiclo={idCiclo} />

                    </section>
                </Tab>
                <Tab key="cantidad_participantes" title="CANTIDAD DE PARTICIPANTES">
                    <Card>
                        <CardBody className='p-7' >
                            <div class="px-4 py-5 sm:px-0">
                                <h3 class="text-base/7 font-semibold text-gray-900">CANTIDAD DE ESTUDIANTES EVALUADOS</h3>
                                <p class="mt-1 max-w-2xl text-sm/6 text-gray-500">A continuación, podrá visualizar el total de estudiantes que han rendido la prueba en el  {descripcionCiclo}.</p>
                            </div>
                            <section className='my-7'>
                                <Tabs placement={"start"} aria-label="Options">
                                    <Tab key="pie_1" title="COMPRENSIÓN LECTORA">
                                        <section className=' flex flex-wrap gap-5'>
                                            <CantidadParticipantesCard prueba={"PRUEBA DE COMPRENSIÓN LECTORA (PRIMER CICLO)"} />

                                        </section>
                                    </Tab>
                                    <Tab key="pie_2" title="HABILIDADES MATEMÁTICAS">
                                        <section className=' flex flex-wrap gap-5'>
                                            <CantidadParticipantesCard prueba={"PRUEBA DE HABILIDADES MATEMÁTICAS (PRIMER CICLO)"} />

                                        </section>
                                    </Tab>
                                    <Tab key="pie_3" title="CONOCIMIENTOS PEDAGÓGICOS">
                                        <section className=' flex flex-wrap gap-5'>
                                            <CantidadParticipantesCard prueba={"PRUEBA DE EDUCACIÓN FÍSICA (PRIMER CICLO)"} />
                                        </section>
                                    </Tab>
                                </Tabs>

                            </section>

                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="participantes_programa" title="PARTICIPANTES POR PROGRAMA">
                    <Card>
                        <CardBody className='mx-5'>
                            <div class="px-4 py-5 sm:px-0">
                                <h3 class="text-base/7 font-semibold text-gray-900">PARTICIPANTES POR PROGRAMA DE ESTUDIOS</h3>
                                <p class="mt-1 max-w-2xl text-sm/6 text-gray-500">A continuación, podrá visualizar el total de estudiantes que han rendido la prueba en el  {descripcionCiclo}.</p>
                            </div>
                            <CantidadProgramaTable />
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </>
    )
}

export default ResultadoInstitucionalTab