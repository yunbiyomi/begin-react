import React, { useState } from 'react'
import About from './Components/About'
import Product from './Components/Product'
import Contact from './Components/Contact'

function ContentContainer({listName}){
    if(listName === 'about'){
        return <About></About>
    }
    else if(listName === 'product'){
        return <Product></Product>
    }
    else if(listName === 'contact'){
        return <Contact></Contact>
    }
}

function MovePractice() {
    const [listName, setListName] = useState('about');

    const handleCheckId = (e) => {
        setListName(e.target.id);
    }
    return (
    <nav>
        <ul>
            <li id='about'
            style = { listName === 'about' ? {color:'blue'} : {color:'black'}}
            onClick={handleCheckId}> about</li>
            <li id='product'
            style = { listName === 'product' ? {color:'blue'} : {color:'black'}}
            onClick={handleCheckId}>product</li>
            <li id='contact'
            style = { listName === 'contact' ? {color:'blue'} : {color:'black'}}
            onClick={handleCheckId}>contact</li>
        </ul>
        <ContentContainer listName={listName}></ContentContainer>
    </nav>
  )
}

export default MovePractice