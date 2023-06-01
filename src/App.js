import React, {useRef} from "react";
import styled, {css} from 'styled-components';
// import Hello from "./Hello";
// import Wrapper from './Wrapper';
// import Counter from './Counter';
// import InputSample from "./InputSample";
import UserList from "./UserList";

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: ${props => props.color || 'black'};
  border-radius: 50%;
`;

const LargeCircle = styled(Circle)`
  ${props => 
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
  `}
`;

function App() {
  return (
    <div>
      <Circle color="blue"></Circle>
      <LargeCircle color="red" huge></LargeCircle>
    </div>
  )
}

export default App;
