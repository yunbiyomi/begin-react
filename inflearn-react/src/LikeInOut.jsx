import React, { useState } from 'react'

function LikeInOut() {
    const [like, setlLike] = useState(false);
    let heart = like ? '❤️' : '';

    function clickLike(){
        if (like) {
            setlLike(false)
        } else {
            setlLike(true)
        }

        console.log(like);
    }

  return (
    <div>
        <h1>윤비 자기소개서</h1>
        <h2>Hello</h2>
        <p>취미 : 유튜브</p>
        <p>좋아하는 음식 : 삼겹살</p>
        <p>좋아하는 색 : <span style={{color:'pink'}}>Pink</span></p>
        <button onClick={clickLike}>like <span>{heart ? heart : ''}</span></button>
    </div>
  )
}

export default LikeInOut