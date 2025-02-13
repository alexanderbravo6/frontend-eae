'use client'
import React from 'react'
import { Button, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
import TemplateModal from '@/shared/Components/Templates/TemplateModal';
import { IconEdit } from '@/shared/Components/Icons';
import ActualizarOpcionForm from '../../Forms/Opcion/ActualizarOpcionForm';
import { useUtils } from '@/shared/Hooks/useUtils';

function ActualizarOpcionModal({ row }) {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESPRU', 'AGR')) return null
    return (
        <>

            <Button isIconOnly className='border-none' onPress={onOpen} variant="ghost" size='sm' color="success">

                <IconEdit />

            </Button>
            <TemplateModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className={'max-w-5xl '}
                title={"Actualizar Opción"}
            >

                <ActualizarOpcionForm row={row} onClose={onClose} />

            </TemplateModal>
        </>
    )
}

export default ActualizarOpcionModal