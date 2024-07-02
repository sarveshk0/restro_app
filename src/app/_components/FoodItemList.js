import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const FoodItemList = () => {
const[foodItem,setFoodItem]=useState()
const router=useRouter();


 useEffect(()=>{
   loadFoodItem()
 },[])


const loadFoodItem= async(id)=>{
    const restaurantData=JSON.parse(localStorage.getItem('restaurantUser'));
     const resto_id=restaurantData._id;
   console.log(restaurantData);
    let response=await fetch(`http://localhost:3000/api/restaurant/foods/${resto_id}`);
       response=await response.json();
       console.log(response);
       if(response.success){
          setFoodItem(response.result)
       } else(
        alert("foodItem list not found")
       )
    }

       const deleteFoodItem =async(id)=>{
        let response=await fetch(`http://localhost:3000/api/restaurant/foods/${id}`,{
            method:'delete'
       })
       response=await response.json();
       if(response.success){
        loadFoodItem();
       }else{
        alert("fooditem not deleted")
       }
       }


  return (
    <> <div>FoodItem</div>
      <table>
         <thead>
            <tr>
                    <td>S.NO</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Description</td>
                    <td>Image</td>
                    <td>Operation</td>
            </tr>
         </thead>
         <tbody>
            
                {
                 foodItem && foodItem.map((item,key)=>(
                    <tr key={key}>
                     <td>{key+1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td><img src={item.img_path} /></td>
                    <td>
                     <button onClick={()=>deleteFoodItem(item._id)}>Delete</button>
                     <button onClick={()=>router.push(`dashboard/${item._id}`)}>Edit</button>
                     </td>
                    </tr>

                 ))
                }

            
         </tbody>
      </table>
    </>
   
    
  )
}

export default FoodItemList