import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/PropertyOwner.css';

function PropertyOwner() {
    const [properties, setProperties] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const [propertyDetails, setPropertyDetails] = useState({
        title: '',
        description: '',
        type: '',
        price: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        bedrooms: '',
        bathrooms: '',
        image: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPropertyDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        setPropertyDetails(prevDetails => ({
            ...prevDetails,
            image: e.target.files[0]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProperties(prevProperties => [...prevProperties, propertyDetails]);
        setPropertyDetails({
            title: '',
            description: '',
            type: '',
            price: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            country: '',
            bedrooms: '',
            bathrooms: '',
            image: null
        });
        setShowForm(false);
    };

    return (
        <div>
            <Navbar />
            <div className="container1">
            {showForm ? (
                <div className="centered-form">
                    <h2>List Your Property</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="title" placeholder="Property Title" value={propertyDetails.title} onChange={handleInputChange} />
                        <textarea name="description" placeholder="Property Description" value={propertyDetails.description} onChange={handleInputChange}></textarea>
                        <select name="type" value={propertyDetails.type} onChange={handleInputChange}>
                            <option value="">--Select Property Type--</option>
                            <option value="sale">For Sale</option>
                            <option value="rent">For Rent</option>
                        </select>
                        <input type="number" name="price" placeholder="Price" value={propertyDetails.price} onChange={handleInputChange} />
                        <input type="text" name="address" placeholder="Address" value={propertyDetails.address} onChange={handleInputChange} />
                        <input type="text" name="city" placeholder="City" value={propertyDetails.city} onChange={handleInputChange} />
                        <input type="text" name="state" placeholder="State/Province" value={propertyDetails.state} onChange={handleInputChange} />
                        <input type="text" name="zipCode" placeholder="Zip Code" value={propertyDetails.zipCode} onChange={handleInputChange} />
                        <input type="text" name="country" placeholder="Country" value={propertyDetails.country} onChange={handleInputChange} />
                        <input type="number" name="bedrooms" placeholder="Number of Bedrooms" value={propertyDetails.bedrooms} onChange={handleInputChange} />
                        <input type="number" name="bathrooms" placeholder="Number of Bathrooms" value={propertyDetails.bathrooms} onChange={handleInputChange} />
                        <input type="date" placeholder="Available Date" onChange={handleInputChange} />
                        <input type="file" name="image" onChange={handleImageChange} />
                        <button type="submit">List Property</button>
                    </form>
                </div>
            ) : (
                <>
                    <div className='landlord'>
                    <p>Are you a property owner?</p>
                    {properties.length === 0 && (
                        <>
                            <p>You currently have no listed properties.</p>
                            <button onClick={() => setShowForm(true)}>Add a Property</button>
                        </>
                    )}
                    {properties.length > 0 && (
                        <>
                            <p>See your properties:</p>
                            {properties.map((property, index) => (
                                <div key={index}>
                                    <p>{property.title}</p>
                                    <button onClick={() => {
                                        setProperties(prevProperties => prevProperties.filter((_, idx) => idx !== index));
                                    }}>
                                        Delete Property
                                    </button>
                                </div>
                            ))}
                            <button onClick={() => setShowForm(true)}>Add Another Property</button>
                        </>
                    )}
                    </div>
                </>
            )}
        </div>
        </div>
    );
}

export default PropertyOwner;
