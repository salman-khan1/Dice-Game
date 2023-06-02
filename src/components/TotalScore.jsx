import styled from "styled-components"

// eslint-disable-next-line react/prop-types
function TotalScore({score}) {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </ScoreContainer>
)
}

const ScoreContainer=styled.div`
    max-width:200px;
    text-align: center;
    h1{
        font-size:80px;
        line-height:70px;
    }
    p{
        font-size:24px;
        font-weight:500;
    }
`

export default TotalScore