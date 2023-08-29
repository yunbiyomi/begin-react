import React from 'react'
import styled from 'styled-components'

function ViewBox(props) {
  return (
    <div>
      <Content>기분이{props.currentMood}</Content>
    </div>
  )
}

export default ViewBox

const Content = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  box-sizing: border-box;
  border: 5px solid black;
  border-radius: 10px;
`