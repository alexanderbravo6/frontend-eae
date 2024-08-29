'use client'
import React from 'react'
import { ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
import TemplateBaseModal from '@/shared/Components/Templates/TemplateBaseModal';
import { IconEdit } from '@/shared/Components/Icons';

function ActualizarOpcionModal({ row }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (
        <>
            <button className='text-emerald-500  w-5 h-5 ' onClick={onOpen} >
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

                        </>

                    )}
                </ModalContent>
            </TemplateBaseModal>
        </>
    )
}

export default ActualizarOpcionModal