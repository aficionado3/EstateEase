
// import React, { useState } from 'react';
// import '../styles/PropertyStyles.css';
// import properties from '../assets/properties';
// import { Link } from 'react-router-dom';

// function PropertyListing({ type }) {
//     const placeholderImage = 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';

//     const [searchTerm, setSearchTerm] = useState('');
//     const [isPropertyOwner, setIsPropertyOwner] = useState(false);
//     const [modalOpen, setModalOpen] = useState(false);
//     const [currentProperty, setCurrentProperty] = useState(null);
//     const [mainImage, setMainImage] = useState(null);

//     const handleImageError = (e) => {
//         e.target.src = placeholderImage;
//     }

//     const filteredProperties = properties
//         .filter(property => (type ? property.type === type : true))
//         .filter(property => property.title.toLowerCase().includes(searchTerm.toLowerCase()));

//     const handleImageClick = (property, image) => {
//         setCurrentProperty(property);
//         setMainImage(image);
//         setModalOpen(true);
//     }

//     return (
//         <div>
//             <header className="home-header">
//                 <h1>Rent Hub</h1>
//                 <nav className="navbar">
//                     <span className="nav-item"><Link to="/">Home</Link></span>
//                     <span className="nav-item"><Link to="/propertiesforsale">Buy</Link></span>
//                     <span className="nav-item"><Link to="/propertiesforrent">Rent</Link></span>
//                     <span className="nav-item"><Link to="/properties">Properties</Link></span>
//                     <span className="nav-item"><Link to="/login">Login</Link></span>
//                     <span className="nav-item"><Link to="/signup">Sign Up</Link></span>
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
//                 {filteredProperties.map((property) => (
//                     // <div className="property-card" key={property.id}>
//                     //     <img
//                     //         src={property.image}
//                     //         alt={property.title}
//                     //         className="property-image"
//                     //         onError={handleImageError}
//                     //         onClick={() => handleImageClick(property, property.image)}
//                     //         style={{cursor: 'pointer'}}
//                     //     />
//                     //     <h3 className="property-title">{property.title}</h3>
//                     //     <p className="property-price">{property.price}</p>
//                     //     <p className="property-owner">Owner: {property.owner}</p>
//                     // </div>
//                     <div className="property-card" key={property.id}>
//                         <img
//                             src={property.image}
//                             alt={property.title}
//                             className="property-image"
//                             onError={handleImageError}
//                             onClick={() => handleImageClick(property, property.image)}
//                             style={{ cursor: 'pointer' }}
//                         />
//                         <div className="property-info-overlay">
//                             <span>{property.sqft} sqft</span> | <span>{property.bedrooms} bd</span> | <span>{property.bathrooms} ba</span>
//                         </div>
//                         <h3 className="property-title">{property.title}</h3>
//                         <p className="property-price">{property.price}</p>
//                         <p className="property-address"> {property.address}</p>
//                     </div>

//                 ))}
//             </div>
//             {modalOpen && currentProperty && (
//                 <div className="property-modal">
//                     <div className="modal-content">
//                         <span className="close-icon" onClick={() => setModalOpen(false)}>x</span>
//                         <div className="modal-left">
//                             <img src={mainImage} alt={currentProperty.title} style={{ marginBottom: "10px" }} />
//                             {currentProperty.additionalImages && currentProperty.additionalImages.map((img, index) => (
//                                 img !== mainImage && <img key={index} src={img} alt={`${currentProperty.title}-${index}`} />
//                             ))}
//                         </div>
//                         <div className="modal-right">
//                             <h2>{currentProperty.title}</h2>
//                             <p>Type: {currentProperty.type.charAt(0).toUpperCase() + currentProperty.type.slice(1)}</p>
//                             <p>{currentProperty.description}</p>
//                             <p>{currentProperty.sqft} sqft</p>
//                             <p>{currentProperty.bedrooms} bd</p>
//                             <p>{currentProperty.bathrooms} ba</p>
//                             <p className="modal-price">{currentProperty.price}</p>
//                             <p className="modal-address">Address: {currentProperty.address}</p>
//                             <p className="modal-owner">Owner: {currentProperty.owner}</p>

