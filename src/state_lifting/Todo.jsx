import React from 'react'

export default function Todo(props) {
    console.log(props.data);
    return (
        <div>
            {/* <h1> Todo File</h1> */}

            {/* {props.data.map((todo, index) => (
                <p key={index}>{todo}</p>
            ))} */}
            <div>
                <p>{props.data}</p>
            </div>


        </div>
    )
}
