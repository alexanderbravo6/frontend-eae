'use client'
import React from 'react'
import { Button, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import TemplateBaseModal from '@/shared/Components/Templates/TemplateBaseModal';
import GraficoInstitucionalTab from '../Tabs/GraficoInstitucionalTab';

function VerGraficosModal({ row }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (
        <>
            <Button isIconOnly onClick={onOpen} size="sm" title='Ver Gráficos' className='border-none' variant="ghost" color="primary" >
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-code">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                    <path d="M6 4v4" />
                    <path d="M6 12v8" />
                    <path d="M13.557 14.745a2 2 0 1 0 -1.557 3.255" />
                    <path d="M12 4v10" />
                    <path d="M12 18v2" />
                    <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                    <path d="M18 4v1" />
                    <path d="M18 9v4" />
                    <path d="M20 21l2 -2l-2 -2" />
                    <path d="M17 17l-2 2l2 2" />
                </svg>
            </Button>

            <TemplateBaseModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className={'max-w-9xl '}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col  gap-1">
                                <h1 className=" text-blue-400  font-bold ">GRÁFICOS DE RESULTADOS DE LA INSTITUCIÓN {row.nombre} DE {row.region} </h1>
                            </ModalHeader>
                            <ModalBody >
                                <GraficoInstitucionalTab row={row} />
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

export default VerGraficosModal