'use client'
import { createContext, useState } from "react"

const MainContext = createContext()

const MainProvider = ({ children }) => {

    const [state, dispatch] = useState('fdsfsd')

    return (
        <MainContext.Provider value={{
            state

        }}>
            {children}
        </MainContext.Provider>
    )
}
export {
    MainProvider
}
export default MainContext