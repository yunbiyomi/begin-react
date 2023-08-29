import React, { useState } from 'react';
import styled from 'styled-components';

function MoodBtn( {currentMood} ) {
  const [currentMood, setCurrentMood] = useState('');

  const handleMood = () => {
    setCurrentMood(props.mood);
    console.log(currentMood);
  }

  return (
    <div>
      <ContentBox onClick={handleMood}>기분이: {props.mood}!</ContentBox>
    </div>
  );
}

export default MoodBtn;

const ContentBox = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  background-color: #e6e6e6;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: skyblue;
  }
`;