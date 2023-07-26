import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Items () {
  const [items, setItems] = useState([])

   useEffect(()=> {
        axios.get('http://localhost:3001')
        .then(result => setItems(result.data))
        .catch(err => console.log(err))
   }, [])

   const delitem =  (id) => {
    axios.delete('http://localhost:3001/deleteItem/'+id)
    .then(res => {console.log(res)
        window.location.reload()
    })
    .catch(err => console.log(err))
   }

    return(
       <div className="d-flex vh-80 bg-info justify-content-center align-items-center">
            <div className='w-100 bg-info rounded p=3'>
            <div align="center">
            <h2>MENU</h2>
            </div>
            <Link to="/create" className='btn btn-success'>Add +</Link>
            <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Sn</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Category</th>
                            <th>Label</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>                    
                    <tbody>
                        {
                            items.map((item) => {
                               return <tr>
                                    <td>{item.sn}</td>
                                    <td>{item.name}</td>
                                    <td>{item.image}</td>
                                    <td>{item.category}</td>
                                    <td>{item.label}</td>
                                    <td>{item.price}</td>
                                    <td>{item.description}</td>
                                    <td>
                                    <Link to={`/update/${item._id}`} className='btn btn-success'>Edit</Link>
                                    <button className='btn btn-danger'
                                    onClick={(e) => delitem(item._id)}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>

           </div>
        </div>
    )
}

export default Items;
