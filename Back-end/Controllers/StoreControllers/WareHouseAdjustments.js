const StatusCodes=require('http-status-codes')
const { BadRequestError } = require('../../errors')
const ContainedItemsModel=require('../../models/Store/WareHouseItem');
const { findByIdAndUpdate } = require('../../models/Store/AddStockAdjustemnt');
const WareHouseItem = require('../../models/Store/WareHouseItem');
const warehouse = require('../../models/Store/warehouse');
const itemModel = require('../../models/Store/item');



const add_New_Item_To_wareHouse = async (req,res) => {
   const item_set=req.body;
   console.log("🚀 ==> file: WareHouseAdjustments.js:13 ==> constadd_New_Item_To_wareHouse= ==> item_set:", item_set);
  //TODO validate if it is a legitimate Item

   if(!(item_set.Carton_number)){
    if(!(item_set.from_Carton_Number) || !(item_set.to_Carton_Number)){
      throw new BadRequestError("please provide from carton number and to carton number")
     }
     else{
      const my_Item=await itemModel.findOne({_id:item_set.item})
    const my_wareHoue=await warehouse.findOne({_id:item_set.To_WareHouse})
    if(!my_Item || !my_wareHoue){
      throw new BadRequestError("please provide valid item and/or WareHouse")
    }

      const start=parseInt(item_set.from_Carton_Number)
      const end=parseInt(item_set.to_Carton_Number)
      if(start>end){
        throw new BadRequestError("please provide valid carton numbers")
      }
      for(let i=start;i<=end;i++){
       
       await ContainedItemsModel.create({
        item: item_set.item,
        Carton_Number: i,
        StoredAt: item_set.To_WareHouse,
        itemWentTo: [item_set.To_WareHouse] 
    });
     }
     res.status(StatusCodes.OK).json({msg:"multiple Item Adding Succesfull"})
     }
  }
  else{
    const my_Item=await itemModel.findOne({_id:item_set.item})
    const my_wareHoue=await warehouse.findOne({_id:item_set.To_WareHouse})
    if(!my_Item || !my_wareHoue){
      throw new BadRequestError("please provide valid item and/or WareHouse")
    }
    await ContainedItemsModel.create({
      item: item_set.item,
      Carton_Number: parseInt(item_set.Carton_number),
      StoredAt: item_set.To_WareHouse,
      itemWentTo: [item_set.To_WareHouse] // Directly set the array with the initial value
  });
  
    console.log("🚀 ==> file: WareHouseAdjustments.js:39 ==> constadd_New_Item_To_wareHouse= ==> item_set.To_WareHouse:", item_set.To_WareHouse);

  res.status(StatusCodes.OK).json({msg:"Single Item Adding Succesfull"})
}
}



const Adjust_wareHouse_Item=async (req,res)=>{
  console.log("🚀 ==> file: WareHouseAdjustments.js:68 ==> constAdjust_wareHouse_Item= ==> req.body:", req.body);

  const {item,From_warehouse,To_WareHouse,Carton_number,from_Carton_Number,to_Carton_Number}=req.body;
 const MyCarton_number=Carton_number


  if(!item || !MyCarton_number || !To_WareHouse || !From_warehouse){
    if(!from_Carton_Number || !to_Carton_Number || !item  || !To_WareHouse || !From_warehouse){
      throw new BadRequestError("Please provide Valid values")
}



 else{
  const my_item= await itemModel.findOne({_id:item})
  const my_from_wareHoue=await warehouse.findOne({_id:From_warehouse})
  const my_to_wareHoue=await warehouse.findOne({_id:To_WareHouse})
  const start=from_Carton_Number
  const end= to_Carton_Number
  const my_wareHouse_items=[];
  for(var i=start;i<=end;i++){
    const item_is_in_my_wareHouse=await ContainedItemsModel.findOne({item:item,Carton_Number:i,StoredAt:my_from_wareHoue})
    if(item_is_in_my_wareHouse==null){
      throw new BadRequestError("Please provide Valid values for the wareHouse items")
    }
    my_wareHouse_items.push(item_is_in_my_wareHouse);
  }

  for(var i=start;i<=end;i++){
    if(!my_item || !my_from_wareHoue || !my_to_wareHoue ){
      throw new BadRequestError("Please provide Valid values for the wareHouse items")
  }
  }
  for (var i=start;i<=end;i++){
  const updated_Carton = await ContainedItemsModel.findOneAndUpdate(
    {
      item:"66cc3646e604778bdff83ef0",
      Carton_Number: i,
      StoredAt: my_from_wareHoue,
     
      __v: 0
    }, 
      {
        $set: { StoredAt: my_to_wareHoue }, 
        $push: { itemWentTo: To_WareHouse } 
      },
      { new: true, runValidators: true } );
      console.log("🚀 ==> file: WareHouseAdjustments.js:105 ==> constAdjust_wareHouse_Item= ==> my_wareHouse_items:", my_wareHouse_items);

    
    }

}
res.status(StatusCodes.OK).json({msg:"multiple Item Adjustment Succesfull"})
  }
else{
  const my_item= await itemModel.findOne({_id:item})
  const my_from_wareHoue=await warehouse.findOne({_id:From_warehouse})
  const my_to_wareHoue=await warehouse.findOne({_id:To_WareHouse})
  const item_is_in_my_wareHouse=await ContainedItemsModel.findOne({item:item,Carton_Number:MyCarton_number,StoredAt:my_from_wareHoue})
  if(!my_item || !my_from_wareHoue || !my_to_wareHoue || !item_is_in_my_wareHouse){
    throw new BadRequestError("Please provide Valid values for the wareHouse items")
}


await ContainedItemsModel.findOneAndUpdate(
  item_is_in_my_wareHouse, 
  {
    $set: { StoredAt: my_to_wareHoue }, 
    $push: { itemWentTo: To_WareHouse } 
  },
  { new: true, runValidators: true } 
);
res.status(StatusCodes.OK).json({msg:"Single Item Adjustment Succesfull"})

  
}
}

module.exports={add_New_Item_To_wareHouse,Adjust_wareHouse_Item};