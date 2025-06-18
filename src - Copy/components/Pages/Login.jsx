import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiEdit2, FiArrowLeft } from 'react-icons/fi';


const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  // Auto redirect after OTP verification
  useEffect(() => {
    if (otp.length === 4 && otp === "1234") {
      setLoading(true);
      showAlert("OTP verified successfully!", "success"); // Add this line
      const timer = setTimeout(() => {
        navigate('/');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [otp, navigate]);

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value.replace(/[^0-9]/g, ''));
  };

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handleRequestOTP = () => {
    if (!phoneNumber) {
      showAlert("Please enter phone number", "error");
      return;
    }
    if (phoneNumber.length < 10) {
      showAlert("Please enter a valid 10-digit phone number", "error");
      return;
    }

    // Start resend timer
    setResendDisabled(true);
    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setResendDisabled(false);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    setOtpSent(true);
    showAlert(`OTP sent to ${countryCode} ${phoneNumber}`, "success");
  };

  const handleResendOTP = () => {
    if (resendDisabled) return;

    // Reset timer
    setResendDisabled(true);
    setResendTimer(30);
    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setResendDisabled(false);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    showAlert(`OTP resent to ${countryCode} ${phoneNumber}`, "success");
  };

  const handleEditNumber = () => {
    setOtpSent(false);
    setOtp("");
    setResendDisabled(false);
    setResendTimer(30);
  };

  const handleVerifyOTP = () => {
    if (otp.length !== 4) {
      showAlert("Please enter 4-digit OTP", "error");
      return;
    }
    if (otp !== "1234") {
      showAlert("Invalid OTP. Please try again", "error");
      return;
    }
    setLoading(true);
    // showAlert("OTP verified successfully!", "success");
  };

  const showAlert = (message, type) => {
    const alertDiv = document.createElement('div');
    alertDiv.style.position = 'fixed';

    alertDiv.style.top = '20px';
    alertDiv.style.right = '550px';
    alertDiv.style.padding = '15px 25px';
    alertDiv.style.borderRadius = '50px';
    alertDiv.style.color = 'white';
    alertDiv.style.fontWeight = '500';
    alertDiv.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    alertDiv.style.zIndex = '1000';
    alertDiv.style.animation = 'slideIn 0.3s ease-out';

    if (type === "success") {
      alertDiv.style.backgroundColor = '#28a745';
    } else {
      alertDiv.style.backgroundColor = '#dc3545';
    }

    alertDiv.textContent = message;
    document.body.appendChild(alertDiv);

    setTimeout(() => {
      alertDiv.style.animation = 'slideOut 0.3s ease-in';
      setTimeout(() => {
        document.body.removeChild(alertDiv);
      }, 300);
    }, 3000);
  };

  // Add CSS for animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <>
      <div className="tgmenu__wrap pt-2">
        <nav className="tgmenu__nav">
          <div className="col-xl-3 col-lg-3">
            <div className="logo" style={{marginLeft: '30px'}}> 
              <Link to="/" >
                <img src="assets/img/logo/logo.png" alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="tgmenu__search">
              <form action="#" className="tgmenu__search-form">
                <input type="text" placeholder="Search Here . . ." />
                <div className="select-grp">
                  <select
                    className="form-select"
                    id="course-cat"
                    aria-label="Default select example"
                    style={{ width: 130 }}
                  >
                    <option selected="" disabled="">
                      All Categories
                    </option>
                    <option value={1}>Dogs</option>
                    <option value={2}>Cats</option>
                    <option value={3}>Rabbit</option>
                    <option value={4}>Birds</option>
                    <option value={5}>Fish</option>
                    <option value={6}>Others</option>
                  </select>
                </div>
                <button style={{ margin: "4px" }} type="submit">
                  <i className="flaticon-loupe" />
                </button>
              </form>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 p-3">
            <div className="tgmenu__action tgmenu__action-three d-none d-lg-block " style={{ fontSize: "14px", width: "90%" }}>
              <ul className="list-wrap m-0" style={{width: "100%"}}>
                <button className='btn1' style={{marginLeft: '190px'}}> 
                <Link style={{ fontSize: "15px", width: "100%", color: "#05576e"}} to="/register">
                  Become a Partner
                </Link>
                    </button>
          
              </ul>
            </div>
        
          </div>
        </nav>
      </div>


      <div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: '#f8f9fa', padding: '20px', minHeight: '90vh' }}>
        <div className="shadow-lg" style={{ maxWidth: '400px', width: '100%', border: 'none', borderRadius: '12px' }}>
          <div className="card-body p-5">

            <div className="text-center mb-4">
              <h2 className="fw-semibold mb-2" style={{ color: '#05576e', fontSize: '24px' }}>
                {otpSent ? 'Enter OTP' : 'SignUp with OTP'}
              </h2>
              <p className="text-muted" style={{ fontSize: '14px', fontWeight: '500' }}>
                {otpSent ? `We've sent an OTP to ${countryCode} ${phoneNumber}` : 'Enter your log in details'}
              </p>
            </div>

            {otpSent && (
              <div className="mb-3 d-flex justify-content-end">
                <button
                  onClick={handleEditNumber}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#05576e',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '14px'
                  }}
                >
                  <FiArrowLeft size={16} style={{ marginRight: '4px' }} />
                  <span>CHANGE NUMBER</span>
                </button>
              </div>
            )}

            {!otpSent && (
              <div className="mb-3">
                <div className="d-flex align-items-center" style={{ border: '2px solid #e1e5e9', borderRadius: '50px', overflow: 'hidden' }}>
                  <select
                    value={countryCode}
                    onChange={handleCountryCodeChange}
                    style={{
                      // padding: '0 5px',
                      height: '50px',
                      border: 'none',
                      outline: 'none',
                      backgroundColor: '#f8f9fa',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="+91">+91 (IN)</option>
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+61">+61 (AU)</option>
                    <option value="+65">+65 (SG)</option>
                  </select>
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
                      border: 'none',
                      outline: 'none',
                      flex: 1
                    }}
                    maxLength="10"
                  />
                </div>
              </div>
            )}

            {otpSent && (
              <>
                <div className="mb-4">
                  <div className="d-flex justify-content-center">
                    {[0, 1, 2, 3].map((index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength="1"
                        className="text-center"
                        value={otp[index] || ''}
                        onChange={(e) => {
                          const newOtp = otp.split('');
                          newOtp[index] = e.target.value.replace(/[^0-9]/g, '');
                          setOtp(newOtp.join(''));
                          if (e.target.value && index < 3) {
                            document.getElementById(`otp-input-${index + 1}`).focus();
                          }
                        }}
                        id={`otp-input-${index}`}
                        style={{
                          width: '60px',
                          height: '60px',
                          fontSize: '24px',
                          border: '2px solid #e1e5e9',
                          borderRadius: '12px',
                          margin: '0 5px',
                          fontWeight: 'bold',
                          color: '#05576e',
                          outline: 'none',
                          textAlign: 'center',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#05576e';
                          e.target.style.boxShadow = '0 0 0 2px rgba(5, 87, 110, 0.2)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#e1e5e9';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="mb-4 text-center">
                  {resendDisabled ? (
                    <span style={{ color: '#666', fontSize: '14px' }}>
                      Resend OTP in {resendTimer}s
                    </span>
                  ) : (
                    <button
                      onClick={handleResendOTP}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#05576e',
                        fontWeight: '500',
                        fontSize: '14px',
                        padding: '0',
                        cursor: 'pointer'
                      }}
                    >
                      Resend OTP
                    </button>
                  )}
                </div>
              </>
            )}

            <button
              className="btn w-100 mb-3"
              onClick={!otpSent ? handleRequestOTP : handleVerifyOTP}
              style={{
                background: '#05576e',
                color: 'white',
                height: '50px',
                borderRadius: '50px',
                fontWeight: '600',
                border: 'none',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                justifyContent: 'center',
                display: 'flex'
              }}
              onMouseOver={(e) => e.target.style.opacity = '0.9'}
              onMouseOut={(e) => e.target.style.opacity = '1'}
            >
              {!otpSent ? 'CONTINUE' : 'VERIFY OTP'}
            </button>

            <div className="text-center" style={{ fontSize: '12px', color: '#666', lineHeight: '1.4' }}>
              By continuing, you agree to our <br />
              <a href="#" style={{ color: '#05576e', textDecoration: 'none', fontWeight: '500' }}>Terms of Service</a> and <a href="#" style={{ color: '#05576e', textDecoration: 'none', fontWeight: '500' }}>Privacy Policy</a>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;