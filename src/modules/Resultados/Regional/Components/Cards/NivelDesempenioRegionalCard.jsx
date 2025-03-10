'use client'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";



import NivelDesempenioPie from "@/modules/Resultados/Shared/Charts/NivelDesempenioPie";
import NivelDesempenioItemCard from "@/modules/Resultados/Shared/Cards/NivelDesempenioItemCard";
import VerGraficoNacionalModal from "@/modules/Resultados/Shared/Modals/VerGraficoNacionalModal";


export default function NivelDesempenioRegionalCard({ data }) {
    return (
        <>
            <Card className="max-w-[400px] p-5">
                <CardHeader className="text-center justify-center">
                    <p className="text-md text-center font-bold">
                        {data.nombre}
                    </p>
                </CardHeader>
                <Divider />
                <CardBody >
                    <NivelDesempenioPie data={data?.nivelDesempenio} />
                </CardBody>
                <Divider />
                <CardFooter className="flex  flex-col">
                    <div className="flex w-full justify-between">
                        <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded  dark:text-purple-400 border border-purple-400">
                            {data?.nivelDesempenio?.length} niveles
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded   border border-blue-400">
                            Cobertura: {data?.cobertura}% de estudiantes
                        </span>
                    </div>
                    <Divider className="my-4" />
                    {
                        data?.nivelDesempenio?.map((item, index) => (
                            <>
                                <NivelDesempenioItemCard
                                    key={index}
                                    nivel={item.nivel}
                                    porcentaje={item.porcentaje}
                                    resumen={item.descripcion}
                                />
                                <Divider />
                            </>
                        ))
                    }
                 <VerGraficoNacionalModal idPrueba={data?.idPrueba} />
                </CardFooter>
            </Card>

        </>
    );
}