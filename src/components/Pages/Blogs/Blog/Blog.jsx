import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import "./Blog.css"

export default function Blog(){
    let { blogId } = useParams()
    const [ blog, setBlog ] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/blogs/`+ blogId)
        .then(res => setBlog(res))
    },[blogId]);

    console.log(blog.data?.title)
    return (<main className="main-blog-container">
        <h1>{blog.data?.title}</h1>
        <p>{blog.data?.description}</p>
    </main>
    )
}