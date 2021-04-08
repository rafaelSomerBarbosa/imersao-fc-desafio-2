import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [positions, setPositions] = useState({ data: [] })

  const getPositions = async () => setPositions(await axios.get('http://localhost:3000/routes'));

  useEffect(() => {
    getPositions()
  }, [])

  return (
    <>
      <ul>
        {positions.data.map((position) => <li>{JSON.stringify(position)}</li>)}
      </ul>
    </>
  );
}

export default App;
