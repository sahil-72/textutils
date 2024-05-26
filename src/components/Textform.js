import React, { useState } from 'react';

export default function (props) {

    const [text, setText] = useState('');

    const handleOnChange = (event) => {

        setText(event.target.value)
    }

    const handleUpClick = () => {
        let txt = text.toUpperCase();
        setText(txt);
    }

    const handleLoClick = () => {
        let txt = text.toLowerCase();
        setText(txt);
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
    }

    const handleClearClick = () => {
        let txt = '';
        setText(txt);
    }


    return (

        <>

            <div className="container my-3">
                <h2>Try Textutils - Word Counter</h2>
                <div className='mb-3'>
                    <label htmlFor="input" className="form-label">{props.placeholder}</label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'darkslategray', color: props.mode==='light'?'black':'white'}} id="input" rows="8"></textarea>
                </div>
            </div>
            <div className='container'>
                <button disabled={text.length===0} onClick={handleUpClick} type='button' className='btn btn-dark mb-2 me-2'>UpperCase</button>
                <button disabled={text.length===0} onClick={handleLoClick} type='button' className='btn btn-dark me-2 mb-2'>LowerCase</button>
                <button disabled={text.length===0} onClick={handleCopyClick} type='button' className='btn btn-dark me-2 mb-2'>Copy Text</button>
                <button disabled={text.length===0} onClick={handleClearClick} type='button' className='btn btn-dark me-2 mb-2'>Clear Text</button>
            </div>

            <div className='container mt-3'>
                <h2>TEXT SUMMARY</h2>
                <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.25 * text.split(' ').filter((element) => {return element.length!==0}).length} seconds read</p>

            </div>

        </>

    )
}
