import PropTypes from 'prop-types'

const Ingredient = ({ingredient}) => {
    
    return (
        <div className='mb-1 pl-4'>
            <li> {ingredient}</li>
        </div>
    );
};

Ingredient.propTypes={
    ingredient: PropTypes.string,
}

export default Ingredient;