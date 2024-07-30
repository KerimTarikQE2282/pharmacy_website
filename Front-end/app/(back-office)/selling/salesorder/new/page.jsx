"use client"
import FormHeaders from '@/app/(back-office)/GeneralComponents/FormHeaders'
import SelectComponent from '@/Components/FormInputs/SelectComponent';
import SubumitButton from '@/Components/FormInputs/SubumitButton';
import TextAreaInputs from '@/Components/FormInputs/TextAreaInputs';
import TextInput from '@/Components/FormInputs/TextInput'
import { useRouter } from "next/navigation";
import React from 'react'
import { useForm } from 'react-hook-form';

export default function NewSalesOrder(isupdate=false,initialData='') {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loading,setLoading]=React.useState(false)
  const router=useRouter()
  function onSubmit(data) {
      console.log(data)
  }
  const sample=[
    {
        "item_id": "001",
        "name": "Laptop",
        "category": "Electronics",
        "quantity": 50,
        "price": 799.99,
        "supplier": "Tech World",
        "date_added": "2024-07-01"
    },
    {
        "item_id": "002",
        "name": "Office Chair",
        "category": "Furniture",
        "quantity": 150,
        "price": 129.99,
        "supplier": "Office Supply Co",
        "date_added": "2024-06-15"
    },
    {
        "item_id": "003",
        "name": "Desk Lamp",
        "category": "Lighting",
        "quantity": 200,
        "price": 24.99,
        "supplier": "Bright Lights Ltd",
        "date_added": "2024-07-05"
    },
    {
        "item_id": "004",
        "name": "Smartphone",
        "category": "Electronics",
        "quantity": 75,
        "price": 699.99,
        "supplier": "Mobile World",
        "date_added": "2024-06-25"
    },
    {
        "item_id": "005",
        "name": "Notebook",
        "category": "Stationery",
        "quantity": 300,
        "price": 3.99,
        "supplier": "Paper Goods Inc",
        "date_added": "2024-07-10"
    }
]

  return (
    <div>
      <FormHeaders title={`${ (isupdate==true) ? 'Update Sales Order Information' : 'Add New Sales Order Information'}`} link={'/selling/salesorder'} />


      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
         <TextInput label="Order Number" name="OrderNumber"  type="text" width='' defaultValue={initialData.OrderNumber}   register={register}  errors={errors}/>
         <SelectComponent label="Customer" name="Customer"  type="text" width='full' defaultValue={initialData.Customer} options={sample}   register={register}  errors={errors}  className='w-full'/>

         <TextInput label="Order Date" name="OrderDate"  type="date" width='full' defaultValue={initialData.OrderDate}   register={register}  errors={errors}/>
         <TextInput label="Order status" name="Orderstatus"  type="text" width='full' defaultValue={initialData.Orderstatus}   register={register}  errors={errors}/>
         <TextInput label="Shipping status" name="Shippingstatus"  type="text" width='full' defaultValue={initialData.Shippingstatus}   register={register}  errors={errors}/>
         <TextInput label="Billing status" name="Billingstatus"  type="text" width='full' defaultValue={initialData.Billingstatus}   register={register}  errors={errors}/>
         <TextInput label="Order Total" name="OrderTotal"  type="number" width='full' defaultValue={initialData.OrderTotal}   register={register}  errors={errors}/>
         <SelectComponent label="Payment Method" name="PaymentMethod"  type="text" width='full'  options={sample} defaultValue={initialData.PaymentMethod}   register={register}  errors={errors}/>

         <TextInput label="Sales Representative" name="SalesRepresentative"  type="text" width='full' defaultValue={initialData.SalesRepresentative}   register={register}  errors={errors}/>
         
        

        

        
        
        



        </div>
       <SubumitButton title={`${(isupdate==true)?'Update Sales Order Information':' New Sales Order Information'}`}  isLoading={loading}/>

      </form>
    </div>
  )
}
