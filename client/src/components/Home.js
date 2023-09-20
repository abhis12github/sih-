import React from "react";
import Homeimg from "../images/Home.png";
import Circle from "../images/Lovepik_com-401497396-purple-gradient-circle.png"


function Home() {
    return (
        <div className="flex flex-col h-[100vh]">
            <div className="h-14 flex bg-[#DBD4FF] justify-between items-center pt-3">
                <h1 className="text-xl text-purple-950 font-semibold px-10">Learnify</h1>

                <div className="flex items-center justify-end px-6 w-[50%]">
                    <button className="px-2 mx-2 border-solid border-[2px] border-purple-900 bg-[#DBD4FF] text-purple-950 text-xs font-semibold rounded-xl py-[6px] w-[12%] hover:bg-purple-950 hover:text-white">Login</button>
                    <button className="px-2 mx-1 bg-purple-900 text-white text-xs rounded-xl py-[8px] w-[12%] font-semibold shadow-sm hover:bg-purple-600">Sign Up</button>
                </div>

            </div>
            <div className="flex justify-center items-center bg-[#DBD4FF] ">
                <div className="flex flex-col items-start w-[40%]">
                    <img src={Circle} className="h-[140px] w-[140px] self-center"></img>            
                    <h1 className="text-xl px-12 text-gray-600">Kids Learning center</h1>
                    <h1 className="px-12 text-4xl font-semibold">New approach to <br></br><span className="text-purple-500 font-semibold text-2xl">Kids Education</span></h1>
                    <h4 className="px-12 font-medium text-gray-500">With the help of E-learning, create your own path and drive on your skills on your own to achieve what you seek.</h4>
         

                    <button className="px-8 mx-12 my-6 bg-purple-900 text-white text-xs rounded-xl py-[8px] font-semibold shadow-sm hover:bg-purple-600"> Get started  <i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="flex justify-end items-center w-[60%]">
                    <img src={Circle} className="h-[140px] w-[140px] self-auto "></img>  
                    <img src={Homeimg} className="w-[70%] h-[70%] "></img>
                </div>
              

            </div>
        </div>
    )

}//E3F2C1

export default Home;
