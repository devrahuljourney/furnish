import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpApi } from '../../services/operations/authAPI'; // Adjust import as necessary
import toast from 'react-hot-toast';

const RegisterForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!firstName || !email || !password || !confirmPassword) {
            toast.error("All fields are required.");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        dispatch(signUpApi({ firstName, lastName, email, password, confirmPassword }));
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col'>
            <input 
                type='text'
                placeholder='First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className='mb-2 p-2 border border-gray-300 rounded'
                required
            />
            <input 
                type='text'
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className='mb-2 p-2 border border-gray-300 rounded'
            />
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
                className='mb-2 p-2 border border-gray-300 rounded'
                required
            />
            <input 
                type='password'
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='mb-4 p-2 border border-gray-300 rounded'
                required
            />
            <button type='submit' className='p-2 bg-blue-500 text-white rounded'>
                Register
            </button>
        </form>
    );
};

export default RegisterForm;
