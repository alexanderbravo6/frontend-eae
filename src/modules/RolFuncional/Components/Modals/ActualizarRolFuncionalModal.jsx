
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import { IconEdit } from "@/shared/Components/Icons";
import TemplateModal from "@/shared/Components/Templates/TemplateModal";
import ActualizarRolFuncionalForm from "../Forms/ActualizarRolFuncionalForm";
import { useUtils } from "@/shared/Hooks/useUtils";

export default function ActualizarMenuModal({ row }) {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESROL', 'MOD')) return null
    return (
        <>
            <Button isIconOnly size="sm" title='Actualizar' className='border-none' variant="ghost" color="success" onPress={onOpen}>
                <IconEdit />
            </Button>
            <TemplateModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="max-w-3xl "
                title={`ACTUALIZAR ROL FUNCIONAL`}
            >
                <ActualizarRolFuncionalForm onClose={onClose} row={row} />
            </TemplateModal>
        </>
    );
}
