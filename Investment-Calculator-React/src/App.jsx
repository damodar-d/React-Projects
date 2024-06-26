import Header from "./components/Header"
import UserInput from "./components/UserInput"
import { useState } from "react"
import Results from "./components/Results"
function App() {
  const[userInput, setUserInput]=useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
})

function handleChange(inputKey, newValue){

  console.log('inputkey  ', inputKey)
  console.log('newValue  ', newValue)
  setUserInput( (prevUserInput) => {
    console.log('Changing User input')
      return{
          ...prevUserInput,
          [inputKey]: +newValue
      }
  } )
  console.log(userInput)
}
  return (
    <>
    <Header/>
    <UserInput handleChange={handleChange} userInput={userInput}/>
    <Results userInput={userInput}/>
    </>
  )
}

export default App
