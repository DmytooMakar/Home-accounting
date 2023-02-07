import { useEffect, useState } from "react";
import axios from "axios";

import LinkBlog from "./LinkBlog/LinksBlog";

import "./Blogs.css"

export default function Blogs(){
    const [ blogs, setBlogs ] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/blogs`)
        .then(res => setBlogs(res.data))
    }, [])


    return (
    <main className="blogs-container">
        {blogs.map(blog => <LinkBlog key={blog.id} blog={blog} />)}
    </main>
    )
}