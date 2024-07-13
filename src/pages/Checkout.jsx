import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../features/cartSlice/cartSlice';
import { addOrder } from '../features/orderHistroy/orderHistroy';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
// import { addOrder } from '../features/orderHistorySlice/orderHistorySlice';

// Validation Schemas
const shippingSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  zipCode: Yup.string().required('Zip Code is required'),
});

const paymentSchema = Yup.object().shape({
  cardNumber: Yup.string().required('Card Number is required'),
  expiryDate: Yup.string().required('Expiry Date is required'),
  cvv: Yup.string().required('CVV is required'),
});

const Checkout = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleNext = (values) => {
    setFormData({ ...formData, ...values });
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (values) => {
    setFormData({ ...formData, ...values });

    // Add order to order history
    const newOrder = {
      ...formData,
      items: cartItems,
    };
    dispatch(addOrder(newOrder));
    toast.success("Order placed successfully")
    // Clear the cart
    dispatch(clearCart());
    navigate('/orderhistroy');
  };

  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white p-8 rounded-lg shadow-md">
            {step === 1 && (
              <Formik
                initialValues={formData}
                validationSchema={shippingSchema}
                onSubmit={handleNext}
              >
                {() => (
                  <Form>
                    <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                        <Field name="firstName" className="mt-1 block w-full shadow-sm sm:text-sm border-black rounded-md" />
                        <ErrorMessage name="firstName" component="div" className="text-red-600 text-sm" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                        <Field name="lastName" className="mt-1 block w-full shadow-sm sm:text-sm border-black rounded-md" />
                        <ErrorMessage name="lastName" component="div" className="text-red-600 text-sm" />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                        <Field name="address" className="mt-1 block w-full shadow-sm sm:text-sm border-black rounded-md" />
                        <ErrorMessage name="address" component="div" className="text-red-600 text-sm" />
                      </div>
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                        <Field name="city" className="mt-1 block w-full shadow-sm sm:text-sm border-black rounded-md" />
                        <ErrorMessage name="city" component="div" className="text-red-600 text-sm" />
                      </div>
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip Code</label>
                        <Field name="zipCode" className="mt-1 block w-full shadow-sm sm:text-sm border-black rounded-md" />
                        <ErrorMessage name="zipCode" component="div" className="text-red-600 text-sm" />
                      </div>
                    </div>
                    <button type="submit" className="mt-6 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700">
                      Next
                    </button>
                  </Form>
                )}
              </Formik>
            )}
            {step === 2 && (
              <Formik
                initialValues={formData}
                validationSchema={paymentSchema}
                onSubmit={handleNext}
              >
                {() => (
                  <Form>
                    <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="md:col-span-3">
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                        <Field name="cardNumber" className="mt-1 block w-full shadow-sm sm:text-sm border-black rounded-md" />
                        <ErrorMessage name="cardNumber" component="div" className="text-red-600 text-sm" />
                      </div>
                      <div>
                        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                        <Field name="expiryDate" className="mt-1 block w-full shadow-sm sm:text-sm border-black rounded-md" />
                        <ErrorMessage name="expiryDate" component="div" className="text-red-600 text-sm" />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                        <Field name="cvv" className="mt-1 block w-full shadow-sm sm:text-sm border-black rounded-md" />
                        <ErrorMessage name="cvv" component="div" className="text-red-600 text-sm" />
                      </div>
                    </div>
                    <div className="flex justify-between mt-6">
                      <button type="button" onClick={handlePrevious} className="px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700">
                        Previous
                      </button>
                      <button type="submit" className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700">
                        Next
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            )}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Review Your Order</h2>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <p><strong>First Name:</strong> {formData.firstName}</p>
                    <p><strong>Last Name:</strong> {formData.lastName}</p>
                    <p><strong>Address:</strong> {formData.address}</p>
                    <p><strong>City:</strong> {formData.city}</p>
                    <p><strong>Zip Code:</strong> {formData.zipCode}</p>
                  </div>
                  <div>
                    <p><strong>Card Number:</strong> {formData.cardNumber}</p>
                    <p><strong>Expiry Date:</strong> {formData.expiryDate}</p>
                    <p><strong>CVV:</strong> {formData.cvv}</p>
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <button type="button" onClick={handlePrevious} className="px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700">
                    Previous
                  </button>
                  <button type="button" onClick={() => handleSubmit(formData)} className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700">
                    Place Order
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
