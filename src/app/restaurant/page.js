'use client'
import { useState } from "react";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignup from "../_components/RestaurantSignup";
import RestaurantHeader from "../_components/RestaurantHeader";
import "./style.css"
import RestaurantFooter from "../_components/RestaurantFooter";
const Restaurant=()=>{
   const [login,setLogin]=useState(true);

return <>
     <div className="container">
       <RestaurantHeader/>
            Restaurant Login /SignUp Page                                   
     {
        login? <RestaurantLogin/> :<RestaurantSignup/>
     }

     <button className="button-link" onClick={()=>setLogin(!login)}>
        {
         login?"Do not have account ? Signup":"Already have account ?Login"
        }
     </button>
     </div>
     <RestaurantFooter/>
   </>
}

export default Restaurant;