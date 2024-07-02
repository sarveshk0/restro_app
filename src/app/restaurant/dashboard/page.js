"use client"
import RestaurantHeader from "@/app/_components/RestaurantHeader"

import './../style.css'
import AddFooditem from "@/app/_components/AddFoodItem"
import { useState } from "react"
import FoodItemList from "@/app/_components/FoodItemList"
const Dashboard = () => {
  const[additem,setAddItem]=useState(false);
  return (
  <div>
    <RestaurantHeader/>
    <button onClick={()=>setAddItem(true)}>Add Food</button>
    <button onClick={()=>setAddItem(false)}>Dashboard</button>
    
    
    {
      additem? <AddFooditem  setAddItem={setAddItem}/> :<FoodItemList/>
    }
    
  </div>
   

    
  
  )
}

export default Dashboard