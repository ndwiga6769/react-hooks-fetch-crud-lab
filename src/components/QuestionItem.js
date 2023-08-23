import React,{useState,useEffcet} from "react";

function QuestionItem({ question }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
 const [delet,setDelet] = useState()

  function deleteItem(id) {
    useEffcet(()=>{
    fetch(`http://localhost:4000/questions ${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => setDelet(data));
    })
    console.log(data)
  
  }
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={deleteItem}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
