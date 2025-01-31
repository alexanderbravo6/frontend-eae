'use client'
import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import TemplateModal from '@/shared/Components/Templates/TemplateModal';
import { IconUpload } from '@/shared/Components/Icons';
import MatriculaMasivaForm from '../Forms/CargaMasivaMatriculaForm';
import { useUtils } from '@/shared/Hooks/useUtils';


function CargaMasivaMatriculaModal() {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESMAT', 'AGR')) return null
    return (
        <>
            <Button onPress={onOpen} className='mb-4' size='md' color="primary">
                <IconUpload />
                Carga Masiva
            </Button>
            <TemplateModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className={'max-w-5xl '}
                title={"CARGA MASIVA DE MATRICULAS"}
            >
                <MatriculaMasivaForm onClose={onClose} />
            </TemplateModal>
        </>
    )
}

export default CargaMasivaMatriculaModal