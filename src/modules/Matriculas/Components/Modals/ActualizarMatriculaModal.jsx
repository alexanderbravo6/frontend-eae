'use client'
import React from 'react'
import { ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
import TemplateModal from '@/shared/Components/Templates/TemplateModal';
import { IconEdit } from '@/shared/Components/Icons';

import { useUtils } from '@/shared/Hooks/useUtils';
import ActualizarMatriculaForm from '../Forms/ActualizarMatriculaForm';

function ActualizarMatriculaModal({ row }) {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESMAT', 'MOD')) return null

    return (
        <>
            <button className='text-emerald-500 w-6 h-6' onClick={onOpen} >
                <IconEdit />
            </button>
            <TemplateModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className={'max-w-5xl '}
                title={'Actualizar Matricula'}
            >
                <ActualizarMatriculaForm row={row} onClose={onClose} />
            </TemplateModal>
        </>
    )
}

export default ActualizarMatriculaModal