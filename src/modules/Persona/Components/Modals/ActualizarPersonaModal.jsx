'use client'
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, DateInput } from "@nextui-org/react";
import { ButtonSubmit } from "@/shared/Components/Buttons/ButtonSubmit";
import TemplateAlert from "@/shared/Components/Templates/TemplateAlert";
import RegistrarPersonaForm from "../Forms/RegistrarPersonaForm";
import { IconEdit } from "@/shared/Components/Icons";
import ActualizarPersonaForm from "../Forms/ActualizarPersonaForm";
import TemplateModal from "@/shared/Components/Templates/TemplateModal";
import { useUtils } from "@/shared/Hooks/useUtils";
export default function ActualizarPersonaModal({ row }) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { ValidarPermisos } = useUtils()
  if (!ValidarPermisos('GESPER', 'MOD')) return null
  return (
    <>
      <Button isIconOnly size="sm" title='Eliminar' className='border-none' variant="ghost" color="success" onPress={onOpen}>
        <IconEdit />
      </Button>
      <TemplateModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="max-w-7xl "
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">ACTUALIZAR PERSONA</ModalHeader>
              <ActualizarPersonaForm row={row} onClose={onClose} />
            </>
          )}
        </ModalContent>
      </TemplateModal>
    </>
  );
}
