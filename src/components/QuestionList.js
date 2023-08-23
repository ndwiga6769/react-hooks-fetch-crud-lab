import React, { useEffect, useState } from "react";
import QuestionItem from './QuestionItem'


function QuestionList() {
  const [questions,setQuestions] = useState([])
  useEffect(()=>{
    fetch ('http://localhost:4000/questions')
    .then(res => res.json())
    .then(data => setQuestions(data))
  },[])


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(item =>(
        <QuestionItem key = {item.id}
        question={item}
        />
      ))}</ul>
    </section>
  );
}

export default QuestionList;
