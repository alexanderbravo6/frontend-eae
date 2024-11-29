'use client'
import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import TemplateModal from '@/shared/Components/Templates/TemplateModal';
import { IconUpload } from '@/shared/Components/Icons';
import MatriculaMasivaForm from '../Forms/CargaMasivaMatriculaForm';


function CargaMasivaMatriculaModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (
        <>
            <Button onPress={onOpen} className='mb-4' size='md' color="primary">
                <IconUpload />
                Carga Masiva
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
                                <h1 className=" text-blue-400 ">CARGA MASIVA DE MATRICULAS</h1>
                            </ModalHeader>
                            <MatriculaMasivaForm onClose={onClose} />
                        </>

                    )}
                </ModalContent>
            </TemplateModal>
        </>
    )
}

export default CargaMasivaMatriculaModal