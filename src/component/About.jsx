import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../image/banner2.jpeg';

const About = () => {
    return (
        <>
          <div className='container mx-auto px-10 sm:px-20 pb-28 pt-10'>
                <div className='lg:grid grid-cols-2 gap-x-10 '>
                    <div>
                        <p className='text-4xl'>What Do You Know About US</p>
                        <p className='text-base py-6'><b>Travelers</b> is a trusted and reliable tour and travel agency among all the leanding and updated tour-opening servises. We are here to bring the luxurt to your traveling. Our experienced and expert raveling guides ensure that you do not need to move an inch from your comfort zpne. We belive that your smile is our success  and  <b>Travelers</b> will do anything to keep you smilling . </p>
                        <Link to="about" className='px-8 py-2 bg-yellow-500 text-sm text-white hover:bg-yellow-600 rounded-sm hover:-translate-y-0.5 transform transition'> <span className='mr-2'>Read More</span> 
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block fill-white " viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                    <div className='mt-10 lg:mt-0'>
                        <img src={pic} alt="" className='w-max h-auto' />
                    </div>
                </div>
            </div>  
        </>
    );
};

export default About;