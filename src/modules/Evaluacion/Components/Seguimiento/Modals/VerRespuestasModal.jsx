'use client'
import React from 'react'
import { Button, Divider, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";

import TemplateModal from '@/shared/Components/Templates/TemplateModal';
import { IconLayout } from '@/shared/Components/Icons';
import { useUtils } from '@/shared/Hooks/useUtils';
import ButtonCloseModal from '@/shared/Components/Buttons/ButtonCloseModal';
import RespuestasTable from '../Tables/RespuestasTable';



function VerRespuestasModal({ row }) {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('SEGEVA', 'CON')) return null

    return (
        <>
            <Button isIconOnly size="sm" title='Respuestas' className='border-none' variant="bordered" color="primary" onPress={onOpen}>
                <IconLayout />
            </Button>

            <TemplateModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className={'max-w-5xl '}
                title={"Configuración de Niveles de Desempeño de la prueba"}
            >
                <ModalBody>
                    <RespuestasTable id={row.id} />
                </ModalBody>
                <ModalFooter>
                    <ButtonCloseModal onClose={onClose} />
                </ModalFooter>
            </TemplateModal>
        </>
    )
}

export default VerRespuestasModal