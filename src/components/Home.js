import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(resp => resp.json())
        .then(data => {
            setBlogs(data)
        });
    }, []);

    const handleDelete = (id) => { 
        const filteredBlogs = blogs.filter(blog => blog.id !== id);
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(setBlogs(filteredBlogs));
    };

    return (
        <div className="home">
            <h1>All Blogs</h1>
            {blogs && <BlogList blogs={blogs} handleDelete={handleDelete}/>}
        </div>
    );
};

export default Home;