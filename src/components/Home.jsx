import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Colors from './colors';

export default function Home() {
    const [Data, setData] = useState({Company: "StatusCode Weekly", Description: "A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."})
    const [colorsData, setColorsData] = useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/unknown')
            .then(res=>{
                let companyData=res.data.ad;
                // setData({Company: companyData.company, Description: companyData.text}) // it is not in api
                setColorsData(res.data.data)
            })
            .catch(err => console.log(err))
    }, []);

    return(
        <>
            <h1>{Data.Company}</h1>
            <p>{Data.Description}</p>
            <Colors data={colorsData}/>
        </>
    )
}