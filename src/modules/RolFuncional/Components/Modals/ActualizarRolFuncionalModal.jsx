
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import { IconEdit } from "@/shared/Components/Icons";
import TemplateBaseModal from "@/shared/Components/Templates/TemplateBaseModal";
import ActualizarRolFuncionalForm from "../Forms/ActualizarRolFuncionalForm";

export default function ActualizarMenuModal({ row }) {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    return (
        <>
            <button onClick={onOpen} className="font-medium text-blue-500  hover:underline">
                <IconEdit />
            </button>
            <TemplateBaseModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="max-w-3xl "
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">ACTUALIZAR ROL FUNCIONAL</ModalHeader>
                            <ActualizarRolFuncionalForm onClose={onClose} row={row} />
                        </>
                    )}
                </ModalContent>
            </TemplateBaseModal>
        </>
    );
}
