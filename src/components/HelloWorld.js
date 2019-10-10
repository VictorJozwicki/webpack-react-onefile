import React from 'react'
import './HelloWorld.css'
import AnotherComponent from './AnotherComponent/AnotherComponent'

export default function HelloWorld() {
    return (
        <div>
            <h1 className="hello-world">Hello world</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam et quo numquam laborum, provident repellendus aut corporis, deserunt beatae tempora pariatur impedit aliquid suscipit quia laudantium, voluptatum ipsa quae qui.</p>
            <AnotherComponent />
        </div>
    )
}
