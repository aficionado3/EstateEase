// import React, { useState } from 'react';
// import Web3 from 'web3';
// import '../styles/LandlordLogin.css';

// function LandlordLogin() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [account, setAccount] = useState('');

//     const handleLogin = () => {
//         // Traditional login
//         console.log('Logged in as', username);
//     };

//     const loginWithMetaMask = async () => {
//         if (window.ethereum) {
//             const web3 = new Web3(window.ethereum);
//             try {
//                 // Request account access
//                 const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//                 setAccount(accounts[0]);
//                 console.log('Logged in with MetaMask:', accounts[0]);
//             } catch (error) {
//                 console.error('User denied account access');
//             }
//         } else {
//             console.error('Ethereum browser not detected. Try installing MetaMask.');
//         }
//     };

//     return (
//         <div className="login-container">
//             <h2>Landlord Login</h2>
//             <input 
//                 type="text" 
//                 placeholder="Username" 
//                 value={username} 
//                 onChange={(e) => setUsername(e.target.value)}
//             />
//             <input 
//                 type="password" 
//                 placeholder="Password" 
//                 value={password} 
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={handleLogin}>Login with Username</button>
            
//             <div>
//                 <h3>OR</h3>
//                 <button onClick={loginWithMetaMask}>Login with MetaMask</button>
//             </div>
//         </div>
//     );
// }

// export default LandlordLogin;


import React, { useState } from 'react';
import Web3 from 'web3';
import '../styles/LandlordLogin.css';

function LandlordLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [account, setAccount] = useState('');

    const handleLogin = () => {
        console.log('Logged in as', username);
    };

    const loginWithMetaMask = async () => {
        if (window.ethereum) {
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
            console.error('Ethereum browser not detected. Try installing MetaMask.');
        }
    };

    return (
        <div className="login-container">
            <h2>Landlord Login</h2>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            
            <div>
                <h3>OR</h3>
                <button onClick={loginWithMetaMask}>Login with MetaMask</button>
            </div>
        </div>
    );
}

export default LandlordLogin;

