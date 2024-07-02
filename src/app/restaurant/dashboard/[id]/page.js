'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { resolve } from "styled-jsx/css";
const editFooditem = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDesription] = useState("");
  const [error, setError] = useState(false);
   const router=useRouter();
   const id=props.params.id
   console.log(id);

   useEffect(()=>{
  handleLoadFoodItem()
   },[])


  const handleLoadFoodItem=async()=>{
    let response=await fetch(`http://localhost:3000/api/restaurant/foods/edit/${id}`)
    response=await response.json();
   // console.log(response);
   if(response.success){
    setName(response.result.name);
    setPrice(response.result.price);
    setPath(response.result.img_path);
    setDesription(response.result.description);
   }

  }


  const handleeditFoodItem = async () => {
    console.log(name, price, path, description);
    if (!name || !path || !price || !description) {
      setError(true);
      return false;
    } else {
      setError(false);
    }
    let response=await fetch(`http://localhost:3000/api/restaurant/foods/edit/${id}`,{
        method:'PUT',
        body:JSON.stringify({name,price,img_path:path,description})
    });
    response=await response.json()
    if(response.success){
        router.push(`../dashboard`)
     }else{
        alert("Data is not updated please try again")
     }
  };

  return (
    <div className="container">
      <h1>Update Food Item</h1>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter food name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error && !name && (
          <span className="input-error">Please enter valid name </span>
        )}
      </div>

      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {error && !price && (
          <span className="input-error">Please enter valid price </span>
        )}
      </div>

      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter Path"
          value={path}
          onChange={(e) => setPath(e.target.value)}
        />
        {error && !path && (
          <span className="input-error">Please enter valid path </span>
        )}
      </div>

      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDesription(e.target.value)}
        />
        {error && !description && (
          <span className="input-error">Please enter valid description </span>
        )}
      </div>

      <div className="input-wrapper">
        <button className="button" onClick={handleeditFoodItem}>
          Update Food Item
        </button>
      </div>
      
      <div className="input-wrapper">
        <button className="button" onClick={()=>router.push(`../dashboard`)}>
          Back to food item List
        </button>
      </div>
    </div>
  );
};

export default editFooditem;
