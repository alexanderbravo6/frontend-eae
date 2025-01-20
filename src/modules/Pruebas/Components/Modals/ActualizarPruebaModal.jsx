'use client'
import React from 'react'
import { ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
import TemplateModal from '@/shared/Components/Templates/TemplateModal';
import { IconEdit } from '@/shared/Components/Icons';
import RegistrarPruebaForm from '../Forms/Prueba/RegistrarPruebaForm';
import ActualizarPruebaForm from '../Forms/Prueba/ActualizarPruebaForm';
import { useUtils } from '@/shared/Hooks/useUtils';

function ActualizarPruebaModal({ row }) {
    const { onClose, isOpen, onOpen, onOpenChange } = useDisclosure();
    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESPRU', 'MOD')) return null

    return (
        <>
            <button className='text-emerald-500 w-6 h-6' onClick={onOpen} >
                <IconEdit />
            </button>
            <TemplateModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className={'max-w-5xl '}
                title={"Actualizar Prueba"}
            >
                <ActualizarPruebaForm onClose={onClose} row={row} />
            </TemplateModal>
        </>
    )
}

export default ActualizarPruebaModal