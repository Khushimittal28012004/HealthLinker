import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './TermsAndCondition.css';
const PrivacyPolicy = () => {
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

          {/* Privacy Policy Content */}
          <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1020px', margin: '30px auto', backgroundColor: 'white' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '20px', textAlign: 'left' }}>Privacy Policy</h2>
        
        <section style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '10px', textAlign: 'left' }}>Introduction</h3>
          <p style={{ textAlign: 'left' }}>At HealthLinker, we prioritize your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website. Your trust is important to us, and we strive to maintain it by being transparent about our practices.</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '10px', textAlign: 'left' }}>Data Collection</h3>
          <p style={{ textAlign: 'left' }}><strong>Personal Information:</strong> When you use our services, we may collect information such as your name, contact details, location, and medical preferences. This helps us provide you with the most accurate and personalized experience.</p>
          <p style={{ textAlign: 'left' }}><strong>Usage Data:</strong> We collect data on how you interact with our website, including pages visited, services used, and preferences. This information helps us improve our platform and enhance your experience.</p>
          <p style={{ textAlign: 'left' }}><strong>Geolocation Data:</strong> With your consent, we may collect your location data to provide location-based services such as finding nearby hospitals and checking real-time bed availability.</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '10px', textAlign: 'left' }}>How We Use Your Information</h3>
          <p style={{ textAlign: 'left' }}><strong>Service Delivery:</strong> Your information is essential for delivering the services you request, such as booking appointments, checking OPD queue status, and purchasing medicines.</p>
          <p style={{ textAlign: 'left' }}><strong>Personalization:</strong> We use your data to personalize your experience, making it easier for you to access the services you need quickly and efficiently.</p>
          <p style={{ textAlign: 'left' }}><strong>Communication:</strong> We may use your contact information to send you confirmations, updates, and notifications related to your interactions with our website.</p>
          <p style={{ textAlign: 'left' }}><strong>Security:</strong> Your data helps us protect against unauthorized access and ensure the security of your interactions with our website.</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '10px', textAlign: 'left' }}>Data Sharing</h3>
          <p style={{ textAlign: 'left' }}>We do not sell or share your personal information with third parties for their marketing purposes. However, to provide seamless healthcare services, we may share your data with:</p>
          <p style={{ textAlign: 'left' }}><strong>Hospitals:</strong> For updating appointment bookings, bed availability, and other medical services.</p>
          <p style={{ textAlign: 'left' }}><strong>City-Wide Modules:</strong> To integrate and synchronize data for city-wide healthcare coordination.</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '10px', textAlign: 'left' }}>Data Security</h3>
          <p style={{ textAlign: 'left' }}>We implement robust security measures to protect your personal information from unauthorized access, alteration, or disclosure. Your data is encrypted and stored securely to ensure your privacy is always maintained.</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '10px', textAlign: 'left' }}>Your Rights</h3>
          <p style={{ textAlign: 'left' }}>You have the right to access, modify, or delete your personal information. If you have any concerns or requests regarding your data, please contact us, and we will be happy to assist you.</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '10px', textAlign: 'left' }}>Changes to This Policy</h3>
          <p style={{ textAlign: 'left' }}>We may update this Privacy Policy to reflect changes in our practices or legal requirements. We encourage you to review this policy periodically to stay informed about how we are protecting your information.</p>
        </section>
      </main>


      
    
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

export default PrivacyPolicy;
