'use client'
import React from 'react'
import { ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
import TemplateModal from '@/shared/Components/Templates/TemplateModal';
import { IconEdit } from '@/shared/Components/Icons';
import ActualizarEnunciadoForm from '../Forms/ActualizarEnunciadoForm';
import { useUtils } from '@/shared/Hooks/useUtils';

function ActualizarEnunciadoModal({ row }) {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESENU', 'MOD')) return null

    return (
        <>
            <button className='text-emerald-500' onClick={onOpen} >
                <IconEdit />
            </button>
            <TemplateModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className={'max-w-5xl '}
                title={'Actualizar Enunciado'}
            >
                <ActualizarEnunciadoForm onClose={onClose} row={row} />
            </TemplateModal>
        </>
    )
}

export default ActualizarEnunciadoModal