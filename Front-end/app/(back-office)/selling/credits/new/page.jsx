"use client";

import React from 'react';
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { connect } from "react-redux";
import FormHeader from '../../../../../Components/dashboard/FormHeaders';
import TextInput from "@/Components/FormInputs/TextInput";
import SubumitButton from "@/Components/FormInputs/SubumitButton";
import { makePUTApiRequest, makePOSTApiRequest } from '../../../../../actions/StoreGeneralCrudRequests';
import { useGetDataById } from "@/hooks/useGetDataById";


function NewCustomer({ initialData, isupdate = false, makePOSTApiRequest, makePUTApiRequest }) {
  console.log("🚀 ==> file: page.jsx:14 ==> NewBrand ==> initialData:", initialData);

  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialData, // Set initial data as default values
  });



  // Handle form submission
  async function onSubmit(formData) {
    setLoading(true);
    try {
      if (isupdate) {
        // Update existing record
        const done = await makePUTApiRequest(`Customer/${initialData._id}`, setLoading, formData, 'brands');
        if (done === true) {
          router.replace('/storing/Brands');
        }
      } else {
        // Create new record
        await makePOSTApiRequest('credits', setLoading, formData, 'credits');
       // router.replace('/selling/credits');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }



  return (
    <div>
       <FormHeader title={`${isupdate ? 'Update Customer' : 'New Customer'}`} link={'/dashboard/customers'} />
       <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
  <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
    <TextInput
      label="Order Number"
      name="orderNumber"
      type="text"
      width="not-full"
      register={register}
      errors={errors}
    />
    <TextInput
      label="Product Name"
      name="productName"
      type="text"
      width="full"
      register={register}
      errors={errors}
    />
    <TextInput
      label="Quantity"
      name="quantity"
      type="number"
      width="full"
      register={register}
      errors={errors}
    />
    <TextInput
      label="Unit Price"
      name="unitPrice"
      type="number"
      step="0.01"  // Allows decimal input for price
      width="full"
      register={register}
      errors={errors}
    />
    <TextInput
      label="Date Created"
      name="dateCreated"
      type="datetime-local"  // Allows user to select date and time
      width="full"
      register={register}
      errors={errors}
      defaultValue={isupdate ? initialData?.dateCreated : new Date().toISOString().slice(0,16)}
    />
  </div>
  <SubumitButton title={`${isupdate ? 'Update Credit' : 'New Credit'}`} isLoading={loading} />
</form>

    </div>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { makePOSTApiRequest, makePUTApiRequest })(NewCustomer);
