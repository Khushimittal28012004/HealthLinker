import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './TermsAndCondition.css';
const TermsAndConditions = () => {
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
      <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1020px', margin: '0 auto'  , backgroundColor:"white", marginTop: '30px',marginBottom: '30px'}}>
      <h2 style={{ fontSize: '28px', marginBottom: '20px', textAlign: 'left' }}>Terms and Conditions</h2>
      <section style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '10px', textAlign: 'left' }}>Introduction</h3>
        <p style={{ textAlign: 'left' }}>Welcome to HealthLinker! By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully. If you do not agree with any part of these terms, you should not use our services.</p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '10px', textAlign: 'left' }}> Use of the Website</h3>
        <p style={{ textAlign: 'left' }}><strong> Eligibility:</strong> By using our website, you confirm that you are at least 18 years old or have obtained parental consent if you are under 18.</p>
        <p style={{ textAlign: 'left' }}><strong> License:</strong> HealthLinker grants you a limited, non-exclusive, non-transferable, and revocable license to access and use our website for personal, non-commercial purposes. You agree not to use the website for any unlawful or prohibited activities.</p>
        <p style={{ textAlign: 'left' }}><strong> Account Responsibility:</strong> If you create an account on HealthLinker, you are responsible for maintaining the confidentiality of your login details and for all activities that occur under your account.</p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '10px', textAlign: 'left' }}> Healthcare Information</h3>
        <p style={{ textAlign: 'left' }}><strong> Accuracy:</strong> While we strive to provide accurate and up-to-date information, HealthLinker does not guarantee the accuracy, completeness, or reliability of any information on the website, including healthcare-related data.</p>
        <p style={{ textAlign: 'left' }}><strong> No Medical Advice:</strong> The content on HealthLinker is for informational purposes only and should not be considered medical advice. Always consult a qualified healthcare provider for professional medical advice, diagnosis, or treatment.</p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '10px', textAlign: 'left' }}> Booking and Appointments</h3>
        <p style={{ textAlign: 'left' }}><strong> Service Availability:</strong> HealthLinker allows users to book appointments and check the availability of services. However, we do not guarantee that appointments will be available at your desired time.</p>
        <p style={{ textAlign: 'left' }}><strong> Changes and Cancellations:</strong> You may modify or cancel your bookings through our website, subject to the policies of the respective healthcare provider.</p>
        <p style={{ textAlign: 'left' }}><strong> Payment:</strong> Any payments made through the website are subject to the terms and conditions of the payment processor. HealthLinker is not responsible for any payment-related issues.</p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '10px', textAlign: 'left' }}> Intellectual Property</h3>
        <p style={{ textAlign: 'left' }}><strong>Ownership:</strong> All content, trademarks, logos, and other intellectual property on HealthLinker are the property of their respective owners and are protected by copyright and trademark laws.</p>
        <p style={{ textAlign: 'left' }}><strong> Restrictions:</strong> You agree not to copy, modify, distribute, sell, or lease any part of the website or its content without prior written permission from HealthLinker.</p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '10px', textAlign: 'left' }}> Third-Party Links</h3>
        <p style={{ textAlign: 'left' }}><strong> External Links:</strong> HealthLinker may contain links to third-party websites. These links are provided for your convenience, and we are not responsible for the content or practices of these external sites.</p>
        <p style={{ textAlign: 'left' }}><strong> No Endorsement:</strong> The inclusion of any link does not imply endorsement or approval by HealthLinker of the linked site or any association with its operators.</p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '10px', textAlign: 'left' }}> Privacy</h3>
        <p style={{ textAlign: 'left' }}><strong> Data Collection:</strong> We collect and use your personal information in accordance with our Privacy Policy, which is incorporated into these terms by reference.</p>
        <p style={{ textAlign: 'left' }}><strong> Cookies:</strong> Our website uses cookies to enhance your experience. By using HealthLinker, you agree to our use of cookies as described in our Cookies Policy.</p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '10px', textAlign: 'left' }}> Limitation of Liability</h3>
        <p style={{ textAlign: 'left' }}><strong> No Warranties:</strong> HealthLinker is provided on an "as is" and "as available" basis. We do not guarantee that the website will be uninterrupted, secure, or error-free.</p>
        <p style={{ textAlign: 'left' }}><strong> Liability:</strong> To the fullest extent permitted by law, HealthLinker and its affiliates shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of the website.</p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '10px', textAlign: 'left' }}> Indemnification</h3>
        <p style={{ textAlign: 'left' }}>You agree to indemnify, defend, and hold harmless HealthLinker and its affiliates from and against any claims, damages, losses, liabilities, and expenses arising out of your use of the website or violation of these terms.</p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '10px', textAlign: 'left' }}> Governing Law</h3>
        <p style={{ textAlign: 'left' }}>These Terms and Conditions are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].</p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '10px', textAlign: 'left' }}> Changes to These Terms</h3>
        <p style={{ textAlign: 'left' }}>HealthLinker reserves the right to modify these Terms and Conditions at any time. Any changes will be posted on this page, and your continued use of the website constitutes acceptance of the updated terms.</p>
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

export default TermsAndConditions;
