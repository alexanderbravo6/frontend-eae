import React from 'react'
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import NivelDesempenioCard from '@/modules/Resultados/Shared/Cards/NivelDesempenioCard';
import NivelDesempenioRegionalBard from '../Charts/NivelDesempenioRegionalBard';
import ResultadoNacionalTable from '../Tables/ResultadoNacionalTable';
import NivelDesempenioTab from './NivelDesempenioTab';

function ResultadoNacionalTab({ idCiclo, descripcionCiclo }) {
    return (
        <>
            <Tabs color={"primary"} aria-label="Options">
                <Tab key="nivel_desempenio" title="NIVEL DE DESEMPEÑO">
                    <Card>
                        <CardBody className='p-7' >
                            <div class="px-4 py-5 sm:px-0">
                                <h3 class="text-base/7 font-semibold text-gray-900">NIVEL DE DESEMPEÑO</h3>
                                <p class="mt-1 max-w-2xl text-sm/6 text-gray-500">A continuación, podrá visualizar el nivel de desempeño de los estudiantes a nivel nacional en las pruebas del  {descripcionCiclo}.</p>
                            </div>
                            <section className='my-7'>

                                <NivelDesempenioTab idCiclo={idCiclo} />

                            </section>
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="cantidad_participantes" title="CANTIDAD DE PARTICIPANTES">
                    <Card>
                        <CardBody className='p-7' >
                            <div class="px-4 py-5 sm:px-0">
                                <h3 class="text-base/7 font-semibold text-gray-900">CANTIDAD DE ESTUDIANTES EVALUADOS</h3>
                                <p class="mt-1 max-w-2xl text-sm/6 text-gray-500">A continuación, podrá visualizar el total de estudiantes que han rendido la prueba en el  {descripcionCiclo}.</p>
                            </div>
                            <ResultadoNacionalTable idCiclo={idCiclo} />
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="promedio_regional" title="PROMEDIO REGIONAL">
                    <Card>
                        <CardBody className='mx-5'>
                            <div class="px-4 py-5 sm:px-0">
                                <h3 class="text-base/7 font-semibold text-gray-900">PROMEDIOS REGIONALES</h3>
                                <p class="mt-1 max-w-2xl text-sm/6 text-gray-500">A continuación, podrá visualizar el total de estudiantes que han rendido la prueba en el  {descripcionCiclo}.</p>
                            </div>
                            <NivelDesempenioRegionalBard idCiclo={idCiclo} />
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </>
    )
}

export default ResultadoNacionalTab