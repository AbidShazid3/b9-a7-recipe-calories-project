import PropTypes from 'prop-types';
import { MdOutlineAccessTime } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import Ingredient from '../Ingredient/Ingredient';


const Blog = ({ blog, handleWantCook }) => {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = blog;
    
    const displayIngredients = ingredients.slice(0, 3);

    return (
        <div className=''>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-6 pt-6">
                    <img src={recipe_image} alt="" className="rounded-xl h-52" />
                </figure>
                <div className="card-body">
                    <h2 className="text-xl  font-semibold">{recipe_name}</h2>
                    <p className='pb-6 border-b-2'>{short_description}</p>
                    <div className='mt-6'>
                        <h3 className='text-lg font-semibold'>Ingredients: {ingredients.length}</h3>
                        <ul className='p-4 list-disc'>
                            {
                                displayIngredients.map((ingredient, idx)=> <Ingredient 
                                key={idx}
                                ingredient={ingredient}
                            ></Ingredient>)
                            }
                        </ul>
                    </div>
                    <div className="card-actions items-center">
                        <MdOutlineAccessTime></MdOutlineAccessTime>
                        <p>{preparing_time}</p>

                        <FaFire></FaFire>
                        <p>{calories}</p>
                    </div>
                    <button onClick={()=>handleWantCook(blog)} className="btn bg-green-500">Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object,
    handleWantCook: PropTypes.func,
}

export default Blog;