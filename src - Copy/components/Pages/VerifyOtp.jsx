import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyOtp = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const location = useLocation();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [serverOtp, setServerOtp] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [resendMsg, setResendMsg] = useState("");
  const [resendTimer, setResendTimer] = useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    if (location.state) {
      setPhone(location.state.phone || "");
      setServerOtp(location.state.otp || "");
    }
  }, [location.state]);

  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendTimer]);

  const handleVerify = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      const response = await axios.post(`${apiUrl}api/user/verifyOtp`, {
        phone,
        otp,
      });
      if (response.status === 200) {
        console.log(response.data);
        setMessage(response.data.message);
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Something went wrong");
      if (err.response?.data?.message === "User already verified") {
        navigate("/login");     
      }
    }
  };

  const handleResendOtp = async () => {
    setResendMsg("");
    setError("");

    try {
      const response = await axios.post(`${apiUrl}api/user/resendOtp`, {
        phone,
      });

      setServerOtp(response.data.user.otp);
      setResendMsg("OTP has been resent successfully.");
      setResendTimer(30);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to resend OTP");
    }
  };

  return (
    <main className="fix">
      <section className="registration__area-two py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="card shadow-lg border-0 rounded-4 p-4">
                <h3 className="text-center mb-3">🔐 Verify OTP</h3>
                <p className="text-center text-muted">
                  Please enter the OTP sent to your phone number
                  <br />
                  Don’t have an account?{" "}
                  <a href="/register" className="text-primary fw-bold">
                    Register here
                  </a>
                </p>

                <form onSubmit={handleVerify}>
                  <div className="mb-3">
                    <label className="form-label">OTP</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                    />
                  </div>

                  {serverOtp && (
                    <div className="alert alert-info py-2">
                      <strong>Test OTP:</strong> {serverOtp}
                    </div>
                  )}

                  <div className="d-grid gap-2 mt-4">
                    <button type="submit" className="btn btn-primary btn-lg">
                      ✅ Verify OTP
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm"
                      onClick={handleResendOtp}
                      disabled={resendTimer > 0}
                    >
                      🔁 Resend OTP {resendTimer > 0 ? `(${resendTimer}s)` : ""}
                    </button>
                  </div>

                  {resendMsg && (
                    <div className="alert alert-success mt-3">{resendMsg}</div>
                  )}
                  {message && (
                    <div className="alert alert-success mt-3">{message}</div>
                  )}
                  {error && (
                    <div className="alert alert-danger mt-3">{error}</div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VerifyOtp;
