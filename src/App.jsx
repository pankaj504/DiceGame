import StartGame from './components/StartGame';
import './App.css';
import { useState } from 'react';
import Gameplay from './components/Gameplay';
function App() {
  const [isStart, setIsStart] = useState(false);
  const toggleGamePlay = () => {
    setIsStart((prev) =>!prev);
  };
  return (
    <>
      {isStart ? <Gameplay /> : <StartGame  toggle={toggleGamePlay} />}
     
    </>
  );
}

export default App;
