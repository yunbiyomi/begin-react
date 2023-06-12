import React from 'react'
import Awards from './Components/Awards';
import Career from './Components/Career';
import Certificate from './Components/Certificate';
import Privacy from './Components/Privacy';

function ComponentPractice() {
  return (
    <div>
        <h1>이력서</h1>
        <Privacy name='송윤비' phone='01093365850' email='syb5853@naver.com'></Privacy>
        <Certificate title="자격증" contents="자격증 내용"></Certificate>
        <Career></Career>
        <Awards></Awards>

    </div>
  )
}

export default ComponentPractice;