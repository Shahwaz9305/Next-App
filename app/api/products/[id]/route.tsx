import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
interface Props{
  params:{
    id:number
  }
}
export async function PUT(request:NextRequest,{params}:Props) {
  const {id}= await params
  const body = await request.json();
  const validation = schema.safeParse(body);
  if(!validation.success){
    return NextResponse.json(validation.error,{status:400})
  }
  return NextResponse.json({id:id,name:body.name,price:body.price},{status:200})
}
export async function DELETE(request:NextRequest,{params}:Props) {
   const {id}= await params
  const body = await request.json()
  const validation = schema.safeParse(body);
   if(!validation.success)
   {
    return NextResponse.json(validation.error,{status:400})
   }
   return NextResponse.json({},{status:200})
}