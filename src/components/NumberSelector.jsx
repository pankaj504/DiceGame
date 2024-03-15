import styled from 'styled-components';

const NumberSelector = ({setError,error,selectedNumber,setSelectedNumbers}) => {
  
  const arrNumber = [1, 2, 3, 4, 5, 6];


  const numberSelectorHandler=(value)=>{
    setSelectedNumbers(value);
    setError("");
  }
  return (
    <NumberSelectorContainer>
    <p className='error'>{error}</p>
      <div className="flex">
        {arrNumber.map((value, index) => (
          <Box
            isSelected={value === selectedNumber}
            key={index}
            onClick={()=>numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>SelectNumber</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
  .flex {
    display: flex;
    gap: 24px;
   
  }
  p {
      font-size: 24px;
      font-weight: 700;
    }
    .error{
      color: red;
    }
`;
const Box = styled.div`
  font-size: 34px;
  font-weight: 700;
  width: 72px;
  height: 72px;
  border: 1px solid black;
  /* Additional styles for centering content */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? 'black' : 'white')};
  color: ${(props) => (!props.isSelected ? 'black' : 'white')};
`;
