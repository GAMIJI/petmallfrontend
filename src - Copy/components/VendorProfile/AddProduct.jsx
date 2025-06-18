
import SideBar from './SideBar'
import axios from "axios";
import Swal from "sweetalert2";
import React, { useState } from 'react';


function AddProduct() {
  const API_URL = import.meta.env.VITE_API_URLS;

  const [productName, setProductName] = useState("")
  const [brandName, setBrandName] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [description, setDescription] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  const [productStock, setProductStock] = useState("");
  const [storeImage, setStoreImage] = useState([])
  const [imagePreviews, setImagePreviews] = useState([]);
  const [errors, setErrors] = useState({});

  
  const categories = [
    "Dogs",
    "Cat",
    "horse",
    "toys"
  ];



  const handleDeleteImage = (index) => {
    const updatedImages = [...storeImage];
    const updatedPreviews = [...imagePreviews];

    updatedImages.splice(index, 1);     // remove file
    updatedPreviews.splice(index, 1);   // remove preview

    setStoreImage(updatedImages);
    setImagePreviews(updatedPreviews);
  };

const validateForm = () => {
  const newErrors = {};

  if (!productName.trim()) newErrors.productName = "Product name is required";
  if (!brandName.trim()) newErrors.brandName = "Brand name is required";
  if (!productPrice || parseFloat(productPrice) <= 0)
    newErrors.productPrice = "Enter a valid product price";
  if (!description.trim()) newErrors.description = "Description is required";
  if (!selectedCategory || selectedCategory === "Select Category")
    newErrors.selectedCategory = "Please select a category";
  if (!productStock || parseInt(productStock) < 0)
    newErrors.productStock = "Enter a valid stock number";
  if (storeImage.length === 0)
    newErrors.storeImage = "At least one product image is required";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setStoreImage(files);

    // create preview URLs
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const handleProductUpload = async (e) => {
    e.preventDefault();
    if (validateForm()) {

      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("brand", brandName);
      formData.append("price", productPrice)
      formData.append("productDescription", description);
      formData.append("category", selectedCategory);
      formData.append("stock", productStock)
      if (storeImage && storeImage.length > 0) {
        storeImage.forEach((image, index) => {
          formData.append("productImages", image);
        });
      }

 
      try {
       
         const token = localStorage.getItem("token")

        const response = await axios.post(
          `${API_URL}api/vendor/addProduct`,
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
          AlertMsg("Product Added successfully!", "success", "Product Added");
        } else {
          AlertMsg("Failed to Add product", "error", "Product Added");
        }
      } catch (error) {
        console.error("Update error:", error);
        AlertMsg("Failed to Add Product", "error", "Product Added");
      }
    }
  }
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
          <div className="container">
            <div className="row">
              <SideBar />
              <div className="col-xl-9 col-lg-8 col-sm-7">


                <form className="registration__form checkout__form account__sidebar">
                  <div className="sub__registration-detials">
                    <div className="row gutter-20">
                      <div className="col-12">
                        <h5 className="sub__title">Product Details</h5>
                      </div>

                      {/* product Name */}
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-grp">
                          <label className="r__form__label">Product Name</label>
                          <input
                            type="text"
                            placeholder="Product Name"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            required
                          />
                          {errors.productName && (
                            <small className="text-danger">{errors.productName}</small>
                          )}

                        </div>
                      </div>
                      {/* Brands */}
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-grp">
                          <label className="r__form__label">Brand</label>
                          <input
                            type="text"
                            placeholder="Brand Name"
                            value={brandName}
                            onChange={(e) => setBrandName(e.target.value)}
                            required
                          />
                          {errors.brandName && (
                            <small className="text-danger">{errors.brandName}</small>
                          )}

                        </div>
                      </div>
                      {/*product price */}
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-grp">
                          <label className="r__form__label">Product Price</label>
                          <input
                            type="number"
                            placeholder="Product Price"
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                            required
                          />
                          {errors.productPrice && (
                            <small className="text-danger">{errors.productPrice}</small>
                          )}

                        </div>
                      </div>
                      {/* stock */}
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-grp">
                          <label className="r__form__label">Product Stock</label>
                          <input
                            type="number"
                            placeholder="Product Price"
                            value={productStock}
                            onChange={(e) => setProductStock(e.target.value)}
                            required
                          />
                          {errors.productStock && (
                            <small className="text-danger">{errors.productStock}</small>
                          )}

                        </div>
                      </div>
                      {/* description */}
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-grp">
                          <label className="r__form__label">Description</label>
                          <input
                            type="email"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required

                          />
                          {errors.description && (
                            <small className="text-danger">{errors.description}</small>
                          )}

                        </div>
                      </div>
                      {/* Categories */}

                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-grp">
                          <label className="r__form__label">Categories</label>
                          <div className="dropdown w-100">
                            <button
                              className="form-control text-start dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              {selectedCategory || "Select Category"}
                            </button>
                            <ul className="dropdown-menu w-100">
                              {categories.map((category, idx) => (
                                <li key={idx}>
                                  <button
                                    className="dropdown-item"
                                    type="button"
                                    onClick={() => setSelectedCategory(category)}
                                  >
                                    {category}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {errors.selectedCategory && (
                            <small className="text-danger">{errors.selectedCategory}</small>
                          )}
                        </div>
                      </div>

                      {/* product image */}
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-grp">
                          <label htmlFor="formFileMultiple" className="r__form__label">
                            Upload Product Image
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
                            onClick={handleProductUpload}
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

export default AddProduct