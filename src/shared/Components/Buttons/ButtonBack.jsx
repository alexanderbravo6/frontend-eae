import { Button } from "@nextui-org/react";
import Link from "next/link";

export const ButtonBack = ({ url }) => {
    return (
        <Button
            className="w-36"
            as={Link}
            color="default"
            href={url}
            variant="solid"
        >
            Regresar
        </Button>

    )
}