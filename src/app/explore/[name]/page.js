'use client'
import CustomerHeader from "@/app/_components/CustomerHeader"
import RestaurantFooter from "@/app/_components/RestaurantFooter"
import { useEffect, useState } from "react"


const page = (props) => {
    const name=props.params.name
const[restaurantDetails,setRestaurantDetails]=useState();
    const[foodItems,setFoodItems]=useState([])
    const[cartData,setCartData]=useState();
  
    useEffect(()=>{
    loadRestaurantDetails();
    },[])

  const loadRestaurantDetails= async()=>{
        const id=props.searchParams.id
     let response=await fetch("http://localhost:3000/api/customer/"+id)
      response= await response.json()
      if(response.success){
        setRestaurantDetails(response.details)
        setFoodItems(response.fooditems)

      }
      
  }

  const addToCart=(item)=>{
    setCartData(item);
  }

  return (
    <>
    <CustomerHeader cartData={cartData}/>
    <div className="detail-page-banner">
    
    <h1>{decodeURI(name)}</h1>
    </div>
     <div className="detail-wrapper">
        <h4>Contact:{restaurantDetails?.contact}</h4>
        <h4>City:{restaurantDetails?.city}</h4>
        <h4>Address: {restaurantDetails?.address}</h4>
        <h4>Email:{restaurantDetails?.email}</h4>
     </div>
      <div className="food-item-wrapper">
        { 
            foodItems.map((item)=>(
                <div className="list-item">
                   <img style={{width:100}}  src={item.img_path}/>
                    <div>
                    <div>{item.name}</div>
                    <div> Rs:{item.price}</div>
                    <div className="description">{item.description}</div>
                    <button onClick={()=>addToCart(item)}>Add to Cart</button>
                    </div>
                </div>
            ))
        }
      </div>
      <RestaurantFooter/>
    </>


  )
}

export default page