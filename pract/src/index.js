import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books = [ {
    author: 'bookie moor',
    title: 'heaven Sent',
    img: 'https://images-na.ssl-images-amazon.com/images/I/61sp+sMfrXL._AC_UL600_SR600,400_.jpg'
},

 {
    author: 'mike boo',
    title: 'get it done',
    img: 'https://images-na.ssl-images-amazon.com/images/I/51XwpaLa1oL._AC_UL600_SR600,400_.jpg'
} ]



function BookList() {
    return (
        <section className='booklist'>
        <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}/>
        <Book author={secondBook.author} title={secondBook.title} img={secondBook.img}/>
        </section>
        
    )
}


const Book = (props) => {

    return (
        <article className='book'>
        <img src={props.img} alt={props.title}/>
      <h2>{props.title}</h2>
      <p>{props.author}</p>
      
    
    {console.log(props)}
        </article>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList/>)

