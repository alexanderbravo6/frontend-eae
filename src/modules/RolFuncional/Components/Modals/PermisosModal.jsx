'use client'
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import { IconEdit, IconKey } from "@/shared/Components/Icons";
import TemplateModal from "@/shared/Components/Templates/TemplateModal";

import PermisosAccordion from "../Forms/PermisosAccordion";
import { useUtils } from "@/shared/Hooks/useUtils";

export default function AsignarPermisosModal({ row }) {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESROL', 'AGR')) return null
    return (
        <>
            <Button isIconOnly onClick={onOpen} size="sm" title='Permisos' className='border-none' variant="ghost" color="warning">
                <IconKey />
            </Button>
            <TemplateModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="max-w-5xl "
                title={`PERMISOS DE ${row.nombre}`}
            >
                <PermisosAccordion onClose={onClose} row={row} />
            </TemplateModal>
        </>
    );
}
