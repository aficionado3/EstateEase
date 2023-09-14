import React from 'react';
import '../styles/HomePage.css';
import { Link } from 'react-router-dom';



function HomePage() {

    return (
        <div className="home-page">

            {/* Header */}
            <header className="home-header">
                <h1>Rent Hub</h1>
                <button><Link to="/landlordlogin">Landlord Login</Link></button>
            </header>

            {/* Main Section */}
            <section className="main-section">
                <h2>Discover Your Next Home</h2>

                <div className="steps-section">
                    {/* This is a sample step, repeat for others */}
                    <div className="step">
                        <div className="icon">🏠</div>
                        {/* <h3>Register or Log in</h3> */}

                        <h3><Link to="/properties">View Available Properties</Link></h3>
                    </div>
                </div>

                <div className="actions-section">
                    <button>Buy a Property</button>
                    <button>Rent a Property</button>
                </div>

                <div className="landlord-section">
                    <h2>Are you a landlord?</h2>
                    <p>List your property with us today!</p>
                    <button>Sign in</button>
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
