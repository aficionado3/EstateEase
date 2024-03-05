// import React, { useState } from 'react';
import '../styles/reporting.css';
// import Navbar from './Navbar';
import '../styles/PropertyOwner.css';


function feedback() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//       username: '',
//       email: '',
//       password: ''
//   });
// };

  return (
      <div>
        <Navbar /><div className="property-container">
          <div className="search-container">
            <input
              type="text"
              placeholder={`Search ${type} properties by title...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
      </div>
      </div>
    );
}


export default reporting;