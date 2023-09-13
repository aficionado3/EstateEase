import React, { useState } from 'react';

const Auth = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistration = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div>
      {!isRegistered ? (
        <form onSubmit={handleRegistration}>
          <input placeholder="Username" />
          <input placeholder="Password" type="password" />
          <input placeholder="Confirm Password" type="password" />
          <button type="submit">Register</button>
        </form>
      ) : (
        <form onSubmit={handleLogin}>
          <input placeholder="Username" />
          <input placeholder="Password" type="password" />
          <button type="submit">Login</button>
        </form>
      )}
      <button onClick={() => setIsRegistered(!isRegistered)}>
        {isRegistered ? 'Not registered? Sign up' : 'Already registered? Log in'}
      </button>
    </div>
  );
};

export default Auth;


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
