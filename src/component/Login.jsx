import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loginUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    
    const handleEmail = e => {
        setEmail(e?.target?.value);
    }
    const handlePassword = e => {
        setPassword(e?.target?.value);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUser(email, password , location , navigate);
        
    }
    return (
        <div className='w-full'>
            <div className="mx-auto mt-10 w-full max-w-md bg-white shadow-md rounded px-8  pb-8 mb-4">
                <p className='text-center text-3xl text-gray-700 font-bold pt-6 pb-3'>Login</p>
                <form action='' className='pt-4' onSubmit={handleLoginSubmit}>
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
                            Login
                        </button>
                        <p>
                            <Link to="/registration" className='text-purple-500 text-sm font-medium hover:text-purple-700'>New Register?</Link>

                        </p>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;