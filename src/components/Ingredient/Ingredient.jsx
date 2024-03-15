import PropTypes from 'prop-types'

const Ingredient = ({ingredient}) => {
    console.log(ingredient);
    return (
        <div>
            <li>{ingredient}</li>
        </div>
    );
};

Ingredient.propTypes={
    ingredient: PropTypes.string,
}

export default Ingredient;