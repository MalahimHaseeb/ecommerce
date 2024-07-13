import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cartSlice/cartSlice'; // Added clearCart
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleQuantityChange = (asin, quantity) => {
    dispatch(updateQuantity({ asin, quantity }));
  };

  const handleRemoveItem = (asin) => {
    dispatch(removeFromCart(asin));
  };

  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.product_price.slice(1)) * item.quantity, 0).toFixed(2);

  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {cartItems.length === 0 ? (
            <p className="text-gray-700">Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map(item => (
                <div key={item.asin} className="flex flex-col sm:flex-row items-center justify-between my-4 p-4 bg-white shadow rounded-lg">
                  <img
                    className="w-32 h-32 object-contain rounded mb-4 sm:mb-0"
                    src={item.product_photo}
                    alt={item.product_title}
                  />
                  <div className="sm:ml-4 flex-1">
                    <h2 className="text-lg font-medium text-gray-900">{item.product_title}</h2>
                    <p className="text-gray-500">{item.product_price}</p>
                    <div className="mt-2 flex items-center">
                      <label className="mr-2 text-gray-700">Quantity:</label>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.asin, parseInt(e.target.value, 10))}
                        className="w-16 p-1 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.asin)}
                    className="mt-4 sm:mt-0 sm:ml-4 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="mt-6 text-center sm:text-right">
                <h2 className="text-2xl font-semibold text-gray-900">Total: ${totalPrice}</h2>
                <Link to="/checkout" className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ShoppingCart;
