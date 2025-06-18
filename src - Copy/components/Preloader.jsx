import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading delay (can replace with real logic)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div id="preloader">
      <div id="loader" className="loader">
        <div className="loader-container">
          <div className="loader-icon">
            <img src="assets/img/logo/preloader.svg" alt="Preloader" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
