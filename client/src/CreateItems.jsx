import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function CreateItems () {
  const [sn, setSn] = useState()
  const [name, setName] = useState()
  const [image, setImage] = useState()
  const [category, setCategory] = useState()
  const [label, setLabel] = useState()
  const [price, setPrice] = useState() 
  const [description, setDescription] = useState()
  const navigate = useNavigate()

  const Submit = (e) => {
  e.preventDefault();
  axios.post("http://localhost:3001/CreateItems", {sn, name, image, category, label, price, description})
  .then(result => {
    console.log(result)
    navigate('/')
  })
  .catch(err => console.log(err))
}

    return(
        <div className="d-flex vh-100 bg-info justify-content-center align-items-center">
            <div className='w-50 bg-white rounded p=5'>
            <form onSubmit={Submit}>
            <div align="center">
            <h2>Add Items</h2>
            </div>
  <div className='mb-2'>
    <label htmlFor="" >Sn</label>
    <input type="text" placeholder='Enter Sn' className='form-control'
      onChange={(e) => setSn(e.target.value)}/>
  </div>
  <div className='mb-2'>
    <label htmlFor="" >Name</label>
    <input type="text" placeholder='Enter Name' className='form-control'
      onChange={(e) => setName(e.target.value)}
    />
  </div>
  <div className='mb-2'>
    <label htmlFor="" >Image</label>
    <input type="text" placeholder='Enter Image' className='form-control'
      onChange={(e) => setImage(e.target.value)}
    />
  </div>
  <div className='mb-2'>
    <label htmlFor="" >Category</label>
    <input type="text" placeholder='Enter Category' className='form-control'
      onChange={(e) => setCategory(e.target.value)}
    />
  </div>
  <div className='mb-2'>
    <label htmlFor="" >Label</label>
    <input type="text" placeholder='Enter Label' className='form-control'
      onChange={(e) => setLabel(e.target.value)}
    />
  </div>
  <div className='mb-2'>
    <label htmlFor="" >Price</label>
    <input type="text" placeholder='Enter Price' className='form-control'
      onChange={(e) => setPrice(e.target.value)}
    />
  </div>
  <div className='mb-2'>
    <label htmlFor="" >Description</label>
    <input type="text" placeholder='Enter Description' className='form-control'
      onChange={(e) => setDescription(e.target.value)}
    />
  </div>
  <div align="center">
  <button className='btn btn-success'>Submit</button>
  </div>
</form>
                
                </div>
            </div>
    )
}

export default CreateItems;