const Blog = ( { blogObj } ) => {
    const { title, body } = blogObj;
    
    return (
        <div className="blog-preview">
            <h2>{ title }</h2>
            <p style={{fontSize: "12px"}}>{ body }</p>
        </div>
    )
}

export default Blog;