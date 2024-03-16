import PropTypes from 'prop-types';

const Cart = ({ bookmark }) => {
    const { recipe_name, preparing_time, calories } = bookmark;
    console.log(bookmark);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    {/* <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>{recipe_name}</td>
                            <td>{preparing_time}</td>
                            <td>{calories}</td>
                            <button></button>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Cart.propTypes = {
    bookmark: PropTypes.object,
}

export default Cart;