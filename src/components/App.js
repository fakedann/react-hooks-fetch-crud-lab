import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])
  console.log(questions)

  useEffect( () => {
    fetch('http://localhost:4000/questions')
      .then( data => data.json() )
      .then( questionsData => {
        setQuestions(questionsData)
      })
  }, [])

  function addNewQuestion(element){
    setQuestions([...questions, element])
  }

  function deleteQuestion(id){
    setQuestions( questions.filter( questObj =>  questObj.id !== id) )
  }

  function updateQuestion(index, id){
    const updIndex = {"correctIndex": index }
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(updIndex)
    })
    
    const newArr = questions.filter( questObj => {
      if (questObj.id === id){
        questObj.correctIndex = index
      }
      return questObj
    })
    setQuestions(newArr)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onSubmitForm={addNewQuestion}/> : <QuestionList preguntas={questions} onDelete={deleteQuestion} onSubmittedChange={updateQuestion}/>}
    </main>
  );
}

export default App;
