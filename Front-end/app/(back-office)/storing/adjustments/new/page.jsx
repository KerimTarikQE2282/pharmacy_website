"use client"
import React from 'react';
import { getData } from "@/actions/storeActions/StoreGeneralCrudRequests/getData";
import NewAdjustments from '@/Components/dashboard/Forms/AdjustmentForm';
export default  function Adjustments() {

  const [item, setItem] = React.useState([]);
  const [wareHouse, setwareHouse] = React.useState([]);



  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const [ WareHouseData, ItemData] = await Promise.all([
         
          getData('WareHouse'),
          getData('items'),
        ]);

        setItem(ItemData.items);
        setwareHouse(WareHouseData.WareHouse);
       
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);
  console.log("🚀 ==> file: page.jsx:8 ==> Adjustments ==> wareHouse:", wareHouse);
  console.log("🚀 ==> file: page.jsx:7 ==> Adjustments ==> item:", item);

  return(
    <div>
      <NewAdjustments items={item} WareHouses={wareHouse}/>
    </div>
  )
}
