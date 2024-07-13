import React from 'react';
import { useSelector } from 'react-redux';

const OrderHistory = () => {
  const orders = useSelector((state) => state.order.orders);

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Order History</h1>
        </div>
      </header>
      <main className="px-4 py-6 sm:px-0">
        <div className="bg-white p-8 rounded-lg shadow-md">
          {orders.length === 0 ? (
            <p>No orders yet.</p>
          ) : (
            orders.map((order, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-xl font-bold mb-2">Order {index + 1}</h2>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <p><strong>First Name:</strong> {order.firstName}</p>
                    <p><strong>Last Name:</strong> {order.lastName}</p>
                    <p><strong>Address:</strong> {order.address}</p>
                    <p><strong>City:</strong> {order.city}</p>
                    <p><strong>Zip Code:</strong> {order.zipCode}</p>
                  </div>
                  <div>
                    <p><strong>Card Number:</strong> {order.cardNumber}</p>
                    <p><strong>Expiry Date:</strong> {order.expiryDate}</p>
                    <p><strong>CVV:</strong> {order.cvv}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mt-4">Items:</h3>
                    {order.items.map((item, idx) => (
                      <p key={idx}>{item.name} (Quantity: {item.quantity})</p>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default OrderHistory;
