import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import SideBar from "../VendorProfile/SideBar";

function Store() {

  const [storeName, setStoreName] = useState("");
  const [storeAddress, setStoreAddress] = useState("");
  const [storeOwner, setStoreOwner] = useState("");
  const [storeEmail, setStoreEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("")
  const [storeImage, setStoreImage] = useState([])
  const [imagePreviews, setImagePreviews] = useState([]);
  const [errors, setErrors] = useState({});
  const API_URL = import.meta.env.VITE_API_URLS;

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setStoreImage(files);

    // create preview URLs
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const handleDeleteImage = (index) => {
    const updatedImages = [...storeImage];
    const updatedPreviews = [...imagePreviews];

    updatedImages.splice(index, 1);     // remove file
    updatedPreviews.splice(index, 1);   // remove preview

    setStoreImage(updatedImages);
    setImagePreviews(updatedPreviews);
  };
        const token = localStorage.getItem("token")

  const validateForm = () => {
    const newErrors = {};

    if (!storeName.trim()) newErrors.storeName = "Store name is required";
    if (!storeAddress.trim()) newErrors.storeAddress = "Store address is required";
    if (!storeOwner.trim()) newErrors.storeOwner = "Store owner's name is required";
    if (!storeEmail.trim()) {
      newErrors.storeEmail = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(storeEmail)) {
      newErrors.storeEmail = "Invalid email format";
    }
    if (!contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required";
    } else if (!/^\d{10}$/.test(contactNumber)) {
      newErrors.contactNumber = "Enter a valid 10-digit number";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleStoreUpdate = async (e) => {
    e.preventDefault();
    if (validateForm()) {

      const formData = new FormData();
      formData.append("storeName", storeName);
      formData.append("storeAddress", storeAddress);
      formData.append("storeOwner", storeOwner)
      formData.append("contactNumber", contactNumber);
      formData.append("storeEmail", storeEmail);
      if (storeImage && storeImage.length > 0) {
        storeImage.forEach((image, index) => {
          formData.append("storeImages", image);
        });
      }

      try {


        const response = await axios.post(
          `${API_URL}api/vendor/addStore`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("Update response:", response.data);
        if (response.status === 201) {
          AlertMsg("Store Added successfully!", "success", "Store Added");

        } else {
          AlertMsg("Failed to Add Store", "error", "Store Added");
        }
      } catch (error) {
        console.error("Update error:", error);
        let errorMessage = "Failed to Add Store2"; // default message

        // Check if the error has a response from the backend
        if (error.response.data && error.response) {
          errorMessage = error.response.data.message;
        } else if (error.message) {
          errorMessage = error.message;
        }

        AlertMsg(errorMessage, "error");
      }
    }

  };

  const AlertMsg = (msg, type, title) => {
    Swal.fire({
      icon: type,
      title: title,
      text: msg,
    });
  };

  return (
    <>
      <div>
        <section className="blog__area pt-50 pb-100 account__page">
          <div className="container-fluid">
            <div className="row">
              <SideBar />
              <div className="col-xl-9 col-lg-8 col-sm-7">


                <form className="registration__form checkout__form account__sidebar">
                  <div className="sub__registration-detials">
                    <div className="row gutter-20">
                      <div className="col-12">
                        <h5 className="sub__title">Store Details</h5>
                      </div>

                      {/* Profile Picture Upload
                      <div className="col-12 d-flex justify-content-center mb-3">
                        <div className="form-grp text-center">
                          <label
                            htmlFor="profileInput"
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              src={
                                profilePreview ||
                                (profileImage
                                  ? apiUrl + profileImage
                                  : "https://us.123rf.com/450wm/virtosmedia/virtosmedia2301/virtosmedia230116752/197246325-programmer-programmer-developer-vector-illustration-in-flat-style.jpg")
                              }
                              alt="Profile Preview"
                              className="rounded-circle"
                              style={{
                                width: "120px",
                                height: "120px",
                                objectFit: "cover",
                                border: "2px solid #ddd",
                              }}
                            />
                          </label>
                          <input
                            type="file"
                            accept="image/*"
                            id="profileInput"
                            name="profilePicture"
                            onChange={handleProfileChange}
                            style={{ display: "none" }}
                          />
                          <small className="d-block mt-2 text-muted">
                            Click image to upload
                          </small>
                        </div>
                      </div> */}

                      {/* First Name */}
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-grp">
                          <label className="r__form__label">Store Name</label>
                          <input
                            type="text"
                            placeholder="Store Name"
                            value={storeName}
                            onChange={(e) => setStoreName(e.target.value)}
                            required
                          />
                          {errors.storeName && (
                            <small className="text-danger">{errors.storeName}</small>
                          )}

                        </div>
                      </div>
                      {/* Store address */}
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-grp">
                          <label className="r__form__label">Store Address</label>
                          <input
                            type="text"
                            placeholder="Store Address Name"
                            value={storeAddress}
                            onChange={(e) => setStoreAddress(e.target.value)}
                            required
                          />
                          {errors.storeAddress && (
                            <small className="text-danger">{errors.storeAddress}</small>
                          )}

                        </div>
                      </div>
                      {/*store owner  */}
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-grp">
                          <label className="r__form__label">Store Owner's Name</label>
                          <input
                            type="text"
                            placeholder="Store Owner's"
                            value={storeOwner}
                            onChange={(e) => setStoreOwner(e.target.value)}
                            required
                          />
                          {errors.storeOwner && (
                            <small className="text-danger">{errors.storeOwner}</small>
                          )}

                        </div>
                      </div>

                      {/* Email */}
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-grp">
                          <label className="r__form__label">Store Email</label>
                          <input
                            type="email"
                            placeholder=" Store E-mail"
                            value={storeEmail}
                            onChange={(e) => setStoreEmail(e.target.value)}
                            required

                          />
                          {errors.storeEmail && (
                            <small className="text-danger">{errors.storeEmail}</small>
                          )}

                        </div>
                      </div>
                      {/* Phone */}
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-grp">
                          <label className="r__form__label">Contact Number</label>
                          <input
                            type="number"
                            placeholder="Contact Number"
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                            required

                          />
                          {errors.contactNumber && (
                            <small className="text-danger">{errors.contactNumber}</small>
                          )}

                        </div>
                      </div>
                      {/* store image */}
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-grp">
                          <label htmlFor="formFileMultiple" className="r__form__label">
                            Upload Store Photos
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFileMultiple"
                            multiple
                            accept="image/*"
                            onChange={handleImageChange}
                          />
                        </div>

                        {/* Preview Section with Delete */}
                        {imagePreviews.length > 0 && (
                          <div className="mt-3 d-flex flex-wrap gap-3">
                            {imagePreviews.map((src, idx) => (
                              <div
                                key={idx}
                                style={{
                                  position: "relative",
                                  width: "100px",
                                  height: "100px",
                                }}
                              >
                                <img
                                  src={src}
                                  alt={`preview-${idx}`}
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                    border: "1px solid #ccc",
                                  }}
                                />
                                <button
                                  type="button"
                                  onClick={() => handleDeleteImage(idx)}
                                  style={{
                                    position: "absolute",
                                    top: "-8px",
                                    right: "-8px",
                                    background: "red",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "50%",
                                    width: "20px",
                                    height: "20px",
                                    fontSize: "12px",
                                    cursor: "pointer",
                                  }}
                                >
                                  ×
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Save Button */}
                      <div className="col-12 mt-3">
                        <div className="store__btn text-center">
                          <button
                            onClick={handleStoreUpdate}
                            className="btn shop-btn"
                          >
                            Save Changes
                            <img
                              src="assets/img/icon/right_arrow.svg"
                              alt=""
                              className="injectable"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>


              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default Store