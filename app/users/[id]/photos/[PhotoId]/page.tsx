import React from 'react'
interface Props{
  params:{
    PhotoId:number;
  }
}
const PhotosDetailspage = async({params}:Props) => {
  const {PhotoId}= await params
  return (
    <div>
      <h1>PhotosDetailspage {PhotoId}</h1>
    </div>
  )
}

export default PhotosDetailspage
