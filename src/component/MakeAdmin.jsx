import React, { useRef, useState } from 'react';

const MakeAdmin = () => {
     const [success, setSuccess] = useState(false);
     const [email, setEmail] = useState('');

     const emailRef = useRef();

     const handelerAddAdmin = e =>{
          const email = emailRef.current.value;

          const newAdmin = {email};
          console.log(newAdmin);

           fetch('https://immense-sierra-48309.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAdmin)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('');
                    setSuccess(true);

                }
            });
        e.preventDefault();
     }


     return (
          <>
            <div className='container mx-auto px-6 sm:px-40 h-screen'>
               <div className='text-center pt-16 '>
                    <p before="__" className='text-yellow-400 text-2xl before:content-[attr(before)] after:content-[attr(before)]'>Make An Admin</p>
                </div>
                <form action="" class="w-full max-w-2xl py-10" onSubmit={handelerAddAdmin}>
                     <div class="md:flex md:items-center mb-4">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Email
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name="countryName" ref={emailRef}  />
                        </div>
                    </div>
                     <div class="md:flex md:items-center">
                        <div class="md:w-1/3"></div>
                        <div class="md:w-2/3">
                            <input class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer" type="submit" value="Make Admin"/>
                                
                        </div>
                    </div>
               </form>    
               {
                    success && alert("SuccessFully Add an Admin")
               }
            </div>   
          </>
     );
};

export default MakeAdmin;