'use client'
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, DateInput } from "@nextui-org/react";
import { ButtonSubmit } from "@/shared/Components/Form/Buttons";
import TemplateBaseAlert from "@/shared/Components/Templates/TemplateBaseAlert";
import RegistrarPersonaForm from "../Forms/RegistrarPersonaForm";
import { IconEdit } from "@/shared/Components/Icons";
import ActualizarPersonaForm from "../Forms/ActualizarPersonaForm";
import TemplateBaseModal from "@/shared/Components/Templates/TemplateBaseModal";
export default function ActualizarPersonaModal({ row }) {
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
              <ModalHeader className="flex flex-col gap-1">ACTUALIZAR PERSONA</ModalHeader>
              <ActualizarPersonaForm row={row} onClose={onClose} />
            </>
          )}
        </ModalContent>
      </TemplateBaseModal>
    </>
  );
}
