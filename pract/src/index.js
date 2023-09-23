import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function BookList() {
    return (
        <section className='booklist'>
        <Book job='devops'/>
        <Book title='random title' number={22}/>
       
        </section>
        
    )
}

const someFunc = (param1, param2) => {
    console.log(param1, param2)
}

someFunc('job', 'developer')

const Book = (props) => {

    const title = 'Dems hate america';
    return (
        <article className='book'>
        <img src={img} alt={title}/>
      <h2>{title}</h2>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    
    {console.log(props)}
        </article>
    )
}



const img = <img alt='The Democrat Party Hates America' src='https://images-na.ssl-images-amazon.com/images/I/61sp+sMfrXL._AC_UL600_SR600,400_.jpg'/>
const Title = () => <h1>The Democrat Party Hates America</h1>
const Author = () => {
    return <p style={{color: 'white', fontSize: '1em', background: 'blue'}}>Mark R. Levin</p>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList/>)

