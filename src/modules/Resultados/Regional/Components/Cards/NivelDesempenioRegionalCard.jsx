'use client'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";



import NivelDesempenioPie from "@/modules/Resultados/Shared/Charts/NivelDesempenioPie";
import NivelDesempenioItemCard from "@/modules/Resultados/Shared/Cards/NivelDesempenioItemCard";
import VerGraficoNacionalModal from "../Modals/VerGraficoNacionalModal";

export default function NivelDesempenioRegionalCard({ prueba }) {
    return (
        <>
            <Card className="max-w-[600px] p-5">
                <CardHeader className="flex gap-3">

                    <div className="flex flex-col">
                        <p className="text-md font-bold">
                            {prueba}
                        </p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <NivelDesempenioPie />
                </CardBody>
                <Divider />
                <CardFooter className="flex flex-col">
                    <div className="flex w-full justify-between">
                        <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded  dark:text-purple-400 border border-purple-400">2 Niveles</span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded   border border-blue-400">Cobertura: 36.17% de estudiantes</span>
                    </div>
                    <Divider className="my-4" />
                    <NivelDesempenioItemCard
                        nivel="En Proceso"
                        porcentaje="73.53%"
                        resumen="Este nivel implica que los estudiantes solo han desarrollado parcialmente las habilidades que se esperan en su ciclo de estudios. Ello quiere decir que, a partir de la lectura de textos sencillos, logran extraer información literal y elaborar inferencias sobre la base de una comprensión local de dichos textos."
                    />
                    <Divider />
                    <NivelDesempenioItemCard
                        nivel="En Proceso"
                        porcentaje="73.53%"
                        resumen="Este nivel implica que los estudiantes solo han desarrollado parcialmente las habilidades que se esperan en su ciclo de estudios. Ello quiere decir que, a partir de la lectura de textos sencillos, logran extraer información literal y elaborar inferencias sobre la base de una comprensión local de dichos textos."
                    />
                    <VerGraficoNacionalModal />
                </CardFooter>
            </Card>
        </>
    );
}