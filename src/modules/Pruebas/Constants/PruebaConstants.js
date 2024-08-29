
import EliminarPruebaButton from "../Components/Buttons/EliminarPruebaButton";
import PreguntaLink from "../Components/Buttons/PreguntaLink";
import ActualizarPruebaModal from "../Components/Modals/ActualizarPruebaModal";
import IntroduccionModal from "../Components/Modals/Introduccion/IntroduccionModal";


export const pruebaConstants = [

    {
        header: 'Nombre de la Prueba',
        accessorKey: 'nombrePrueba',
        size: 300
    },
    {
        header: 'Ciclo',
        accessorKey: 'ciclo',
        size: 30
    },
    {
        header: 'Fecha de Evaluación',
        accessorKey: 'fecha',
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

                    <IntroduccionModal row={row.original} />
                    <PreguntaLink row={row.original} />
                    <ActualizarPruebaModal row={row.original} />
                    <EliminarPruebaButton row={row.original} />
                </div>
            </>
        ),
    },
]