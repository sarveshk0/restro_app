import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(){

    await mongoose.connect(connectionStr,{useNewUrlParser:true});
   let result=await restaurantSchema.find();
   result=result.map((item)=>item.city.charAt(0).toUpperCase()+item.city.slice(1))    // first letter will be captail
   result=[...new Set(result.map((item)=>item))]   //this function remove duplicate entry
    return NextResponse.json({ result,success:true})
}