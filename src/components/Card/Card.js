    import React from 'react';


    export default function Card(props) {
        console.log(" props ", props)
        const { title, description, url } = props.data;
        
        return (
            <div>
                <p>{title}</p>
                <p style={{ fontSize: `${props.fontSize}px`}}>{description}</p>
                <div>
                    <img src={url}/>
                </div>
            </div>
        )
    }