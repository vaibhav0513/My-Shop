import React, { useState } from 'react'
import "./formStyle.css"

function Form() {
    const [formdata, setFormData] = useState({name:"", email:"",phone:"",text:""});
    const handleChange= (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormData({...formdata, [name]: value});
        console.log(formdata);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:3000/products",{
            method: "POST",
            body:JSON.stringify(formdata),
            headers:{
                "Content-Type": "application/json",
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            alert("data inserted successfully")
            setFormData({name:"", email:"", phone:"", text:""})
        })
        .catch((error) => {
            console.error("Fetch error:", error);
        });
    }
  return (
    <div className='form'>
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor= "name">Name:</label><br/>
                <input type="text" id='name' name='name' value={formdata.name} onChange={handleChange}/><br/>

                <label htmlFor="email">Email Address:</label><br/>
                <input type='email' id='name' name='email' value={formdata.email} onChange={handleChange}/> <br/>

                <label htmlFor='phone'>Phone Number</label><br/>
                <input type='number' id='phone' name='phone' value={formdata.phone} onChange={handleChange}/><br/>

                <label htmlFor='text'>Text</label><br/>
                <input type='text' id='text' name='text' value={formdata.text} onChange={handleChange}/><br/>

                <button type='submit'>Submit</button>
            </form>
        </div>
      
    </div>
  )
}

export default Form
