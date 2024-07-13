import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setSelectedProduct } from '../features/productSlice/productSlice';
import { useNavigate } from 'react-router-dom';

const ProductListings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Access the products, status, and error from the Redux store
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        // Dispatch the fetchProducts thunk
        const resultAction = await dispatch(fetchProducts()).unwrap();
        console.log(resultAction)
      } catch (err) {
        console.error('Failed to fetch products:', err);
      }
    };

    if (status === 'idle') {
      loadProducts();
    }
  }, [dispatch, status]);

  const handleProductClick = (product) => {
    dispatch(setSelectedProduct(product));
    navigate('/productDetail'); // Navigate to the product details page
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Product Listings</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-auto p-4">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {products && products.length > 0 ? (
                products.map((product) => (
                  <div key={product.asin} className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                      src={product.product_photo}
                      alt={product.product_title}
                      className="w-full h-48 object-contain"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{`${product.product_title.substring(0, 45)}...`}</h3>
                      <p className="mt-2 text-gray-600">{product.product_price}</p>
                      <button
                        onClick={() => handleProductClick(product)}
                        className="mt-4 ml-5 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No products available</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductListings;
