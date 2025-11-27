import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest){
  return NextResponse.json([{id:1,name:'om'},{id:2,name:'nikhil'}]);
}