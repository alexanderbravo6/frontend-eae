
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
            <button onClick={onOpen} className="font-medium text-blue-500  hover:underline">
                <IconEdit />
            </button>
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
