"use client"
import DataTable from '@/Components/dashboard/DataTable'
import TabelNavBar from '@/Components/TabelNavBar'
import { getData } from '@/actions/storeActions/StoreGeneralCrudRequests/getData'
import React from 'react'
import { useGetData } from '@/hooks/useGetData'

export default function WareHouse() {
  const columns=['WareHouseName','WareHouseLocation','WareHouseType']




  return (
    <div>
    <TabelNavBar link='/storing/WareHouse/new' title='WareHouse'/>
       <div className='my-4 p-8'>
    <DataTable name={'WareHouse'} resourceTitle={'WareHouse'}  columns={columns}/>

    </div>
    </div>
  )
}
