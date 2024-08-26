import DataTable from '@/Components/dashboard/DataTable'
import TabelNavBar from '@/Components/TabelNavBar'
import React from 'react'

export default async function Items() {
  const columns=['title','description','sku','imagesUrl','supplier.name']
 


  console.log(Items)
  return (
    <div>
       <TabelNavBar link='/storing/items/new' title='Items'/>
       <div className='my-4 p-8'>
    <DataTable name='items' resourceTitle={'Item'} columns={columns}/>

    </div>
    </div>
  )
}
