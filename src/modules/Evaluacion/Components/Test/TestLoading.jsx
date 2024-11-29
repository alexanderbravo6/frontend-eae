
import React from 'react'
import { LoadingSpinner } from '@nextui-org/react'


function TestLoading({message}) {
    return (
        <div className='w-full flex h-full justify-center items-center ' >

            <div className='w-64 text-center flex flex-col gap-4' >
                <p>
                    {message}
                </p>
                <LoadingSpinner
                    size="sm"
                    isIndeterminate
                    aria-label="Loading..."
                    className="max-w-md"
                />
            </div>

        </div>
    )
}

export default TestLoading