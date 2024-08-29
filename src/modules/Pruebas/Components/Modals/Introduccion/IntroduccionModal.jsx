
'use client'
import React from 'react'
import { ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
import TemplateBaseModal from '@/shared/Components/Templates/TemplateBaseModal';
import { IconIntroduction } from '@/shared/Components/Icons';
import IntroduccionTable from '../../Tables/IntroduccionTable';
import RegistrarIntroduccionModal from './RegistrarIntroduccionModal';

function IntroduccionModal({ row }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (
        <>
            <button className='text-blue-700' onClick={onOpen} >
                <IconIntroduction />
            </button>
            <TemplateBaseModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className={'max-w-5xl '}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col  gap-1">
                                <h1 className=" text-blue-400 ">INTRODUCCIÓN DE LA PRUEBA</h1>
                            </ModalHeader>
                            <ModalBody>
                                <div className='max-w-12'>
                                    <RegistrarIntroduccionModal />
                                </div>
                                <IntroduccionTable />
                            </ModalBody>
                        </>

                    )}
                </ModalContent>
            </TemplateBaseModal>
        </>
    )
}

export default IntroduccionModal