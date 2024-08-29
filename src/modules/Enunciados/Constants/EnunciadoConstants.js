import EliminarEnunciadoButton from "../Components/EliminarEnunciadoButton";
import ActualizarEnunciadoModal from "../Components/Modals/ActualizarEnunciadoModal";


export const enunciadoColumns = [

    {
        header: 'Titulo',
        accessorKey: 'titulo',
        size: 300
    },
    {
        header: 'Estado',
        accessorKey: 'estado',
        size: 30
    },

    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <ActualizarEnunciadoModal row={row.original} />
                    <EliminarEnunciadoButton row={row.original} />
                </div>
            </>
        ),
    },
]