import NumberSelector from "./NumberSelector"
import RoleDice from "./RoleDice"
import TotalScore from "./TotalScore"
import styled from "styled-components"
import { useState } from "react"
import {Button, OutlineButton} from '../styled/Button'
import Rules from "./Rules"
function GamePlay() {
  const [selectedNumber,setSelectedNumber]=useState()
  const [currentDice,setCurrentDice]=useState(1);
  const [score,setScore]=useState(0)
  const [error,setError]=useState("")
  const [showRules,setShowRules]=useState(false)

  const generateRandomNumber=(min,max)=>{
    return Math.floor(Math.random() * (max - min) + min);
}
const roleDice=()=>{
  if (!selectedNumber) {
     setError("You have not selected any number, Please select a number")
     return;
  }
  const randomNumber=  generateRandomNumber(1,7)
  setCurrentDice(()=>randomNumber)

  if(selectedNumber===randomNumber){
    setScore((prev)=>prev+randomNumber)
  }else{
    setScore((prev)=>prev-2)
  }

  setSelectedNumber(undefined)
}

const resetScore=()=>{
  setScore(0)
}
  return (
   <MainContainer>
    <div className="top_section">
    <TotalScore score={score}/>
    <NumberSelector  error={error} setError={setError}
    selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
    </div>
    <RoleDice currentDice={currentDice} roleDice={roleDice}/>
    <div className="btns">
      <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
      <Button onClick={()=>setShowRules(prev =>!prev)}>{showRules?"Hide":"Show"} Rules</Button>
    </div>
{ showRules &&  <Rules/>
}   </MainContainer>
  )
}

const MainContainer =styled.main`

  padding-top: 5px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btns{
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap:10px;
    }
`

export default GamePlay