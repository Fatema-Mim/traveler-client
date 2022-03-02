import React from 'react';
import { Link } from 'react-router-dom';

const SinglePackage = (props) => {
    const { _id, countryName, img, packageName, packageDays,price ,lastDate} = props.package
    return (
        <>
            <div>
                <div className='bg-white shadow-md rounded-sm group cursor-pointer'>
                <img src={img} alt="" className='w-full h-52 rounded-t-md object-fill' />
                <div className='p-5 space-y-1.5'>
                    <p>{countryName}</p>
                    <p>{packageName}</p>
                    <p>{packageDays} / per person  </p>
                    <p> Last Date : {lastDate}  </p>
                <p>Price : {price} BDT</p>
                </div>
                <Link to={`/packagedetails/${_id}`}>
                    <button className='hidden group-hover:block transition duration-300 ease-in  w-full py-2.5 bg-green-500 text-white hover:bg-green-900 '>Book Now</button>
                </Link>
            </div> 
            </div>
        </>
    );
};

export default SinglePackage;