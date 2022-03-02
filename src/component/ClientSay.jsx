import React, { useEffect, useState } from 'react';
import SingleClientSay from './SingleClientSay';

const ClientSay = () => {
    const[reviews , setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://immense-sierra-48309.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    })
    return (
        <>
          <div className='container mx-auto bg-slate-100 py-10' id='client'>
                <div className='text-center py-4'>
                    <p before="__" className='text-yellow-400 text-2xl before:content-[attr(before)] after:content-[attr(before)]'>Client Says</p>
                </div>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 px-16 py-12 '>
                  {
                      reviews.map(ClientSay=><SingleClientSay
                      key={ClientSay._id}
                      review={ClientSay}
                      ></SingleClientSay>).reverse().slice(0,3)
                  }
              </div>
            </div>  
        </>
    );
};

export default ClientSay;