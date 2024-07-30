"use client"
import FormHeaders from '@/app/(back-office)/GeneralComponents/FormHeaders'
import SubumitButton from '@/Components/FormInputs/SubumitButton';
import TextAreaInputs from '@/Components/FormInputs/TextAreaInputs';
import TextInput from '@/Components/FormInputs/TextInput'
import { useRouter } from "next/navigation";
import React from 'react'
import { useForm } from 'react-hook-form';

export default function NewCustomer(isupdate=false,initialData='') {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loading,setLoading]=React.useState(false)
  const router=useRouter()
  function onSubmit(data) {
      console.log(data)
  }
  console.log('is update', isupdate)
  if(isupdate){
    console.log('why is this running ')
  }
  return (
    <div>
      <FormHeaders title={`${(isupdate==true)?'Update Customer Information':'Add New Customer'}`} link={'/selling/customer'} />


      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
         <TextInput label="Customer Name" name="CustomerName"  type="text" width='' defaultValue={initialData.CustomerName}   register={register}  errors={errors}/>
         <TextInput label="Phone 1" name="Phone1"  type="text" width='full' defaultValue={initialData.Phone1}   register={register}  errors={errors}/>
         <TextInput label="Phone 2" name="Phone2"  type="text" width='full' defaultValue={initialData.Phone2}   register={register}  errors={errors}/>
         <TextInput label="Address 1" name="Address1"  type="text" width='full' defaultValue={initialData.Address1}   register={register}  errors={errors}/>
         <TextInput label="Address 2" name="Address2"  type="text" width='full' defaultValue={initialData.Address2}   register={register}  errors={errors}/>
         <TextInput label="Registered By" name="RegisteredBy"  type="text" width='' defaultValue={initialData.RegisteredBy}   register={register}  errors={errors}/>
         <TextInput label="Status" name="Status"  type="text" width='' defaultValue={initialData.Status}   register={register}  errors={errors}/>
         <TextAreaInputs label="Notes" name="notes"  type="text" width='full'  register={register}  errors={errors}/>
        

        

        
        
        



        </div>
       <SubumitButton title={`${isupdate ?'New Customer' :'Updated Customer Info'}`} isLoading={loading}/>

      </form>
    </div>
  )
}
