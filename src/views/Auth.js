
// import React, { useState, useEffect } from 'react';
// import Web3 from 'web3';

// function Auth() {
//     const [account, setAccount] = useState(null);
//     const [userType, setUserType] = useState(null);  // 'landlord' or 'tenant'

//     useEffect(() => {
//         if (userType === 'landlord' && window.ethereum) {
//             const web3 = new Web3(window.ethereum);
//             try {
//                 // Request account access if needed
//                 window.ethereum.enable().then(function() {
//                     // Get the account of the user
//                     web3.eth.getAccounts().then(function(accounts){
//                         setAccount(accounts[0]);
//                     });
//                 });
//             } catch (error) {
//                 console.error(error);
//             }
//         } 
//         // Non-dapp browsers
//         else if (userType === 'landlord') {
//             console.log('Non-Ethereum browser detected. Consider installing MetaMask.');
//         }
//     }, [userType]);

//     return (
//         <div>
//             { !userType ? 
//                 (<div>
//                     <button onClick={() => setUserType('tenant')}>Login as Tenant</button>
//                     <button onClick={() => setUserType('landlord')}>Login as Landlord with MetaMask</button>
//                 </div>)
//                 : 
//                 (account ? 
//                     (<div>
//                         <h3>Welcome, {account}</h3>
//                         {/* You can now fetch and display any user-related data from your backend */}
//                     </div>) 
//                     : 
//                     (userType === 'landlord' && <button onClick={() => window.ethereum.enable()}>Login with MetaMask</button>)
//                 )
//             }
//         </div>
//     );
// }

// export default Auth;
