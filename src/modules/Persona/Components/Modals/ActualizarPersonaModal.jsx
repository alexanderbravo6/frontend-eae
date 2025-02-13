'use client'
import React, { useState } from "react";
import { Button, useDisclosure } from "@nextui-org/react";
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
      <Button isIconOnly size="sm" title='Actualizar' className='border-none' variant="ghost" color="success" onPress={onOpen}>
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
