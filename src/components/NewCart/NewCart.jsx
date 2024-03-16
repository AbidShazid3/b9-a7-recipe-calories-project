import PropTypes from 'prop-types';

const NewCart = ({secondCart, idx}) => {
    const { recipe_name, preparing_time, calories } = secondCart;
    
    return (
        <div>
            <div className="lg:overflow-x-auto">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>{idx + 1}</th>
                            <td>{recipe_name}</td>
                            <td>{preparing_time}</td>
                            <td>{calories}</td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>
    );
};

NewCart.propTypes={
    secondCart: PropTypes.object,
    idx: PropTypes.number,
}

export default NewCart;