import React,{ useState } from 'react'
import axios from "axios"


const Insert = () => {
    let [input, setInput] = useState({
        rollno: "",
        name: "",
        city: "",
        fees: ""
    })
   function handleInput(e){
    let {name, value} = e.target
    setInput({
        ...input,
        [name] : value
    })
   }
  function sumbitHandler(e){
    e.preventDefault()
    let api = "http://localhost:8000/students/savedata"
    axios.post(api, input).then((res)=>{
      console.log(res.data)
      alert("data saved")
    })



















  }

  return (
   <>
   <h1>Insert Page</h1>
   <form>
    Enter rollno : <input type="text" name="rollno" onChange= {handleInput} /> <br />
    Enter name : <input type="text" name="name" onChange={handleInput}  /> <br />
    Enter city : <input type="text" name="city" onChange={handleInput} /> <br />
    Enter fees : <input type="text" name="fees" onChange={handleInput} /> <br />
    <button onClick={sumbitHandler}>Save!</button>
   </form>
   
   
   
   </>
  )
}

export default Insert
