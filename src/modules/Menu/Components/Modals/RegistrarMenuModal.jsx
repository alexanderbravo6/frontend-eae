
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import TemplateBaseModal from "@/shared/Components/Templates/TemplateBaseModal";
import RegistrarMenuForm from "../Forms/RegistrarMenuForm";


export default function RegistrarMenuModal() {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();


    return (
        <>

            <Button onPress={onOpen} className='mb-4' color="primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Registrar
            </Button>
            <TemplateBaseModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="max-w-7xl "
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">REGISTRAR MENÚ</ModalHeader>
                            <RegistrarMenuForm onClose={onClose} />
                        </>
                    )}
                </ModalContent>
            </TemplateBaseModal >
        </>
    );
}
