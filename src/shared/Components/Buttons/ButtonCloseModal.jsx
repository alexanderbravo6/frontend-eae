import { Button } from '@nextui-org/react'
import React from 'react'

export default function ButtonCloseModal({ onClose }) {
    return (
        <Button color="danger" variant="solid" onPress={onClose}   >
            Cerrar
        </Button>
    )
}
