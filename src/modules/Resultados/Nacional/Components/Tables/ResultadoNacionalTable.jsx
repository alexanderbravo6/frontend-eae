import React from 'react'

function ResultadoNacionalTable() {
    return (

        <table className="w-full">
            <thead>
                <tr className="bg-blue-500 text-white">
                    <th className="py-3 px-4 text-left font-semibold">Programa de Estudios</th>
                    <th className="py-3 px-4 text-center font-semibold">Comprensión Lectora</th>
                    <th className="py-3 px-4 text-center font-semibold">Habilidades Matemáticas Básicas</th>
                </tr>
            </thead>
            <tbody>
                {[
                    ["EDUCACIÓN SECUNDARIA, ESPECIALIDAD: CIUDADANÍA Y CIENCIAS SOCIALES", 412, 393],
                    ["EDUCACIÓN SECUNDARIA, ESPECIALIDAD: CIENCIA Y TECNOLOGÍA", 387, 400],
                    ["EDUCACIÓN INICIAL", 2150, 2098],
                    ["EDUCACIÓN PRIMARIA", 982, 972],
                    ["IDIOMAS, ESPECIALIDAD: INGLÉS", 675, 698],
                    ["EDUCACIÓN SECUNDARIA, ESPECIALIDAD: COMUNICACIÓN", 641, 560],
                    ["EDUCACIÓN FÍSICA", 1002, 920],
                    ["EDUCACIÓN INICIAL INTERCULTURAL BILINGÜE", 475, 474],
                    ["EDUCACIÓN PRIMARIA INTERCULTURAL BILINGÜE", 561, 538],
                    ["EDUCACIÓN SECUNDARIA, ESPECIALIDAD: MATEMÁTICA", 469, 455]
                ].map((row, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors duration-200`}>
                        <td className="py-3 px-4 border-b">{row[0]}</td>
                        <td className="py-3 px-4 border-b text-center">{row[1]}</td>
                        <td className="py-3 px-4 border-b text-center">{row[2]}</td>
                    </tr>
                ))}
                <tr className="bg-blue-100 font-bold">
                    <td className="py-3 px-4 border-t-2 border-blue-500">Total</td>
                    <td className="py-3 px-4 border-t-2 border-blue-500 text-center">7754</td>
                    <td className="py-3 px-4 border-t-2 border-blue-500 text-center">7508</td>
                </tr>
            </tbody>
        </table>

    )
}

export default ResultadoNacionalTable