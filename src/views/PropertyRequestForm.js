import React, { useState } from 'react';
import '../styles/PropertyRequestForm.css';

function PropertyRequestForm() {
    const [formData, setFormData] = useState({
        actionType: '',
        fullName: '',
        email: '',
        phone: '',
        propertyId: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g. API call) here.
        console.log(formData);
    };

    return (
        <div className="request-form-container">
            <h2 className="form-title">Property Inquiry</h2>
            <form onSubmit={handleSubmit} className="inquiry-form">
            {/* <h2 className="form-title">Property Inquiry</h2> */}
            <br/>
                <select name="actionType" value={formData.actionType} onChange={handleInputChange} className="form-select">
                    <option value="">--Select Action Type--</option>
                    <option value="booking">Booking</option>
                    <option value="renting">Renting</option>
                    <option value="buying">Buying</option>
                </select>
                <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleInputChange} className="form-input"/>
                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} className="form-input"/>
                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} className="form-input"/>
                <input type="text" name="propertyId" placeholder="Property Title" value={formData.propertyId} onChange={handleInputChange} className="form-input"/>
                <textarea name="message" placeholder="Additional Message" value={formData.message} onChange={handleInputChange} className="form-textarea"></textarea>
                <button type="submit" className="form-button">Submit Inquiry</button>
            </form>
        </div>
    );
    
}

export default PropertyRequestForm;
