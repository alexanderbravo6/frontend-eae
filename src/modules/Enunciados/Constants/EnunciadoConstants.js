
import EliminarEnunciadoButton from "../Components/Buttons/EliminarEnunciadoButton";
import ActualizarEnunciadoModal from "../Components/Modals/ActualizarEnunciadoModal";


export const enunciadoColumns = [
    {
        header: 'TITULO',
        accessorKey: 'titulo',
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
                    <ActualizarEnunciadoModal row={row.original} />
                    <EliminarEnunciadoButton id={row.original.id} />
                </div>
            </>
        ),
    },
]