import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useMatch, useNavigate } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaBox, FaUser } from 'react-icons/fa';
import ManageProducts from './ManageProducts';
import ManageUsers from './ManageUsers';

const AdminPanel = () => {
  const match = useMatch('/admin/*');
  const navigate = useNavigate();
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ]);
  const [users, setUsers] = useState([
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
    { id: 3, name: 'User 3', email: 'user3@example.com' },
  ]);
  const [loading, setLoading] = useState(false); // No need to fetch data in this example
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:w-64 lg:flex-shrink-0`}>
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h1 className="text-xl font-bold">Admin Panel</h1>
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden text-white">
              {isSidebarOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-2">
            <Link to="manage-products" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-md">
              <FaBox className="mr-2" /> Manage Products
            </Link>
            <Link to="manage-users" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-md">
              <FaUser className="mr-2" /> Manage Users
            </Link>
          </nav>
        </div>
      </aside>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col ml-0 lg:ml-64">
        <header className="bg-white shadow lg:hidden">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Routes>
              <Route path="/" element={<div>Select an option to manage.</div>} />
              <Route path="manage-products" element={<ManageProducts products={products} setProducts={setProducts} loading={loading} />} />
              <Route path="manage-users" element={<ManageUsers users={users} setUsers={setUsers} loading={loading} />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
