import React from 'react'

function UserCard({name,email,city,company}) {
  return (
    <div style={styles.card}>
      <img src='https://images.rawpixel.com/image_png_social_portrait/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L3Jhd3BpeGVsX29mZmljZV8zNV9iZWF1dGlmdWxfc21pbGluZ195b3VuZ19pbmRpYW5fYnVzaW5lc3Nfd29tYV8yYWM3MjMyNS1jZmU3LTQ5ODgtODBkNi03YjViZTg3ODYzNjMucG5n.png'
      alt='no image' style={styles.image}/>
      <p><b>Name:</b>{name}</p>
      <p><b>Email:</b> {email}</p>
      <p><strong>City:</strong>{city}</p>
      <p><b>Company:</b> {company}</p>
    </div>
  )
}
const styles={
    card:{
        width:"300px",
        backgroundColor:"white",
        padding:"20px",
        borderRadius:"15px",
        boxShadow:"0px 0px 10px black",
        textAlign:"center",
        display:"flex",
        flexDirection:"column"
    },
    image:{
        width:"100px",
        height:"100px",
        borderRadius:"50%",
        marginBottom:"15px",
        float:"left"
    }
}
export default UserCard