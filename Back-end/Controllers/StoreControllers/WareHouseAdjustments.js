const StatusCodes=require('http-status-codes')
const { BadRequestError } = require('../../errors')
const ContainedItemsModel=require('../../models/Store/WareHouseItem');
const { findByIdAndUpdate } = require('../../models/Store/AddStockAdjustemnt');
const WareHouseItem = require('../../models/Store/WareHouseItem');
const add_New_Item_To_wareHouse = async (req,res) => {
   const item_set=req.body;
   console.log("🚀 ==> file: WareHouseAdjustments.js:6 ==> constadd_New_Item_To_wareHouse= ==> item_set:", item_set);
  if(!(item_set.Carton_number)){
    if(!(item_set.from_Carton_Number) || !(item_set.to_Carton_Number)){
      throw new BadRequestError("please provide from carton number and to carton number")
     }
     else{
      const start=item_set.from_Carton_Number
      const end=item_set. to_Carton_Number
      for(let i=start;i<=end;i++){
       var myItem={
         item:item_set.item,
         Carton_Number:i,
         StoredAt:item_set.StoredAt
       }
       await ContainedItemsModel.create(myItem)
     }
     res.status(StatusCodes.OK).json({msg:"multiple Item Adding Succesfull"})
     }
  }
  else{
var mySingleItem={
  item:item_set.item,
  Carton_Number:item_set.Carton_number,
  StoredAt:item_set.StoredAt
  }
  await ContainedItemsModel.create(mySingleItem)
  res.status(StatusCodes.OK).json({msg:"Single Item Adding Succesfull"})
}
}

const Adjust_wareHouse_Item=async (req,res)=>{

  const {item,From_warehouse,ToWareHouse,Carton_number,from_Carton_Number,to_Carton_Number}=req.body;
  // if(!item || !From_warehouse || !ToWareHouse || !Carton_number || (!from_Carton_Number || !to_Carton_Number))
  //   throw new BadRequestError("please provide all data required to make transfer")
  if(Carton_number != null){
  const myItem=await ContainedItemsModel.findOne({item:item,Carton_Number:Carton_number,WareHouseId:From_warehouse})
 
  if(!myItem){
    throw new BadRequestError("item is not available ");
  }
  const transfered_item=await ContainedItemsModel.findOneAndUpdate(WareHouseItem._id,{WareHouseId:ToWareHouse},{new:true,runValidators:true})
  await AddStockAdjustments.create({item,From_warehouse,ToWareHouse,Carton_number});
  res.status(StatusCodes.OK).json({msg:`succesfully transfered item ${transfered_item.item} from ${From_warehouse} to ${ToWareHouse}`})
  }
  else if (from_Carton_Number != null && to_Carton_Number != null){
    var myItem=[]
    for (let i=from_Carton_Number;i<=to_Carton_Number;i++){
       item=await ContainedItemsModel.findOne({item:item,Carton_Number:i,WareHouseId:From_warehouse});
      if(!myItem[i]){
        throw new BadRequestError(`carton number ${i} for ${item.title} is not available `)
      }
      await ContainedItemsModel.findOneAndUpdate(WareHouseItem._id,{WareHouseId:ToWareHouse},{new:true,runValidators:true})
      await AddStockAdjustments.create({item,From_warehouse,ToWareHouse,Carton_number});
  }
  }
}


module.exports={add_New_Item_To_wareHouse,Adjust_wareHouse_Item};