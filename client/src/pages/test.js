import React, { useState, useEffect, useReducer } from "react";
import API from "../utils/API";
import Display from "../components/Display";
import Toggle from "../components/Toggle";
import Navbar from "../components/Navbar";
import Submit from "../components/Submit";

function Test(){
  //Setting our componenets initial state
  const [questions, setQuestions] = useState([])
  const [choices, setChoices] = useState([])
  const ids = []
  const correctArray = []

  //Creating ids array
  function createIdsArray(){
  for(let i = 0; i < questions.length; ++i){
      ids[i] = questions[i].id;
      correctArray[i] = questions[i].correctAnswer;
  }}

  //Tracking question number with reducer
  const questionNumber = {count: 0};

  function reducer(state, action) {
    switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
    }
  }  
  const [state, dispatch] = useReducer(reducer, questionNumber);

  useEffect(() => {
    loadQuestions()
    createIdsArray()
  }, [])

  function loadQuestions(){
    API.getQuestions() 
      .then(res =>
        setQuestions(res.data)
      )
      .catch(err => console.log(err))
  }

  function saveResults() {
    API.saveQuestions()
      .then(res =>
        setResults(res.data)
      )
      .catch(err => console.log(err))
  }

  function handleFormSubmit(selected, correctAnswer, id) {

    let gotIt = null
    if(selected === correctAnswer)
      gotIt = true
    else
      gotIt = false

    API.saveQuestion(id, {
      answered: true,
      studentAnswered: selected,
      answeredCorrectly: gotIt
    })
  }

  function handleAnswerClick(){

  }

  return(
    <div>
      <Navbar />
      <Display 
        testQuestion={questions[state.count]}
        questionNumberState={state}
        handleAnswerClick={handleAnswerClick}
        choices={choices}
        setChoices={setChoices}
      />
      <Toggle 
        nextQ={()=> dispatch({type: 'increment'})}
        prevQ={()=> dispatch({type: 'decrement'})}
      />
      <Submit 
        handleFormSubmit={handleFormSubmit}
        choices={choices}
        ids={ids}
        correctAnswers={correctAnswers}/>
    </div>
  )
}

export default Test;