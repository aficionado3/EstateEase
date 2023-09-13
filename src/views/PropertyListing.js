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
                            <button onClick={() => setShowDetailsProperty(null)}>Hide Details</button>
                        </div>
                    ) : (
                        <button onClick={() => setShowDetailsProperty(property.id)}>More Details</button>
                    )}
                    <p className="property-price">{property.price}</p>
                    <p className="property-owner">Owner: {property.owner}</p>

                    {isPropertyOwner ? (
                        <div>
                            <button>List Property for Sale</button>
                            <button>List Property for Rent</button>
                        </div>
                    ) : (
                        <div>
                            <button>Buy</button>
                            <button>Rent</button>
                            <button>Book Showroom Walkthrough</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default PropertyListing;
