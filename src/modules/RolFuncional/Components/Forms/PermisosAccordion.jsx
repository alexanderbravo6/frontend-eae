'use client'
import { Accordion, AccordionItem, Button, CheckboxGroup, ModalBody, ModalFooter } from "@nextui-org/react";
import { useRolFuncionalService } from "../../Hooks/useRolFuncionalService";
import LoadingErrorCard from "@/shared/Components/LoadingErrorCard";
import { TableSkeleton } from "@/shared/Components/Skeletons";
import AsignarPermisoForm from "./AsignarPermisoForm";

export default function PermisosAccordion({ onClose, row }) {
    const { FetchPermisos } = useRolFuncionalService();
    const permisos = FetchPermisos(row.id);
    if (permisos.error) return <LoadingErrorCard />
    if (permisos.isLoading) return <TableSkeleton />

    return (
        <>
            <ModalBody>
                <Accordion variant="shadow">
                    {permisos.data?.data?.menus.map((menu, i) => (
                        <AccordionItem key={i} aria-label={menu.nombre} subtitle={menu.codigo} title={menu.nombre}>
                            <AsignarPermisoForm menu={menu} rolFuncional={row.id} />
                        </AccordionItem>
                    ))}
                </Accordion>
            </ModalBody>
            <ModalFooter>
                <Button color="danger" variant="light" onPress={
                    () => {
                        onClose()
                    }}>
                    Cerrar
                </Button>


            </ModalFooter>
        </>
    );
}