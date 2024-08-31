"use client"

import { useGetDataById } from '@/hooks/useGetDataById'
import DetailsNavBar from '@/Components/DetailsNavBar'
import TabelNavBar from '@/Components/TabelNavBar'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import React from 'react'

export default function WarehousePage() {
  const { id } = useParams()
  const { data: warehouseData, error } = useGetDataById('WareHouse', id)
  
  if (error) {
    console.error("Error fetching warehouse data:", error)
    return <div>Error loading warehouse data.</div>
  }

  const warehouse = warehouseData?.data

  return (
    <div className="flex flex-col gap-5 p-5">
      <DetailsNavBar title="Warehouse" link="/storing/WareHouse/new" />

      <div className="w-full h-56 bg-white shadow-lg rounded-md flex items-center p-5">
        {/* 
        <Image
          src="/Resources/image.png"
          alt="Warehouse Image"
          className="w-40 h-40 object-cover rounded-md"
          fill
        /> 
        */}
        <h1 className="text-3xl font-bold">
          {warehouse?.WareHouseName} Warehouse
        </h1>
      </div>

      <div className="w-full h-[60vh] bg-white shadow-lg rounded-md p-10 flex flex-col gap-5">
        <p className="text-xl">
          <span className="font-semibold">Location:</span> {warehouse?.WareHouseLocation}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Description:</span> {warehouse?.WareHouseDescription}
        </p>
      </div>
    </div>
  )
}
