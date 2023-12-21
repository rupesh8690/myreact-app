import React, { useState } from 'react'
import PropTypes from 'prop-types'



export default function TextBox(props) {
      // Declare a new state variable, which we'll call "count"
  const [text, setText] = useState('Enter text here');

  const handleUpClick=()=>
  {
    // console.log("upper case was clicked" + text);
    console.log(` upper case was clicked ${text}`);
    let newText=text.toUpperCase();
    setText(newText );
  }

  const handleOnChange=(event)=>
  {
    console.log("on change");
    setText(event.target.value);

    
  }
  return (
    <div>
        <div className="container mt-4">
           <h1>{props.heading}</h1>

          <textarea className="form-control" id="exampleFormControlTextarea1" value={text} rows="20" onChange={handleOnChange} ></textarea>
        </div>

        <div className="container">
        <button className='btn btn-primary mt-3' onClick={handleUpClick} value={text}>Convert to uppercase</button>

        </div>
  

    </div>
    

 
  )
}
