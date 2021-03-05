    import React from 'react';
    import './card.css';


    export default function Card(props) {
        const { title, description, url } = props.data.fields;

        const onCardClick = () => {
            console.log(" props ", props)
            const entryId = props.data.sys.id
            props.history.push(`/blogs/${entryId}`)
        }
        
        return (
            <>
            <div className="card" onClick={onCardClick}>
                <div className="card-content">
                    <h1>{title}</h1>
                    <p style={{ fontSize: `${props.fontSize}px`}}>{description}</p>
                </div>
                <div className="card-img">
                    <img src={url} alt="card-img" width="100%"/>
                </div>
            </div>
            <hr></hr>
            </>
        )
    }