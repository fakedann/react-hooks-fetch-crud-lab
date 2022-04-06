import React from "react";

function QuestionItem({ question, onDelete, onSubmittedChange }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete(e){
    fetch(`http://localhost:4000/questions/${e.target.parentNode.id}`, {
      method: "DELETE"
    })
      .then( r => r.json())
      .then( () => onDelete(parseInt(e.target.parentNode.id)))
    
  }

  function handleChange(e){
    onSubmittedChange(e.target.value, parseInt(e.target.parentNode.parentNode.id))
  }

  return (
    <li id={id}>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
