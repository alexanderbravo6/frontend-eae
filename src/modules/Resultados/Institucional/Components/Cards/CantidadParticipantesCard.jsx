'use client'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";



import NivelDesempenioPie from "@/modules/Resultados/Shared/Charts/NivelDesempenioPie";
import NivelDesempenioItemCard from "@/modules/Resultados/Shared/Cards/NivelDesempenioItemCard";
import VerGraficoNacionalModal from "../Modals/VerGraficoNacionalModal";
import DistribucionInstitucionalBard from "../Charts/DistribucionInstitucionalBard";

export default function CantidadParticipantesCard({ prueba }) {
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
                        <div class="fs-6 flex justify-between my-4">
                            <div class="font-normal">EDUCACION FISICA</div>
                            <div class="font-medium ">38</div>
                        </div>
                        <Divider className="decoration-wavy" />
                        <div class="fs-6 flex justify-between my-4">
                            <div class="font-normal">EDUCACION INICIAL</div>
                            <div class="font-medium ">38</div>
                        </div>
                        <Divider />
                        <div class="fs-6 flex justify-between my-4">
                            <div class="font-normal">EDUCACION MATEMÁTICA</div>
                            <div class="font-medium ">38</div>
                        </div>
                        <Divider />
                        <div class="fs-6 flex justify-between my-4">
                            <div class="font-bold">TOTAL</div>
                            <div class="font-bold ">38</div>
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