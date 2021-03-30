import useFetch from '../useFetch';
import { Link } from 'react-router-dom';

const Blog = ( { blogObj, handleDelete } ) => {
    const { title, body, author, id } = blogObj;

    return (
        <div className="blog-preview">
            <Link to={`/blogs/${id}`}>
                <h2>{ title }</h2>
                <p>Written by { author }</p>    
            </Link>
            <button style={{ marginTop: "1em" }} onClick={() => handleDelete(id)}>Delete Blog</button>
        </div>
    );
};

export default Blog;