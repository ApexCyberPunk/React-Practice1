import React from 'react'
import ReactDOM from 'react-dom/client'


function Greeting() {
    return (
        <div>
            <h2>My first compoennt
            <Person/>
            <Message/>
            </h2>
        </div>
    )
}
// function Greeting() {
//     return React.createElement('h2', {}, 'hello world')
// }

const Person = () => <p>Jonny</p>
const Message = () => {
    return <p>whooo bro !!</p>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting/>)

