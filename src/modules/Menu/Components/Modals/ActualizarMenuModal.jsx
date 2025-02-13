
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import { IconEdit } from "@/shared/Components/Icons";
import TemplateModal from "@/shared/Components/Templates/TemplateModal";
import ActualizarMenuForm from "../Forms/ActualizarMenuForm";
import { useUtils } from "@/shared/Hooks/useUtils";

export default function ActualizarMenuModal({ row }) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { ValidarPermisos } = useUtils()
  if (!ValidarPermisos('GESMEN', 'MOD')) return null
  return (
    <>
      <Button isIconOnly size="sm" title='Actualizar' className='border-none' variant="ghost" color="success" onPress={onOpen}>
        <IconEdit />
      </Button>
      <TemplateModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="max-w-7xl "
        title={`ACTUALIZAR MENÚ ${row.nombre}`}
      >
        <ActualizarMenuForm onClose={onClose} row={row} />
      </TemplateModal>
    </>
  );
}
