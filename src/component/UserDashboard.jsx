import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import UserOrder from "./UserOrder";
import UserReview from "./UserReview";

const UserDashboard = () => {

  return (
    <>
      <div className="lg:flex justify-between">
        <div className="bg-gray-100 lg:w-52">
        <ul>
          <li className="hover:bg-gray-300 w-full px-10 py-2">
            <Link to="userDashboard">Dashboard</Link>
          </li>

          <li className="hover:bg-gray-300 w-full px-10 py-2">
            <Link to="addReviews">Add Review</Link>
          </li>
          
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<UserOrder />} />
        <Route path="userDashboard" element={<UserOrder />} />
        <Route path="addReviews" element={<UserReview />} />
      </Routes>
      <div>
          <Outlet/>  
      </div>
      </div>
    </>
  );
};

export default UserDashboard;
