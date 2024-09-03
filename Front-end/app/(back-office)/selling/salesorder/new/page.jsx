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
import { Minus, Plus } from 'lucide-react';
import SelectComponent from '@/Components/FormInputs/SelectComponent';
import { getData } from '@/actions/storeActions/StoreGeneralCrudRequests/getData';
import NonIdSelectComponent from '@/Components/FormInputs/NonIdSelectComponent';


function NewCustomer({ initialData, isupdate = false, makePOSTApiRequest, makePUTApiRequest }) {
  console.log("🚀 ==> file: page.jsx:14 ==> NewBrand ==> initialData:", initialData);
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialData, // Set initial data as default values
  });
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [product,setProduct]=React.useState([])
  const [customer,setCustomer]=React.useState([])

  React.useEffect(() => {
    async function getItems(){try {
      const [ItemData,CustomerData]=await Promise.all([

        getData('items'),
        getData('Customer'),
      ])

  
      setProduct(ItemData.items)
      setCustomer(CustomerData.Customer)

    } catch (error) {
      console.log("🚀 ==> file: page.jsx:27 ==> NewCustomer ==> error:", error);
     }
  
    }
    getItems()
  },[])
  
  


  const [itemNumber,setItemNumber]=React.useState(1)
  var itemsSold = [];
  var i;
for (i = 0; i < itemNumber; i++) {
  itemsSold.push(
    <div key={i} className={`${i !== 0 ? 'mt-[5vh]' : ''}`}
    >
     
      {i!=0 && <hr/> }
      <SelectComponent label="Items" name={`Item:${i}`}  type="text" width='full'  options={product}     register={register}  errors={errors}  className='w-full'/>
      <TextInput
        label="Quantity"
        name={`quantity:${i}`}
        type="number"
        width="not-full"
        register={register}
        errors={errors}
      />
      <TextInput
        label="Unit Price"
        name={`unitPrice:${i}`}
        type="number"
        step="0.01"
        width="not-full"
        register={register}
        errors={errors}
      />
    </div>
  );
}

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
        console.log("🚀 ==> file: page.jsx:29 ==> onSubmit ==> formData:", formData);
        var itemsBought=[];
        for (var i=0;i<itemNumber;i++){
          const Myitem={
            Item:formData[`Item:${i}`],
            quantity:formData[`quantity:${i}`],
            unitPrice:formData[`unitPrice:${i}`],
          }
          itemsBought.push(Myitem)

        }
          const FinalVersionFromData={
            orderNumber:formData.orderNumber,
            customer:formData.customer,
            orderStatus:formData.orderStatus,
            billingStatus:formData.billingStatus,
            paymentMethod:formData.paymentMethod,
            orderTotal:formData.orderTotal,
            salesRepresentative:formData.salesRepresentative,
            Order_item:itemsBought
          }


        // Create new record
       await makePOSTApiRequest('GeneralSales', setLoading, FinalVersionFromData, 'GeneralSales');
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
      <SelectComponent label="Customer" name="customer"  type="text" width='full'  options={customer}     register={register}  errors={errors}  className='w-full'/>
      <NonIdSelectComponent label="Order Status" name="orderStatus"  type="text" width='full'  options={["pending", "shipped", "delivered", "canceled"]}     register={register}  errors={errors}  className='w-full'/>
      <NonIdSelectComponent label="Billing Status" name="billingStatus"  type="text" width='full'  options={["unpaid", "paid", "partially paid"]}     register={register}  errors={errors}  className='w-full'/>
      <NonIdSelectComponent label="Payment Method" name="paymentMethod" type="text" width='full'  options={["credit card", "debit card", "paypal", "bank transfer", "cash"]}     register={register}  errors={errors}  className='w-full'/>

   
     
     
    <TextInput
      label="Order Total"
      name="orderTotal"
      type="number"  // Allows user to select date and time
      width="not-full"
      register={register}
      errors={errors}
      defaultValue={isupdate ? initialData?.dateCreated : new Date().toISOString().slice(0,16)}
    />

   
   
    
    {/* TODO dont forget the sales personell is the person currently logged in */}
    <div className='flex   flex-col col-span-2'>
   {itemsSold}
   </div>
   <br/>
   <div className='flex items-center space-x-10 flex-row'>
   <button className="p-1 bg-blue-600 rounded-md flex items-center space-x-2 px-3  w-[5vw]" onClick={(e) => { e.preventDefault(); setItemNumber(itemNumber + 1); }}>
  <Plus className="text-white w-4 h-4" />
  <span className='text-white'>More</span>
</button>
<button className="p-1 bg-red-600 rounded-md flex items-center space-x-2 px-3  w-[5vw]" onClick={(e) => { e.preventDefault(); setItemNumber(itemNumber - 1); }}>
  <Minus className="text-white w-4 h-4" />
  <span className='text-white'>Less</span>
</button>

      </div>
  </div>
  <SubumitButton title={`${isupdate ? 'Update Credit' : 'New Credit'}`} isLoading={loading} />
</form>

    </div>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { makePOSTApiRequest, makePUTApiRequest })(NewCustomer);
