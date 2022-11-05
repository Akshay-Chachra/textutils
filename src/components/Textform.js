import React,{useState} from 'react'
import PropTypes from 'prop-types'

 


export default function Textform(props) {
  
  function handleClick(){
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to upper case !", "success")
  
  }
  function handleOnChange(event){
    setText(event.target.value)
    
  }
  function clearText(){

    setText("");
    props.showAlert("Cleared", "success")
  }
  function handleCopyText(){

    navigator.clipboard.writeText(text)
    props.showAlert("Copied to clipboard!", "success")
  }
  function laughingMeme(){
    
      setText('What do you call an ant who fights crime? A vigilANTe!')

  }
  const [text, setText] = useState('Enter your text here')

  return (
    <>  
      <div className='container my-5'>
        <h1 style={{color: props.mode === 'light'?'#251B37':'white'}}>{props.heading}</h1>
        <div className="my-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode === 'light'?'white':'#042745', color: props.mode === 'light'?'#212529':'white'}}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleClick}>Convert to Uppercase</button>
        <button className="btn btn-primary ms-3" onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary ms-3" onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-primary ms-3" onClick={laughingMeme}>Lame Joke</button>
      </div>
      <div className="container" style={{color: props.mode === 'light'?'#212529':'white'}}>

          <h1 className="my-3">Your Text Summary</h1>
          <p>{text.split(' ').length} words and {text.length-(text.split(' ').length-1)} characters</p>
          <p>Text read in {0.008 * text.split(" ").length} minutes</p>
          <h1 className="prev">Preview</h1> 
          <p>{text}</p>

      </div>
        
    </>
  )
}

Textform.propTypes = {
    label : PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired
}

Textform.defaultProps = {

    label: 'Example Text',
    heading: 'Your Heading'
}