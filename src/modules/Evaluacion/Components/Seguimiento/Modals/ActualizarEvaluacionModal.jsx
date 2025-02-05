'use client'
import React from 'react'
import { useDisclosure } from "@nextui-org/react";
import TemplateModal from '@/shared/Components/Templates/TemplateModal';
import { IconEdit } from '@/shared/Components/Icons';
import { useUtils } from '@/shared/Hooks/useUtils';
import ActualizarEvaluacionForm from '../Forms/ActualizarEvaluacionForm';

function ActualizarEvaluacionModal({ row }) {
    const { onClose, isOpen, onOpen, onOpenChange } = useDisclosure();
    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('SEGEVA', 'MOD')) return null

    return (
        <>
            <button className='text-emerald-500 w-6 h-6' onClick={onOpen} >
                <IconEdit />
            </button>
            <TemplateModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className={'max-w-xl '}
                title={"Actualizar Evaluación"}
            >
                <ActualizarEvaluacionForm onClose={onClose} row={row} />
            </TemplateModal>
        </>
    )
}

export default ActualizarEvaluacionModal