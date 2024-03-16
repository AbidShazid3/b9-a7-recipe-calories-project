import PropTypes from 'prop-types';
import Cart from '../Cart/Cart';
import { useState } from 'react';
import NewCart from '../NewCart/NewCart';

const Carts = ({ bookmarks, handleCartDelete }) => {
    const [secondCarts, setSecondCarts] = useState([]);

    const handleCurrentlyCooking = (cart) => {

        handleCartDelete(cart.recipe_id);
        const isExistNew = secondCarts.find(item => item.recipe_id === cart.recipe_id);
        if (!isExistNew) {
            setSecondCarts([...secondCarts, cart]);
        }
        else {
            alert("already exist");
        }
    }

    return (
        <div className="flex-1 md:flex-1 lg:flex-1">
            <div>
                <h1 className="text-2xl text-center p-4">Want to cook: {bookmarks.length}</h1>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
                {
                    bookmarks.map((bookmark, idx) => <Cart
                        key={idx}
                        idx={idx}
                        bookmark={bookmark}
                        handleCurrentlyCooking={handleCurrentlyCooking}
                    ></Cart>)
                }
            </div>
            <div>
                <h1 className="text-2xl text-center p-4">Currently cooking: {secondCarts.length}</h1>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                </table>
                {
                    secondCarts.map((secondCart, idx) => <NewCart
                        key={idx}
                        idx={idx}
                        secondCart={secondCart}
                    ></NewCart>)
                }
            </div>
        </div>
    );
};

Carts.propTypes = {
    bookmarks: PropTypes.array,
    handleCartDelete: PropTypes.func,
}

export default Carts;