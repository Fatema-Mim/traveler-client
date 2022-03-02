import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Registration = () => {
    const { registerUser } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleName = e => {
        setName(e?.target?.value);
    }
    const handleEmail = e => {
        setEmail(e?.target?.value);
    }
    const handlePassword = e => {
        setPassword(e?.target?.value);
    }

    const handleRegisterSubmit = e => {
        e.preventDefault();
        registerUser(email, password, name, navigate);
    }
    return (
        <div>
            <div className="mx-auto mt-10 w-full max-w-md bg-white shadow-md rounded px-8  pb-8 mb-4">
                <p className='text-center text-3xl text-gray-700 font-bold pt-6 pb-3'>Registration</p>
                <form action='' className='pt-4' onSubmit={handleRegisterSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Your Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="name" onBlur={handleName} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="emailAddress">
                            Email Address
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="emailAddress" type="text" placeholder="Email Address" onBlur={handleEmail} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onBlur={handlePassword} />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Register
                        </button>
                        <p>
                            <Link to="/login" className='text-purple-500 text-sm font-medium hover:text-purple-700'>Already Register?</Link>

                        </p>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;