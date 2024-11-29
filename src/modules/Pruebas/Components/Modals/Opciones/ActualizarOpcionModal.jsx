'use client'
import React from 'react'
import { Button, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
import TemplateModal from '@/shared/Components/Templates/TemplateModal';
import { IconEdit } from '@/shared/Components/Icons';
import ActualizarOpcionForm from '../../Forms/Opcion/ActualizarOpcionForm';

function ActualizarOpcionModal({ row }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (
        <>

            <Button isIconOnly className='border-none'  onPress={onOpen} variant="ghost" size='sm' color="success">

                <IconEdit />

            </Button>
            <TemplateModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className={'max-w-5xl '}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col  gap-1">
                                <h1 className=" text-blue-400 ">ACTUALIZAR OPCIÓN</h1>
                            </ModalHeader>
                            <ActualizarOpcionForm row={row} onClose={onClose} />
                        </>

                    )}
                </ModalContent>
            </TemplateModal>
        </>
    )
}

export default ActualizarOpcionModal