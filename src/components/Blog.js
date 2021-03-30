
const Blog = ( { blogObj, handleDelete } ) => {
    const { title, body, author, id } = blogObj;

    return (
        <div className="blog-preview">
            <h2>{ title }</h2>
            <p>Written by { author }</p>
            <button style={{ marginTop: "1em" }}onClick={() => handleDelete(id)}>Delete Blog</button>
        </div>
    );
};

export default Blog;