import React from 'react'
import styled from 'styled-components';

function DateView() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth()+1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();


  return (
    <div>
      <SYear>년: {year}</SYear>
      <SDate>월/일: {month}/{date}</SDate>
      <SDate>시간: {hour}시{min}분{sec}초</SDate>
    </div>
  )
}

export default DateView;

const SDate = styled.p`
  margin: 0;
  background-color: black;
  color: white;
`;

const SYear = styled(SDate)`
  color: red;
`;