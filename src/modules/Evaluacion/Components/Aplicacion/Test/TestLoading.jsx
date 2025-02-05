


import { Progress } from '@nextui-org/react'
import React from 'react'



function TestLoading({ message }) {
    return (
        <div className='w-full flex h-full justify-center items-center ' >

            <div className='w-64 text-center flex flex-col gap-4' >
                <p>
                    {message}
                </p>
                <Progress 
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