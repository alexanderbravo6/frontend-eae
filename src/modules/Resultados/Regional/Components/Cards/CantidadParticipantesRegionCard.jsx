'use client'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";



import NivelDesempenioPie from "@/modules/Resultados/Shared/Charts/NivelDesempenioPie";
import NivelDesempenioItemCard from "@/modules/Resultados/Shared/Cards/NivelDesempenioItemCard";
import VerGraficoNacionalModal from "../Modals/VerGraficoNacionalModal";
import DistribucionInstitucionalBard from "../Charts/DistribucionRegionalBard";

export default function CantidadParticipantesRegionCard({ prueba }) {
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
                    <section>
                        <div className="fs-6 flex justify-between my-4">
                            <div className="font-normal">EDUCACION FISICA</div>
                            <div className="font-medium ">38</div>
                        </div>
                        <Divider className="decoration-wavy" />
                        <div className="fs-6 flex justify-between my-4">
                            <div className="font-normal">EDUCACION INICIAL</div>
                            <div className="font-medium ">38</div>
                        </div>
                        <Divider />
                        <div className="fs-6 flex justify-between my-4">
                            <div className="font-normal">EDUCACION MATEMÁTICA</div>
                            <div className="font-medium ">38</div>
                        </div>
                        <Divider />
                        <div className="fs-6 flex justify-between my-4">
                            <div className="font-bold">TOTAL</div>
                            <div className="font-bold ">38</div>
                        </div>
                    </section>
                </CardBody>
                <Divider />
                <CardFooter className="flex flex-col">
                    <DistribucionInstitucionalBard />
                    <VerGraficoNacionalModal />
                </CardFooter>
            </Card>
        </>
    );
}