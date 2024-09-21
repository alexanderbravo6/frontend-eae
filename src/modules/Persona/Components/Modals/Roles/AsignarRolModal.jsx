import { IconKey } from "@/shared/Components/Icons";
import { Button, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import RegistrarRolPersonaModal from "./RegistrarRolPersonaModal";
import RolPersonaTable from "../../Tables/RolPersonaTable";
import TemplateBaseModal from "@/shared/Components/Templates/TemplateBaseModal";

const AsignarRolModal = ({ row }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <button onClick={onOpen} className="font-medium text-orange-500  hover:underline">
                <IconKey />
            </button>
            <TemplateBaseModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="max-w-7xl "
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex  flex-col gap-1"> ROLES ASIGNADOS A {row.nombreCompleto}  </ModalHeader>
                            <ModalBody>
                                <div className='max-w-md'>
                                    <RegistrarRolPersonaModal row={row} />
                                </div>
                                <RolPersonaTable row={row} />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Cerrar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </TemplateBaseModal>
        </>
    )
}

export default AsignarRolModal