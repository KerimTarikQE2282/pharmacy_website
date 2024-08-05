import DataTable from '@/Components/dashboard/DataTable'
import TabelNavBar from '@/Components/TabelNavBar'
import { getData } from '@/actions/storeActions/StoreGeneralCrudRequests/getData'
import React from 'react'
import { getData } from '@/actions/StoreGeneralCrudRequests'
import { useSelector } from 'react-redux'

export default async function Brands() {
  const columns=['BrandName','createdAt','updatedAt']
  getData('brands')
  const items=useSelector(state=>state.brands)
  return (
    <div>
        <TabelNavBar link='/dashboard/inventory/Brands/new' title='Brands'/>
       <div className='my-4 p-8'>
    <DataTable Data={Items } columns={columns} resourceTitle='Brands'/>

    </div>
    </div>
  )
}
