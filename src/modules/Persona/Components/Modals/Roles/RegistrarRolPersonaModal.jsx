
import React, { useState } from "react";
import { ModalContent, ModalHeader, Button, useDisclosure } from "@nextui-org/react";
import RegistrarRolPersonaForm from "../../Forms/RegistrarRolPersonaForm";
import TemplateBaseModal from "@/shared/Components/Templates/TemplateBaseModal";
export default function RegistrarRolPersonaModal({ row }) {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();


    return (
        <>
            <Button onPress={onOpen} color="primary" variant="ghost">
                Agregar Rol
            </Button>
            <TemplateBaseModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="max-w-7xl "
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">ASIGNAR ROLES</ModalHeader>
                            <RegistrarRolPersonaForm onClose={onClose} row={row} />

                        </>
                    )}
                </ModalContent>
            </TemplateBaseModal>
        </>
    );
}
