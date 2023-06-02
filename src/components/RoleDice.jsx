/* eslint-disable no-unused-vars */
import styled from "styled-components"

// eslint-disable-next-line react/prop-types
function RoleDice({currentDice,roleDice}) {

 
  return (
    <DiceContainer>
        <div className="dice" onClick={roleDice}>
            <img src={`/images/dice_${currentDice}.png`} alt="dice 1" />
            <p>Click on Dice to Roll</p>
        </div>
    </DiceContainer>
  )
}

const DiceContainer = styled.div`
    margin-top:29px;
    display: flex;
    align-items: center;
    flex-direction: column;

    .dice{
        cursor: pointer;
    }
    p{
        font-size:24px;
    }
`
export default RoleDice