import React from 'react';

const AddProperty = () => {
  const handlePropertySubmission = (e) => {
    e.preventDefault();
    // Handle property addition logic here
  };

  return (
    <div>
      <form onSubmit={handlePropertySubmission}>
        <input placeholder="Property Title" />
        <textarea placeholder="Property Description" />
        <input placeholder="Price" />
        <input type="date" placeholder="Available Date" />
        <button type="submit">List Property</button>
      </form>
    </div>
  );
};

export default AddProperty;
