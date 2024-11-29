'use client'
import React from 'react'
import { ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
import TemplateModal from '@/shared/Components/Templates/TemplateModal';
import { IconEdit } from '@/shared/Components/Icons';
import { useUtils } from '@/shared/Hooks/useUtils';
import ActualizarIndicacionForm from '../Forms/ActualizarIndicacionForm';

function ActualizarIndicacionModal({ row }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { ValidarPermisos } = useUtils()
  if (!ValidarPermisos('GESIND', 'MOD')) return null

  return (
    <>
      <button className='text-emerald-500' onClick={onOpen} >
        <IconEdit />
      </button>
      <TemplateModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className={'max-w-5xl '}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col  gap-1">
                <h1 className=" text-blue-400 ">ACTUALIZAR INDICACIÓN</h1>
              </ModalHeader>
              <ActualizarIndicacionForm onClose={onClose} row={row} />
            </>

          )}
        </ModalContent>
      </TemplateModal>
    </>
  )
}

export default ActualizarIndicacionModal