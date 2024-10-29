
export const baseColumns = [
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

                </div>
            </>
        ),
    },
]