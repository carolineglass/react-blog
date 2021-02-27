
const Blog = ( { blogObj, handleDelete } ) => {
    const { title, body, id } = blogObj;

    return (
        <div className="blog-preview">
            <h2>{ title }</h2>
            <p style={{fontSize: "12px"}}>{ body }</p>
            <button onClick={() => handleDelete(id)}>Delete Blog</button>
        </div>
    );
};

export default Blog;