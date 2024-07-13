import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice/cartSlice';
import toast from 'react-hot-toast';
// import { addToCart } from '../features/cartSlice'; // Import the action

const ProductDetails = () => {
  // Access selected product from the Redux store
  const product = useSelector((state) => state.products.selectedProduct);
  const dispatch = useDispatch();

  if (!product) {
    return <div>No product selected</div>; // Handle case where no product is selected
  }

  const handleAddToCart = () => {
    // Dispatch the action to add product to the cart
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success("Product added into the cart");
  };

  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{product.product_title}</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex flex-col md:flex-row">
            <div className="md:flex-shrink-0">
              <img
                className="rounded-lg h-96 object-contain md:w-96"
                src={product.product_photo}
                alt={product.product_title}
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
                {product.product_title}
              </div>
              <div className="block mt-1 text-lg leading-tight font-medium text-black">
                {product.product_price}
              </div>
              <div className="flex items-center mt-2">
                <span className="text-gray-600 mr-1">{product.product_star_rating}</span>
                <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.176 3.62a1 1 0 00.95.69h3.905c.969 0 1.372 1.24.588 1.81l-3.158 2.299a1 1 0 00-.364 1.118l1.176 3.62c.3.921-.755 1.688-1.54 1.118l-3.158-2.299a1 1 0 00-1.175 0l-3.158 2.299c-.784.57-1.84-.197-1.54-1.118l1.176-3.62a1 1 0 00-.364-1.118L2.34 8.047c-.784-.57-.38-1.81.588-1.81h3.905a1 1 0 00.95-.69l1.176-3.62z" />
                </svg>
              </div>
              <p className="mt-2 text-gray-500">{product.product_original_price ? `Original Price: ${product.product_original_price}` : 'Original Price Not Available'}</p>
              <p className="mt-2 text-gray-500">{product.delivery}</p>
              <p className="mt-2 text-gray-500">{product.sales_volume}</p>
              <p className="mt-2 text-gray-500">ASIN: {product.asin}</p>
              <p className="mt-2 text-gray-500">Climate Pledge Friendly: {product.climate_pledge_friendly ? 'Yes' : 'No'}</p>
              <p className="mt-2 text-gray-500">Currency: {product.currency}</p>
              <p className="mt-2 text-gray-500">Has Variations: {product.has_variations ? 'Yes' : 'No'}</p>
              <p className="mt-2 text-gray-500">Amazon Choice: {product.is_amazon_choice ? 'Yes' : 'No'}</p>
              <p className="mt-2 text-gray-500">Best Seller: {product.is_best_seller ? 'Yes' : 'No'}</p>
              <p className="mt-2 text-gray-500">Prime Eligible: {product.is_prime ? 'Yes' : 'No'}</p>
              <p className="mt-2 text-gray-500">Minimum Offer Price: {product.product_minimum_offer_price}</p>
              <p className="mt-2 text-gray-500">Number of Offers: {product.product_num_offers}</p>
              <p className="mt-2 mb-12 text-gray-500">Number of Ratings: {product.product_num_ratings}</p>
              <a href={product.product_url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700">
                View on Amazon
              </a>
              <button
                onClick={handleAddToCart}
                className="mt-4 mx-3 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
