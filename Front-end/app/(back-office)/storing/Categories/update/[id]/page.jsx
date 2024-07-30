import React from 'react'
import { getDataById } from '@/actions/storeActions/StoreGeneralCrudRequests/getDataByid'
import NewCategory from '../../new/page'
export default async function Update({params:id}) {
  
    const data=await getDataById('Categories',id)
 
    
  return (


      <NewCategory initialData={data} isupdate={true}/>
 
    
  )
}
