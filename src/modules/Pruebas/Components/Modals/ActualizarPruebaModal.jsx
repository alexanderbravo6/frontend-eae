'use client'
import React from 'react'
import { ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
import TemplateBaseModal from '@/shared/Components/Templates/TemplateBaseModal';
import { IconEdit } from '@/shared/Components/Icons';
import RegistrarPruebaForm from '../Forms/Prueba/RegistrarPruebaForm';
import ActualizarPruebaForm from '../Forms/Prueba/ActualizarPruebaForm';
import { useUtils } from '@/shared/Hooks/useUtils';

function ActualizarPruebaModal({ row }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESPRU', 'MOD')) return null

    return (
        <>
            <button className='text-emerald-500 w-6 h-6' onClick={onOpen} >
                <IconEdit />
            </button>
            <TemplateBaseModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className={'max-w-5xl '}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col  gap-1">
                                <h1 className=" text-blue-400 ">ACTUALIZAR PRUEBA</h1>
                            </ModalHeader>
                            <ActualizarPruebaForm onClose={onClose} row={row} />
                        </>

                    )}
                </ModalContent>
            </TemplateBaseModal>
        </>
    )
}

export default ActualizarPruebaModal