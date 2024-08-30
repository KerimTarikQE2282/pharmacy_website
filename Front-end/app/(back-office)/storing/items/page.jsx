import DataTable from '@/Components/dashboard/DataTable'
import TabelNavBar from '@/Components/TabelNavBar'
import React from 'react'

export default async function Items() {
  const columns=['title','description','SKU','supplier']
 


  console.log(Items)
  return (
    <div>
       <TabelNavBar link='/storing/items/new' title='Items'/>
       <div className='my-4 p-8'>
    <DataTable name='items' resourceTitle={'items'} columns={columns}/>

    </div>
    </div>
  )
}
