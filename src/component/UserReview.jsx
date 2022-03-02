import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const UserReview = () => {
    const{user} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const userNameRef = useRef();
    const reviewRef = useRef();
    const rateRef = useRef();
    

    const handlerAddPackage = e =>{
        const userName = userNameRef.current.value; 
        const review = reviewRef.current.value; 
        const rate = rateRef.current.value;
        const redirect_uri = '/'; 
         

        const newReview = { userName,review, rate};

        fetch('https://immense-sierra-48309.herokuapp.com/reviews',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(newReview)
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
        <div className='w-full'>
            <div className='container mx-auto px-6 sm:px-48 h-screen'>
                <div className='text-center pt-16 '>
                    <p before="__" className='text-yellow-400 text-2xl before:content-[attr(before)] after:content-[attr(before)]'>Review</p>
                </div>
                <form class="w-full  py-10" onSubmit={handlerAddPackage}>
                    <div class="md:flex md:items-center mb-4">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Name
                            </label>
                        </div>
                        <div class="md:w-2/3 ">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name="countryName" ref={userNameRef} value={user?.displayName} />
                        </div>
                    </div>
                    
                    <div class="md:flex md:items-center mb-4">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Review
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <textarea class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"  ref={reviewRef} />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-4">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Rate
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="link" name='img' ref={rateRef} />
                        </div>
                    </div>
                    
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3"></div>
                        <div class="md:w-2/3">
                            <input class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer" type="submit" value="Add Review"/>
                                
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserReview;