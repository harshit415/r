import axios from 'axios'
import React, { useState } from 'react'

function Search() {
    const[rno , setRno] = useState("")
    const[apiData , setApiData] = useState([])
    const submitHandler = ()=>{
        let api = "http://localhost:8000/students/search"
        axios.post(api , {rollno:rno}).then((res)=>{
            setApiData(res.data)
        })
    }
  return (
    <>
    <h1>Search Data</h1>
    <hr />
    Enter Rollno : <input type="text" value={rno} onChange={(e)=>{setRno(e.target.value)}} />
    <button onClick={submitHandler}>Search</button>
    <hr />
    <table border="1">
      <thead> <tr>
            <th>Rollno</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>
          </tr></thead>
          <tbody>
            {
              apiData.map((e , index)=>{
                return (
                  <tr key={index}>
                    <td>{e.rollno}</td>
                    <td>{e.name}</td>
                    <td>{e.city}</td>
                    <td>{e.fees}</td>
                  </tr>
                );
              })
            }
          </tbody>
    </table>
    </>
  )
}

export default Search