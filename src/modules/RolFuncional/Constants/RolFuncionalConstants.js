import EliminarRolFuncionalButton from "../Components/Buttons/EliminarRolFuncionalButton";
import ActualizarRolFuncionalModal from "../Components/Modals/ActualizarRolFuncionalModal";
import AsignarPermisosModal from "../Components/Modals/PermisosModal";

export const rolFuncionalColumns = [
    {
        header: 'ROL FUNCIONAL',
        accessorKey: 'nombre',
        size: 100
    },
    {
        header: 'ESTADO',
        accessorKey: 'descripcionEstado',
        size: 30
    },

    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <AsignarPermisosModal row={row.original} />
                    <ActualizarRolFuncionalModal row={row.original} />
                    <EliminarRolFuncionalButton row={row.original} />
                </div>
            </>
        ),
    },
]