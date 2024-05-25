import { Link } from "react-router-dom"

const NotFound =()=> {
    return (
        <div>
            <h2>404</h2>
            <h3>The page you are looking for was NOT FOUND</h3>
            <Link to='/'>Go back to home page</Link>
        </div>
        )
}

export default NotFound;