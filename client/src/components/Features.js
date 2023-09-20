import React from "react";
import styles from "../styles/Features.module.css";
import Card from "./card"

function Features() {
      return <div className="flex flex-col h-[600px] w-[100%] ">
            <div className={styles.feature}>

            <div className="flex flex-col items-center mb-12 mt-6 pt-4">
            <h1 className="font-semibold text-purple-700 text-xl">What differentiates us from others .   🚀</h1>
            <p className="text-gray-500 text-sm m-4 text-center ml-16 mr-16">"Education is the most powerful weapon which you can use to change the world" and we at Learnify believe that it indeed becomes the most powerful weapon with our varities of features.All the features are designed to make sure learning is fun and ensures quality education.</p>

            </div>


            <div className="flex justify-evenly items-center w-[100%]">
            <Card title="Courses" content="We've online education portal covering software development maths ,physics and coding ." text="/courses" source="fa-solid fa-book-open-reader fa-2xl"></Card>
            <Card title="Quizzes" content="Confident of your skills .Practice them along with our specialised quizzes and get scores . " text="/quizzes" source="fa-regular fa-lightbulb fa-2xl"></Card>
            <Card title="Communication" content="Want to test your readiness for english communications. check out this AI bot." text="/home/conversation" source="fa-solid fa-robot fa-2xl"></Card>
            <Card title="Chat" content="Get answers to all your questions through chat with mentors and your fellow friends." text="/chat" source="fa-regular fa-comment fa-2xl"></Card>
            </div>
           
           



            </div>
      </div>
}

export default Features;