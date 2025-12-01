import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
interface Props{
  params:{
    id:number;
  }
}
export async function GET(request: NextRequest,{params}:Props){
const {id}=await params;
if(id>10)return NextResponse.json({error:'User not found'},{status:404});
return NextResponse.json({id:1,name:'om'})
}

export async function PUT(request:NextRequest,{params}:Props) {
  const {id} = await params;
  const body = await request.json();
  if(!body.name){
    return NextResponse.json({error:'name is required'},{status:400})
  }
  if(id>10){
    return NextResponse.json({error:'User not found'},{status:404})
  }
  return NextResponse.json({id:1,name:body.name});
  
}
export async function DELETE(request:NextRequest,{params}:Props) {
  const {id} = await params;
  if(id>10){
    return NextResponse.json({error:'user not found'},{status:404})
  }
  return NextResponse.json({},{status:200})
}