//                             {isPropertyOwner ? (
//                                 <div>
//                                     <button className='button1'>List Property for Sale</button>
//                                     <button className='button1'>List Property for Rent</button>
//                                 </div>
//                             ) : (
//                                 currentProperty.type === 'buy' ? (
//                                     <div>
//                                         <button className='button1'>Buy</button>
//                                         <button className='button1'>Request a tour</button>
//                                         <button className='button1'>FAQ</button>
//                                     </div>
//                                 ) : (
//                                     <div>
//                                         <button className='button1'>Rent</button>
//                                         <button className='button1'>Request a tour</button>
//                                         <button className='button1'>FAQ</button>
//                                     </div>
//                                 )
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             )}


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
    const [modalOpen, setModalOpen] = useState(false);
    const [currentProperty, setCurrentProperty] = useState(null);
    const [mainImage, setMainImage] = useState(null);
    const [showAllReviews, setShowAllReviews] = useState(false); // State to control showing all reviews
    const [reviews, setReviews] = useState({});
    const [showReviews, setShowReviews] = useState(false); // State to control showing reviews list

    const handleToggleReviewsDisplay = () => {
        setShowReviews(!showReviews);
    }

    const handleToggleReviews = () => {
        setShowAllReviews(!showAllReviews);
    }


    const handleImageError = (e) => {
        e.target.src = placeholderImage;
    }

    const filteredProperties = properties
        .filter(property => (type ? property.type === type : true))
        .filter(property => property.title.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleImageClick = (property, image) => {
        setCurrentProperty(property);
        setMainImage(image);
        setModalOpen(true);
    }

    const handleAddReview = (propertyId, review) => {
        // This would ideally POST to an API, but for now we'll use local state
        setReviews(prevReviews => {
            const existingReviews = prevReviews[propertyId] || [];
            return {
                ...prevReviews,
                [propertyId]: [...existingReviews, review]
            }
        });
    }

    // const reviews = {
    //     "propertyId_1": [{ comment: "Great place!", rating: 5 }, { comment: "Average stay", rating: 3 }],
    //     "propertyId_2": []
    //     // ...
    // };

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
                            onClick={() => handleImageClick(property, property.image)}
                            style={{ cursor: 'pointer' }}
                        />
                        <div className="property-info-overlay">
                            <span>{property.sqft} sqft</span> | <span>{property.bedrooms} bd</span> | <span>{property.bathrooms} ba</span>
                        </div>
                        <h3 className="property-title">{property.title}</h3>
                        <p className="property-price">{property.price}</p>
                        <p className="property-address"> {property.address}</p>
                    </div>

                ))}
            </div>
            {modalOpen && currentProperty && (
                <div className="property-modal">
                    <div className="modal-content">
                        <span className="close-icon" onClick={() => setModalOpen(false)}>x</span>
                        <div className="modal-left">
                            <img src={mainImage} alt={currentProperty.title} style={{ marginBottom: "10px" }} />
                            {currentProperty.additionalImages && currentProperty.additionalImages.map((img, index) => (
                                img !== mainImage && <img key={index} src={img} alt={`${currentProperty.title}-${index}`} />
                            ))}
                        </div>
                        <div className="modal-right">
                            <h2>{currentProperty.title}</h2>
                            <p>Type: {currentProperty.type.charAt(0).toUpperCase() + currentProperty.type.slice(1)}</p>
                            <p>{currentProperty.description}</p>
                            <p>{currentProperty.sqft} sqft</p>
                            <p>{currentProperty.bedrooms} bd</p>
                            <p>{currentProperty.bathrooms} ba</p>
                            <p className="modal-price">{currentProperty.price}</p>
                            <p className="modal-address">Address: {currentProperty.address}</p>
                            <p className="modal-owner">Owner: {currentProperty.owner}</p>

                            {isPropertyOwner ? (
                                <div>
                                    <button className='button1'>List Property for Sale</button>
                                    <button className='button1'>List Property for Rent</button>
                                </div>
                            ) : (
                                currentProperty.type === 'buy' ? (
                                    <div>
                                        <button className='button1'>Buy</button>
                                        <button className='button1'>Request a tour</button>
                                        <button className='button1'>FAQ</button>
                                    </div>
                                ) : (
                                    <div>
                                        <button className='button1'>Rent</button>
                                        <button className='button1'>Request a tour</button>
                                        <button className='button1'>FAQ</button>
                                    </div>
                                )
                            )}
                            <div className="reviews-section">
                                <h3 onClick={handleToggleReviewsDisplay}>Reviews for {currentProperty.title}</h3>

                                {showReviews && (
                                    <>
                                        {reviews[currentProperty.id] && reviews[currentProperty.id].length > 0 ? (
                                            reviews[currentProperty.id].map((review, index) => (
                                                <div key={index} className="review">
                                                    <p>{review.comment}</p>
                                                    <p>Rating: {review.rating}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <p>No reviews for this property or property owner.</p>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            )}


        </div>
    );
}

export default PropertyListing;
