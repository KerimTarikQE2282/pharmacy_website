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
      const start=item_set.from_Carton_Number
      const end=item_set. to_Carton_Number
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
    await ContainedItemsModel.create({
      item: item_set.item,
      Carton_Number: item_set.Carton_number,
      StoredAt: item_set.To_WareHouse,
      itemWentTo: [item_set.To_WareHouse] // Directly set the array with the initial value
  });
  
    console.log("🚀 ==> file: WareHouseAdjustments.js:39 ==> constadd_New_Item_To_wareHouse= ==> item_set.To_WareHouse:", item_set.To_WareHouse);

  res.status(StatusCodes.OK).json({msg:"Single Item Adding Succesfull"})
}
}



const Adjust_wareHouse_Item=async (req,res)=>{

  const {item,From_warehouse,To_WareHouse,MyCarton_number,from_Carton_Number,to_Carton_Number}=req.body;
  if(item != null && From_warehouse!= null && To_WareHouse!= null && MyCarton_number!= null){
    const FromWareHouse=warehouse.find({_id:From_warehouse})
    const ToWareHouse=warehouse.find({_id:To_WareHouse})
    MyItem=itemModel.find({_id:item})
    if(!FromWareHouse || !ToWareHouse || !item){
      throw new BadRequestError("Please provide Valid values")
    }
    const ItemExists=ContainedItemsModel.find({item:item,Carton_Number:MyCarton_number,StoredAt:FromWareHouse})
    if(!ItemExists){
      throw new BadRequestError(`${MyItem.title} with carton number ${Carton_number} is not in warehouse ${FromWareHouse.WareHouseName}`)
    }
    const transfered_Item = await ContainedItemsModel.findOneAndUpdate(
      { item: item, Carton_Number: MyCarton_number,StoredAt:From_warehouse },
      {
        $push: { itemWentTo: To_WareHouse }, // newItem is the value you want to push to the array
        Carton_Number: Carton_Number,
        StoredAt: To_WareHouse,
        $push:{ItemEntryToWareHouseDate:Date.now}
      },
      { new: true,runValidators:true } // This option returns the updated document
    );

   transfered_Item ? res.status(StatusCodes.OK).JSON({msg:"Completed Succesfully"}) : res.status(StatusCodes.BAD_REQUEST).JSON({msg:"Some Thing went wrong"})
  }
  else if(item != null && From_warehouse!= null && To_WareHouse!= null && from_Carton_Number != null && to_Carton_Number!= null){
    const FromWareHouse=warehouse.find({_id:From_warehouse})
    const ToWareHouse=warehouse.find({_id:To_WareHouse})
    MyItem=item.find({_id:item})

    if(!FromWareHouse || !ToWareHouse || !item){
      throw new BadRequestError("Please provide Valid values")
    }
    for (var i=from_Carton_Number; i<= to_Carton_Number;i++){
      const ItemExists=ContainedItemsModel.find({item:item,Carton_Number:i,StoredAt:FromWareHouse})
      if(!ItemExists){
        throw new BadRequestError(`${MyItem.title} with carton number ${Carton_number} is not in warehouse ${FromWareHouse.WareHouseName}`)
      }
    }
    for (var i=from_Carton_Number; i<= to_Carton_Number;i++){
      const transfered_Item = await ContainedItemsModel.findOneAndUpdate(
        { item: item, Carton_Number: i,StoredAt:From_warehouse },
        {
          $push: { itemWentTo: newItem }, // newItem is the value you want to push to the array
          Carton_Number: i,
          StoredAt: To_WareHouse
        },
        { new: true,runValidators:true } // This option returns the updated document
      );
    }
}
  else{
    throw new BadRequestError("Please provide require data")
  }
}


module.exports={add_New_Item_To_wareHouse,Adjust_wareHouse_Item};