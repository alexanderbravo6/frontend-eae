'use client'
import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import TemplateModal from '@/shared/Components/Templates/TemplateModal';
import { IconUpload } from '@/shared/Components/Icons';
import { useUtils } from '@/shared/Hooks/useUtils';
import CargaMasivaResultadoForm from '../Forms/Prueba/CargaMasivaResultadoForm';



function CargaMasivaResultadoModal({ row }) {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESMAT', 'AGR')) return null
    return (
        <>
            <Button isIconOnly size="sm" title='Cargar resultados con puntajes de habilidad' className='border-none' variant="bordered" color="primary" onPress={onOpen}>
                <IconUpload />
            </Button>

            <TemplateModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className={'max-w-5xl '}
                title={"cargar resultados con puntajes de habilidad"}
            >
                <CargaMasivaResultadoForm onClose={onClose} row={row} />
            </TemplateModal>
        </>
    )
}

export default CargaMasivaResultadoModal