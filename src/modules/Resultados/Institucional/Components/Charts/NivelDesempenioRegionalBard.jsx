import React from 'react'

function NivelDesempenioRegionalBard() {
    return (
        <>

            <div className="regiones grid grid-cols-[1fr,3fr,1fr] py-4">
                <div id="nombre_region" className="text-black"></div>
                <div id="bar_nivel" className=" flex justify-center gap-4 items-center" >
                    <div id="nivel_proceso" className="min-w-fit bg-[#FB7539]   h-4  pl-[1%] text-white w-5" ></div>En Proceso
                    <div id="nivel_satisfactorio" className="min-w-fit bg-[#04c8c8] h-4 pl-[1%] text-white w-5" ></div>Satisfactorio
                </div>
                <div id="promedio" className="font-semibold pr-[3%] text-center">Medida Promedio</div>
            </div>
            <div className="regiones grid grid-cols-[1fr,3fr,1fr] py-4">
                <div id="nombre_region" className="text-black">AMAZONAS </div>
                <div id="bar_nivel" className="bg-[#FB7539] flex">

                    <div id="nivel_proceso" className="min-w-fit bg-[#FB7539]  pl-[1%] text-white w-[92.37%]">92.37%</div>
                    <div id="nivel_satisfactorio" className="min-w-fit bg-[#04c8c8]  pl-[1%] text-white w-[7.63%]">7.63%</div>
                </div>
                <div id="promedio" className="font-semibold  pr-[3%] text-center">450</div>
            </div>
            <div className="regiones grid grid-cols-[1fr,3fr,1fr] py-4">
                <div id="nombre_region" className="text-black">ANCASH </div>
                <div id="bar_nivel" className="bg-[#FB7539] flex">

                    <div id="nivel_proceso" className="min-w-fit bg-[#FB7539]  pl-[1%] text-white w-[90.92%]">90.92%</div>
                    <div id="nivel_satisfactorio" className="min-w-fit bg-[#04c8c8]  pl-[1%] text-white w-[9.08%]">9.08%</div>
                </div>
                <div id="promedio" className="font-semibold  pr-[3%] text-center">435</div>
            </div>
            <div className="regiones grid grid-cols-[1fr,3fr,1fr] py-4">
                <div id="nombre_region" className="text-black">APURIMAC </div>
                <div id="bar_nivel" className="bg-[#FB7539] flex">

                    <div id="nivel_proceso" className="min-w-fit bg-[#FB7539]  pl-[1%] text-white w-[88.72%]">88.72%</div>
                    <div id="nivel_satisfactorio" className="min-w-fit bg-[#04c8c8]  pl-[1%] text-white w-[11.28%]">11.28%</div>
                </div>
                <div id="promedio" className="font-semibold  pr-[3%] text-center">458</div>
            </div>


        </>
    )
}

export default NivelDesempenioRegionalBard