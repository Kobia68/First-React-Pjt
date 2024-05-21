import { useHistory, useParams } from "react-router-dom";
import UseFetch from "./UseFetch"
import { Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails =()=> {
    const {id} = useParams;
    const{data:blogs}=UseFetch('http://localhost:4000/blogs' + id);
    const history = useHistory;

    const handleDelete =(e)=> {

        e.preventDefault();
        axios.delete('http://localhost:4000/blogs' + id)
        .then(res=>{
            alert('Blog deleted');
            history.push('/');
        })
    }

    return (
        <div className="details">
            {blogs && (
                <article>
                        <h3>{blogs.title}</h3>
                        <p>{blogs.author}</p>
                        <div>{blogs.body}</div>
                        <Button variant="danger">Delete Blog</Button>
                </article>
            )}
        </div>
    )
    
}

export default BlogDetails;