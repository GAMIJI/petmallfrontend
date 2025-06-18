import React, { useState, useEffect } from 'react';
// import './RegistrationForm.css'; // You can include your styles here

const Test = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    businessName: '',
    password: '',
    confirmPassword: '',
    businessLogo: null,
    profilePic: null,
    profession: [],
    ecommPlatform: '',
    productCategories: '',
    inventorySize: '',
    specialization: '',
    licenseNumber: '',
    yearsOfPractice: '',
    vetSpecialization: '',
    vetLicenseNumber: '',
    animalTypes: '',
    termsAgreement: false
  });
  const [errors, setErrors] = useState({});

  const professions = ['ecomm', 'doctor', 'veterinary'];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'checkbox' && name === 'profession') {
      setFormData((prev) => {
        const newProf = prev.profession.includes(value)
          ? prev.profession.filter((p) => p !== value)
          : [...prev.profession, value];
        return { ...prev, profession: newProf };
      });
    } else if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === 'file') {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
    if (!formData.businessName) newErrors.businessName = 'Business name is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    if (formData.profession.length === 0)
      newErrors.profession = 'At least one profession must be selected';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && !validateStep1()) return;
    setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAgreement) {
      alert('You must agree to the terms and conditions');
      return;
    }
    alert('Registration successful!');
    // submit formData to server
  };

  const renderReview = () => (
    <div>
      <h3>Review Your Information</h3>
      <p><strong>Full Name:</strong> {formData.fullName}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Mobile:</strong> {formData.mobile}</p>
      <p><strong>Business Name:</strong> {formData.businessName}</p>
      <p><strong>Professions:</strong> {formData.profession.join(', ')}</p>
      {formData.profession.includes('ecomm') && (
        <>
          <h4>E-Commerce</h4>
          <p><strong>Platform:</strong> {formData.ecommPlatform}</p>
          <p><strong>Categories:</strong> {formData.productCategories}</p>
        </>
      )}
      {formData.profession.includes('doctor') && (
        <>
          <h4>Doctor</h4>
          <p><strong>Specialization:</strong> {formData.specialization}</p>
          <p><strong>License Number:</strong> {formData.licenseNumber}</p>
        </>
      )}
      {formData.profession.includes('veterinary') && (
        <>
          <h4>Veterinary</h4>
          <p><strong>Specialization:</strong> {formData.vetSpecialization}</p>
          <p><strong>License Number:</strong> {formData.vetLicenseNumber}</p>
        </>
      )}
    </div>
  );

  return (
    // <form onSubmit={handleSubmit} className="registration-form">
    //   <h1>Registration Form</h1>

    //   <div className="progress-bar">
    //     <div className="progress" style={{ width: `${step * 33.33}%` }}></div>
    //   </div>

    //   {step === 1 && (
    //     <div>
    //       <h2>Basic Information</h2>
    //       <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
    //       {errors.fullName && <span>{errors.fullName}</span>}

    //       <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
    //       {errors.email && <span>{errors.email}</span>}

    //       <input name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} />
    //       {errors.mobile && <span>{errors.mobile}</span>}

    //       <input name="businessName" placeholder="Business Name" value={formData.businessName} onChange={handleChange} />
    //       {errors.businessName && <span>{errors.businessName}</span>}

    //       <input name="businessLogo" type="file" onChange={handleChange} />
    //       <input name="profilePic" type="file" onChange={handleChange} />

    //       <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
    //       <input name="confirmPassword" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
    //       {errors.confirmPassword && <span>{errors.confirmPassword}</span>}

    //       <h3>Select Profession(s)</h3>
    //       {professions.map((prof) => (
    //         <label key={prof}>
    //           <input
    //             type="checkbox"
    //             name="profession"
    //             value={prof}
    //             checked={formData.profession.includes(prof)}
    //             onChange={handleChange}
    //           />
    //           {prof}
    //         </label>
    //       ))}
    //       {errors.profession && <span>{errors.profession}</span>}

    //       <button type="button" onClick={handleNext}>Next</button>
    //     </div>
    //   )}

    //   {step === 2 && (
    //     <div>
    //       {formData.profession.includes('ecomm') && (
    //         <div>
    //           <h3>E-Commerce</h3>
    //           <input name="ecommPlatform" placeholder="Platform" value={formData.ecommPlatform} onChange={handleChange} />
    //           <input name="productCategories" placeholder="Product Categories" value={formData.productCategories} onChange={handleChange} />
    //         </div>
    //       )}
    //       {formData.profession.includes('doctor') && (
    //         <div>
    //           <h3>Doctor</h3>
    //           <input name="specialization" placeholder="Specialization" value={formData.specialization} onChange={handleChange} />
    //           <input name="licenseNumber" placeholder="License Number" value={formData.licenseNumber} onChange={handleChange} />
    //           <input name="yearsOfPractice" placeholder="Years of Practice" value={formData.yearsOfPractice} onChange={handleChange} />
    //         </div>
    //       )}
    //       {formData.profession.includes('veterinary') && (
    //         <div>
    //           <h3>Veterinary</h3>
    //           <input name="vetSpecialization" placeholder="Specialization" value={formData.vetSpecialization} onChange={handleChange} />
    //           <input name="vetLicenseNumber" placeholder="License Number" value={formData.vetLicenseNumber} onChange={handleChange} />
    //           <input name="animalTypes" placeholder="Animal Types" value={formData.animalTypes} onChange={handleChange} />
    //         </div>
    //       )}

    //       <button type="button" onClick={handleBack}>Back</button>
    //       <button type="button" onClick={handleNext}>Next</button>
    //     </div>
    //   )}

    //   {step === 3 && (
    //     <div>
    //       {renderReview()}
    //       <label>
    //         <input
    //           type="checkbox"
    //           name="termsAgreement"
    //           checked={formData.termsAgreement}
    //           onChange={handleChange}
    //         />
    //         I agree to the terms and conditions
    //       </label>

    //       <button type="button" onClick={handleBack}>Back</button>
    //       <button type="submit">Submit</button>
    //     </div>
    //   )}
    // </form>
    
              

                  
                                    <section className="flat-contact-page checks w-100 w-md-75 w-lg-60 w-xl-50 mx-auto section1">
                                      <div className="container">
                                        <div className="row">
                                          <div className="col-lg-12 mb-4">
                                            <div id="comments" className="comments cfd">
                                              {/* Initial Registration Form - Common Fields */}
                                              {hidepersonal === "Hide" ? (
                                                <div className="respond-comment">
                                                  <div className="jsy">
                                                    <h3 className="mb-2" style={{ color: "#05576e" }}>MyPetMall Services</h3>
                                                    <h3 className="mb-2" style={{ color: "#05576e" }}>Registration Progress</h3>
                                                    <h3 className="fw-8 prgs">0%</h3>
                                                  </div>
                                                  <div className="w3-border mb-1 bgh">
                                                    <div className="w3-grey ert"></div>
                                                  </div>
                                                  <p className="fs-18 mb-3">Step 1 of 4</p>
                                                  <form
                                                    method="post"
                                                    id="contactform"
                                                    className="ghrt comment-form form-submit p-3 bg-white"
                                                    action="./contact/contact-process.php"
                                                    acceptCharset="utf-8"
                                                    noValidate="novalidate"
                                                  >
                                                    <h3 className="mb-0">
                                                      <div className="flex mb-3">
                                                        <div className="fgr">
                                                          <FaUserMd className="setod" />
                                                        </div>
                                                        <div className="fs-20">
                                                          Basic Information <br />
                                                          <font className="text-secondary fw-5">
                                                            Please provide your basic details
                                                          </font>
                                                          <hr />
                                                        </div>
                                                      </div>
                                                    </h3>
                  
                                                    <label className="text-color-2 fw-6 mb-0">
                                                      Full Name<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="text-wrap flex form-wg">
                                                      <fieldset style={{ width: "100%" }}>
                                                        <input
                                                          type="text"
                                                          className="tb-my-input"
                                                          name="name"
                                                          placeholder="Full Name"
                                                          required
                                                          value={docName}
                                                          onChange={(e) => setDocName(e.target.value)}
                                                        />
                                                      </fieldset>
                                                    </div>
                  
                                                    <label className="text-color-2 fw-6 mb-0">
                                                      Email<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="text-wrap flex form-wg">
                                                      <fieldset style={{ width: "100%" }}>
                                                        <input
                                                          type="email"
                                                          className="tb-my-input"
                                                          name="email"
                                                          placeholder="Email Address"
                                                          required
                                                          value={docEmail}
                                                          onChange={(e) => setDocEmail(e.target.value)}
                                                        />
                                                      </fieldset>
                                                    </div>
                  
                                                    <label className="text-color-2 fw-6 mb-0">
                                                      Phone Number<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="text-wrap flex form-wg">
                                                      <fieldset style={{ width: "100%" }}>
                                                        <input
                                                          style={{ width: "100%" }}
                                                          type="tel"
                                                          className="tb-my-input"
                                                          name="phone"
                                                          placeholder="Phone Number"
                                                          required
                                                          value={docPhone}
                                                          onChange={(e) => setDocPhone(e.target.value)}
                                                        />
                                                      </fieldset>
                                                    </div>
                  
                                                    <label className="text-color-2 fw-6 mb-0">
                                                      Password<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="text-wrap flex form-wg">
                                                      <fieldset style={{ width: "100%" }}>
                                                        <input
                                                          type="password"
                                                          className="tb-my-input"
                                                          name="password"
                                                          placeholder="Create a password (8+ characters)"
                                                          required
                                                          value={docPassword}
                                                          onChange={(e) => setDocPassword(e.target.value)}
                                                        />
                                                      </fieldset>
                                                    </div>
                  
                                                    <label className="text-color-2 fw-6 mb-0">
                                                      Profile Picture<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="text-wrap flex form-wg">
                                                      <fieldset style={{ width: "100%" }}>
                                                        <input
                                                          type="file"
                                                          className="tb-my-input"
                                                          name="profilePicture"
                                                          accept="image/*"
                                                          required
                                                          onChange={handleDocProfileChange}
                                                        />
                                                      </fieldset>
                                                    </div>
                  
                                                    <label className="text-color-2 fw-6 mb-2">
                                                      Select Your Role(s)<span className="text-danger">*</span>
                                                      {error && <span className="text-danger ml-2">(Select at least one)</span>}
                                                    </label>
                                                    <div className="text-wrap flex form-wg">
                                                      <fieldset style={{ width: "100%" }}>
                                                        <div className="checkbox-group">
                                                          <label className="checkbox-container">
                                                            <input
                                                              type="checkbox"
                                                              name="role"
                                                              value="DR"
                                                              checked={selectedRoles.includes("DR")}
                                                              onChange={() => handleRoleChange("DR")}
                                                            />
                                                            <span className="checkmark"></span>
                                                            Doctor
                                                          </label>
                  
                                                          <label className="checkbox-container">
                                                            <input
                                                              type="checkbox"
                                                              name="role"
                                                              value="VENDOR"
                                                              checked={selectedRoles.includes("VENDOR")}
                                                              onChange={() => handleRoleChange("VENDOR")}
                                                            />
                                                            <span className="checkmark"></span>
                                                            Vendor
                                                          </label>
                  
                                                          <label className="checkbox-container">
                                                            <input
                                                              type="checkbox"
                                                              name="role"
                                                              value="VETERINARY"
                                                              checked={selectedRoles.includes("VETERINARY")}
                                                              onChange={() => handleRoleChange("VETERINARY")}
                                                            />
                                                            <span className="checkmark"></span>
                                                            Veterinary
                                                          </label>
                                                        </div>
                                                      </fieldset>
                                                    </div>
                  
                                                    <hr />
                                                    <div className="jsy">
                                                      <div>
                                                        <button
                                                          style={{ backgroundColor: "rgb(229 228 228)" }}
                                                          onClick={() => {
                                                            setHidePersonal("Hide");
                                                          }}
                                                          className="sc-button btn-icon"
                                                          name="submit"
                                                          type="button"
                                                        >
                                                          <span className="text-color-1" style={{ color: "black" }}>Cancel</span>
                                                        </button>
                                                      </div>
                                                      <div className="lh-16">
                                                        <button
                                                          onClick={handleNextStep}
                                                          className="sc-button btn-icon"
                                                          name="submit"
                                                          type="button"
                                                        >
                                                          <span>Next</span>
                                                        </button>
                                                      </div>
                                                    </div>
                                                  </form>
                                                </div>
                                              ) : null}
                  
                                              {/* Doctor Professional Details */}
                                              {hidepersonal === "DoctorProfessionalDetails" ? (
                                                <div className="respond-comment">
                                                  <div className="jsy">
                                                    <h3 className="mb-2" style={{ color: "#05576e" }}>Registration Progress</h3>
                                                    <h3 className="fw-8 prgs">25%</h3>
                                                  </div>
                                                  <div className="w3-border mb-1 bgh">
                                                    <div className="w3-grey ert prgs1"></div>
                                                  </div>
                                                  <p className="fs-18 mb-3">Step 2 of 4</p>
                                                  <form
                                                    method="post"
                                                    id="contactform"
                                                    className="ghrt comment-form form-submit p-3 bg-white"
                                                    action="./contact/contact-process.php"
                                                    acceptCharset="utf-8"
                                                    noValidate="novalidate"
                                                  >
                                                    <h3 className="mb-0">
                                                      <div className="flex mb-3">
                                                        <div className="fgr">
                                                          <FaUserMd className="setod" />
                                                        </div>
                                                        <div className="fs-20">
                                                          Professional Information <br />
                                                          <font className="text-secondary fw-5">
                                                            Please provide your professional details
                                                          </font>
                                                        </div>
                                                      </div>
                                                    </h3>
                  
                                                    <label className="text-color-2 fw-6 mb-0">
                                                      License Number<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="text-wrap flex form-wg">
                                                      <fieldset style={{ width: "100%" }}>
                                                        <input
                                                          type="text"
                                                          className="tb-my-input"
                                                          name="licenseNumber"
                                                          placeholder="Medical license number"
                                                          required
                                                          value={docLicenseNumber}
                                                          onChange={(e) => setDocLicenseNumber(e.target.value)}
                                                        />
                                                      </fieldset>
                                                    </div>
                  
                                                    <label className="text-color-2 fw-6 mb-0">
                                                      Education/Degrees<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="text-wrap flex form-wg">
                                                      <fieldset style={{ width: "100%" }}>
                                                        <input
                                                          type="text"
                                                          className="tb-my-input"
                                                          name="education"
                                                          placeholder="e.g. MBBS, MD, BAMS"
                                                          required
                                                          value={docEducation}
                                                          onChange={(e) => setDocEducation(e.target.value)}
                                                        />
                                                      </fieldset>
                                                    </div>
                  
                                                    <label className="text-color-2 fw-6 mb-0">
                                                      College/University<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="text-wrap flex form-wg">
                                                      <fieldset style={{ width: "100%" }}>
                                                        <input
                                                          type="text"
                                                          className="tb-my-input"
                                                          name="college"
                                                          placeholder="College or university attended"
                                                          required
                                                          value={docCollege}
                                                          onChange={(e) => setDocCollege(e.target.value)}
                                                        />
                                                      </fieldset>
                                                    </div>
                  
                                                    <label className="text-color-2 fw-6 mb-0">
                                                      ID Proof (Passport/Driving License)<span className="text-danger">*</span>
                                                      <small className="text-muted"> (PDF/JPG/PNG, max 5MB)</small>
                                                    </label>
                                                    <div className="text-wrap flex form-wg">
                                                      <fieldset style={{ width: "100%" }}>
                                                        <input
                                                          type="file"
                                                          className="tb-my-input"
                                                          name="idProof"
                                                          accept=".pdf,.jpg,.jpeg,.png"
                                                          required
                                                        />
                                                      </fieldset>
                                                    </div>
                  
                                                    <hr />
                                                    <div className="jsy">
                                                      <div>
                                                        <button
                                                          style={{ backgroundColor: "rgb(229 228 228)" }}
                                                          onClick={() => setHidePersonal("Hide")}
                                                          className="sc-button btn-icon"
                                                          type="button"
                                                        >
                                                          <span className="text-color-1" style={{ color: "black" }}>Back</span>
                                                        </button>
                                                      </div>
                                                      <div className="lh-16">
                                                        <button
                                                          onClick={() => setHidePersonal("DoctorClinicInfo")}
                                                          className="sc-button btn-icon"
                                                          type="button"
                                                        >
                                                          <span>Next</span>
                                                        </button>
                                                      </div>
                                                    </div>
                                                  </form>
                                                </div>
                                              ) : null}
                  
                                              {/* Doctor Clinic Information */}
                                              {hidepersonal === "DoctorClinicInfo" ? (
                                                <div className="respond-comment">
                                                  <div className="jsy">
                                                    <h3 className="mb-2" style={{ color: "#05576e" }}>Registration Progress</h3>
                                                    <h3 className="fw-8 prgs">50%</h3>
                                                  </div>
                                                  <div className="w3-border mb-1 bgh">
                                                    <div className="w3-grey ert prgs2"></div>
                                                  </div>
                                                  <p className="fs-18 mb-3">Step 3 of 4</p>
                                                  <form
                                                    method="post"
                                                    id="contactform"
                                                    className="ghrt comment-form form-submit p-3 bg-white"
                                                    action="./contact/contact-process.php"
                                                    acceptCharset="utf-8"
                                                    noValidate="novalidate"
                                                  >
                                                    <h3 className="mb-0">
                                                      <div className="flex mb-3">
                                                        <div className="fgr">
                                                          <FaClinicMedical className="setod" />
                                                        </div>
                                                        <div className="fs-20">
                                                          Clinic/Practice Information <br />
                                                          <font className="text-secondary fw-5">
                                                            Please provide your clinic details
                                                          </font>
                                                        </div>
                                                      </div>
                                                    </h3>
                  
                                                    <label className="text-color-2 fw-6 mb-0">
                                                      Clinic/Hospital Name<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="text-wrap flex form-wg">
                                                      <fieldset style={{ width: "100%" }}>
                                                        <input
                                                          type="text"
                                                          className="tb-my-input"
                                                          name="clinicName"
                                                          placeholder="Clinic or hospital name"
                                                          required
                                                          value={docClinicName}
                                                          onChange={(e) => setDocClinicName(e.target.value)}
                                                        />
                                                      </fieldset>
                                                    </div>
                  
                                                    <label className="text-color-2 fw-6 mb-0">
                                                      Clinic Address<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="text-wrap flex form-wg">
                                                      <fieldset style={{ width: "100%" }}>
                                                        <input
                                                          type="text"
                                                          className="tb-my-input"
                                                          name="clinicAddress"
                                                          placeholder="Full clinic address"
                                                          required
                                                          value={docClinicAddress}
                                                          onChange={(e) => setDocClinicAddress(e.target.value)}
                                                        />
                                                      </fieldset>
                                                    </div>
                  
                                                    <label className="text-color-2 fw-6 mb-0">
                                                      Consultation Fee<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="text-wrap flex form-wg">
                                                      <fieldset style={{ width: "100%" }}>
                                                        <input
                                                          type="number"
                                                          className="tb-my-input"
                                                          name="consultationFee"
                                                          placeholder="Consultation fee in local currency"
                                                          required
                                                          value={docConsultationFee}
                                                          onChange={(e) => setDocConsultationFee(e.target.value)}
                                                        />
                                                      </fieldset>
                                                    </div>
                  
                                                    <label className="text-color-2 fw-6 mb-0">
                                                      Available Days<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="form-group wdth">
                                                      <div className="d-flex flex-wrap gap-2">
                                                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                                                          <label key={day} className="d-flex align-items-center">
                                                            <input
                                                              className="chkhgh"
                                                              name="availableDays"
                                                              type="checkbox"
                                                              value={day}
                                                              checked={docAvailableDays.includes(day)}
                                                              onChange={(e) => {
                                                                if (e.target.checked) {
                                                                  setDocAvailableDays([...docAvailableDays, day]);
                                                                } else {
                                                                  setDocAvailableDays(docAvailableDays.filter(d => d !== day));
                                                                }
                                                              }}
                                                            />
                                                            <span className="btn-checkbox ms-2" />
                                                            <span className="mt-1 fs-13 fw-6 ms-2">{day}</span>
                                                          </label>
                                                        ))}
                                                      </div>
                                                    </div>
                  
                                                    <div className="row">
                                                      <div className="col-md-6">
                                                        <label className="text-color-2 fw-6 mb-0">
                                                          Start Time<span className="text-danger">*</span>
                                                        </label>
                                                        <div className="text-wrap flex form-wg">
                                                          <fieldset style={{ width: "100%" }}>
                                                            <input
                                                              type="time"
                                                              className="tb-my-input"
                                                              name="startTime"
                                                              required
                                                              value={docTimings.start}
                                                              onChange={(e) => setDocTimings({ ...docTimings, start: e.target.value })}
                                                            />
                                                          </fieldset>
                                                        </div>
                                                      </div>
                                                      <div className="col-md-6">
                                                        <label className="text-color-2 fw-6 mb-0">
                                                          End Time<span className="text-danger">*</span>
                                                        </label>
                                                        <div className="text-wrap flex form-wg">
                                                          <fieldset style={{ width: "100%" }}>
                                                            <input
                                                              type="time"
                                                              className="tb-my-input"
                                                              name="endTime"
                                                              required
                                                              value={docTimings.end}
                                                              onChange={(e) => setDocTimings({ ...docTimings, end: e.target.value })}
                                                            />
                                                          </fieldset>
                                                        </div>
                                                      </div>
                                                    </div>
                  
                                                    <label className="text-color-2 fw-6 mb-0">
                                                      Clinic Location (Coordinates)<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="mb-3">
                                                      <button
                                                        type="button"
                                                        className="sc-button btn-icon"
                                                        onClick={() => {
                                                          navigator.geolocation.getCurrentPosition(
                                                            (position) => {
                                                              setLatitude(position.coords.latitude);
                                                              setLongitude(position.coords.longitude);
                                                            },
                                                            (error) => {
                                                              console.error("Error getting location:", error);
                                                            }
                                                          );
                                                        }}
                                                      >
                                                        <span>Detect My Location</span>
                                                      </button>
                                                    </div>
                                                    <div className="mr-2">
                                                      {latitude && longitude && (
                                                        <iframe
                                                          title="Google Map"
                                                          width="650"
                                                          height="450"
                                                          style={{ border: 1 }}
                                                          loading="lazy"
                                                          allowFullScreen
                                                          referrerPolicy="no-referrer-when-downgrade"
                                                          src={`https://www.google.com/maps?q=${latitude},${longitude}&output=embed`}
                                                        ></iframe>
                                                      )}
                                                    </div>
                  
                                                    <hr />
                                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                      <div className="lh-16">
                                                        <button
                                                          style={{ backgroundColor: "rgb(229 228 228)" }}
                                                          onClick={() => {
                                                            setHidePersonal("DoctorProfessionalDetails");
                                                          }}
                                                          className="sc-button btn-icon"
                                                          name="submit"
                                                          type="button"
                                                        >
                                                          <span className="text-color-2" style={{ color: "black" }}>Back</span>
                                                        </button>
                                                      </div>
                                                      <div className="lh-16">
                                                        <button
                                                          onClick={() => {
                                                            setHidePersonal("DoctorServices");
                                                          }}
                                                          className="sc-button btn-icon"
                                                          name="submit"
                                                          type="button"
                                                        >
                                                          <span>Next</span>
                                                        </button>
                                                      </div>
                                                    </div>
                                                  </form>
                                                </div>
                                              ) : null}
                  
                                              {/* Doctor Services */}
                                              {hidepersonal === "DoctorServices" ? (
                                                <div className="respond-comment">
                                                  <div className="jsy">
                                                    <h3 className="mb-2" style={{ color: "#05576e" }}>Registration Progress</h3>
                                                    <h3 className="fw-8 prgs">75%</h3>
                                                  </div>
                                                  <div className="w3-border mb-1 bgh">
                                                    <div className="w3-grey ert prgs3"></div>
                                                  </div>
                                                  <p className="fs-18 mb-3">Step 4 of 4</p>
                                                  <form
                                                    method="post"
                                                    id="contactform"
                                                    className="ghrt comment-form form-submit p-3 bg-white"
                                                    action="./contact/contact-process.php"
                                                    acceptCharset="utf-8"
                                                    noValidate="novalidate"
                                                  >
                                                    <h3 className="mb-0">
                                                      <div className="flex mb-3">
                                                        <div className="fgr">
                                                          <FaProcedures className="setod" />
                                                        </div>
                                                        <div className="fs-20">
                                                          Services Offered <br />
                                                          <font className="text-secondary fw-5">
                                                            Please select the services you provide
                                                          </font>
                                                        </div>
                                                      </div>
                                                    </h3>
                  
                                                    <div className="form-group wdth">
                                                      <div className="d-flex flex-column gap-2">
                                                        <label className="d-flex align-items-center">
                                                          <input
                                                            className="chkhgh"
                                                            name="services"
                                                            type="checkbox"
                                                            value="General Checkups"
                                                            checked={docServices.includes("General Checkups")}
                                                            onChange={(e) => {
                                                              if (e.target.checked) {
                                                                setDocServices([...docServices, "General Checkups"]);
                                                              } else {
                                                                setDocServices(docServices.filter(s => s !== "General Checkups"));
                                                              }
                                                            }}
                                                          />
                                                          <span className="btn-checkbox ms-2" />
                                                          <span className="mt-1 fs-13 fw-6 ms-2">General Checkups</span>
                                                        </label>
                  
                                                        <label className="d-flex align-items-center">
                                                          <input
                                                            className="chkhgh"
                                                            name="services"
                                                            type="checkbox"
                                                            value="Vaccinations"
                                                            checked={docServices.includes("Vaccinations")}
                                                            onChange={(e) => {
                                                              if (e.target.checked) {
                                                                setDocServices([...docServices, "Vaccinations"]);
                                                              } else {
                                                                setDocServices(docServices.filter(s => s !== "Vaccinations"));
                                                              }
                                                            }}
                                                          />
                                                          <span className="btn-checkbox ms-2" />
                                                          <span className="mt-1 fs-13 fw-6 ms-2">Vaccinations</span>
                                                        </label>
                  
                                                        <label className="d-flex align-items-center">
                                                          <input
                                                            className="chkhgh"
                                                            name="services"
                                                            type="checkbox"
                                                            value="Surgery"
                                                            checked={docServices.includes("Surgery")}
                                                            onChange={(e) => {
                                                              if (e.target.checked) {
                                                                setDocServices([...docServices, "Surgery"]);
                                                              } else {
                                                                setDocServices(docServices.filter(s => s !== "Surgery"));
                                                              }
                                                            }}
                                                          />
                                                          <span className="btn-checkbox ms-2" />
                                                          <span className="mt-1 fs-13 fw-6 ms-2">Surgery</span>
                                                        </label>
                  
                                                        <label className="d-flex align-items-center">
                                                          <input
                                                            className="chkhgh"
                                                            name="services"
                                                            type="checkbox"
                                                            value="Dental Care"
                                                            checked={docServices.includes("Dental Care")}
                                                            onChange={(e) => {
                                                              if (e.target.checked) {
                                                                setDocServices([...docServices, "Dental Care"]);
                                                              } else {
                                                                setDocServices(docServices.filter(s => s !== "Dental Care"));
                                                              }
                                                            }}
                                                          />
                                                          <span className="btn-checkbox ms-2" />
                                                          <span className="mt-1 fs-13 fw-6 ms-2">Dental Care</span>
                                                        </label>
                                                      </div>
                                                    </div>
                  
                                                    <label className="text-color-2 fw-6 mb-0">
                                                      OTP Verification<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="text-wrap flex form-wg">
                                                      <fieldset style={{ width: "100%" }}>
                                                        <input
                                                          type="number"
                                                          className="tb-my-input"
                                                          name="otp"
                                                          placeholder="Enter OTP sent to your phone/email"
                                                          required
                                                          value={docOTP}
                                                          onChange={(e) => setDocOTP(e.target.value)}
                                                        />
                                                      </fieldset>
                                                    </div>
                                                    <div className="text-center mt-2">
                                                      <button
                                                        type="button"
                                                        className="sc-button bghkk"
                                                      >
                                                        <span style={{ color: "black" }}>Resend OTP</span>
                                                      </button>
                                                    </div>
                  
                                                    <hr />
                                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                      <div className="lh-16">
                                                        <button
                                                          style={{ backgroundColor: "rgb(229 228 228)" }}
                                                          onClick={() => {
                                                            setHidePersonal("DoctorClinicInfo");
                                                          }}
                                                          className="sc-button btn-icon"
                                                          name="submit"
                                                          type="button"
                                                        >
                                                          <span className="text-color-2" style={{ color: "black" }}>Back</span>
                                                        </button>
                                                      </div>
                                                      <div className="lh-16">
                                                        <button
                                                          onClick={() => {
                                                            setHidePersonal("DoctorComplete");
                                                          }}
                                                          className="sc-button btn-icon"
                                                          name="submit"
                                                          type="button"
                                                        >
                                                          <span>Complete Registration</span>
                                                        </button>
                                                      </div>
                                                    </div>
                                                  </form>
                                                </div>
                                              ) : null}
                  
                                              {/* Vendor Business Information */}
                                              {hidepersonal === "VendorBusiness" ? (
                                                <div className="respond-comment">
                                                  <div className="jsy">
                                                    <h3 className="mb-2" style={{ color: "#05576e" }}>Registration Progress</h3>
                                                    <h3 className="fw-8 prgs">25%</h3>
                                                  </div>
                                                  <div className="w3-border mb-1 bgh">
                                                    <div className="w3-grey ert prgs1"></div>
                                                  </div>
                                                  <p className="fs-18 mb-3">Step 2 of 4</p>
                                                  <form
                                                    method="post"
                                                    id="contactform"
                                                    className="ghrt comment-form form-submit p-3 bg-white"
                                                    action="./contact/contact-process.php"
                                                    acceptCharset="utf-8"
                                                    noValidate="novalidate"
                                                  >
                                                    <h3 className="mb-0">
                                                      <div className="flex mb-3">
                                                        <div className="fgr">
                                                          <FaBuilding className="setod" />
                                                        </div>
                                                        <div className="fs-20">
                                                          Business Information <br />
                                                          <font className="text-secondary fw-5">
                                                            Official business details for legal compliance
                                                          </font>
                                                        </div>
                                                      </div>
                                                    </h3>
                  
                                                    <label className="text-color-2 fw-6 mb-0">
                                                      Business Name<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="text-wrap flex form-wg">
                                                      <fieldset style={{ width: "100%" }}>
                                                        <input
                                                          type="text"
                                                          className="tb-my-input"
                                                          name="businessName"
                                                          placeholder="Registered business name"
                                                          required
                                                        />
                                                      </fieldset>
                                                    </div>
                  
                                                    <label className="text-color-2 fw-6 mb-0">
                                                      Business Type<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="relative" style={{ width: "100%" }}>
                                                      <select className="nice-select current list style" style={{ width: "100%" }} name="businessType" required>
                                                        <option value="" disabled selected>Choose business type</option>
                                                        <option value="retailer">Retailer</option>
                                                        <option value="wholesaler">Wholesaler</option>
                                                        <option value="manufacturer">Manufacturer</option>
                                                        <option value="dropshipper">Dropshipper</option>
                                                        <option value="distributor">Distributor</option>
                                                      </select>
                                                    </div>
                  
                                                    <label className="text-color-2 fw-6 mb-0">
                                                      Registration Number<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="text-wrap flex form-wg">
                                                      <fieldset style={{ width: "100%" }}>
                                                        <input
                                                          type="text"
                                                          className="tb-my-input"
                                                          name="registrationNumber"
                                                          placeholder="Business registration number"
                                                          required
                                                        />
                                                      </fieldset>
                                                    </div>
                  
                                                    <label className="text-color-2 fw-6 mb-0">
                                                      Years in Business<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="text-wrap flex form-wg">
                                                      <fieldset style={{ width: "100%" }}>
                                                        <input
                                                          type="number"
                                                          className="tb-my-input"
                                                          name="yearsInBusiness"
                                                          placeholder="Number of years in business"
                                                          min="0"
                                                          required
                                                        />
                                                      </fieldset>
                                                    </div>
                  
                                                    <label className="text-color-2 fw-6 mb-0">
                                                      GST Number (optional)
                                                    </label>
                                                    <div className="text-wrap flex form-wg">
                                                      <fieldset style={{ width: "100%" }}>
                                                        <input
                                                          type="text"
                                                          className="tb-my-input"
                                                          name="gstNumber"
                                                          placeholder="GST or tax identification number"
                                                        />
                                                      </fieldset>
                                                    </div>
                  
                                                    <hr />
                                                    <div className="jsy">
                                                      <div>
                                                        <button
                                                          style={{ backgroundColor: "rgb(229 228 228)" }}
                                                          onClick={() => {
                                                            setHidePersonal("Hide");
                                                          }}
                                                          className="sc-button btn-icon"
                                                          name="submit"
                                                          type="button"
                                                        >
                                                          <span className="text-color-2">Back</span>
                                                        </button>
                                                      </div>
                                                      <div className="lh-16">
                                                        <button
                                                          onClick={() => {
                                                            setHidePersonal("VendorStore");
                                                          }}
                                                          className="sc-button btn-icon"
                                                          name="submit"
                                                          type="button"
                                                        >
                                                          <span>Next</span>
                                                        </button>
                                                      </div>
                                                    </div>
                                                  </form>
                                                </div>
                                              ) : null}
                  
                                              {/* Vendor Store Details */}
                                              {hidepersonal === "VendorStore" ? (
                                                <div className="respond-comment">
                                                  <div className="jsy">
                                                    <h3 className="mb-2" style={{ color: "#05576e" }}>Registration Progress</h3>
                                                    <h3 className="fw-8 prgs">50%</h3>
                                                  </div>
                                                  <div className="w3-border mb-1 bgh">
                                                    <div className="w3-grey ert prgs2"></div>
                                                  </div>
                                                  <p className="fs-18 mb-3">Step 3 of 4</p>
                                                  <form
                                                    method="post"
                                                    id="contactform"
                                                    className="ghrt comment-form form-submit p-3 bg-white"
                                                    action="./contact/contact-process.php"
                                                    acceptCharset="utf-8"
                                                    noValidate="novalidate"
                                                  >
                                                    <h3 className="mb-0">
                                                      <div className="flex mb-3">
                                                        <div className="fgr">
                                                          <FaStore className="setod" />
                                                        </div>
                                                        <div className="fs-20">
                                                          Store Details <br />
                                                          <font className="text-secondary fw-5">
                                                            Information shown to customers
                                                          </font>
                                                        </div>
                                                      </div>
                                                    </h3>
                  
                                                    <label className="text-color-2 fw-6 mb-0">
                                                      Store Name<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="text-wrap flex form-wg">
                                                      <fieldset style={{ width: "100%" }}>
                                                        <input
                                                          type="text"
                                                          className="tb-my-input"
                                                          name="storeName"
                                                          placeholder="Public-facing store name"
                                                          required
                                                        />
                                                      </fieldset>
                                                    </div>
                  
                                                    <label className="text-color-2 fw-6 mb-0">
                                                      Store Address<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="text-wrap flex form-wg">
                                                      <fieldset style={{ width: "100%" }}>
                                                        <input
                                                          type="text"
                                                          className="tb-my-input"
                                                          name="storeAddress"
                                                          placeholder="Full physical location"
                                                          required
                                                          rows="3"
                                                        />
                                                      </fieldset>
                                                    </div>
                  
                                                    <label className="text-color-2 fw-6 mb-0">
                                                      Store Email<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="text-wrap flex form-wg">
                                                      <fieldset style={{ width: "100%" }}>
                                                        <input
                                                          type="email"
                                                          className="tb-my-input"
                                                          name="storeEmail"
                                                          placeholder="Email for store communications"
                                                          required
                                                        />
                                                      </fieldset>
                                                    </div>
                  
                                                    <label className="text-color-2 fw-6 mb-0">
                                                      Contact Phone<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="text-wrap flex form-wg">
                                                      <fieldset style={{ width: "100%" }}>
                                                        <input style={{ width: "100%" }}
                                                          type="tel"
                                                          className="tb-my-input"
                                                          name="contactPhone"
                                                          placeholder="Phone for store inquiries"
                                                          required
                                                        />
                                                      </fieldset>
                                                    </div>
                  
                                                    <label className="text-color-2 fw-6 mb-0">
                                                      Website (optional)
                                                    </label>
                                                    <div className="text-wrap flex form-wg">
                                                      <fieldset style={{ width: "100%" }}>
                                                        <input style={{ width: "100%" }}
                                                          type="url"
                                                          className="tb-my-input"
                                                          name="website"
                                                          placeholder="Business website URL"
                                                        />
                                                      </fieldset>
                                                    </div>
                  
                                                    <label className="text-color-2 fw-6 mb-0">
                                                      Product Categories<span className="text-danger">*</span>
                                                    </label>
                                                    <div className="form-group wdth">
                                                      <div>
                                                        {["Pet Food", "Toys", "Grooming", "Accessories", "Health", "Apparel"].map(category => (
                                                          <label className="flex" key={category}>
                                                            <input
                                                              className="chkhgh"
                                                              name="categories"
                                                              type="checkbox"
                                                              value={category}
                                                            />
                                                            <span className="btn-checkbox" />
                                                            <span className="mt-1 fs-13 fw-6" style={{ marginLeft: "5px" }}>
                                                              {category}
                                                            </span>
                                                          </label>
                                                        ))}
                                                      </div>
                                                    </div>
                  
                                                    <hr />
                                                    <div className="jsy">
                                                      <div>
                                                        <button
                                                          style={{ backgroundColor: "rgb(229 228 228)" }}
                                                          onClick={() => {
                                                            setHidePersonal("VendorBusiness");
                                                          }}
                                                          className="sc-button btn-icon"
                                                          name="submit"
                                                          type="button"
                                                        >
                                                          <span className="text-color-2">Back</span>
                                                        </button>
                                                      </div>
                                                      <div className="lh-16">
                                                        <button
                                                          onClick={() => {
                                                            setHidePersonal("VendorVerification");
                                                          }}
                                                          className="sc-button btn-icon"
                                                          name="submit"
                                                          type="button"
                                                        >
                                                          <span>Next</span>
                                                        </button>
                                                      </div>
                                                    </div>
                                                  </form>
                                                </div>
                                              ) : null}
                  
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </section>
  );
};

export default Test;
