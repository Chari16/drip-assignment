    import React from 'react';
    import './card.css';


    export default function Card(props) {
        console.log(" card props ", props.data)
        const { title, description, url } = props.data.fields;

        const onCardClick = () => {
            console.log(" card clicked ")
            console.log(" props ", props)
            const entryId = props.data.sys.id
            props.history.push(`/blogs/${entryId}`)
        }
        
        return (
            <>
            <div className="card" onClick={onCardClick}>
                <p>{title}</p>
                <p style={{ fontSize: `${props.fontSize}px`}}>{description}</p>
                <div>
                    <img className="card-img" src={url} alt="card-img" />
                </div>
            </div>
            <hr></hr>
            </>
        )
    }