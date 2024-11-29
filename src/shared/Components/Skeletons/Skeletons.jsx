
import React from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, CircularProgress, Divider, Skeleton } from "@nextui-org/react";
import Link from "next/link";

export function ButtonSkeleton() {
    return (
        <>
            <Skeleton className="h-10 w-48 rounded-lg" />


        </>
    );
}
export function ButtonTableSkeleton() {
    return (
        <>
            <Skeleton className="h-8 w-16 rounded-lg" />


        </>
    );
}
export function PromedioBarSkeleton() {
    return (
        <>

            <div className="regiones gap-3 grid grid-cols-[1fr,3fr,1fr] py-4">
                <div id="nombre_region" className="text-black">    <Skeleton className="h-8 w-full rounded-lg" /> </div>
                <div id="bar_nivel" className=" flex">
                    <Skeleton className="h-8 w-full rounded-lg" />


                </div>
                <div id="promedio" className="font-semibold  pr-[3%] text-center">
                    <Skeleton className="h-8 w-full rounded-lg" />
                </div>
            </div>
            <div className="regiones gap-3 grid grid-cols-[1fr,3fr,1fr] py-4">
                <div id="nombre_region" className="text-black">    <Skeleton className="h-8 w-full rounded-lg" /> </div>
                <div id="bar_nivel" className=" flex">
                    <Skeleton className="h-8 w-full rounded-lg" />


                </div>
                <div id="promedio" className="font-semibold  pr-[3%] text-center">
                    <Skeleton className="h-8 w-full rounded-lg" />
                </div>
            </div>

            <div className="regiones gap-3 grid grid-cols-[1fr,3fr,1fr] py-4">
                <div id="nombre_region" className="text-black">    <Skeleton className="h-8 w-full rounded-lg" /> </div>
                <div id="bar_nivel" className=" flex">
                    <Skeleton className="h-8 w-full rounded-lg" />


                </div>
                <div id="promedio" className="font-semibold  pr-[3%] text-center">
                    <Skeleton className="h-8 w-full rounded-lg" />
                </div>
            </div>




        </>
    );
}
export function SidebarSkeleton() {
    return (
        <>
            <li key="2">
                <Skeleton className="h-8 bg-['#2e384d'] w-full rounded-lg" />
            </li>
            <li key="3">

                <Skeleton className="h-8  bg-['#2e384d'] w-full mt-3 rounded-lg" />

            </li>
            <li key="4">

                <Skeleton className="h-8  bg-['#2e384d'] w-full mt-3 rounded-lg" />

            </li>

        </>
    );
}
export function MobileSkeletonHeader() {
    return (
        <>
            <section className='w-full  ' >
                <div className='flex justify-between items-center gap-3'>
                    <div className='w-40 '>

                        <Skeleton className="h-3 w-4/5 rounded-lg" />
                    </div>
                    <div className='flex items-center gap-4'>
                        <Skeleton className="h-3 w-4/5 rounded-lg" />

                    </div>


                </div>

            </section>

        </>
    );
}
export function SkeletonHeader() {
    return (
        <>

            <div className='flex items-center gap-3'>
                <div className='w-80'>

                    <Skeleton className="h-3 w-4/5 rounded-lg" />
                </div>
                <div className='w-80'>

                    <Skeleton className="h-3 w-4/5 rounded-lg" />
                </div>


            </div>
            <div className='w-auto'>
                <div className="flex items-center justify-center ">
                    <svg className="w-8 h-8 text-gray-200 dark:text-gray-700 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <div className="w-60 h-4 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>

                </div>
            </div>

        </>
    );
}
export function SkeletonInfoSection() {
    return (
        <>

            <Skeleton className="h-3 w-3/5 rounded-lg" />
            <Skeleton className="h-3 w-3/5 rounded-lg" />
            <Skeleton className="h-3 w-3/5 rounded-lg" />

        </>
    );
}

export function IntroductionSkeleton() {
    return (
        <>
            <div className="mt-6">
                <div className="animate-pulse">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">

                            <div>
                                <div className="w-24 h-4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                                <div className="w-16 h-3 bg-gray-200 dark:bg-gray-700 rounded-full mt-1"></div>
                            </div>
                        </div>
                        <div className="w-20 h-4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                    </div>
                    <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full mb-4"></div>
                    <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full mb-4"></div>
                    <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full mb-4"></div>
                    <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full mb-4"></div>
                    <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full mb-4"></div>
                </div>
            </div>
        </>
    )
}


export function PruebaSkeleton() {
    return (
        <>
            <span className="w-full gap-3 mt-4 flex px-5 py-2 items-center bg-gray-200 rounded-md ">
                <svg className="w-10 h-10 me-3 text-gray-400 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray-300 rounded-full dark:bg-gray-700"></div>
                </div>
            </span>
            <span className="w-full gap-3 mt-4 flex px-5 py-2 items-center bg-gray-200 rounded-md ">
                <svg className="w-10 h-10 me-3 text-gray-400 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray-300 rounded-full dark:bg-gray-700"></div>
                </div>
            </span>

        </>
    )
}

