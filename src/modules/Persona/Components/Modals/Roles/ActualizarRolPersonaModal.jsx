
import React, { useState } from "react";
import { ModalContent, ModalHeader, Button, useDisclosure } from "@nextui-org/react";
import TemplateModal from "@/shared/Components/Templates/TemplateModal";
import { IconEdit } from "@/shared/Components/Icons";
import ActualizarPersonaRolForm from "../../Forms/ActualizarPersonaRolForm";
export default function ActualizarRolPersonaModal({ data }) {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();


    return (
        <>
            <Button isIconOnly size="sm" title='Eliminar' className='border-none' variant="ghost" color="success" onPress={onOpen}>
                <IconEdit />
            </Button>
            <TemplateModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="max-w-7xl "
                title={"actualizar rol asignado"}
            >


                <ActualizarPersonaRolForm onClose={onClose} data={data} />


            </TemplateModal>
        </>
    );
}
