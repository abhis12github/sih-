import React, { useState } from 'react';
import generate from "./generate.js";
import image from "../images/unnamed.png";
import Conversationcss from "../styles/Conversation.module.css"

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


function Conversation() {
  
  const { transcript, browserSupportsSpeechRecognition, resetTranscript} = useSpeechRecognition();
  const[text,setText]=useState("");

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  function resetText(){
    setText("");
  }
    
  
  async function handleClick(){
    const result=await generate(transcript);
    setText(result);
  }

  function startListening(){
  return  SpeechRecognition.startListening({ continuous: true,language: 'en-IN' });
  }

  function stopListening(){
  return  SpeechRecognition.stopListening();
  }


  return (

    <div className={Conversationcss.start}>
            <div className="flex flex-col">
      <div className="flex flex-col py-1 justify-center items-center">
      <img src={image} alt="robo_img" className="h-[200px] w-[450px]"></img>
      <p className="font-semibold">I am an AI bot that helps you in your interview preperation.</p>
      <p className="font-medium text-sm">Give me sentences and i will correct them for you.</p>
      </div>
      <div className="flex flex-row justify-center items-center">
      <div  className="w-[38%] h-[200px] border-1  border-gray-200 m-1 shadow-md shadow-gray-400 bg-[#F1F0E8] p-5 rounded-md">
      <p className="text-center font-semibold py-1 text-sm" >Your text</p>
      <p className="text-sm text-red-500">{transcript}</p>
      </div>
      <div  className="w-[37%] h-[200px] border-1  border-gray-200 m-1 shadow-md shadow-gray-400 bg-[#F1F0E8] p-5 rounded-md">
      <p className="text-center font-semibold py-1 text-sm" >AI response</p>
      <p className="text-sm text-green-800">{text}</p>
      </div>
      </div>
      
      <div className='flex flex-row justify-center items-center mt-8'>
     
      <button className="px-10" onClick={startListening}><i class="fa-solid fa-microphone "></i></button>
      <button className="px-10" onClick={stopListening}><i class="fa-solid fa-microphone-slash "></i></button>
      <button className="px-10" onClick={() => { resetTranscript(); resetText();}}><i class="fa-solid fa-arrows-rotate fa-spin"></i></button>
      <button className="px-10" onClick={handleClick}><i class="fa-solid fa-arrow-up fa-shake"></i></button>
      </div>


    </div>
    </div>

  );
}

export default Conversation;

