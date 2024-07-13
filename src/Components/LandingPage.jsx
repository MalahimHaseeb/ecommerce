import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to Our Shop</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-800 text-white ">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">New Arrivals are Here!</span>
            <span className="block text-indigo-600">Shop the latest trends.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Shop Now
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to={'/aboutus'}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">What Our Customers Are Saying</h2>
          <div className="mt-8 space-y-6">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <blockquote className="text-gray-600">
                <p className="text-lg font-medium">“This is the best shopping experience I’ve ever had. The quality of the products is outstanding!”</p>
                <footer className="mt-4 text-gray-800">
                  <p className="font-semibold">Jane Doe</p>
                  <p className="text-sm">Verified Buyer</p>
                </footer>
              </blockquote>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <blockquote className="text-gray-600">
                <p className="text-lg font-medium">“Excellent customer service and fast shipping. I will definitely be coming back!”</p>
                <footer className="mt-4 text-gray-800">
                  <p className="font-semibold">John Smith</p>
                  <p className="text-sm">Verified Buyer</p>
                </footer>
              </blockquote>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <blockquote className="text-gray-600">
                <p className="text-lg font-medium">“Excellent customer service and fast shipping. I will definitely be coming back!”</p>
                <footer className="mt-4 text-gray-800">
                  <p className="font-semibold">John Smith</p>
                  <p className="text-sm">Verified Buyer</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
  

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/3 mb-6">
              <h4 className="text-lg font-semibold">Company</h4>
              <ul className="mt-4 space-y-2">
                <li><Link to="/aboutus" className="hover:underline">About Us</Link></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/3 mb-6">
              <h4 className="text-lg font-semibold">Support</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:underline">Returns</a></li>
                <li><a href="#" className="hover:underline">Shipping</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/3 mb-6">
              <h4 className="text-lg font-semibold">Follow Us</h4>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.1c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm-11 6.9v-6.6h-1.8v6.6h1.8zm-.9-7.6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm4.8 7.6v-3.7c0-.8-.3-1.4-.9-1.9-.6-.5-1.3-.7-2-.7-1.4 0-2.5 1.2-2.5 2.8v2.9h-1.8v-6.6h1.8v.9h.1c.3-.6.9-1.2 1.7-1.2 1.2 0 2.1 1.1 2.1 2.7v4.2h1.7zm-5.3-13c5.5 0 10 4.5 10 10 0 5.5-4.5 10-10 10s-10-4.5-10-10c0-5.5 4.5-10 10-10zm-2.3 15.8v-6.6h-1.8v6.6h1.8zm-1.8-7.6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm4.8 7.6v-3.7c0-.8-.3-1.4-.9-1.9-.6-.5-1.3-.7-2-.7-1.4 0-2.5 1.2-2.5 2.8v2.9h-1.8v-6.6h1.8v.9h.1c.3-.6.9-1.2 1.7-1.2 1.2 0 2.1 1.1 2.1 2.7v4.2h1.7z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.5c-.9.4-1.9.7-2.9.8 1.1-.6 2-1.5 2.4-2.6-.9.5-1.8.9-2.7 1.1-.8-.9-1.9-1.4-3.1-1.4-2.4 0-4.4 2-4.4 4.4 0 .3.1.7.1 1-3.7-.2-7-2.3-9.1-5.3-1.5 2.6-.8 4.9.8 6.8-.7 0-1.4-.2-2-.5v.1c0 2.1 1.5 3.9 3.4 4.3-.7.2-1.4.2-2.1.1.6 1.8 2.3 3.2 4.3 3.2 5.2 0 8-4.3 8-8.1 0-.1 0-.2-.1-.4.5-.4.9-.8 1.3-1.2z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12.5c-1.3 0-2.5-.4-3.5-1.1-.2-.1-.5-.2-.7-.3-.3-.2-.6-.5-.8-.8-.2-.4-.2-.8-.2-1.3s.1-.9.2-1.3c.2-.4.5-.7.8-.8.3-.1.5-.2.7-.3.9-.7 2.1-1.1 3.5-1.1s2.5.4 3.5 1.1c.2.1.5.2.7.3.3.2.6.5.8.8.2.4.2.8.2 1.3s-.1.9-.2 1.3c-.2.4-.5.7-.8.8-.3.1-.5.2-.7.3-1 .7-2.2 1.1-3.5 1.1zm0-5c-1.3 0-2.5.4-3.5 1.1-.2.1-.5.2-.7.3-.2.2-.5.5-.8.8-.2.4-.2.8-.2 1.3s.1.9.2 1.3c.2.4.5.7.8.8.3.1.5.2.7.3.9.9.7 2.1 1.1 3.5 1.1s2.5-.4 3.5-1.1c.2-.1.5-.2.7-.3.3-.2.6-.5.8-.8.2-.4.2-.8.2-1.3s-.1-.9-.2-1.3c-.2-.4-.5-.7-.8-.8-.3-.1-.5-.2-.7-.3-1-.7-2.2-1.1-3.5-1.1zm-.1-6.2c5.7 0 10.2 4.6 10.2 10.2 0 5.7-4.6 10.2-10.2 10.2-5.7 0-10.2-4.6-10.2-10.2 0-5.7 4.6-10.2 10.2-10.2zm-.1 1.2c-4.9 0-8.9 4-8.9 8.9 0 4.9 4 8.9 8.9 8.9 4.9 0 8.9-4 8.9-8.9 0-4.9-4-8.9-8.9-8.9z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-400">&copy; 2024 Our Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
