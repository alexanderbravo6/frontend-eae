'use client'
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function LoginLayout({ children }) {

    const { data: session, status } = useSession();

    if (status === "authenticated") redirect('/iniciar-sesion')
    return (
        <>
            {children}
        </>
    )
}
export default LoginLayout