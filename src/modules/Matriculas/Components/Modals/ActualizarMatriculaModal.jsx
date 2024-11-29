'use client'
import React from 'react'
import { ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
import TemplateModal from '@/shared/Components/Templates/TemplateModal';
import { IconEdit } from '@/shared/Components/Icons';
import ActualizarMatriculaForm from '../Forms/ActualizarMatriculaForm';

function ActualizarMatriculaModal({ row }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (
        <>
            <button className='text-emerald-500 w-6 h-6' onClick={onOpen} >
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
                                <h1 className=" text-blue-400 ">ACTUALIZAR MATRICULA</h1>
                            </ModalHeader>
                            <ActualizarMatriculaForm row={row} onClose={onClose} />
                        </>
                    )}
                </ModalContent>
            </TemplateModal>
        </>
    )
}

export default ActualizarMatriculaModal