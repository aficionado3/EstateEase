// import React from 'react';
// import '../styles/PropertyStyles.css';
// import properties  from '../assets/properties';


// function PropertyListing() {
//     // Placeholder image URL
//     // const placeholderImage = 'https://images.pexels.com/photos/2401407/pexels-photo-2401407.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';
//     const placeholderImage = 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';

//     const handleImageError = (e) => {
//         e.target.src = placeholderImage;
//     }

//     return (
//         <div className="property-container">
//             {properties.map((property) => (
//                 <div className="property-card" key={property.id}>
//                     <img 
//                         src={property.image} 
//                         alt={property.title} 
//                         className="property-image"
//                         onError={handleImageError}  // Use onError to set placeholder if the image fails to load
//                     />
//                     <h3 className="property-title">{property.title}</h3>
//                     <p className="property-description">{property.description}</p>
//                     <p className="property-price">{property.price}</p>
//                     <p className="property-owner">Owner: {property.owner}</p>
//                     {/* Add more details or action buttons as needed */}
//                 </div>
//             ))}
//         </div>
//     );
// }


// export default PropertyListing;


import React, { useState } from 'react';
import '../styles/PropertyStyles.css';
import properties from '../assets/properties';
import { Link } from 'react-router-dom';

function PropertyListing({ type }) {
    const placeholderImage = 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';

    const [searchTerm, setSearchTerm] = useState('');
    const [isPropertyOwner, setIsPropertyOwner] = useState(false);
    const [showDetailsProperty, setShowDetailsProperty] = useState(null);

    const handleImageError = (e) => {
        e.target.src = placeholderImage;
    }

    const filteredProperties = properties
        .filter(property => property.type === type)
        .filter(property => property.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div>
            <header className="home-header">
                <h1>Rent Hub</h1>
                <nav className="navbar">
                    <span className="nav-item"><Link to="/">Home</Link></span>
                    <span className="nav-item"><Link to="/propertiesforsale">Buy</Link></span>
                    <span className="nav-item"><Link to="/propertiesforrent">Rent</Link></span>
                    <span className="nav-item"><Link to="/properties">Properties</Link></span>
                    <span className="nav-item"><Link to="/login">Login</Link></span>
                    <span className="nav-item"><Link to="/signup">Sign Up</Link></span>
                </nav>
            </header>
            <div className="property-container">


                <div className="search-container">
                    <input
                        type="text"
                        placeholder={`Search ${type} properties by title...`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                {filteredProperties.map((property) => (
                    <div className="property-card" key={property.id}>
                        <img
                            src={property.image}
                            alt={property.title}
                            className="property-image"
                            onError={handleImageError}
                        />
                        <h3 className="property-title">{property.title}</h3>
                        {showDetailsProperty === property.id ? (
                            <div>
                                <p className="property-description">{property.description}</p>
                                <button onClick={() => setShowDetailsProperty(null)} className='button1'>Hide Details</button>
                            </div>
                        ) : (
                            <button onClick={() => setShowDetailsProperty(property.id)}>More Details</button>
                        )}
                        <p className="property-price">{property.price}</p>
                        <p className="property-owner">Owner: {property.owner}</p>

                        {isPropertyOwner ? (
                            <div>
                                <button className='button1'>List Property for Sale</button>
                                <button className='button1'>List Property for Rent</button>
                            </div>
                        ) : (
                            <div>
                                <button className='button1'>Buy</button>
                                <button className='button1' >Rent</button>
                                <button className='button1'>Request a tour</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PropertyListing;
