import Blog from './Blog'

const BlogList = ( {blogs} ) => {
    return (
        <div>
            {blogs.map(blog => <Blog blogObj={blog} key={blog.id} />)}
        </div>  
    )
}

export default BlogList