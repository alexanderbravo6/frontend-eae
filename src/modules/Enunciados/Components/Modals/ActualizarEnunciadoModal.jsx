'use client'
import React from 'react'
import { ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
import TemplateModal from '@/shared/Components/Templates/TemplateModal';
import { IconEdit } from '@/shared/Components/Icons';
import ActualizarEnunciadoForm from '../Forms/ActualizarEnunciadoForm';
import { useUtils } from '@/shared/Hooks/useUtils';

function ActualizarEnunciadoModal({ row }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col  gap-1">
                                <h1 className=" text-blue-400 ">ACTUALIZAR ENUNCIADO</h1>
                            </ModalHeader>
                            <ActualizarEnunciadoForm onClose={onClose} row={row} />
                        </>

                    )}
                </ModalContent>
            </TemplateModal>
        </>
    )
}

export default ActualizarEnunciadoModal