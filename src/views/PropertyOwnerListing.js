import React, { useState } from 'react';

function PropertyOwnerListing() {
    const [propertyDetails, setPropertyDetails] = useState({
        title: '',
        description: '',
        type: '', 
        price: '',
        address: '',
        // ... other fields
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPropertyDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        // Here, ideally send the data to an API to be saved.
        // For now, just log it or add to a local state.
        console.log(propertyDetails);
    };

    return (
        <div>
            <h2>List Your Property</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Property Title" 
                    value={propertyDetails.title}
                    onChange={handleInputChange}
                />
                {/* ... other fields in similar fashion */}
                <button type="submit">List Property</button>
            </form>
        </div>
    );
}

export default PropertyOwnerListing;
