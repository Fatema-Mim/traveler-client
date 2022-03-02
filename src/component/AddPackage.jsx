import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const AddPackage = () => {
    const navigate = useNavigate();
    const countryNameRef = useRef();
    const packageNameRef = useRef();
    const packageDaysRef = useRef();
    const priceRef = useRef();
    const detailsRef = useRef();
    const lastDateRef = useRef();
    const imgRef = useRef();
    const tourStartDateRef = useRef();

    const handlerAddPackage = e =>{
        const countryName = countryNameRef.current.value; 
        const packageName = packageNameRef.current.value; 
        const packageDays = packageDaysRef.current.value; 
        const price = priceRef.current.value; 
        const details = detailsRef.current.value; 
        const lastDate = lastDateRef.current.value; 
        const img = imgRef.current.value; 
        const tourStartDate = tourStartDateRef.current.value; 
        const redirect_uri = '/'; 

        const newPackages = { countryName, packageName, packageDays, price, details, lastDate ,img ,tourStartDate};

        fetch('https://immense-sierra-48309.herokuapp.com/packages',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(newPackages)
            })
            .then(res => res.json())
            .then(data =>{
                if (data.insertedId){
                    alert('Added successfully');
                    navigate(redirect_uri);
                    e.target.reset();
                }
            })

        e.preventDefault();
    }
    
    return (

        <>
            <div className='container mx-auto px-6 sm:px-40 '>
                <div className='text-center pt-16 '>
                    <p before="__" className='text-yellow-400 text-2xl before:content-[attr(before)] after:content-[attr(before)]'>Add New Package</p>
                </div>
                <form class="w-full max-w-2xl py-10" onSubmit={handlerAddPackage}>
                    <div class="md:flex md:items-center mb-4">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Country Name
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name="countryName" ref={countryNameRef} />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-4">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Package Name
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name="packageName" ref={packageNameRef}  />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-4">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Package Days
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name='packageDays' ref={packageDaysRef} />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-4">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Price
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number"  name='price' ref={priceRef}/>
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-4">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Package Details
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <textarea class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name='details' ref={detailsRef} />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-4">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Last Date
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="date" name='lastDate' ref={lastDateRef} />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-4">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Tour Start
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="date" name='lastDate' ref={tourStartDateRef} />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-4">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Image Link
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="link" name='img' ref={imgRef} />
                        </div>
                    </div>
                    
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3"></div>
                        <div class="md:w-2/3">
                            <input class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer" type="submit" value="Add Package"/>
                                
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddPackage;