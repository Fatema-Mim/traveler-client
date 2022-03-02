import React from 'react';
import pic from '../image/banner1.jpg';

const UpcomingTour = () => {
    return (
        <>
          <div className='container mx-auto px-10 pb-20 pt-12'>
                <div className='text-center py-4'>
                    <p before="__" className='text-yellow-400 text-2xl before:content-[attr(before)] after:content-[attr(before)]'>Upcoming Packages</p>
                    <p className='text-4xl pt-1'>Make You Next Holiday Plan</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8 pt-10'>
                    <div className='w-full h-auto relative shadow-xl rounded-b-xl hover:-translate-y-3 transform transition-all'>
                       <div>
                            <img src={pic} alt="" className='w-max h-full object-cover' />
                            <p className='absolute top-10 right-0 bg-white py-1.5 px-3  rounded-l-sm text-green-900 font-medium text-lg hover:bg-yellow-500 hover:text-white'>3000 BTD</p>

                            <div className='text-left px-4 pt-4 pb-8 ' >
                                <p className='text-4xl text-yellow-500'>Rome</p>
                                <p className='text-xl text-yellow-600'>Italy</p>
                            </div>
                       </div>
                        
                    </div>
                    <div className='w-full h-auto relative shadow-xl rounded-b-xl hover:-translate-y-3 transform transition-all'>
                       <div>
                            <img src={pic} alt="" className='w-max h-full object-cover' />
                            <p className='absolute top-10 right-0 bg-white py-1.5 px-3  rounded-l-sm text-green-900 font-medium text-lg hover:bg-yellow-500 hover:text-white'>3000 BTD</p>

                            <div className='text-left px-4 pt-4 pb-8 ' >
                                <p className='text-4xl text-yellow-500'>Rome</p>
                                <p className='text-xl text-yellow-600'>Italy</p>
                            </div>
                       </div>
                        
                    </div>
                    <div className='w-full h-auto relative shadow-xl rounded-b-xl hover:-translate-y-3 transform transition-all'>
                       <div>
                            <img src={pic} alt="" className='w-max h-full object-cover' />
                            <p className='absolute top-10 right-0 bg-white py-1.5 px-3  rounded-l-sm text-green-900 font-medium text-lg hover:bg-yellow-500 hover:text-white'>3000 BTD</p>

                            <div className='text-left px-4 pt-4 pb-8 ' >
                                <p className='text-4xl text-yellow-500'>Rome</p>
                                <p className='text-xl text-yellow-600'>Italy</p>
                            </div>
                       </div>
                        
                    </div>
                    <div className='w-full h-auto relative shadow-xl rounded-b-xl hover:-translate-y-3 transform transition-all'>
                       <div>
                            <img src={pic} alt="" className='w-max h-full object-cover' />
                            <p className='absolute top-10 right-0 bg-white py-1.5 px-3  rounded-l-sm text-green-900 font-medium text-lg hover:bg-yellow-500 hover:text-white'>3000 BTD</p>

                            <div className='text-left px-4 pt-4 pb-8 ' >
                                <p className='text-4xl text-yellow-500'>Rome</p>
                                <p className='text-xl text-yellow-600'>Italy</p>
                            </div>
                       </div>
                        
                    </div>
                </div>    
            </div>  
        </>
    );
};

export default UpcomingTour;