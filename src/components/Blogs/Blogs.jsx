import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleWantCook}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect( ()=>{
        fetch("data.json")
        .then(res=> res.json())
        .then(data=> setBlogs(data))
    } , []);

    return (
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {
                blogs.map(blog=> <Blog 
                    key={blog.recipe_id}
                    blog={blog} 
                    handleWantCook={handleWantCook} 
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    handleWantCook: PropTypes.func,
}

export default Blogs;