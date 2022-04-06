import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({preguntas, onDelete, onSubmittedChange}) {

  
  // const liItems = preguntas.map( questObj => {
  //   return <li key={questObj.id} id={questObj.id}>{questObj.prompt}<button onClick={handleDelete}>Delete</button>
  //   <select onChange={handleChange} value={'Change Correct Answer'}>
  //     <option>Change correct answer</option>
  //     <option value={0}>Ans 1</option>
  //     <option value={1}>Ans 2</option>
  //     <option value={2}>Ans 3</option>x
  //     <option value={3}>Ans 4</option></select></li>
  // })
  const liItems = preguntas.map( questObj => <QuestionItem key={questObj.id} question={questObj} onDelete={onDelete} onSubmittedChange={onSubmittedChange}/>)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{liItems}</ul>
    </section>
  );
}

export default QuestionList;
