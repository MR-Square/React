import React,{useState} from 'react'

export default function MyForm(props) {
    const setName = (event) => {
        userName(event.target.value);
    }
    const handleOnChange = (event) => {
        console.log("you are changing the content.");
        userName(event.target.value);
    }
    const [name,userName] = useState("username"); 
  return (
    <>
        <h1>{props.heading}</h1>
        <form action="" className="my-form">
            <label htmlFor="name">Enter your name:</label>
            <input type="text" value={name} onClick={setName} onChange={handleOnChange} />
        </form>
    </>
  )
}
