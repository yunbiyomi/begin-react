import React, {useRef} from "react";
import styled from 'styled-components';
// import Hello from "./Hello";
// import Wrapper from './Wrapper';
// import Counter from './Counter';
// import InputSample from "./InputSample";
import UserList from "./UserList";


const SimpleButton = styled.button`
  color:white;
  background-color: green;
`;

const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`;

// 이런식으로 하면 적용 안됨
// const ReactButton = props => {
//   return <button>{props.children}</button>
// }

// className을 지정해주어야 적용됨
const ReactButton = props => {
  return <button className={props.className}>{props.children}</button>
}

const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`;

const PrimaryButton = styled.button`
  color:${props=>props.primary?'white':'black'};
  background-color:${props=>props.primary?'black':'white'};
`;

// 디자인 동적으로 변경

function App() {
  return (
    <div>
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <ReactButton>React</ReactButton>
      <ReactLargeButton>React Large</ReactLargeButton>
      <PrimaryButton>Normal</PrimaryButton>
      <PrimaryButton primary>Primary</PrimaryButton>
    </div>
  )
}

export default App;
