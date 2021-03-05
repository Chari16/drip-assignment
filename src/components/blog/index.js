import React, { useEffect, useState } from 'react';
import './blog.css';

export default function Blog(props) {
    const blogId = props.match.params.id

    const [blog, setBlog] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://cdn.contentful.com/spaces/rt3kkpldvuz8/environments/master/entries?sys.id=${blogId}`,{
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer IkcFOdcUNLz2jTW8_ecjqA0h2FP2IQg42lwOfCugFEE'
                }
            });
            const data = await response.json()
            console.log(" data", data.items[0].fields)
            // setList(data.items)
            setBlog(data.items[0].fields)
        }
        fetchData()
    },[])

    return (
        <div className="blog-container">
            <div className="blog-title">
                <h1>{blog.title}</h1>
            </div>
            <div className="blog-content">
                <p>{blog.description}</p>
            </div>
            <div className="blog-content">
                <p>{blog.body}</p>
            </div>
            <div className="blog-image">
                <img src={blog.url} width="100%"/>
            </div>
        </div>
    )
}