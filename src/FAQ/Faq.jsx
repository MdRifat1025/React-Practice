import React, { useState } from 'react'
import { data } from './data'
import Faqdata from './Faqdata'

export default function Faq() {
    const [faqs, setFaqs] = useState(data)

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>FAQ</h1>
            {faqs.map((faq) => (
                <Faqdata key={faq.id} {...faq} />
            ))}
        </div>
    )
}
