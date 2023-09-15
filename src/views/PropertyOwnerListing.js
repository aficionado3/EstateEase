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


import React, { useState } from 'react';

function PropertyOwnerListing() {
    const [propertyDetails, setPropertyDetails] = useState({
        title: '',
        description: '',
        type: '', 
        price: '',
        address: '',
        image: null
        // ... add more fields if necessary
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
        // If you're going to upload the image to a server, you'd make an API request here.
        // For now, let's just log the data.
        console.log(propertyDetails);

        // If you want to see the image, you'd use something like:
        // const imageURL = URL.createObjectURL(propertyDetails.image);
        // console.log(imageURL);
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

                <textarea 
                    name="description" 
                    placeholder="Property Description"
                    value={propertyDetails.description}
                    onChange={handleInputChange}
                />

                <select name="type" value={propertyDetails.type} onChange={handleInputChange}>
                    <option value="">--Select Property Type--</option>
                    <option value="sale">For Sale</option>
                    <option value="rent">For Rent</option>
                </select>

                <input 
                    type="number" 
                    name="price" 
                    placeholder="Price" 
                    value={propertyDetails.price}
                    onChange={handleInputChange}
                />

                <input 
                    type="text" 
                    name="address" 
                    placeholder="Address" 
                    value={propertyDetails.address}
                    onChange={handleInputChange}
                />

                <input 
                    type="file" 
                    name="image" 
                    onChange={handleImageChange}
                />

                <button type="submit">List Property</button>
            </form>
        </div>
    );
}

export default PropertyOwnerListing;
