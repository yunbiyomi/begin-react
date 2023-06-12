import React from 'react'

function Hello(props) {
    const name = props.name;
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const numComponentsArray = num.map((i)=> <h1 key={i}>안녕, {name} {i}호</h1>);

    return(
        <div>
            {numComponentsArray}
        </div>
    )
}

function ComponentList() {
  return (
    <div>
        <Hello name='yunbi'></Hello>
    </div>
  )
}

export default ComponentList