export function SkeletonButton() {
    return (
        <>
            <div className="animate-pulse min-w-unit-28 " >
                <div className="w-20 h-2.5 bg-gray-200 rounded-full  min-w-unit-28  min-h-unit-5 dark:bg-gray-700 me-3"></div>
            </div>
        </>
    )
}
export function TableSkeleton() {
    return (
        <>




            <div role="status" className="w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse ">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <span className="sr-only">Cargando...</span>
            </div>
        </>
    );
}
export function NivelDesempenioSkeleton() {
    return (
        <>
            <section className="flex gap-5 flex-row">

                <Card className="w-[280px] p-5">
                    <CardHeader className="flex gap-3">


                        <Skeleton className="w-full rounded-lg">
                            <div className="h-3 w-full rounded-lg bg-default-200"></div>
                        </Skeleton>

                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <Skeleton className="w-full rounded-lg">
                            <div className="h-32 w-full rounded-lg bg-default-200"></div>
                        </Skeleton>
                    </CardBody>
                    <Divider />
                    <CardFooter className="flex flex-col">
                        <div className="flex w-full justify-between">
                            <Skeleton className="w-2/5 rounded-lg">
                                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                            </Skeleton>
                            <Skeleton className="w-2/5 rounded-lg">
                                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                            </Skeleton>
                        </div>
                        <Divider className="my-4" />
                        <Skeleton className="w-full rounded-lg">
                            <div className="h-3 w-full rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Divider className="my-4" />
                        <Skeleton className="w-full rounded-lg">
                            <div className="h-3 w-full rounded-lg bg-default-200"></div>
                        </Skeleton>
                    </CardFooter>
                </Card>
                <Card className="w-[280px] p-5">
                    <CardHeader className="flex gap-3">


                        <Skeleton className="w-full rounded-lg">
                            <div className="h-3 w-full rounded-lg bg-default-200"></div>
                        </Skeleton>

                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <Skeleton className="w-full rounded-lg">
                            <div className="h-32 w-full rounded-lg bg-default-200"></div>
                        </Skeleton>
                    </CardBody>
                    <Divider />
                    <CardFooter className="flex flex-col">
                        <div className="flex w-full justify-between">
                            <Skeleton className="w-2/5 rounded-lg">
                                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                            </Skeleton>
                            <Skeleton className="w-2/5 rounded-lg">
                                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                            </Skeleton>
                        </div>
                        <Divider className="my-4" />
                        <Skeleton className="w-full rounded-lg">
                            <div className="h-3 w-full rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Divider className="my-4" />
                        <Skeleton className="w-full rounded-lg">
                            <div className="h-3 w-full rounded-lg bg-default-200"></div>
                        </Skeleton>
                    </CardFooter>
                </Card>
                <Card className="w-[280px] p-5">
                    <CardHeader className="flex gap-3">


                        <Skeleton className="w-full rounded-lg">
                            <div className="h-3 w-full rounded-lg bg-default-200"></div>
                        </Skeleton>

                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <Skeleton className="w-full rounded-lg">
                            <div className="h-32 w-full rounded-lg bg-default-200"></div>
                        </Skeleton>
                    </CardBody>
                    <Divider />
                    <CardFooter className="flex flex-col">
                        <div className="flex w-full justify-between">
                            <Skeleton className="w-2/5 rounded-lg">
                                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                            </Skeleton>
                            <Skeleton className="w-2/5 rounded-lg">
                                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                            </Skeleton>
                        </div>
                        <Divider className="my-4" />
                        <Skeleton className="w-full rounded-lg">
                            <div className="h-3 w-full rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Divider className="my-4" />
                        <Skeleton className="w-full rounded-lg">
                            <div className="h-3 w-full rounded-lg bg-default-200"></div>
                        </Skeleton>
                    </CardFooter>
                </Card>
                <Card className="w-[280px] p-5">
                    <CardHeader className="flex gap-3">


                        <Skeleton className="w-full rounded-lg">
                            <div className="h-3 w-full rounded-lg bg-default-200"></div>
                        </Skeleton>

                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <Skeleton className="w-full rounded-lg">
                            <div className="h-32 w-full rounded-lg bg-default-200"></div>
                        </Skeleton>
                    </CardBody>
                    <Divider />
                    <CardFooter className="flex flex-col">
                        <div className="flex w-full justify-between">
                            <Skeleton className="w-2/5 rounded-lg">
                                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                            </Skeleton>
                            <Skeleton className="w-2/5 rounded-lg">
                                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                            </Skeleton>
                        </div>
                        <Divider className="my-4" />
                        <Skeleton className="w-full rounded-lg">
                            <div className="h-3 w-full rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Divider className="my-4" />
                        <Skeleton className="w-full rounded-lg">
                            <div className="h-3 w-full rounded-lg bg-default-200"></div>
                        </Skeleton>
                    </CardFooter>
                </Card>
            </section>



        </>
    );
}
export function DetalleResumenSkeleton() {
    return (
        <>
            <div className='grid md:grid-cols-2 grid-cols-1  md:gap-3 gap-3 w-full  mb-5 p-2'>
                <Skeleton className="h-3 w-4/5 rounded-lg" />
                <Skeleton className="h-3 w-4/5 rounded-lg" />
                <Skeleton className="h-3 w-4/5 rounded-lg" />
                <div className='flex gap-2'>
                    <Skeleton className="h-3 w-4/5 rounded-lg" />

                </div>

            </div>




        </>
    );
}
