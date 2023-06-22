import React,{useState} from 'react';




export default function TextForms() {



    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick= ()=>{
        let newText  = text.toLowerCase();
        setText(newText);
    }

    const handleClrClick = ()=>{
        setText('');
    }

    const handleSpeakClick = ()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }


    // this is basically allowing me to change the Text 
    const handleonChange = (event)=>{
        setText(event.target.value);
    }


    const[text,setText] = useState('');


  return (
    <>
    <div className='  flex flex-col  border-black p-5'>

        <label className='text-2xl font-bold' htmlFor="">Write here:</label>
        <textarea placeholder='Write your thoughts here' value={text} onChange={handleonChange}  className='border-slate-400 border-2  rounded-md p-1' name="" id=""  rows="8"></textarea>
        <div className="btn flex gap-5">
            <button onClick={handleUpClick} className='bg-blue-500 w-1/5 py-2 mt-4 text-white border-black border rounded-sm active:scale-95 transition-all select-none'>Convert to Uppercase</button>
            <button onClick={handleLowClick} className='bg-blue-500 w-1/5 py-2 mt-4 text-white border-black border rounded-sm active:scale-95 transition-all select-none'>Convert to Lowercase</button>
            <button onClick={handleSpeakClick} className='bg-blue-500 py-2 px-5 mt-4 text-white border-black border rounded-sm active:scale-95 transition-all select-none'>Speak Up🔊</button>
            <button onClick={handleClrClick} className='bg-red-500  py-2 px-5 mt-4 text-white border-black border rounded-sm active:scale-95 transition-all select-none'>Clear</button>
        </div>
    </div>

    <div className="container m-5 select-none">
        <p>You Entered: <b>{text.split(' ').length}</b> Words</p>
        <p>You Entered: <b>{text.length}</b> Characters</p>
        
        
    </div>

    

    </>
  )
}
