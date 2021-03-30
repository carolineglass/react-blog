import BlogList from './BlogList';
import useFetch from '../useFetch';

const Home = () => {
    const { data: blogs, error, isLoading } = useFetch('http://localhost:3000/blogs');

    // const handleDelete = (id) => { 
    //     const filteredBlogs = blogs.filter(blog => blog.id !== id);
    //     fetch(`http://localhost:3000/blogs/${id}`, {
    //         method: "DELETE"
    //     })
    //     .then(resp => resp.json())
    //     .then(setBlogs(filteredBlogs));
    // };

    return (
        <div className="home">
            <h1>All Blogs</h1>
            { error && <div>{ error }</div> }
            { isLoading && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} /> }
        </div>
    );
};

export default Home;