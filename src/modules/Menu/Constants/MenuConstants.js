import EliminarMenuButton from "../Components/Buttons/EliminarMenuButton";
import ActualizarMenuModal from "../Components/Modals/ActualizarMenuModal";

export const menuColumns = [

    {
        header: 'NOMBRE',
        accessorKey: 'nombre'
    },
    {
        header: 'RUTA',
        accessorKey: 'rutaRelativa'
    },
    {
        header: 'ORDEN',
        accessorKey: 'orden'
    },

    {
        header: 'MENU PADRE',
        accessorKey: 'menuPadre'
    },
    {
        header: 'ESTADO',
        accessorKey: 'descripcionEstado'
    },
    {
        header: 'ACCIONES',
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <ActualizarMenuModal row={row.original} />
                    <EliminarMenuButton row={row.original} />
                </div>
            </>
        ),
    },
]