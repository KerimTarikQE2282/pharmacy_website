"use client"
import DataTable from '@/Components/dashboard/DataTable'
import TabelNavBar from '@/Components/TabelNavBar'
import { getData } from '@/actions/storeActions/StoreGeneralCrudRequests/getData'
import React from 'react'
import { useGetData } from '@/hooks/useGetData'

export default function WareHouse() {
  const columns=['WareHouseName','WareHouseLocation','WareHouseType']

  // const Items= await getData('WareHouse')
  const {isLoading,data,isError,error,isFetching}=useGetData('WareHouse');
    const mydata=data?.data?.warehouses


  return (
    <div>
    <TabelNavBar link='/storing/WareHouse/new' title='WareHouse'/>
       <div className='my-4 p-8'>
    <DataTable Data={mydata } resourceTitle={'WareHouse'}  columns={columns}/>

    </div>
    </div>
  )
}
