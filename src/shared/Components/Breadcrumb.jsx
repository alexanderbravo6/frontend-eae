'use client'
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

function Breadcrumb({ items }) {

  return (
    <>
      <Breadcrumbs
        itemClasses={{
          item: "text-white",
          separator: "text-white",
        }}
        underline="hover"
      >
        <BreadcrumbItem key={1} href={`/gestion`} >Inicio</BreadcrumbItem>
        {
          items.map((item, index) => (
            <BreadcrumbItem key={index} href={item.href} >{item.name} </BreadcrumbItem>
          ))
        }
      </Breadcrumbs>
    </>
  )
}

export default Breadcrumb