import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
    return (
        <div>
            <h3>{title}</h3>
            {
                blogs.map((blog) => (
                    <div className="preview" key={blog.id}>
                        <Link to={`blog-details/${blog.id}`}>
                            <h3>{blog.title}</h3>
                            <p>Author: {blog.author}</p>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}

export default BlogList;