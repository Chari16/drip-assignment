import React, { useEffect, useState } from 'react';

export default function Blog(props) {
    console.log(" blog props ", props)
    console.log(" param id ", props.match.params.id)
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
        <div>
            <div>
                {blog.title}
            </div>
            <div>
                {blog.description}
            </div>
            <div>
                {blog.body}
            </div>
            <img src={blog.url}/>
        </div>
    )
}