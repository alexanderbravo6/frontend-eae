'use client'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Sidebar from "@/modules/Layout/Components/Sidebar/Sidebar";
import Footer from "@/modules/Layout/Components/Footer/Footer";
import Navbar from "@/modules/Layout/Components/Navbar/Navbar";
import AuthProvider from "@/shared/Providers/AuthProvider";


function PrincipalLayout({ children }) {
    const router = useRouter();

    return (
        <>
            <NextUIProvider navigate={router.push}>
                <AuthProvider>
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
                </AuthProvider>
            </NextUIProvider>

        </>
    )
}

export default PrincipalLayout