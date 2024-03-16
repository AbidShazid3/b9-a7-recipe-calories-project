import PropTypes from 'prop-types';
import Cart from '../Cart/Cart';

const Carts = ({ bookmarks }) => {
    console.log(bookmarks);
    return (
        <div className="w-1/3">
            <div>
                <h1 className="text-2xl text-center p-4">Want to cook: {bookmarks.length}</h1>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                </table>
                {
                    bookmarks.map((bookmark) => <Cart
                        key={bookmark.recipe_id}
                        bookmark={bookmark}
                    ></Cart>)
                }
            </div>
        </div>
    );
};

Carts.propTypes = {
    bookmarks: PropTypes.array,
}

export default Carts;