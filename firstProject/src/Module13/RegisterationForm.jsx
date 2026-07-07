import React from 'react'
import {useState} from 'react'
function RegisterationForm() {
  const[formData,setFormData]=useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  } )
  const[errors,setErrors]=useState({})
  const[successMessage,setSuccessMessage]=useState("")
  const handleChange=(e)=>{
    const{name,value}=e.target
    setFormData({
      ...formData,[name]:value,
    })

  }

  const ValidateForm=(e)=>{
    e.preventDefault()
    let newErrors={}
    //name validation
    if(!formData.name.trim()){
      newErrors.name="Name is required"
  }
  //email validation
  if(!formData.email.trim()){
    newErrors.email="Email is required"
  }
  else if(!/\S+@\S+\.\S+/.test(formData.email)){
    newErrors.email="Email is invalid"
  }
  //password validation
  if(!formData.password){
    newErrors.password="Password is required"
  }
  else if(formData.password.length<6){
    newErrors.password="Password must be at least 6 characters"
  }
  //confirm password validation
  if(!formData.confirmPassword){
    newErrors.confirmPassword="Confirm Password is required"
  }
  else if(formData.password !== formData.confirmPassword){
    newErrors.confirmPassword="Passwords do not match"
  }

  else{
      setErrors(newErrors)
    setSuccessMessage("Registration successful!")
  }
}
  return (
    <div style={{
        width: "400px",
        margin: "30px auto",
        padding: "20px",
        boxShadow: "0px 0px 10px gray",
        borderRadius: "10px",
        fontFamily: "Arial",
    }}>
      <h2 style={{ textAlign: "center", color: "blue" }}>
        Registration Form
      </h2>
      <form onSubmit={ValidateForm}>
        <div style={{ marginBottom: "15px" }}>
   <label>Name</label>
   <input type="text" value={formData.name} name="name"
   onChange={handleChange}
   style={{
    width: "90%",
    padding: "10px",
    marginTop: "5px",
   }}/>
   {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
          <div style={{ marginBottom: "15px" }}>
   <label>Email</label>
   <input type="email" value={formData.email} 
   name="email"
   onChange={handleChange}
   style={{
    width: "90%",
    padding: "10px",
    marginTop: "5px",
   }}/>
   {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
          <div style={{ marginBottom: "15px" }}>
   <label>Password</label>
   <input type="password" value={formData.password}
      onChange={handleChange}
   name="password"
   style={{
    width: "90%",
    padding: "10px",
    marginTop: "5px",
   }}/>
   {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
         <div style={{ marginBottom: "15px" }}>
   <label>ConfirmPassword</label>
   <input type="password" value={formData.confirmPassword}
      onChange={handleChange}
   name="confirmPassword"
   style={{
    width: "90%",
    padding: "10px",
    marginTop: "5px",
   }}/>
   {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword}</p>}
        </div>
        <button type="submit" style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer"
        }}>
            Register
        </button>
      </form>
      {successMessage && <p style={{ color: "green", marginTop: "10px" }}>{successMessage}</p>}
    </div>
  )
}

export default RegisterationForm