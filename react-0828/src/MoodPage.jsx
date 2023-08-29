import React from 'react'
import MoodBtn from './component/MoodBtn'

function MoodPage() {

  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <h1 style={{textAlign:'center'}}>오늘의 기분을 선택해주세요</h1>
      <MoodBtn mood="좋아요"></MoodBtn>
      <MoodBtn mood="정말 좋아요"></MoodBtn>
      <MoodBtn mood="최고에요"></MoodBtn>
      <MoodBtn mood="미쳤어요"></MoodBtn>
    </div>
  )
}

export default MoodPage