import React from 'react'
interface Props{
  params:{
  slug:string[];
  }
  searchParams:{
    sortOrder:string;
  }
}
const ProductDetails = async({params,searchParams}:Props) => {
  const {slug}= await params
  const {sortOrder}= await searchParams;
  return (
    <div>
      <h1>ProductDetails: {slug} sortOrder {sortOrder}</h1>
      
    </div>
  )
}

export default ProductDetails
