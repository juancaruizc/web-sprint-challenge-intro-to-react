import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [rickData, setRickData] = useState([]);
  const [currentRickId, setCurrentRickId] = useState(null);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/?name=rick&status=dead')
      .then((res) => {
        setRickData(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const openDetails = (id) => {
    setCurrentRickId(id);
  };

  return (
    <div className='App'>
      <h1 className='Header'>Characters</h1>
    </div>
  );
};

export default App;
