import './App.css';
import { useEffect, useState } from 'react';
import FloorSelector from './components/floor_selector/FloorSelector';
import FloorDisplay from './components/floor_display/FloorDisplay';
import LiftIndicator from './components/lift_indicator/LiftIndicator';
import Title from './components/title/Title';

function App() {
  const [floor, setFloor] = useState(0)
  const [value, setValue] = useState(0);
  useEffect(() => {
     var i = floor;
    const interval = setInterval(() => {
      if (value > i) {
        setFloor((floor) => floor + 1);
        i = i + 1;
      } else {
        setFloor((floor) => floor - 1);
        i = i-1
      }
      if (i === value) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval)
  },[value])
  return (
    <div className="App">
      <Title />
      <div className="container">
      <FloorSelector floor={floor} value={value} setValue={setValue}/>
      <FloorDisplay floor={floor} />
      <LiftIndicator floor={floor} value={value} setValue={setValue}/>
      </div>
    </div>
  );
}

export default App;
