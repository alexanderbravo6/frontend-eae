import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import ResultadoInstitucionalTab from "./ResultadoInstitucionalTab";

export default function GraficoInstitucionalTab({ row }) {
    return (
        <div className="flex w-full flex-col">
            <Tabs color={"primary"} aria-label="Options">
                <Tab key="primer_ciclo" title="PRIMER CICLO">
                    <section className="mt-4 mb-10" >
                        <h2 className="text-xl  font-bold " >RESULTADOS DEL PRIMER CICLO</h2>
                        <p class="mt-1  text-sm/6 text-gray-500">A continuación, podrá visualizar los resultados a nivel institucional en diferentes gráficos que han rendido pruebas dirigidas a estudiantes del primer ciclo.</p>
                    </section>
                    <section className="w-full">
                        <ResultadoInstitucionalTab
                            row={row}
                            idCiclo={1}
                            descripcionCiclo={"primer ciclo"}
                        />
                    </section>
                </Tab>
                <Tab key="sexto_ciclo" title="SEXTO CICLO">
                    <section className="mt-4 mb-10" >
                        <h2 className="text-xl  font-bold " >RESULTADOS DEL SEXTO CICLO</h2>
                        <p class="mt-1  text-sm/6 text-gray-500">A continuación, podrá visualizar los resultados a nivel institucional en diferentes gráficos que han rendido pruebas dirigidas a estudiantes de sexto ciclo.</p>
                    </section>
                    <ResultadoInstitucionalTab
                        row={row}
                        idCiclo={2}
                        descripcionCiclo={"sexto ciclo"}
                    />
                </Tab>
                <Tab key="decimo_ciclo" title="DÉCIMO CICLO">
                    <section className="mt-4 mb-10" >
                        <h2 className="text-xl  font-bold " >RESULTADOS DEL DÉCIMO CICLO</h2>
                        <p class="mt-1  text-sm/6 text-gray-500">A continuación, podrá visualizar los resultados a nivel institucional en diferentes gráficos que han rendido pruebas dirigidas a estudiantes del décimo ciclo.</p>
                    </section>
                    <ResultadoInstitucionalTab
                        row={row}
                        idCiclo={3}
                        descripcionCiclo={"décimo ciclo"}
                    />
                </Tab>
            </Tabs>
        </div>
    );
}