'use client'
import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import TemplateBaseModal from '@/shared/Components/Templates/TemplateBaseModal';
import RegistrarEnunciadoForm from '@/modules/Enunciados/Components/Forms/RegistrarEnunciadoForm';
import RegistrarPreguntaForm from '../../Forms/Pregunta/RegistrarPreguntaForm';


function RegistrarPreguntaModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (
        <>
            <Button onPress={onOpen} className='mb-4' size='md' color="primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Registrar Preguntas Individuales
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
                                <h1 className=" text-blue-400 ">NUEVA PREGUNTA</h1>
                            </ModalHeader>
                            <RegistrarPreguntaForm onClose={onClose} />
                        </>

                    )}
                </ModalContent>
            </TemplateBaseModal>
        </>
    )
}

export default RegistrarPreguntaModal