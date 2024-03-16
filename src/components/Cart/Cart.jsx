import PropTypes from 'prop-types';

const Cart = ({ bookmark, idx, handleCurrentlyCooking }) => {
    const { recipe_name, preparing_time, calories } = bookmark;
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
                            <button
                                onClick={() => handleCurrentlyCooking(bookmark)}
                                className="btn btn-xs md:btn-sm lg:btn-sm bg-green-500 rounded-3xl mt-1">Preparing</button>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Cart.propTypes = {
    bookmark: PropTypes.object,
    idx: PropTypes.number,
    handleCurrentlyCooking: PropTypes.func,
}

export default Cart;