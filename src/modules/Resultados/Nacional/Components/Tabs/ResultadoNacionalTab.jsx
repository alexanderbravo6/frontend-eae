import React from 'react'
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import NivelDesempenioCard from '@/modules/Resultados/Shared/Cards/NivelDesempenioCard';
import NivelDesempenioRegionalBard from '../Charts/NivelDesempenioRegionalBard';
import ResultadoNacionalTable from '../Tables/ResultadoNacionalTable';

function ResultadoNacionalTab({ ciclo }) {
    return (
        <>
            <Tabs color={"primary"} aria-label="Options">
                <Tab key="nivel_desempenio" title="NIVEL DE DESEMPEÑO">
                    <section className='my-7'>
                        <Tabs placement={"start"} aria-label="Options">
                            <Tab key="pie_1" title="COMPRENSIÓN LECTORA">
                                <section className=' flex flex-wrap gap-5'>
                                    <NivelDesempenioCard prueba={"PRUEBA DE COMPRENSIÓN LECTORA (PRIMER CICLO)"} />

                                </section>
                            </Tab>
                            <Tab key="pie_2" title="HABILIDADES MATEMÁTICAS">
                                <section className=' flex flex-wrap gap-5'>
                                    <NivelDesempenioCard prueba={"PRUEBA DE HABILIDADES MATEMÁTICAS (PRIMER CICLO)"} />

                                </section>
                            </Tab>
                            <Tab key="pie_3" title="CONOCIMIENTOS PEDAGÓGICOS">
                                <section className=' flex flex-wrap gap-5'>
                                    <NivelDesempenioCard prueba={"PRUEBA DE COMPRENSIÓN LECTORA (PRIMER CICLO)"} />
                                    <NivelDesempenioCard prueba={"PRUEBA DE COMPRENSIÓN LECTORA (PRIMER CICLO)"} />
                                    <NivelDesempenioCard prueba={"PRUEBA DE COMPRENSIÓN LECTORA (PRIMER CICLO)"} />
                                </section>
                            </Tab>
                        </Tabs>

                    </section>
                </Tab>
                <Tab key="cantidad_participantes" title="CANTIDAD DE PARTICIPANTES">
                    <Card>
                        <CardBody className='p-7' >
                            <div class="px-4 py-5 sm:px-0">
                                <h3 class="text-base/7 font-semibold text-gray-900">CANTIDAD DE ESTUDIANTES EVALUADOS</h3>
                                <p class="mt-1 max-w-2xl text-sm/6 text-gray-500">A continuación, podrá visualizar el total de estudiantes que han rendido la prueba en el ciclo {ciclo}.</p>
                            </div>
                            <ResultadoNacionalTable />
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="promedio_regional" title="PROMEDIO REGIONAL">
                    <Card>
                        <CardBody className='mx-5'>
                            <div class="px-4 py-5 sm:px-0">
                                <h3 class="text-base/7 font-semibold text-gray-900">PROMEDIOS REGIONALES</h3>
                                <p class="mt-1 max-w-2xl text-sm/6 text-gray-500">A continuación, podrá visualizar el total de estudiantes que han rendido la prueba en el ciclo {ciclo}.</p>
                            </div>
                            <NivelDesempenioRegionalBard />
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </>
    )
}

export default ResultadoNacionalTab