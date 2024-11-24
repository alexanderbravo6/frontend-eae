'use client'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";



import NivelDesempenioPie from "@/modules/Resultados/Shared/Charts/NivelDesempenioPie";
import NivelDesempenioItemCard from "@/modules/Resultados/Shared/Cards/NivelDesempenioItemCard";
import VerGraficoNacionalModal from "../../../Shared/Modals/VerGraficoNacionalModal";
import DistribucionInstitucionalBard from "../Charts/DistribucionInstitucionalBard";

export default function ParticipantePruebaCard({ data }) {
    return (
        <>
            <Card className="max-w-[600px] p-5">
                <CardHeader className="flex gap-3">

                    <div className="flex flex-col">
                        <p className="text-md font-bold">
                            {data.nombre}
                        </p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <section>
                        {
                            data.programas.map((item, index) => (
                                <>
                                    <div className="fs-6 flex  gap-3 justify-between my-4">
                                        <div className="font-normal">{item.nombre}</div>
                                        <div className="font-medium ">{item.cantidad}</div>
                                    </div>
                                    {
                                        //si es el ultimo item no se pone la linea y agrega total de la suma

                                        index === data.programas.length - 1 ? null
                                            : <Divider className="decoration-wavy" />
                                    }
                                </>
                            ))
                        }



                    </section>
                </CardBody>
                <Divider />
                <CardFooter className="flex flex-col">
                    <DistribucionInstitucionalBard  data={data?.nivelDesempenio} />
                    <VerGraficoNacionalModal idPrueba={data?.idPrueba} />
                </CardFooter>
            </Card>
        </>
    );
}