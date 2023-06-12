import React, { useState } from "react";

function Resume(props){
    const [like, setLike] = useState(0);

    function clickLike() {
        setLike(like + 1)
        console.log(like);
    }

    return(
        <div>
            <h1>클릿 횟수</h1>
            <button onClick={clickLike}>like {like}</button>
        </div>
    )
}

function HookUseState() {
  return (
    <Resume></Resume>
  )
}

export default HookUseState