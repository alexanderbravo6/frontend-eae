'use client'
import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import TemplateModal from '@/shared/Components/Templates/TemplateModal';
import RegistrarEnunciadoForm from '@/modules/Enunciados/Components/Forms/RegistrarEnunciadoForm';
import { IconEdit } from '@/shared/Components/Icons';
import ActualizarPreguntaForm from '../../Forms/Pregunta/ActualizarPreguntaForm';
import { useUtils } from '@/shared/Hooks/useUtils';


function ActualizarPreguntaModal({ data }) {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESPRU', 'AGR')) return null
    return (
        <>
            <Button onPress={onOpen} size='sm' color="primary">
                <IconEdit />
                Actualizar
            </Button>
            <TemplateModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className={'max-w-5xl '}
                title={"Actualizar Pregunta"}
            >
                <ActualizarPreguntaForm onClose={onClose} row={data} />
            </TemplateModal>
        </>
    )
}

export default ActualizarPreguntaModal