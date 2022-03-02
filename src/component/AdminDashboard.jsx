import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import AddPackage from './AddPackage';
import AdminOrder from './AdminOrder';
import AdminPackage from './AdminPackage';
import MakeAdmin from './MakeAdmin';

const AdminDashboard = () => {
    return (
        <>
          <div className="lg:flex justify-between">
              <div className="bg-gray-100 lg:w-52">
                <ul>
                  
                  <li  className="hover:bg-gray-300 w-full px-10 py-2">
                    <Link to="adminDashboard">Dashboard</Link>
                  </li>

                  <li  className="hover:bg-gray-300 w-full px-10 py-2">
                    <Link to="addPackage">Add Package</Link>
                  </li>
                  <li  className="hover:bg-gray-300 w-full px-10 py-2">
                    <Link to="allPackage">All Package</Link>
                  </li>
                  <li  className="hover:bg-gray-300 w-full px-10 py-2">
                    <Link to="addAdmin">Make Admin</Link>
                  </li>
                </ul>
              </div>
            <Routes>
              <Route path="/" element={<AdminOrder />} />
              <Route path="adminDashboard" element={<AdminOrder />} />
              <Route path="allPackage" element={<AdminPackage />} />
              <Route path="addPackage" element={<AddPackage />} />
              <Route path="addAdmin" element={<MakeAdmin />} />
              
            </Routes>
            <div>
                <Outlet/>  
            </div>
          </div>  
        </>
    );
};

export default AdminDashboard;