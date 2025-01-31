'use client'
import React from 'react'
import { Button, useDisclosure } from "@nextui-org/react";

import TemplateModal from '@/shared/Components/Templates/TemplateModal';
import { useUtils } from '@/shared/Hooks/useUtils';
import RegistrarDescripcionForm from '../../Forms/NivelDesempenio/RegistrarDescripcionForm';
import ActualizarDescripcionForm from '../../Forms/NivelDesempenio/ActualizarDescripcionForm';
import { IconEdit } from '@/shared/Components/Icons';


function ActualizarDescripcionModal({ row }) {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESPRU', 'AGR')) return null
    return (
        <>
            <button className='text-emerald-500 w-6 h-6' onClick={onOpen} >
                <IconEdit />
            </button>
            <TemplateModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className={'max-w-3xl '}
                title={"nueva descripción"}
            >
                <ActualizarDescripcionForm row={row} onClose={onClose} />
            </TemplateModal>
        </>
    )
}

export default ActualizarDescripcionModal