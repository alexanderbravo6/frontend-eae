'use client'
import React from 'react'
import { Button, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
import TemplateBaseModal from '@/shared/Components/Templates/TemplateBaseModal';
import { IconEdit } from '@/shared/Components/Icons';
import ActualizarOpcionForm from '../../Forms/Opcion/ActualizarOpcionForm';

function ActualizarOpcionModal({ row }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (
        <>

            <Button isIconOnly className='border-none' variant="ghost" size='sm' color="success">

                <IconEdit />

            </Button>
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
                            <ActualizarOpcionForm row={row} onClose={onClose} />
                        </>

                    )}
                </ModalContent>
            </TemplateBaseModal>
        </>
    )
}

export default ActualizarOpcionModal