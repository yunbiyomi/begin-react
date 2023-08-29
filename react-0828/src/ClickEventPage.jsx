import React, { useState } from 'react'

function ClickEventPage(props) {
  const [like, setLike] = useState("");

  function handleClick() {
    like === "" ? setLike("Like") : setLike("");
  }

  return (
    <div style={{border:"solid 1px", width:"500px"}}>
      <h1>{props.name} 자기소개서</h1>
      <h1>{props.hello}</h1>
      <h2>취미 : {props.hobby}</h2>
      <h2>좋아하는 음식 : {props.food}</h2>
      <h2>좋아하는 색 : {props.color}</h2>
      <button onClick={handleClick}>like</button><span>{like}</span>
  </div> 
  )
}

export default ClickEventPage