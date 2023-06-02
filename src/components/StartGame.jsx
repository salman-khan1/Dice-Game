/* eslint-disable react/prop-types */
import styled from "styled-components"


function StartGame({toggle}) {
  return (
    <Container>
      <div>
   <img src="/images/dices.png" alt="dice" />
      </div>
         <div className="content">
          <h1>DICE GAME</h1>
          <Button onClick={toggle}>
            Play Game
          </Button>
         </div>
    </Container>
  )
}

const Container=styled.div`
  max-width:1180px;
  display:flex;
  margin:0 auto;
  height:100vh;
  align-items:center;

  .content {
    h1{
      font-size:96px;
      white-space:no-wrap;
    }
  }


`
const Button=styled.button`
  color:white;
  background-color: #000000;
  padding:10px 18px;
  border-radius: 5px;
  min-width:220px;
  border:none;
  font-size:16px;
  cursor:pointer;
  border:1px solid transparent;
  transition:0.4s background ease-in;


  &:hover{
    background-color:white;
    border:1px solid black;
    color:black;
    transition:0.3s background ease-in;
    cursor:pointer;
  }
`

export default StartGame