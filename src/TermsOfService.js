import React from 'react';
import './TermsOfService.css';

function TermsOfService() {
  return (
    <div className="terms-container">
      <h2>Terms of Service & Privacy</h2>
      <p>
        By using NextGen Care, you agree to our simple terms and privacy practices:
      </p>
      <ul>
        <li><strong>Eligibility:</strong> Must be 18+ to use our services.</li>
        <li><strong>Account Security:</strong> You’re responsible for your login details.</li>
        <li><strong>Use:</strong> Use NextGen Care for personal health management only.</li>
        <li><strong>Privacy:</strong> We collect minimal data to provide services and never sell your personal information.</li>
        <li><strong>Liability:</strong> Our services are provided “as is” and we’re not liable for indirect damages.</li>
      </ul>
      <p>
        Continued use indicates acceptance of these terms. For full details, visit our website or contact support@nextgencare.com.
      </p>
    </div>
  );
}

export default TermsOfService;
