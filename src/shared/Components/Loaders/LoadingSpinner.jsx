import React from "react";
import { Spinner } from "@nextui-org/react";

export default function LoadingSpinner() {
    return (
        <div className='flex justify-center'>
            <Spinner color="primary"  />
        </div>
    );
}
