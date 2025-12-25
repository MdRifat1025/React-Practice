import React, { useState } from 'react'
import style from './style.module.css'

export default function Faqdata({ title, desc }) {
    const [show, setShow] = useState(false)

    return (
        <>
            

            <div className={style.card}>
                <div className={style.header} onClick={() => setShow(!show)}>
                    <h3>{title}</h3>
                    <button className={style.btn}>
                        {show ? '-' : '+'}
                    </button>
                </div>

                {show && <p className={style.desc}>{desc}</p>}
            </div>
        </>
    )
}
