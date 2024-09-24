
import EliminarPruebaButton from "../Components/Buttons/EliminarPruebaButton";
import PreguntaLink from "../Components/Buttons/PreguntaLink";
import ActualizarPruebaModal from "../Components/Modals/ActualizarPruebaModal";


export const pruebaConstants = [

    {
        header: 'Nombre',
        accessorKey: 'nombre',
        size: 300
    },
    {
        header: 'Ciclo',
        accessorKey: 'ciclo',
        size: 30
    },
    {
        header: 'Fecha de Evaluación',
        accessorKey: 'fechaPrueba',
        size: 30
    },
    {
        header: 'Hora de Inicio',
        accessorKey: 'horaInicio',
        size: 30
    },
    {
        header: 'Hora de Fin',
        accessorKey: 'horaFin',
        size: 30
    },
    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>

                    <PreguntaLink id={row.original.id} />
                    <ActualizarPruebaModal row={row.original} />
                    <EliminarPruebaButton id={row.original.id} />
                </div>
            </>
        ),
    },
]