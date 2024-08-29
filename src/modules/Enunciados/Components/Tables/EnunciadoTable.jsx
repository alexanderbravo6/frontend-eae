'use client'
import LoadingErrorCard from '@/shared/Components/LoadingErrorCard'
import { TableSkeleton } from '@/shared/Components/Skeletons'
import TemplateBaseTable from '@/shared/Components/Templates/TemplateBaseTable'
import React from 'react'
import { enunciadoColumns } from '../../Constants/EnunciadoConstants'

const enunciados = {
    error: false,
    isLoading: false,
    data: [
        {
            id: 1,
            titulo: "La interacción humana en educación es un lujo en la era de las pantallas",
            estado: "ACTIVO",
            contenido: `
            <p className="ql-align-justify"><strong className="ql-size-large">La participación de los estudiantes</strong></p><p className="ql-align-justify"><br></p><p className="ql-align-justify">Siempre me ha parecido fundamental la participación de los alumnos en la dinámica del aula y en la gestión de la escuela. Pocas veces he visto auténticos procesos de participación en las cuestiones nucleares de la organización, de la convivencia y del aprendizaje. Se ha entendido que todo lo que pensamos, hacemos y decimos los docentes tiene como único e indiscutible fin el bien del alumnado. Sin consulta, sin duda, sin admitir la posibilidad de error. Ellos y ellas tienen que ser disciplinados, obedientes y aplicados.</p><p className="ql-align-justify"><br></p><p className="ql-align-justify">Dice Holderlin que los educadores forman a sus educandos como los océanos forman a los continentes: retirándose. Si las aguas no retroceden, no hay continente. La tentación es anegarlos. La tentación es pensar por ellos, decidir por ellos y responsabilizarse por ellos y por ellas. Con lo cual acaban por no pensar, por no decidir, por no responsabilizarse. Lo que nos dicen los alumnos a los docentes y los hijos a los padres es lo siguiente: ayúdame a hacerlo solo. Y ahí está la dificultad. ¿Cuál es el ritmo y cuál es el grado progresivo de la autonomía? ¿Cuáles son los riesgos mínimos razonables?</p><p className="ql-align-justify"><br></p><p className="ql-align-justify">Pocas veces hemos preguntado a los alumnos y a las alumnas lo que piensan, lo que sienten y lo que quieren. Ellos y ellas tienen que escuchar, preguntar, estudiar, callar, comportarse y examinarse. Bien sé que no es fácil liberar la voz de los alumnos y de las alumnas en condiciones de libertad. ¿Pueden decir realmente lo que piensan? Alguna vez he citado aquella recomendación de un empresario: A mí me gusta que mis trabajadores me digan la verdad, aunque eso les cueste el puesto. Y he contado la anécdota de aquel otro que invitó a sus trabajadores a una cena de fraternidad. En los postres se puso de pie y pronunció un discurso. En un momento del mismo contó un chiste. Se rieron todos los trabajadores estrepitosamente menos uno que se quedó impasible. El empresario, que sabía muy bien que era no era sordo, le interpeló:</p><p className="ql-align-justify"><br></p><p className="ql-align-justify">– ¿A usted no le ha hecho ninguna gracia el chiste que acabo de contar?</p><p className="ql-align-justify"><br></p><p className="ql-align-justify">El trabajador respondió:</p><p className="ql-align-justify"><br></p><p className="ql-align-justify">– Mire usted, a mí me ha hecho la misma gracia que a todos los demás, pero yo me jubilo mañana.</p><p className="ql-align-justify"><br></p><p className="ql-align-justify">Creo que, si contásemos más con los alumnos y las alumnas a la hora de planificar, desarrollar y evaluar el currículum de la escuela, nos iría mucho mejor no solo a ellos sino también a los profesores y las profesoras. Como lo ha señalado Dewey, es preciso conocer quiénes son, cómo son, qué piensan, qué sienten y qué quieren los alumnos y las alumnas.&nbsp;Decía un pedagogo italiano: Para enseñar latín a John, más importante que conocer latín, es conocer a John. Para que esta participación se produzca hace falta una concepción ambiciosa y comprometida de la institución, una voluntad de transformación y de mejora y, también, unas estructuras que la hagan no solo posible sino fácil, casi inevitable.</p><p className="ql-align-justify"><br></p><p className="ql-align-justify">Mi amigo Francesco Tonucci me dijo en cierta ocasión que las escuelas son instituciones ilegales. Ante mi curiosidad y extrañeza, contestó: existe una ley (la Convención sobre los Derechos del Niño de Naciones Unidas) que obliga a que se consulte a los niños y a las niñas sobre aquellas cuestiones que les conciernen. Y vaya si la escuela les concierne.</p><p className="ql-align-justify"><br></p><p className="ql-align-justify">[Adaptado de: Santos Guerra, Miguel. (2020). Un alumno toma palabra. <a href="https://mas.laopiniondemalaga.es/blog/eladarve/2020/09/19/un-alumno-tomaba-palabra/" target="_blank">https://mas.laopiniondemalaga.es/blog/eladarve/2020/09/19/un-alumno-tomaba-palabra/</a>]</p><p><br></p>
            `
        }
    ]
}
function EnunciadoTable() {
    if (enunciados.error) return <LoadingErrorCard />
    if (enunciados.isLoading) return <TableSkeleton />


    return (
        <>
            <TemplateBaseTable datos={enunciados?.data} columns={enunciadoColumns} total={enunciados?.data.length} />
        </>
    )
}

export default EnunciadoTable