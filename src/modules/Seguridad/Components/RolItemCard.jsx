'use client'

import { useSession } from 'next-auth/react';
import React from 'react'

function RolItemCard({ rol }) {
    const { data: session, update } = useSession();
    const handleClickCambiarRol = (rol) => {
        update({
            ...session,
            user: {
                ...session.user,
                idPersonaRol: rol.idPersonaRol,
                idSede: rol.sede.idSede,
                idInstitucionActiva: rol.idRol == 3 ? rol.sede.idSede : 0,
                descripcionRol: rol.rol,
                sede: rol.sede.descripcionSede,
                idRol: rol.idRol,
            },
        });
    }

    const isActive = session.user.idPersonaRol === rol.idPersonaRol;

    return (
        <li onClick={() => handleClickCambiarRol(rol)} className={`  ${isActive ? "bg-[#338ef7] text-white " : ""} my-6 hover:bg-[#338ef7] hover:text-white  shadow-xl cursor-pointer  max-w-96 overflow-auto  px-6 rounded-lg gap-x-6 py-5`}>
            <p className={`text-sm font-bold  leading-6 `}>ROL DE USUARIO : <span className='font-normal' >{rol.rol}</span> </p>
            <p className={`text-sm font-bold  leading-6 `}>TIPO DE SEDE :  <span className='font-normal' >{rol.sede.descripcionTipoSede}</span> </p>
            <p className={`text-sm font-bold   leading-6  `}>SEDE :  <span className='font-normal'  >{rol.sede.descripcionSede}</span> </p>
        </li>
    )
}

export default RolItemCard