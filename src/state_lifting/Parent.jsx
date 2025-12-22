import React from 'react'
import Child from './Child'

export default function Parent() {

    let getData = (onChildData) => {

    };
    const text = "Hello from Parent";
    return (
        <div>Parent
            <Child text={text} onChildData={getData} />
        </div>
    )
}
