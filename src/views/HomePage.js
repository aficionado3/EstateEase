import React from 'react';
import '../styles/HomePage.css';
import { Link } from 'react-router-dom';



function HomePage() {

    return (
        <div className="home-page">

            {/* Header */}
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

            <section className="main-section">
                <h2>Discover Your Next Home</h2>

                <div className="cta-container">
                    <div className="cta-content">
                        <p>Find the perfect property tailored to your needs. Start your journey with Rent Hub today!</p>
                        <Link to="/signup" className="cta-button">Get Started</Link>
                    </div>
                    {/* <img src="https://www.pexels.com/photo/joyful-young-couple-dancing-after-moving-in-new-purchased-apartment-7203879/" alt="Happy Client" className="cta-image" /> */}
                </div>

                <div className="steps-section">
                    <div className="step">
                        <div className="icon">🏠</div>
                        <h3><Link to="/properties">View Available Properties</Link></h3>
                    </div>
                </div>
            </section>



            {/* Testimonials */}
            <section className="testimonials-section">
                <h2>What our happy customers are saying...</h2>
                <div className="testimonials-carousel">
                    {[...Array(3)].map((_, index) => (
                        <React.Fragment key={index}>
                            <div className="testimonial">
                                <p>"This platform made renting so easy!"</p>
                                <h3>- John Doe</h3>
                            </div>
                            <div className="testimonial">
                                <p>"I found my dream home here!"</p>
                                <h3>- Jane Smith</h3>
                            </div>
                            <div className="testimonial">
                                <p>"The most transparent rental platform."</p>
                                <h3>- Richard Roe</h3>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </section>



            {/* Footer */}
            <footer className="home-footer">
                <p>© 2023 Rent Hub. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default HomePage;

