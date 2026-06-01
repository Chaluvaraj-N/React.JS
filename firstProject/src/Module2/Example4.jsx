import React from 'react'
import cars from '../assets/hero.png'
function Example4() {
    let direction="rtl"
    let direction2="ltr"
    let title="Chennai super kings"
let content="csk"
let height="200px"
let width="200px"
 let imageURL="https://www.cricbuzz.com/a/img/v1/192x192/i1/c170508/chennai-super-kings.jpg"
 let images=[
    "https://www.cricbuzz.com/a/img/v1/192x192/i1/c170508/chennai-super-kings.jpg",
    "https://www.cricbuzz.com/a/img/v1/192x192/i1/c170508/chennai-super-kings.jpg",]
    return (
    <div>
      <bdo dir={direction2}>Hello</bdo>
      <abbr title={content}>{title}</abbr>
      {/* 1st way to add image */}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8n2sXo7l3mL1a5j6qj8v9e7u2z5kKZg&usqp=CAU" alt="no image" height={height} width={width}/>
      {/* 2nd way to add image */}
      <img src={imageURL} alt="no image" height={height} width={width}/>
        {/* 3rd way to add image */}
        <img src={imageURL} alt="no image" height={height} width={width}/>
            {/* 4th way to add image */}
            <img src={images[0]} alt="no image" height={height} width={width}/>
             <img src={images[1]} alt="no image" height={height} width={width}/>
             <img src={cars} alt="no image" height={height} width={width}/>
    </div>
  )
}

export default Example4