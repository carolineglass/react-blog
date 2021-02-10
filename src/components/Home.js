import { useState, useEffect } from 'react';
import BlogList from './BlogList'


const Home = () => {
    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(resp => resp.json())
        .then(data => {
            setBlogs(data)
        })
    }, [])

    return (
        <div className="home">
            <BlogList blogs={blogs}/>
        </div>
    );
};

export default Home;