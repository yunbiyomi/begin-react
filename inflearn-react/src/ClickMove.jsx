import React, { useState } from 'react';
import Detail from './Components/Detail';
import Review from './Components/Review';
import Question from './Components/Question';

function ContentsContainer({listName}) {
    if(listName === 'detail') {
        return <Detail></Detail>
    }
    else if(listName === 'question'){
        return <Question></Question>
    }
    else if(listName === 'review'){
        return <Review></Review>
    }
};

function ClickMove() {
    const [listName, setListName] = useState('detail');

    const handleCheckId = (e) => {
        setListName(e.target.id);
    }

  return (
    <nav>
        <ul>
            <li id='detail'
            style={listName === 'detail' ? {color:'red'} : {color:'black'}}
            onClick={handleCheckId}>상세정보</li>
            <li id='question'
            style={listName === 'question' ? {color:'red'} : {color:'black'}}
            onClick={handleCheckId}>Q&A</li>
            <li id='review'
            style={listName === 'review' ? {color:'red'} : {color:'black'}}
            onClick={handleCheckId}>Review</li>
        </ul>
        <ContentsContainer listName={listName}></ContentsContainer>
    </nav>
  )
}

export default ClickMove