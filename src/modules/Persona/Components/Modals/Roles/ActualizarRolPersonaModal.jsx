
import React, { useState } from "react";
import { ModalContent, ModalHeader, Button, useDisclosure } from "@nextui-org/react";
import TemplateBaseModal from "@/shared/Components/Templates/TemplateBaseModal";
import { IconEdit } from "@/shared/Components/Icons";
import ActualizarPersonaRolForm from "../../Forms/ActualizarPersonaRolForm";
export default function ActualizarRolPersonaModal({ data }) {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();


    return (
        <>
            <Button isIconOnly size="sm" title='Eliminar' className='border-none' variant="ghost" color="success" onPress={onOpen}>
                <IconEdit />
            </Button>
            <TemplateBaseModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="max-w-7xl "
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Actualizar Rol Asignado</ModalHeader>
                            <ActualizarPersonaRolForm onClose={onClose} data={data} />

                        </>
                    )}
                </ModalContent>
            </TemplateBaseModal>
        </>
    );
}
