import React from 'react'
import ReactDOM from 'react-dom/client'

export default function Greeting() {
    return <h2>heyyy</h2>
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting/>)

