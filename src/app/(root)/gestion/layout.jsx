'use client'

import { NextUIProvider } from "@nextui-org/react";
import { useSession } from "next-auth/react";


import { GlobalProvider } from "@/shared/Providers/GlobalProvider";
import Sidebar from "@/modules/Layout/Components/Sidebar/Sidebar";
import Footer from "@/modules/Layout/Components/Footer/Footer";
import LoadingScreenMinedu from "@/shared/Components/Loaders/LoadingScreenMinedu";
import Navbar from "@/modules/Layout/Components/Navbar/Navbar";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function PrincipalLayout({ children }) {

    const { status } = useSession({ required: true });
    if (status === "loading") return <LoadingScreenMinedu />

    return (
        <>
            <NextUIProvider >
                <GlobalProvider>
                    <div id="app" >
                        <aside id="logo-sidebar" className={` [grid-area:aside]   md:flex hidden   flex-col lg:w-[211px]  overflow-y-auto `}>
                            <Sidebar />
                        </aside>
                        <Navbar />
                        <div className=" [grid-area:main] overflow-x-auto overflow-y-auto sm:px-7 px-4   relative">
                            <div className="bg-white w-full  ">
                                {children}
                            </div>
                            <ToastContainer />
                        </div>
                        <Footer />
                    </div>
                </GlobalProvider>
            </NextUIProvider>

        </>
    )
}

export default PrincipalLayout