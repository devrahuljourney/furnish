import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginApi } from '../../services/operations/authAPI';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { token } = useSelector((state) => state.auth)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginApi({ email, password }));
        navigate("/profile")
    };

    return (
        <div className='flex flex-col'>
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
            <p className='mt-4 text-sm text-gray-600'>
                Note: If you have purchased any items without signing up, your default password has been set to <span className='font-semibold'>12345678</span>.
            </p>
        </div>
    );
};

export default LoginForm;
