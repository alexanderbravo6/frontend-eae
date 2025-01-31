'use client'
import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import TemplateModal from '@/shared/Components/Templates/TemplateModal';
import RegistrarPreguntaGrupalForm from '../../Forms/Pregunta/RegistrarPreguntaGrupalForm';


function RegistrarPreguntaGrupalModal() {
    const { isOpen, onOpen, onOpenChange,onClose } = useDisclosure();


    return (
        <>
            <Button onPress={onOpen} className='mb-4' size='md' color="primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Registrar Preguntas Grupales
            </Button>
            <TemplateModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className={'max-w-5xl '}
                title={`REGISTRAR PREGUNTA GRUPAL`}
            >
                <RegistrarPreguntaGrupalForm onClose={onClose} />
            </TemplateModal>
        </>
    )
}

export default RegistrarPreguntaGrupalModal