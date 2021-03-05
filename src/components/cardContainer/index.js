import React, { useState, useEffect} from 'react';
import Card from '../card/Card';
import './container.css';

export default function CardContainer(props) {

    const [list, setList] = useState([])
    const [inputField, setInputField] = useState([])
    const [fontSize, setFonSize] = useState(14);
    
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://cdn.contentful.com/spaces/rt3kkpldvuz8/environments/master/entries',{
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer IkcFOdcUNLz2jTW8_ecjqA0h2FP2IQg42lwOfCugFEE'
                }
            });
            const data = await response.json()
            console.log(" data", data)
            setList(data.items)
        }
        fetchData()
    }, [])

    const onInputChange = (e) => {
        setInputField(e.target.value)
        setFonSize(e.target.value)
    }

    return (
        <div className="container">
            {list.map((item, key) => {
                return (
                    <Card data={item} key={key} fontSize={fontSize} {...props}/>
                )
            })} 
        </div>
    )
}