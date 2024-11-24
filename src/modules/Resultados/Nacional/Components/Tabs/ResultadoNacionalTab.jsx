import React from 'react'
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import ResultadoNacionalTable from '../Tables/ResultadoNacionalTable';
import NivelDesempenioTab from './NivelDesempenioTab';
import PromedioRegional from '../PromedioRegional';

function ResultadoNacionalTab({ idCiclo, descripcionCiclo }) {
    return (
        <>
            <Tabs color={"primary"} aria-label="Options">
                <Tab key="nivel_desempenio" title="NIVEL DE DESEMPEÑO">
                    <Card>
                        <CardBody className='p-7' >
                            <div className="px-4 py-5 sm:px-0">
                                <h3 className="text-base/7 font-semibold text-gray-900">NIVEL DE DESEMPEÑO</h3>
                                <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">A continuación, podrá visualizar el nivel de desempeño de los estudiantes a nivel nacional en las pruebas del  {descripcionCiclo}.</p>
                            </div>
                            <section className='my-7'>

                                <NivelDesempenioTab idCiclo={idCiclo} />

                            </section>
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="cantidad_participantes" title="PARTICIPANTES POR PROGRAMA">
                    <Card>
                        <CardBody className='p-7' >
                            <div className="px-4 py-5 sm:px-0">
                                <h3 className="text-base/7 font-semibold text-gray-900">PARTICIPANTES POR PROGRAMA</h3>
                                <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">A continuación, podrá visualizar el total de estudiantes que han rendido la prueba en el  {descripcionCiclo}.</p>
                            </div>
                            <ResultadoNacionalTable idCiclo={idCiclo} />
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="promedio_regional" title="PROMEDIO REGIONAL">
                    <Card>
                        <CardBody className='px-10'>
                            <div className="px-4 py-5 sm:px-0">
                                <h3 className="text-base/7 font-semibold text-gray-900">PROMEDIOS REGIONALES</h3>
                                <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">A continuación, podrá visualizar el total de estudiantes que han rendido la prueba en el  {descripcionCiclo}.</p>
                            </div>
                            <section className='w-full'>
                                <PromedioRegional idCiclo={idCiclo} />
                            </section>
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </>
    )
}

export default ResultadoNacionalTab