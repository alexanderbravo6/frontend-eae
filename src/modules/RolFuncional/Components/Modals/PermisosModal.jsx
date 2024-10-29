'use client'
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import { IconEdit, IconKey } from "@/shared/Components/Icons";
import TemplateBaseModal from "@/shared/Components/Templates/TemplateBaseModal";

import PermisosAccordion from "../Forms/PermisosAccordion";

export default function AsignarPermisosModal({ row }) {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    return (
        <>
            <Button isIconOnly onClick={onOpen} size="sm" title='Permisos' className='border-none' variant="ghost" color="warning">
                <IconKey />
            </Button>
            <TemplateBaseModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="max-w-3xl "
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                PERMISOS DE  {row.nombre}
                            </ModalHeader>
                            <PermisosAccordion onClose={onClose} row={row} />
                        </>
                    )}
                </ModalContent>
            </TemplateBaseModal>
        </>
    );
}
