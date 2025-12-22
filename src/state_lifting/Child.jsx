import React from 'react'

export default function Child(props) {
    const text = "hello i am s child";
    props.onChildData(text);


    return (
        <div>Child: {props.text}
            <p> this is the Child class element </p>
        </div>
    )
}
