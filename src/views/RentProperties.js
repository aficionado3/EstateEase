// import React, { useState } from 'react';
// import '../styles/PropertyStyles.css';
// import properties from '../assets/properties';
// import { Link } from 'react-router-dom';

// function RentProperties() {
//     // Local states for the component
//     const [searchTerm, setSearchTerm] = useState('');
//     const [isLandlord, setIsLandlord] = useState(false);  // Mock state, in real-world you'd fetch this info
//     const [showDetailsProperty, setShowDetailsProperty] = useState(null);

//     // Filter properties for rent
//     const filteredProperties = properties
//         .filter(property => property.type === 'rent')
//         .filter(property => property.title.toLowerCase().includes(searchTerm.toLowerCase()));

//     return (
//         <PropertyListing type='rent' properties={filteredProperties} isLandlord={isLandlord} />
//     );
// }

// function PropertyListing({ type, properties, isLandlord }) {
//     const placeholderImage = 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';
//     const handleImageError = (e) => {
//         e.target.src = placeholderImage;
//     }

//     return (
//         <div>
//             {/* Header and Search code */}
//             <header className="home-header">
//                 <h1>Rent Hub</h1>
//                 <nav className="navbar">
//                     {/* ... (rest of your navigation links) */}
//                 </nav>
//             </header>

//             <div className="property-container">
//                 <div className="search-container">
//                     <input
//                         type="text"
//                         placeholder={`Search ${type} properties by title...`}
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                     />
//                 </div>
                
//                 {properties.map((property) => (
//                     <div className="property-card" key={property.id}>
//                         {/* Property Card Code */}
//                         <img src={property.image} alt={property.title} onError={handleImageError} />
//                         {/* ... (rest of the property details) */}
                        
//                         {isLandlord ? (
//                             <div>
//                                 {/* If landlord, show these options */}
//                                 <button className='button1'>List Property for Sale</button>
//                                 <button className='button1'>List Property for Rent</button>
//                             </div>
//                         ) : (
//                             <div>
//                                 {/* If not landlord, show buy or rent options */}
//                                 {type === 'buy' && <button className='button1'>Buy</button>}
//                                 {type === 'rent' && <button className='button1'>Rent</button>}
//                                 <button className='button1'>Request a tour</button>
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default { RentProperties };



import React from 'react';
import PropertyListing from './PropertyListing';

function RentProperties() {
    return (
        <PropertyListing type='rent' />
    );
}

export default RentProperties;
