import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './homepage.css'; // Import your CSS file

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 style={{ marginLeft:"15px", fontSize:"20px"}}>Health Linker</h1>
        <ul className="navbar-links">
          <li>HOME</li>
          <li>CONDITIONS</li>
          <li>WELL BEING</li>
          <li>FIND A DOCTOR</li>
          <li>SIGN UP</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <video autoPlay loop muted className="background-video">
          <source src="healthcare-background.mp4" type="video/mp4" />
          {/* Your browser does not support the video tag. */}
        </video>
        <div className="hero-content">
          <div>
            <div className="hero-text">
              <h1>EMPOWERING</h1>
              <h1>HEALTHCARE FROM</h1>
              <h1>HOME</h1>
            </div>
            <div className="search-bar">
              <input style={{ fontSize: '15px' }} type="text" placeholder="Search" />
              <button className="search-button">
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
              </button>
            </div>
          </div>
          <div className="radio-buttons">
            <label>
              <input type="radio" name="service" value="hospitals" />
              HOSPITALS
            </label>
            <label>
              <input type="radio" name="service" value="opds" />
              OPDs
            </label>
            <label>
              <input type="radio" name="service" value="pharmacy" />
              PHARMACY
            </label>
          </div>
        </div>
      </header>

      {/* Grid Section */}
      <section className="grid-section">
        <div style={{ marginRight: '-181px' }} className="grid-item fst">
          <h2>Find Nearby Hospital</h2>
          <p>
            Locate hospitals close to your area with ease. Use our tool to find nearby hospitals quickly, whether for emergency or regular visits.
          </p>
        </div>

        <div style={{ marginRight: '181px' }} className="grid-item sec">
          <h2>Check OPD Queue Status</h2>
          <p>
            View the current queue status before you visit. Get real-time updates on waiting times at various OPDs.
          </p>
        </div>

        <div style={{ marginRight: '-181px' }} className="grid-item fst">
          <h2>Check Bed Availability</h2>
          <p>
            Find out the availability of beds in real-time. Get up-to-date information on bed occupancy in hospitals.
          </p>
        </div>

        <div style={{ marginRight: '181px' }} className="grid-item sec">
          <h2>Check Medicine Availability</h2>
          <p>
            Search for medicines available near you. Ensure your prescriptions are filled by checking current stock levels at nearby pharmacies.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '10px', backgroundColor: '#2c3e50', textAlign: 'center',  color: 'white' }}>
        <h2 style={{ fontSize: '20px' }}>HEALTH LINKER</h2>
        <div>
          <span 
            className="mx-3" 
            style={{ cursor: 'pointer' , marginLeft:"-91px"}} 
            onClick={() => navigate('/')} 
            onMouseOver={(e) => e.target.style.textDecoration = 'underline'} 
            onMouseOut={(e) => e.target.style.textDecoration = 'none'}
          >
            HOME
          </span>
          <span 
            className="mx-3" 
            style={{ cursor: 'pointer', marginLeft:"20px" }} 
            onClick={() => navigate('/termsCOND')} 
            onMouseOver={(e) => e.target.style.textDecoration = 'underline'} 
            onMouseOut={(e) => e.target.style.textDecoration = 'none'}
          >
            TERMS & CONDITIONS
          </span>
          <span 
            className="mx-3" 
            style={{ cursor: 'pointer',marginLeft:"20px" }} 
            onClick={() => navigate('/PPolicy')} 
            onMouseOver={(e) => e.target.style.textDecoration = 'underline'} 
            onMouseOut={(e) => e.target.style.textDecoration = 'none'}
          >
            PRIVACY POLICY
          </span>
          <span 
            className="mx-3" 
            style={{ cursor: 'pointer',marginLeft:"20px" }} 
            onClick={() => navigate('/Cookie')} 
            onMouseOver={(e) => e.target.style.textDecoration = 'underline'} 
            onMouseOut={(e) => e.target.style.textDecoration = 'none'}
          >
            COOKIES
          </span>
          <span 
            className="mx-3" 
            style={{ cursor: 'pointer' ,marginLeft:"20px"}} 
            onClick={() => navigate('/Contact')} 
            onMouseOver={(e) => e.target.style.textDecoration = 'underline'} 
            onMouseOut={(e) => e.target.style.textDecoration = 'none'}
          >
            CONTACT US
          </span>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
