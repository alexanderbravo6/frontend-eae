
import React, { useState } from "react";
import { ModalContent, ModalHeader, Button, useDisclosure } from "@nextui-org/react";
import RegistrarRolPersonaForm from "../../Forms/RegistrarRolPersonaForm";
import TemplateModal from "@/shared/Components/Templates/TemplateModal";
export default function RegistrarRolPersonaModal({ row }) {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();


    return (
        <>
            <Button onPress={onOpen} color="primary" variant="ghost">
                Agregar Rol
            </Button>
            <TemplateModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="max-w-3xl "
                title={'ASIGNAR NUEVO ROL'}
            >
                <>
                    <RegistrarRolPersonaForm onClose={onClose} row={row} />
                </>
            </TemplateModal>
        </>
    );
}
