import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Learn more about our mission, values, and the team behind our success.
        </p>
      </header>

      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img
              className="w-full h-auto rounded-lg shadow-lg"
              src="https://via.placeholder.com/500x300" // Replace with your image
              alt="Team"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              We started our journey with a simple idea: to provide high-quality products that our customers love. Our passion for excellence and commitment to customer satisfaction have guided us every step of the way.
            </p>
            <p className="text-gray-600">
              From our humble beginnings, we have grown into a thriving e-commerce business, constantly expanding our product range and striving to deliver the best shopping experience. Thank you for being a part of our journey.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600">
          Our mission is to offer a curated selection of products that meet the highest standards of quality and style. We are dedicated to providing exceptional customer service and making your shopping experience enjoyable and seamless.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              className="w-24 h-24 rounded-full mx-auto mb-4"
              src="https://via.placeholder.com/100" // Replace with team member's image
              alt="Team Member"
            />
            <h3 className="text-lg font-semibold text-gray-900">Jane Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="text-center">
            <img
              className="w-24 h-24 rounded-full mx-auto mb-4"
              src="https://via.placeholder.com/100" // Replace with team member's image
              alt="Team Member"
            />
            <h3 className="text-lg font-semibold text-gray-900">John Smith</h3>
            <p className="text-gray-600">Chief Operating Officer</p>
          </div>
          <div className="text-center">
            <img
              className="w-24 h-24 rounded-full mx-auto mb-4"
              src="https://via.placeholder.com/100" // Replace with team member's image
              alt="Team Member"
            />
            <h3 className="text-lg font-semibold text-gray-900">Emily Johnson</h3>
            <p className="text-gray-600">Head of Marketing</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
