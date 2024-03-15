import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect( ()=>{
        fetch("data.json")
        .then(res=> res.json())
        .then(data=> setBlogs(data))
    } , []);

    return (
        <div className="flex-1 grid grid-cols-2 gap-6">
            {
                blogs.map(blog=> <Blog 
                    key={blog.recipe_id}
                    blog={blog}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;