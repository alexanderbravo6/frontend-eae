import VerGraficosModal from "../Components/Modals/VerGraficosModal";

export const institucionResultadoColumns = [
    {
        header: 'COD. MODULAR',
        accessorKey: 'codigoModular',
        size: 100
    },
    {
        header: 'REGION',
        accessorKey: 'region',
        size: 200
    },
    {
        header: 'PROVINCIA',
        accessorKey: 'provincia',
        size: 200
    },
    {
        header: 'DISTRITO',
        accessorKey: 'distrito',
        size: 200
    },


    {
        header: 'TIPO',
        accessorKey: 'tipoInstitucion',
        size: 200
    },
    {
        header: 'NOMBRE',
        accessorKey: 'nombre',
        size: 300
    },

    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <VerGraficosModal row={row.original} />
                </div>
            </>
        ),
    },
]