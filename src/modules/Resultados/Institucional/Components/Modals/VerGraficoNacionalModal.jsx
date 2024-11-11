'use client'
import React from 'react'
import { Button, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import TemplateBaseModal from '@/shared/Components/Templates/TemplateBaseModal';
import GraficoInstitucionalTab from '../Tabs/GraficoInstitucionalTab';
import NivelDesempenioCard from '@/modules/Resultados/Shared/Cards/NivelDesempenioCard';
import { ButtonSkeleton } from '@/shared/Components/Skeletons';
import { useResultadoNacionalService } from '@/modules/Resultados/Nacional/Hooks/useResultadoNacionalService';

function VerGraficoNacionalModal({ idPrueba }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { FetchNivelDesempenioPorPrueba } = useResultadoNacionalService();
    const resultadoNacional = FetchNivelDesempenioPorPrueba(idPrueba);
    if (resultadoNacional.isLoading)
        return <section className='mt-3 flex items-center justify-center w-full'>
            <ButtonSkeleton />
        </section>
    if (resultadoNacional.error) return <div>Error al cargar los datos</div>


    return (
        <>
            <Button onClick={onOpen} size="sm" title='Ver Gráficos' className='mt-3 w-full' variant="shadow" color="primary" >
                Ver ResultadoNacional
            </Button>

            <TemplateBaseModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className={'max-w-xl '}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col  gap-1">
                                <h1 className=" text-blue-400  font-bold ">
                                    RESULTADO NACIONAL </h1>
                            </ModalHeader>
                            <ModalBody className='flex items-center justify-center' >
                                <NivelDesempenioCard
                                    data={
                                        resultadoNacional.data?.data.pruebas[0]
                                    }
                                />
                            </ModalBody>
                            <ModalFooter>

                                <Button color="danger" variant="flat" onPress={onClose}   >
                                    Cerrar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </TemplateBaseModal>
        </>
    )
}

export default VerGraficoNacionalModal