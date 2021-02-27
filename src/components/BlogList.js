import Blog from './Blog';

const BlogList = ( { blogs, handleDelete } ) => {

    return (
        <div className="blog-list">
            {blogs.map(blog => 
                <Blog 
                    blogObj={blog} 
                    key={blog.id} 
                    handleDelete={handleDelete}/>)}
        </div>  
    )
}

export default BlogList;