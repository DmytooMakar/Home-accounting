import { Link } from "react-router-dom";

export default function LinkBlog({blog}){
    return (
        <ul>
            <Link className="blogs-link" to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </ul>
    )
}