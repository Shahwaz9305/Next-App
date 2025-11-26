import React from 'react'
interface Props{
  params:{
  slug:string[];
  }
}
const ProductDetails = async({params}:Props) => {
  const {slug}= await params
  return (
    <div>
      <h1>ProductDetails: {slug}</h1>
      
    </div>
  )
}

export default ProductDetails
