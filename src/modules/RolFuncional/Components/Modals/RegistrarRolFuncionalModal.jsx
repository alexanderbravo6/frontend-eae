
import React, { useState } from "react";
import { ModalContent, ModalHeader, Button, useDisclosure } from "@nextui-org/react";

import TemplateModal from "@/shared/Components/Templates/TemplateModal";
import RegistrarRolFuncionalForm from "../Forms/RegistrarRolFuncionalForm";


export default function RegistrarRolFuncionalModal() {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();


    return (
        <>

            <Button onPress={onOpen} className='mb-4' color="primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Registrar
            </Button>
            <TemplateModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="max-w-3xl "
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">REGISTRAR ROL FUNCIONAL</ModalHeader>
                            <RegistrarRolFuncionalForm onClose={onClose} />
                        </>
                    )}
                </ModalContent>
            </TemplateModal >
        </>
    );
}
