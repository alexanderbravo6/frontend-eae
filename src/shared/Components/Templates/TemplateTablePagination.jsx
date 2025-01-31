'use client'
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel } from '@tanstack/react-table';
import { useState } from 'react';

function TemplateTablePagination({ datos, columns, total, pagination, setPagination }) {

    const table = useReactTable({
        data: datos, columns,
        getCoreRowModel: getCoreRowModel(),
        //getPaginationRowModel: getPaginationRowModel(),
        manualPagination: true,

        state: {
            pagination,
        },
        autoResetPageIndex: false, //turn off auto reset of pageIndex
        onPaginationChange: setPagination,
        pageCount: Math.ceil(total / pagination.pageSize),

    }
    )

    return (
        <>

            <table className="table-auto w-full ">
                <thead className="   text-xs text-left text-gray-700 uppercase bg-gray-100 ">
                    {
                        table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                <th
                                    style={{
                                        width: '15px',
                                    }}
                                    className="px-3 py-2" >
                                    Orden
                                </th>
                                {
                                    headerGroup.headers.map((header) => (
                                        <th
                                            style={{
                                                width: header.getSize(),
                                            }}
                                            onClick={header.column.getToggleSortingHandler()}
                                            key={header.id} className="px-3 py-2">
                                            {header.isPlaceholder ? null : (
                                                <>

                                                    {
                                                        flexRender(header.column.columnDef.header,
                                                            header.getContext())
                                                    }

                                                </>
                                            )
                                            }

                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }

                </thead>
                <tbody >
                    {
                        table.getRowModel().rows.map((row, i) => (
                            <tr className="odd:bg-white text-xs  odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={row.id}>
                                {
                                    <td key={`body_${i}`} className="px-3 py-2">
                                        {i + 1 + table.getState().pagination.pageSize * table.getState().pagination.pageIndex}
                                    </td>
                                }
                                {

                                    row.getVisibleCells().map((cell) => (


                                        <td key={cell.id} className="p-2">
                                            {
                                                flexRender(cell.column.columnDef.cell, cell.getContext())
                                            }
                                        </td>

                                    ))
                                }
                            </tr>
                        )
                        )
                    }
                </tbody>

            </table>


            <nav className='mt-6' aria-label="Navigation">

                <ul className="flex  items-center -space-x-px h-8 text-sm">
                    <li>
                        <button className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 " onClick={() => table.firstPage()} disabled={!table.getCanPreviousPage()}>
                            {'<<'}
                        </button>
                    </li>
                    <li>
                        <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ">
                            <span className="sr-only">Previous</span>
                            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">
                            <span className="sr-only">Next</span>
                            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                            onClick={() => table.lastPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            {'>>'}
                        </button>
                    </li>
                    <li >
                        <span className="flex ml-6 items-center flex-wrap gap-1">
                            Ir a pagina
                            <input
                                type="number"
                                defaultValue={table.getState().pagination.pageIndex + 1}
                                onBlur={e => {
                                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                                    table.setPageIndex(page)
                                }}
                                className="border p-1 rounded w-16"
                            />
                        </span>
                    </li>
                    <li>
                        <span className="flex items-center flex-wrap gap-1 ml-6">
                            <div>Pagina</div>
                            <strong className=''>
                                {table.getState().pagination.pageIndex + 1} - {' '}
                                {table.getPageCount().toLocaleString()} de {total}

                            </strong>
                        </span>
                    </li>
                </ul>


            </nav>
        </>
    )
}

export default TemplateTablePagination