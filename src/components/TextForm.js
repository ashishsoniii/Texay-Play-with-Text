// Use rfc --> to bring react fuction-based component
// import PropTypes from 'prop-types'

import React, { useState } from 'react'



export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was Clicked " + text);
        let newVar = text.toUpperCase();
        setText(newVar);
        props.showAlert("Converted To Upper Case", "success");
    }
    const handleLowerClick = () => {
        console.log("LowerCase was Clicked " + text);
        let newVar = text.toLowerCase();
        setText(newVar);
        props.showAlert("Converted To Lower Case", "success");
    }
    const handleClearClick = () => {
        console.log("clear was Clicked " + text);
        let newVar = "";
        setText(newVar);
        props.showAlert("Text Box is Cleared!", "success");
    }
    const handleReverseClick = () => {
        console.log("Reverse Text was Clicked " + text);
        let newVar = text.split("").reverse().join("");
        setText(newVar);
        props.showAlert("Text Reversed!", "success");
    }
    const handleCopyClick = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!", "success");

    }

    const handleSpaceClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Excess Space is Removed!", "success");

    }
    // const Reset = () => {
    //     console.log("Reset was Clicked " + text);
    //     let newVar = text;
    //     setText(newVar);
    // }

    const handleONchnage = (event) => {     //this fucntion needs to create everytime with enent link onclick... as if not we willnnot be able to add text in text box 
        console.log("OnChange");
        setText(event.target.value); // this is necessary if we use states an d change text!
    }


    const [text, setText] = useState("Enter Text Here");
    // text = "New text"; // wrong way to chang etext!;
    // setText("Hello This is seted text"); //right way to set text in states!;
    return (
        <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#0d2470' }}>
            <h1>{props.heading}</h1>

            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">Example textarea</label>
                <textarea className="form-control" value={text} onChange={handleONchnage} style={{ backgroundColor: props.mode, color: props.mode === 'dark' ? 'white' : '#0d2470' }} id="myBox" rows="8"></textarea>
            </div>

            <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowerClick} >Convert to LowerCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick} >Copy Text </button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleReverseClick} >Reverse Text </button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleSpaceClick} >Remove Extra Spaces </button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear</button>


            {/* <button className="btn btn-primary" onClick={Reset} >Reset</button> */}


            <div className="container my-4 style ={{ color:props.mode ==='dark'?'white' :'#0d2470'}}">
                <h1>Your Text summary</h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words & {text.length} Characters</p>
                <p>{(0.08 * text.length) / 10} Minutes Read!</p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something in TextBox to Preview it!"}</p>
            </div>

        </div>
    )
}
