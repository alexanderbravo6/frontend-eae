'use client'
import React, { useState } from "react";
import { Button, useDisclosure} from "@nextui-org/react";
import RegistrarPersonaForm from "../Forms/RegistrarPersonaForm";
import TemplateModal from "@/shared/Components/Templates/TemplateModal";
import { useUtils } from "@/shared/Hooks/useUtils";
export default function RegistrarPersonaModal() {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESPER', 'AGR')) return null
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
                className="max-w-5xl "
                title={"Registrar Persona"}
            >

                <RegistrarPersonaForm onClose={onClose} />

            </TemplateModal>
        </>
    );
}
