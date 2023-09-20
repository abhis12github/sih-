import React from "react";
import { Link } from "react-router-dom";


function Card(props) {
    return (
        <div className="flex flex-col items-center h-[285px] w-[240px] p-4  bg-white shadow-sm shadow-slate-400 border-solid border-slate-300 rounded-2xl mt-4 mb-6 hover:scale-110 transition duration-500">
            <div className="h-[60px] w-[60px] bg-purple-200 rounded-full flex items-center justify-center"><i class={props.source}></i></div>
            <h1 className="text-lg font-semibold text-gray-600">{props.title}</h1>
            <p className="text-gray-500 text-sm pl-2">{props.content}</p>
            <button className="px-4 mx-7 my-7 bg-purple-500 text-white text-xs rounded-xl py-[5px] font-semibold shadow-sm hover:bg-purple-600"> <Link to={props.text}>Learn More</Link> </button>
           
        </div>

    );
}

export default Card;



