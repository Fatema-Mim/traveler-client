import React from 'react';
import pic from '../image/banner2.jpeg';


const AboutDetails = () => {
    return (
        <>
           <div className='container mx-auto px-14 space-y-20 pt-16'>
                <div className='grid grid-cold-1 lg:grid-cols-2 gap-10'>
                    <div>
                        <p className='text-4xl'>Why Chose US</p>
                        <p className='text-base py-6'>We provide international travel products & services including Flights, Accommodation, Land transport, Tours, Holiday packages, Visa processing among many other services. We cater to a wide range of needs including Leisure & Business travel. Having a wide network around the world we provide holiday packages to 100+ destinations. From budget travelers to ultra luxury 7 star tourists we cater to every need. Delivering value for your money is our prime goal. With a team of experienced travel professionals we deliver exactly what we promise. We do what we say & say what we do.</p>
                        
                    </div>
                    <div>
                        <img src={pic} alt="" className='w-max h-auto' />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div>
                        <img src={pic} alt="" className='w-max h-auto' />
                    </div>
                    <div>
                        <p className='text-4xl'>“You haven’t lived if you haven’t travelled”</p>
                        <p className='text-base py-6'>It is only when you travel 1000s of miles away from your home country & visit a foreign land you realise how beautiful the world is. How different or similar are its people from you & how they are living their lives. Share your stories & be a part of theirs. Widen your horizon, broaden your mind & become a global citizen. I must admit the travel industry in Bangladesh does not have a good customer service reputation. That is why we strive to deliver our best effort for each & every individual who comes to us for any sort of travel services. We not only provide travel services but also promote responsible tourism & practice ethical service standards which is rare in our industry.</p>
                    </div>
                </div>
                <div className=''>
                    <div className='text-center pb-20'>
                         <p before="__" className='text-yellow-400 text-5xl before:content-[attr(before)] after:content-[attr(before)] animate-wiggle'>Our Team</p>
                    </div>
                    <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10'> 
                        <div className='text-center'>
                             <img src={pic} alt="" className='w-40 h-40 object-cover rounded-full inline-block' />
                             <div className='py-4'>
                                 <p className='text-3xl tracking-wider '>Jessica Lee</p>
                                 <p className='text-lg text-gray-400'>CEO</p>
                             </div>
                        </div>
                        <div className='text-center'>
                             <img src={pic} alt="" className='w-40 h-40 object-cover rounded-full inline-block' />
                             <div className='py-4'>
                                 <p className='text-3xl tracking-wider '>Martine lowis</p>
                                 <p className='text-lg text-gray-400'>Advisor</p>
                             </div>
                        </div>
                        <div className='text-center'>
                             <img src={pic} alt="" className='w-40 h-40 object-cover rounded-full inline-block' />
                             <div className='py-4'>
                                 <p className='text-3xl tracking-wider '>Jhone Deo</p>
                                 <p className='text-lg text-gray-400'>Head of Advertisement</p>
                             </div>
                        </div>
                        <div className='text-center'>
                             <img src={pic} alt="" className='w-40 h-40 object-cover rounded-full inline-block' />
                             <div className='py-4'>
                                 <p className='text-4xl tracking-wider '>Jhone Lee</p>
                                 <p className='text-lg text-gray-400'>Head of Tour Managment</p>
                             </div>
                        </div>
                       
                    </div>
                </div>
           </div>
        </>
    );
};

export default AboutDetails;