import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleRequestOTP = () => {
    if (!phoneNumber) return alert("Please enter phone number");
    // Call backend here if needed
    setOtpSent(true);
  };

  const handleVerifyOTP = () => {
    if (otp === "1234") {
      setLoading(true); // Start loading
      setTimeout(() => {
        navigate('/');
      }, 1500); // Simulate network delay (1.5s)
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: '#f8f9fa', padding: '20px' }}>
      <div className="shadow-lg" style={{ maxWidth: '400px', width: '100%', border: 'none', borderRadius: '12px' }}>
        <div className="card-body p-5">
          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status" />
              <p className="mt-3">Verifying OTP...</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-4">
                <h2 className="fw-semibold mb-2" style={{ color: '#333', fontSize: '24px' }}>Login with OTP</h2>
                <p className="text-muted" style={{ fontSize: '14px' }}>Enter your log in details</p>
              </div>

              {!otpSent && (
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone number"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    style={{
                      paddingLeft: '10px',
                      height: '50px',
                      fontSize: '16px',
                      border: '2px solid #e1e5e9',
                      borderRadius: '8px'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#ff6b35'}
                    onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                  />
                </div>
              )}

              {otpSent && (
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    style={{
                      paddingLeft: '10px',
                      height: '50px',
                      fontSize: '16px',
                      border: '2px solid #e1e5e9',
                      borderRadius: '8px'
                    }}
                  />
                </div>
              )}

              {!otpSent ? (
                <button
                  className="btn w-100 mb-3"
                  onClick={handleRequestOTP}
                  style={{
                    background: '#05576e',
                    color: 'white',
                    height: '50px',
                    borderRadius: '8px',
                    fontWeight: '600'
                  }}
                >
                  Request OTP
                </button>
              ) : (
                <button className="btn w-100 mb-3 btn-success" onClick={handleVerifyOTP}>
                  Verify OTP
                </button>
              )}

              <div className="text-center" style={{ fontSize: '12px', color: '#666', lineHeight: '1.4' }}>
                I accept that I have read & understood<br />
                <a href="#" style={{ color: '#ff6b35', textDecoration: 'none' }}>Privacy Policy</a> and <a href="#" style={{ color: '#ff6b35', textDecoration: 'none' }}>T&Cs</a>.
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
