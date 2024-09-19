import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './TermsAndCondition.css';
const Cookies = () => {
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

      {/* Terms and Conditions Content */}
      <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1020px', margin: '30px auto', backgroundColor: 'white' }}>
      <h2 style={{ fontSize: '30px', marginBottom: '20px', textAlign: 'left' }}>Cookies Policy</h2>
      <section style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '10px', textAlign: 'left' }}>Introduction</h3>
        <p style={{ textAlign: 'left' }}>At HealthLinker, we believe in transparency and want to ensure that you understand how we use cookies on our website. This Cookies Policy explains what cookies are, how we use them, and your choices regarding their use.</p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '10px', textAlign: 'left' }}>What Are Cookies?</h3>
        <p style={{ textAlign: 'left' }}>Cookies are small text files that are stored on your device (computer, tablet, smartphone) when you visit a website. They help us understand how you interact with our website, enabling us to enhance your experience and deliver personalized content.</p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '10px', textAlign: 'left' }}>How We Use Cookies</h3>
        <p style={{ textAlign: 'left' }}><strong>Essential Cookies:</strong> These cookies are necessary for the basic functionality of our website. They allow you to navigate our site, use its features, and access secure areas.</p>
        <p style={{ textAlign: 'left' }}><strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting information anonymously. This helps us improve our website’s performance and user experience.</p>
        <p style={{ textAlign: 'left' }}><strong>Functional Cookies:</strong> Functional cookies enable us to remember your preferences, such as language settings or login details, to provide a more personalized experience.</p>
        <p style={{ textAlign: 'left' }}><strong>Analytics Cookies:</strong> We use analytics cookies to analyze how visitors use our website, track the number of visitors, and understand which pages are most popular. This data helps us improve our content and website structure.</p>
        <p style={{ textAlign: 'left' }}><strong>Advertising Cookies:</strong> These cookies are used to deliver relevant advertisements to you based on your interests. They also help us measure the effectiveness of our marketing campaigns.</p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '10px', textAlign: 'left' }}>Managing Cookies</h3>
        <p style={{ textAlign: 'left' }}>You have the right to accept or decline cookies. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. Please note that disabling cookies may affect your ability to fully experience all the features of our website.</p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '10px', textAlign: 'left' }}>Third-Party Cookies</h3>
        <p style={{ textAlign: 'left' }}>We may use third-party services, such as analytics and advertising partners, who may also set cookies on your device. These cookies are governed by the privacy policies of the respective third parties, and we encourage you to review them.</p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '10px', textAlign: 'left' }}>Updates to This Policy</h3>
        <p style={{ textAlign: 'left' }}>We may update our Cookies Policy from time to time to reflect changes in technology or our practices. We encourage you to review this policy regularly to stay informed about how we use cookies.</p>
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
            onClick={() => navigate('/contact-us')} 
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

export default Cookies;
