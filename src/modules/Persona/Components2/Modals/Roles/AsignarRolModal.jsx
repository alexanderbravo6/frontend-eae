import { IconKey } from "@/shared/Components/Icons";
import { Button, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import RegistrarRolPersonaModal from "./RegistrarRolPersonaModal";
import RolPersonaTable from "../../Tables/RolPersonaTable";
import TemplateModal from "@/shared/Components/Templates/TemplateModal";
import ButtonCloseModal from "@/shared/Components/Buttons/ButtonCloseModal";
import { useUtils } from "@/shared/Hooks/useUtils";

const AsignarRolModal = ({ row }) => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESPER', 'AGR')) return null
    return (
        <>
            <button onClick={onOpen} className="font-medium text-orange-500  hover:underline">
                <IconKey />
            </button>
            <TemplateModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="max-w-7xl "
                title={`Roles asignados a ${row.nombreCompleto}`}
            >
                <>
                    <ModalBody>
                        <div className='max-w-md'>
                            <RegistrarRolPersonaModal row={row} />
                        </div>
                        <RolPersonaTable row={row} />
                    </ModalBody>
                    <ModalFooter>
                        <ButtonCloseModal onClose={onClose} />
                    </ModalFooter>
                </>
            </TemplateModal>
        </>
    )
}

export default AsignarRolModal