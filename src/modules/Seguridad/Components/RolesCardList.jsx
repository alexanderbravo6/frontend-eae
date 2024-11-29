import TemplateErrorData from '@/shared/Components/Templates/TemplateErrorData';
import LoadingSpinner from '@/shared/Components/Loaders/LoadingSpinner';
import React from 'react'
import RolItemCard from './RolItemCard';
import { useSession } from 'next-auth/react';
import { useFetchRoles } from '../Hooks/useSeguridad';

function RolesCardList() {
    const { data: session } = useSession();
    const { data, error, isLoading } = useFetchRoles(session?.user.idPersona)
    if (error) return <TemplateErrorData />
    if (isLoading) return <LoadingSpinner />
    const roles = data.data;
    return (
        <>
            <ul role="list" className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 w-full  divide-gray-100">
                {
                    roles &&
                    roles.map((rol, id) => (
                        <RolItemCard key={id} rol={rol} />
                    ))
                }
            </ul>
        </>
    )
}

export default RolesCardList