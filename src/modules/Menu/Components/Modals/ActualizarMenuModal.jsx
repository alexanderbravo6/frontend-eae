
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
      <button onClick={onOpen} className="font-medium text-blue-500  hover:underline">
        <IconEdit />
      </button>
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
