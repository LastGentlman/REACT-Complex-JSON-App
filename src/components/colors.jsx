import React from 'react'
import style from './colors.module.css'

export default function Colors({data}) {
    return(
        <>
        {data && data.map((d) => {
            return(
                    <div className={style.card} key={d.id} style={{background: d.color}}>
                        <div className={style.container}>
                            <h4><b>{d.name}</b></h4>
                            <p>{d.color}</p>
                        </div>
                    </div>
            )
        })}
        </>
    )
}