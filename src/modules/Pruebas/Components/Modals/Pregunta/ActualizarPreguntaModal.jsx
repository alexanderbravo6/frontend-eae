'use client'
import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import TemplateModal from '@/shared/Components/Templates/TemplateModal';
import RegistrarEnunciadoForm from '@/modules/Enunciados/Components/Forms/RegistrarEnunciadoForm';
import { IconEdit } from '@/shared/Components/Icons';
import ActualizarPreguntaForm from '../../Forms/Pregunta/ActualizarPreguntaForm';


function ActualizarPreguntaModal({ data }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (
        <>
            <Button onPress={onOpen} size='sm' color="primary">
                <IconEdit />
                Actualizar
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
                                <h1 className=" text-blue-400 ">ACTUALIZAR PREGUNTA </h1>
                            </ModalHeader>
                            <ActualizarPreguntaForm onClose={onClose} row={data} />
                        </>

                    )}
                </ModalContent>
            </TemplateModal>
        </>
    )
}

export default ActualizarPreguntaModal