import React from 'react';

const WhyUs = () => {
    return (
        <>
          <div className='container mx-auto pb-10 w-full'>
                <div className='text-center py-4'>
                    <p before="__" className='text-yellow-400 text-2xl before:content-[attr(before)] after:content-[attr(before)]'>Why Us?</p>
                </div>
                <div className='bg-banner4 bg-cover bg-center bg-no-repeat w-full h-auto  px-20 py-20 bg-fixed'>
                    <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8'>
                        <div className='bg-yellow-400 px-3 py-4 text-center text-white hover:bg-yellow-300 rounded-sm hover:-translate-x-3 transform transition-all cursor-pointer'>
                            <div class="flex flex-col items-center">
                                <div class="p-4 bg-yellow-200 rounded-full">
                                    <svg class="w-16 text-yellow-600 animate-pulse" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <p className='text-xl font-medium pt-2'>200+ Our</p>
                                <p className='text-2xl font-medium'>Worldwide Guide</p>
                            </div>
                           
                        </div>
                        <div className='bg-yellow-400 px-3 py-4 text-center text-white hover:bg-yellow-300 rounded-sm hover:-translate-x-3 transform transition-all cursor-pointer'>
                            <div class="flex flex-col items-center">
                                <div class="p-4 bg-yellow-200 rounded-full">
                                    <svg class="w-16 text-yellow-600 animate-pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <p className='text-xl font-medium pt-2'>100% trusted</p>
                                <p className='text-2xl font-medium'>Travel agency</p>
                            </div>
                            
                        </div>
                        <div className='bg-yellow-400 px-3 py-4 text-center text-white hover:bg-yellow-300 rounded-sm hover:-translate-x-3 transform transition-all cursor-pointer'>
                            <div class="flex flex-col items-center">
                                <div class="p-4 bg-yellow-200 rounded-full">
                                    <svg class="w-16 text-yellow-600 animate-pulse" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <p className='text-xl font-medium'>10+ year of</p>
                            <p className='text-2xl font-medium'>Travel experience</p>
                            </div>
                           
                        </div>
                        <div className='bg-yellow-400 px-3 py-4 text-center text-white hover:bg-yellow-300 rounded-sm hover:-translate-x-3 transform transition-all cursor-pointer'>
                            <div class="flex flex-col items-center">
                                <div class="p-4 bg-yellow-200 rounded-full">
                                    <svg class="w-16 text-yellow-600 animate-pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <p className='text-xl font-medium'>95% of Our</p>
                            <p className='text-2xl font-medium'>Happy Client</p>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>  
        </>
    );
};

export default WhyUs;