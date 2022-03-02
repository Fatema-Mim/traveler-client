import React, { useEffect, useState } from 'react';
import AdminSinglePackage from './AdminSinglePackage';

const AdminPackage = () => {
   const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("https://immense-sierra-48309.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  });
  return (
    <>
      <div className="container mx-auto px-14 py-10">
        <div className="text-center py-8">
          <p
            before="__"
            className="text-yellow-400 text-2xl before:content-[attr(before)] after:content-[attr(before)]"
          >
            All Package
          </p>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
          {packages
            .map((Package) => (
              <AdminSinglePackage
                key={Package._id}
                package={Package}
              ></AdminSinglePackage>
            ))
            .reverse()}
        </div>
      </div>
    </>
  );
};

export default AdminPackage;