'use client'
import React from 'react'
import { Button, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import TemplateModal from '@/shared/Components/Templates/TemplateModal';
import GraficoInstitucionalTab from '../Tabs/GraficoRegionalTab';
import NivelDesempenioCard from '@/modules/Resultados/Shared/Cards/NivelDesempenioCard';

function VerGraficoNacionalModal({ row }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (
        <>
            <Button onClick={onOpen} size="sm" title='Ver Gráficos' className='mt-3 w-full' variant="shadow" color="primary" >
                Ver ResultadoNacional
            </Button>

            <TemplateModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className={'max-w-xl '}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col  gap-1">
                                <h1 className=" text-blue-400  font-bold ">RESULTADO NACIONAL </h1>
                            </ModalHeader>
                            <ModalBody >
                                <NivelDesempenioCard 
                                prueba={"PRUEBA DE COMPRENSIÓN LECTORA (PRIMER CICLO)"}
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
            </TemplateModal>
        </>
    )
}

export default VerGraficoNacionalModal