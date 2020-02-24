import React from "react";
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
  const [questionNumber, dispatch] = useReducer(reducer, questionNumber);

  useEffect(() => {
    loadQuestions()
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

  function handleFormSubmit(input) {
    event.preventDefault();
    let gotIt = null
    if(selected === input.correctAnswer)
      gotIt = true
    else
      gotIt = false

    API.saveQuestion({
      answered: true,
      studentAnswered: studentAnswer,
      answeredCorrectly: gotIt
      
    })
  }

  function handleAnswerClick(){

  }

  return(
    <div>
      <Navbar />
      <Display 
        testQuestion={questions[questionNumber.count]}
        questionNumber={questionNumber}
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
        choices={choices}/>
    </div>
  )
}

export default Test;