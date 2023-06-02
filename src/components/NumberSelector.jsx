import styled from "styled-components"


// eslint-disable-next-line react/prop-types
function NumberSelector({error,setError,selectedNumber,setSelectedNumber}) {
    const arrNumber=[1,2,3,4,5,6];

    const handleNumberSelect=(value)=>{
      setSelectedNumber(value)
      setError("")
    }
    return (
    <NumberSelectorContainer className="flex">
      <p className="error">{error}</p>
  <div className="flex">
  {arrNumber.map((value, i) => (
      <Box key={i}
      isSelected={value===selectedNumber}
      onClick={()=>handleNumberSelect(value)}>
        {value}
      </Box>
    ))}
  </div>
  <p>Select Number</p>
  </NumberSelectorContainer>
  )
}

const NumberSelectorContainer=styled.div`
.error{
  color:red;
}
    display: flex;
    flex-direction: column;
    align-items:end;
  .flex{ 
    display: flex;
    gap:34px;
}
p{
    font-size:24px;
    font-weight:700px;
}
`
const Box=styled.div`
    width:50px;
    height:50px;
    border:1px solid black;
    display:grid;
    place-items:center;
    font-size:24px;
    font-weight:700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
  
`

export default NumberSelector