"use client";
import { useEffect, useState } from "react";
import CustomerHeader from "./_components/CustomerHeader";
import { useRouter } from "next/navigation";


export default function Home() {
  const [location, setLocation] = useState([]);
  const[restaurant,setRestaurant]=useState([])
  const [selectedLocation, setSelectedLocations] = useState("");
  const [showlocation, setShowLocation] = useState(false);
  const router=useRouter();
  useEffect(() => {
    loadLocation();
   loadrestaurants();
  }, []);

  const loadLocation = async () => {
    let response = await fetch("http://localhost:3000/api/customer/locations");
    response = await response.json();
    if (response.success) {
      setLocation(response.result);
    }
  };
  console.log(location);



   const loadrestaurants=async(params)=>{
   let url= 'http://localhost:3000/api/customer'
    if(params?.location){
      url=url+`?location=${params.location}`

    } else if(params?.restaurant){
      url=url+"?restaurant="+params.restaurant
    }

     let response= await fetch(url)
      response=await response.json();
      if(response.success){
        setRestaurant(response.result);
      }

   }
   console.log(restaurant);
  





  const handlelistItem = (item) => {
    setSelectedLocations(item);
    setShowLocation(false);
    loadrestaurants({location:item })
  
  
  };
  return (
    <main>
      <CustomerHeader />
      <div className="main-page-banner">
        <h1>Food Delivery App</h1>
        <div className="input-wrapper">
          <input
            type="text"
            className="select-input"
            placeholder="Select Place"
            value={selectedLocation}
            onClick={() => setShowLocation(true)}
          />
          <ul className="location-list">
            {showlocation &&
              location.map((item) => (
                <li onClick={() => handlelistItem(item)}>{item}</li>
              ))}
          </ul>

          <input
            type="text"
            className="search-input"
            placeholder="Enter food Name or Restaurant"
            onChange={(e)=>loadrestaurants( {restaurant:e.target.value})}
          />
        </div>
      </div>

     <div className="restaurant-list-container">
      {
      
        restaurant.map((item)=>(
          <div onClick={()=>router.push(`explore/${item.name}?id=${item._id}`)} className="restaurant-wrapper">
            <div className="heading-wrapper">
            <h3>{item.name}</h3>
            <h5>Contact:{item.contact}</h5>
           </div>
            <div className="address-wrapper">
              <div>{item.city},{item.address}</div>
               <div>Email:{item.email}</div>
            </div>
            </div>
            
    
          
        ))
      }
     </div>

      {/* <footer/> */}
    </main>
  );
}
