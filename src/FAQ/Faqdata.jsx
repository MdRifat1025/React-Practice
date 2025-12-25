import React from 'react'
import Faq from './Faq'

export default function Faqdata({ id, title, desc }) {
    return (
        <div>
            <h1>{title}</h1>
            <button>+</button>
            <p>{desc}</p>


        </div>
    )
}
