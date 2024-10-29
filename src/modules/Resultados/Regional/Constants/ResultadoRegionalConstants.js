import VerGraficosRegionModal from "../Components/Modals/VerGraficosRegionModal";

export const regionResultadoColumns = [

    {
        header: 'REGION',
        accessorKey: 'nombre',
        size: 200
    },

    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <VerGraficosRegionModal row={row.original} />
                </div>
            </>
        ),
    },
]