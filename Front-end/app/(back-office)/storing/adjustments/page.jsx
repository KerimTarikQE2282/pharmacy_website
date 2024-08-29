import DataTable from './Components/DataTable'
import TabelNavBar from '@/Components/TabelNavBar'
import { getData } from '@/actions/storeActions/StoreGeneralCrudRequests/getData'
import React from 'react'

export default async function Adjustments() {
  // const StockAddcolumns=['AddStockQty','ReferenceNumber']
  // const StockAddData= getData('/adjustments/add')
  // const StockTransfercolumns=['TransferStockQty','ReferenceNumber']
  // const StockTransferedData= getData('/adjustments/transfer')
  // const [StockAdd,StockTransfered]=await promise.all([StockAddData,StockTransferedData])
  const columns=['item','StoredAt','createdAt','carton'];

  return (
    <div>
       <TabelNavBar link='/storing/adjustments/new' title='Adjustments'/>
       <div className='my-4 p-8'>
        <h2 className='p-4 text-xl font-semibold'>Stock Add  </h2>
        <DataTable name='WareHouseAdjustments/NewItems'  columns={columns}/>

    </div>

    <div className='my-4 p-8'>
    <h2 className='p-4 text-xl font-semibold'>Stock Transfer Table </h2>
    {/* <DataTable Data={StockTransfered } columns={StockTransfercolumns}/> */}
    </div>
    </div>
  )
}
