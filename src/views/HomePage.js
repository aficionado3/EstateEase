import React from 'react';
import '../styles/HomePage.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';



function HomePage() {

    return (
        <div>
            <Navbar />
            <div className="home-page">

                <section className="main-section">
                    <h2>Welcome to SmartEstateSpace.</h2>

                    <div className="home-container">
                        <div className="home-content">
                            <p> Find the perfect property tailored to your needs. Start your journey with SmartEstateSpace today!</p>
                            <Link to="/signup" className="start-button">Get Started</Link>
                        </div>
                        {/* <img src="https://www.pexels.com/photo/joyful-young-couple-dancing-after-moving-in-new-purchased-apartment-7203879/" alt="Happy Client" className="cta-image" /> */}
                    </div>

                    <div className="steps-section">
                        <div className="step">
                            <div className="icon">😊</div>
                            <h3><Link to="/properties">View Available Properties</Link></h3>
                        </div>
                    </div>
                </section>
               
            </div>

                   {/* Footer */}
            <footer className="home-footer">
                    <p>© 2024 SmartEstateSpace. All Rights Reserved.</p>
                </footer>
        </div>
    );
}

export default HomePage;

