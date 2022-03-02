import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminSinglePackage = (props) => {
     const [packagesAdmin, SetPackagesAdmin] = useState([]);

    const { _id, countryName, img, packageName, packageDays,price ,lastDate} = props.package;

    const handleDeletPackage = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://immense-sierra-48309.herokuapp.com/packages/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("successfullly ");
            const remainingOrder = packagesAdmin.filter(
              (packages) => packages._id !== id
            );
            SetPackagesAdmin(remainingOrder);
          }
        });
    }
  };

    return (
        <>
            <div>
                <div className='bg-white shadow-md rounded-sm '>
                <img src={img} alt="" className='w-full h-52 rounded-t-md object-fill' />
                <div className='p-5 space-y-1.5'>
                    <p>{countryName}</p>
                    <p>{packageName}</p>
                    <p>{packageDays} / per person  </p>
                    <p> Last Date : {lastDate}  </p>
                <p>Price : {price} BDT</p>
                </div>
                <Link to="" onClick={() => handleDeletPackage(_id)}>
                    <button className='w-full py-2.5 bg-red-500 text-white hover:bg-red-900 '>Book Now</button>
                </Link>
            </div> 
            </div>
        </>
    );
};

export default AdminSinglePackage;