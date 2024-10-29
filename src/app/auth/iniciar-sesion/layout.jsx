'use client'
import LoadingScreenMinedu from "@/shared/Components/LoadingScreenMinedu";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function IniciarSesionLayout({ children }) {

    const { data: session, status } = useSession();
    if (status === "loading") return <LoadingScreenMinedu />
    if (status === "authenticated") redirect('/gestion')

    return (
        <>
            {children}
        </>
    )
}
export default IniciarSesionLayout