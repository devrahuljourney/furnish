import React, { useState } from 'react';
import LoginForm from '../components/Auth/LoginForm';
import RegisterForm from '../components/Auth/SignupForm';


const AuthTabs = () => {
    const [activeTab, setActiveTab] = useState('login');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='w-full md:mt-[13%] mt-[50%] max-w-md mx-auto p-4'>
            <div className='flex mb-4'>
                <button 
                    className={`flex-1 p-2 text-center ${activeTab === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => handleTabChange('login')}
                >
                    Login
                </button>
                <button 
                    className={`flex-1 p-2 text-center ${activeTab === 'register' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => handleTabChange('register')}
                >
                    Register
                </button>
            </div>
            {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
        </div>
    );
};

export default AuthTabs;
