import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginApi } from '../../services/operations/authAPI';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {token } = useSelector((state) => state.auth)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginApi({ email, password }));
        // console.log("Token : ", token);
        navigate("/profile")
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col'>
            <input 
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='mb-2 p-2 border border-gray-300 rounded'
                required
            />
            <input 
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='mb-4 p-2 border border-gray-300 rounded'
                required
            />
            <button type='submit' className='p-2 bg-blue-500 text-white rounded'>
                Login
            </button>
        </form>
    );
};

export default LoginForm;
