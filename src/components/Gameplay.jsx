import { useState } from 'react';
import NumberSelector from './NumberSelector';
import RollDice from './RollDice';
import TotalScore from './TotalScore';
import styled from 'styled-components';
import { Button, OutlineButton } from '../styled/Button';
import Rules from './Rules';

const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumbers] = useState();
  const [currentDice, setCurrentDices] = useState(1);
  const [error, setError] = useState('');
  const [showRules, setShowRules] = useState(false);
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = ({ roleDice, currentDice }) => {
    if (!selectedNumber) {
      setError('You Have Not Select Any Number');
      return;
    }

    setSelectedNumbers(undefined);

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDices((prev) => randomNumber);

    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
  };
  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumbers={setSelectedNumbers}
        />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={()=>setShowRules(prev=>!prev)}>
          {showRules ? 'Hide ' : 'Show '}Rules
        </Button>
        {showRules && <Rules />}
      </div>
    </MainContainer>
  );
};

export default Gameplay;
const MainContainer = styled.main`
  padding-top: 70px;
  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .btns {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
