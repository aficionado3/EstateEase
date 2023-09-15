// import React, { useState } from 'react';

// function PropertyOwnerListing() {
//     const [propertyDetails, setPropertyDetails] = useState({
//         title: '',
//         description: '',
//         type: '', 
//         price: '',
//         address: '',
//         // ... other fields
//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setPropertyDetails(prevDetails => ({
//             ...prevDetails,
//             [name]: value
//         }));
//     };

//     const handleSubmit = () => {
//         // Here, ideally send the data to an API to be saved.
//         // For now, just log it or add to a local state.
//         console.log(propertyDetails);
//     };

//     return (
//         <div>
//             <h2>List Your Property</h2>
//             <form onSubmit={handleSubmit}>
//                 <input 
//                     type="text" 
//                     name="title" 
//                     placeholder="Property Title" 
//                     value={propertyDetails.title}
//                     onChange={handleInputChange}
//                 />
//                 {/* ... other fields in similar fashion */}
//                 <button type="submit">List Property</button>
//             </form>
//         </div>
//     );
// }

// export default PropertyOwnerListing;


// import React, { useState } from 'react';

// function PropertyOwnerListing() {
//     const [propertyDetails, setPropertyDetails] = useState({
//         title: '',
//         description: '',
//         type: '', 
//         price: '',
//         address: '',
//         image: null
//         // ... add more fields if necessary
//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setPropertyDetails(prevDetails => ({
//             ...prevDetails,
//             [name]: value
//         }));
//     };

//     const handleImageChange = (e) => {
//         setPropertyDetails(prevDetails => ({
//             ...prevDetails,
//             image: e.target.files[0]
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // If you're going to upload the image to a server, you'd make an API request here.
//         // For now, let's just log the data.
//         console.log(propertyDetails);

//         // If you want to see the image, you'd use something like:
//         // const imageURL = URL.createObjectURL(propertyDetails.image);
//         // console.log(imageURL);
//     };

//     return (
//         <div>
//             <h2>List Your Property</h2>
//             <form onSubmit={handleSubmit}>
//                 <input 
//                     type="text" 
//                     name="title" 
//                     placeholder="Property Title" 
//                     value={propertyDetails.title}
//                     onChange={handleInputChange}
//                 />

//                 <textarea 
//                     name="description" 
//                     placeholder="Property Description"
//                     value={propertyDetails.description}
//                     onChange={handleInputChange}
//                 />

//                 <select name="type" value={propertyDetails.type} onChange={handleInputChange}>
//                     <option value="">--Select Property Type--</option>
//                     <option value="sale">For Sale</option>
//                     <option value="rent">For Rent</option>
//                 </select>

//                 <input 
//                     type="number" 
//                     name="price" 
//                     placeholder="Price" 
//                     value={propertyDetails.price}
//                     onChange={handleInputChange}
//                 />

//                 <input 
//                     type="text" 
//                     name="address" 
//                     placeholder="Address" 
//                     value={propertyDetails.address}
//                     onChange={handleInputChange}
//                 />

//                 <input 
//                     type="file" 
//                     name="image" 
//                     onChange={handleImageChange}
//                 />

//                 <button type="submit">List Property</button>
//             </form>
//         </div>
//     );
// }

// export default PropertyOwnerListing;



// import React, { useState } from 'react';

// function PropertyOwner() {
//     const [properties, setProperties] = useState([]);
//     const [showForm, setShowForm] = useState(false);

//     const [propertyDetails, setPropertyDetails] = useState({
//         title: '',
//         description: '',
//         type: '',
//         price: '',
//         address: '',
//         image: null
//         // ... add more fields if necessary
//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setPropertyDetails(prevDetails => ({
//             ...prevDetails,
//             [name]: value
//         }));
//     };

//     const handleImageChange = (e) => {
//         setPropertyDetails(prevDetails => ({
//             ...prevDetails,
//             image: e.target.files[0]
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Add the property to the properties array.
//         setProperties(prevProperties => [...prevProperties, propertyDetails]);
//         // Clear the form.
//         setPropertyDetails({
//             title: '',
//             description: '',
//             type: '',
//             price: '',
//             address: '',
//             image: null
//         });
//         setShowForm(false);
//     };

//     return (
//         <div>
//             <h2>Property Owner Dashboard</h2>

//             {showForm ? (
//                 <div>
//                     <h2>List Your Property</h2>
//                     <form onSubmit={handleSubmit}>
//                         <input
//                             type="text"
//                             name="title"
//                             placeholder="Property Title"
//                             value={propertyDetails.title}
//                             onChange={handleInputChange}
//                         />

//                         <textarea
//                             name="description"
//                             placeholder="Property Description"
//                             value={propertyDetails.description}
//                             onChange={handleInputChange}
//                         />

//                         <select name="type" value={propertyDetails.type} onChange={handleInputChange}>
//                             <option value="">--Select Property Type--</option>
//                             <option value="sale">For Sale</option>
//                             <option value="rent">For Rent</option>
//                         </select>

//                         <input
//                             type="number"
//                             name="price"
//                             placeholder="Price"
//                             value={propertyDetails.price}
//                             onChange={handleInputChange}
//                         />

//                         <input
//                             type="text"
//                             name="address"
//                             placeholder="Address"
//                             value={propertyDetails.address}
//                             onChange={handleInputChange}
//                         />

//                         <input
//                             type="file"
//                             name="image"
//                             onChange={handleImageChange}
//                         />

//                         <button type="submit">List Property</button>
//                     </form>
//                 </div>
//             ) : (
//                 <>
//                     <p>Are you a property owner?</p>
//                     {properties.length === 0 && (
//                         <>
//                             <p>You currently have no listed properties.</p>
//                             <button onClick={() => setShowForm(true)}>Add a Property</button>
//                         </>
//                     )}
//                     {properties.length > 0 && (
//                         <>
//                             <p>See your properties:</p>
//                             {properties.map((property, index) => (
//                                 <div key={index}>
//                                     {/* Display property details */}
//                                     <p>{property.title}</p>
//                                     <button onClick={() => {
//                                         setProperties(prevProperties => prevProperties.filter((_, idx) => idx !== index));
//                                     }}>
//                                         Delete Property
//                                     </button>
//                                 </div>
//                             ))}
//                             <button onClick={() => setShowForm(true)}>Add Another Property</button>
//                         </>
//                     )}
//                 </>
//             )}
//         </div>
//     );
// }

// export default PropertyOwner;

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
                        <input type="file" name="image" onChange={handleImageChange} />
                        <button type="submit">List Property</button>
                    </form>
                </div>
            ) : (
                <>
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
                </>
            )}
        </div>
        </div>
    );
}

export default PropertyOwner;
