import React, { useState } from 'react';
import Web3 from 'web3';
import '../styles/SignUp.css';

function SignUp() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [account, setAccount] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    const handleMetaMaskSignup = async () => {
        if (typeof window.ethereum !== 'undefined') {
            const web3 = new Web3(window.ethereum);
            try {
                // Request account access
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);
                console.log('Logged in with MetaMask:', accounts[0]);
            } catch (error) {
                console.error('User denied account access');
            }
        } else {
            alert('Please install MetaMask to use this feature!');
        }
    }

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    value={formData.username} 
                    onChange={handleChange} 
                    required
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    required
                />
                <button type="submit">Sign Up</button>

                <div className="alternate-signup">
                    <p>Or sign in with:</p>
                    <button type="button" onClick={handleMetaMaskSignup}>MetaMask</button>
                </div>
                <div className="existing-account-query">
                    <p>Already have an account?</p>
                    {/* You might need to replace the link with the route to your login page */}
                    <a href="/login">Log in here</a>
                </div>
            </form>
           
        </div>
    );
}

export default SignUp;
