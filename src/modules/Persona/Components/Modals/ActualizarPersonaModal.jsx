'use client'
import React, { useState } from "react";
import {  Button, useDisclosure } from "@nextui-org/react";
import { IconEdit } from "@/shared/Components/Icons";
import ActualizarPersonaForm from "../Forms/ActualizarPersonaForm";
import TemplateModal from "@/shared/Components/Templates/TemplateModal";
export default function ActualizarPersonaModal({ row }) {
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
        title={`Actualizar Persona`}
      >
        <ActualizarPersonaForm row={row} onClose={onClose} />
      </TemplateModal>
    </>
  );
}
