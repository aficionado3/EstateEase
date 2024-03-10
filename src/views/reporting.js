
import React, { useState } from 'react';
import Navbar from './Navbar';

function Reporting() {
  const [propertyId, setPropertyId] = useState(''); // To store selected property ID
  const [feedback, setFeedback] = useState('');  // To store user feedback
  const [maintenanceRequest, setMaintenanceRequest] = useState(''); // To store maintenance request

  const handlePropertyChange = (event) => {
    setPropertyId(event.target.value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleMaintenanceChange = (event) => {
    setMaintenanceRequest(event.target.value);
  };

  const submitFeedback = async () => {
    // Implement logic to send feedback to the server with propertyId and feedback text
    // This might involve an API call or other data persistence mechanism
    console.log("Submitting feedback:", propertyId, feedback);
    setPropertyId('');
    setFeedback('');
  };

  const submitMaintenanceRequest = async () => {
    // Implement logic to send maintenance request to the server with propertyId and request text
    // This might involve an API call or other notification system for property owners
    console.log("Submitting maintenance request:", propertyId, maintenanceRequest);
    setPropertyId('');
    setMaintenanceRequest('');
  };

  return (
    <div>
      <h2>Property Reporting</h2>
      <select value={propertyId} onChange={handlePropertyChange}>
        <option value="">Select Property</option>
        {/* Replace with logic to populate options with actual property data */}
        <option value="1">Property 1</option>
        <option value="2">Property 2</option>
      </select>
      <br />
      <textarea
        value={feedback}
        onChange={handleFeedbackChange}
        placeholder="Leave feedback on the property..."
      />
      <br />
      <button onClick={submitFeedback}>Submit Feedback</button>
      <br />
      <textarea
        value={maintenanceRequest}
        onChange={handleMaintenanceChange}
        placeholder="Describe your maintenance request..."
      />
      <br />
      <button onClick={submitMaintenanceRequest}>Submit Maintenance Request</button>
    </div>
  );
}

export default Reporting;