
import EliminarIndicacionButton from "../components/Buttons/EliminarIndicacionButton";
import ActualizarIndicacionModal from "../components/Modals/ActualizarIndicacionModal";


export const indicacionColumns = [

    {
        header: 'NOMBRE',
        accessorKey: 'nombre',
        size: 300
    },
    {
        header: 'ESTADO',
        accessorKey: 'estado',
        size: 30
    },
    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <ActualizarIndicacionModal row={row.original} />
                    <EliminarIndicacionButton id={row.original.id} />
                </div>
            </>
        ),
    },
]