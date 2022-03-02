import React from 'react';

const ImageGallery = () => {
    return (
        <>
            <div>
                <div className='text-center pt-16 pb-10'>
                    <p before="__" className='text-yellow-400 text-3xl before:content-[attr(before)] after:content-[attr(before)]'>Instragram Post</p>
                </div>
                <div>
                    <div className='grid grid-cols-2 sm:grid-cols-4 '>
                        <div className='bg-banner2 bg-cover bg-center bg-no-repeat '>
                            <div className='bg-overlay2 w-full h-full hover:bg-overlay group'>
                                <p className='text-5xl text-white font-medium hover:bg-ovarlay text-right pt-28 pr-6 pb-6 group-hover:text-yellow-400'>Peru</p>
                            </div>
                        </div>
                        <div className='bg-banner1 bg-cover bg-center bg-no-repeat '>
                            <div className='bg-overlay2 w-full h-full hover:bg-overlay group'>
                                <p className='text-5xl text-white font-medium hover:bg-ovarlay text-right pt-28 pr-6 pb-6 group-hover:text-yellow-400'>Peru</p>
                            </div>
                        </div>
                        <div className='bg-banner3 bg-cover bg-center bg-no-repeat '>
                            <div className='bg-overlay2 w-full h-full hover:bg-overlay group'>
                                <p className='text-5xl text-white font-medium hover:bg-ovarlay text-right pt-28 pr-6 pb-6 group-hover:text-yellow-400'>Peru</p>
                            </div>
                        </div>
                        <div className='bg-banner2 bg-cover bg-center bg-no-repeat '>
                            <div className='bg-overlay2 w-full h-full hover:bg-overlay group'>
                                <p className='text-5xl text-white font-medium hover:bg-ovarlay text-right pt-28 pr-6 pb-6 group-hover:text-yellow-400'>Peru</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div> 
        </>
    );
};

export default ImageGallery;