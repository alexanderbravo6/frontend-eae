import React from 'react'
import { IconEdit } from '../../Icons/Icons'

function ButtonEdit({ onOpen }) {
    return (
        <button onClick={onOpen} className="font-medium text-blue-500  hover:underline">
            <IconEdit />
        </button>
    )
}

export default ButtonEdit