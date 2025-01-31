'use client'
import React from 'react'
import { Button, Divider, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";

import TemplateModal from '@/shared/Components/Templates/TemplateModal';
import { IconLayout } from '@/shared/Components/Icons';
import { useUtils } from '@/shared/Hooks/useUtils';
import CorteNivelDesempenioTable from './Tables/CorteNivelDesempenioTable';
import DescripcionNivelDesempenioTable from './Tables/DescripcionNivelDesempenioTable';
import ButtonCloseModal from '@/shared/Components/Buttons/ButtonCloseModal';
import RegistrarCortePuntajeModal from './Modals/NivelDesempenio/RegistrarCortePuntajeModal';
import RegistrarDescripcionModal from './Modals/NivelDesempenio/RegistrarDescripcionModal';



function NivelDesempenioIndex({ row }) {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESMAT', 'AGR')) return null
    return (
        <>
            <Button isIconOnly size="sm" title='Nivel de Desempeño' className='border-none' variant="bordered" color="primary" onPress={onOpen}>
                <IconLayout />
            </Button>

            <TemplateModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className={'max-w-5xl '}
                title={"Configuración de Niveles de Desempeño de la prueba"}
            >
                <ModalBody>
                    <section>
                        <h2 className='text-lg text-gray-600 font-semibold mb-4'>
                            Cortes de puntaje para determinar los nivel de desempeño de la prueba
                        </h2>
                        <RegistrarCortePuntajeModal id={row.id} />
                        <CorteNivelDesempenioTable id={row.id} />
                    </section>
                    <Divider />
                    <section className='mt-4'>
                        <h3 className='text-lg text-gray-600 font-semibold mb-4'>
                            Mantenimiento de la descripción de los niveles de desempeño de la prueba
                        </h3>
                        <RegistrarDescripcionModal id={row.id} />
                        <DescripcionNivelDesempenioTable id={row.id} />
                    </section>

                </ModalBody>
                <ModalFooter>
                    <ButtonCloseModal onClose={onClose} />
                </ModalFooter>
            </TemplateModal>
        </>
    )
}

export default NivelDesempenioIndex