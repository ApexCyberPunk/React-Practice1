import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books = [ {
    author: 'bookie moor',
    title: 'heaven Sent',
    img: 'https://images-na.ssl-images-amazon.com/images/I/61sp+sMfrXL._AC_UL600_SR600,400_.jpg',
    id: 1,
},

 {
    author: 'mike boo',
    title: 'get it done',
    img: 'https://images-na.ssl-images-amazon.com/images/I/51XwpaLa1oL._AC_UL600_SR600,400_.jpg',
    id: 2,

} ]

const names = ['jogn', 'pet', 'jook']

// const newNames = names.map((name) => {
//     console.log(name)
//     return <h1>{name}</h1>
// })


const BookList = () => {
 return (
    <section className='booklist'>
        {books.map(({img, title, author, id}) => {
            
            return (
                <Book img={img} title={title} author={author} key={id} />
            )
        })}
    </section>
 )
}


const Book = ({img, title, author}) => {

    return (
        <article className='book'>
        <img src={img} alt={title}/>
      <h2>{title}</h2>
      <p>{author}</p>
        </article>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList/>)

