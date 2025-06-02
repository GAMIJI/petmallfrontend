import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
    const location = useLocation();
  const { productId, quantity } = location.state || {};
  const API_URL = import.meta.env.VITE_API_URLS;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    country: "India",
    state: "",
    city: "",
    postalCode: "",
    landmark: "",
    paymentMode: "Cash on Delivery", // default
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "radio" ? e.target.id : value;
    setFormData({ ...formData, [name]: val });
  };

useEffect(() => {
  const fetchCartItems = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No auth token found");
      }

      // If productId and quantity exist in location.state, fetch only that product info
      if (productId && quantity) {
        const productRes = await axios.get(`${API_URL}api/user/getProductById?id=${productId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const product = productRes.data;

        const cartData = [{
          product: product,
          quantity: quantity,
        }];

        setCartItems(cartData);

        const total = product.price * quantity;
        setSubtotal(total);
        setTotal(total);
        setLoading(false);
        return;
      }

      // Otherwise fetch user cart as usual
      const response = await axios.get(`${API_URL}api/user/getUserCart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const items = response.data.items || [];
      const cartData = items.map(item => ({
        product: item.productId,
        quantity: item.quantity,
      }));
      setCartItems(cartData);

      const total = cartData.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      );
      setSubtotal(total);
      setTotal(total);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    } finally {
      setLoading(false);
    }
  };
  fetchCartItems();
}, [productId, quantity]);


  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) return alert("You must be logged in to place an order.");

    const payload = {
      products: cartItems.map((item) => ({
        productId: item.product._id,
        quantity: item.quantity,
      })),
      address: {
        name: formData.name,
        email: formData.email,
        street: formData.street,
        city: formData.city,
        state: formData.state,
        postalCode: formData.postalCode,
        country: formData.country,
        landmark: formData.landmark,
        phone: formData.phone,
      },
      totalAmount: total,
      paymentMode: formData.paymentMode,
      storeId: cartItems[0].product.storeId,
    };

    try {
      const res = await axios.post(`${API_URL}api/user/placeOrder`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (res.status !== 201 && res.status !== 200) {
        AlertMsg("Failed to Order Product", "error", "Product Order");

      }
      else {
        AlertMsg("Product Order successfully!", "success", "Product Order");
        navigate("/orderList");
      }

    } catch (err) {
      console.error("Order error:", err);
     AlertMsg("Failed to Order Product", "error", "Product Order");
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
    <div>
      <main className="fix">
        <section className="registration__area-two p-0">
          <div className="container-fluid mt-3">
            <div className="registration__inner-wrap-two">
              <div className="row " style={{ marginRight: "10px", marginLeft: "10px" }}>
                {/* Left Column - Registration/Login & Shipping */}
                <div className="col-md-6 col-sm-12 pl-0 mt-1 ">
                  <div className="registration__form-wrap">
                    <form onSubmit={handlePlaceOrder} className="registration__form checkout__form">
                      <h4 className="title">Checkout Details</h4>

                      {/* Personal Details Section */}
                      <div className="sub__registration-detials mt-3">
                        <div className="row gutter-20">
                          <h5 className="sub__title sub__title2">Personal Details</h5>
                          <div className="col-md-12">
                            <div className="form-grp">
                              <label className="r__form__label">Full Name</label>
                              <input
                                type="text"
                                placeholder="Full Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-grp">
                              <label className="r__form__label">Email</label>
                              <input
                                type="email"
                                placeholder="E-mail"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-grp">
                              <label className="r__form__label">Phone</label>
                              <input
                                type="number"
                                placeholder="Phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="divider-area">
                        <div className="container">
                          <div className="divider-wrap" />
                        </div>
                      </div>

                      {/* Shipping Address Section */}
                      <div className="sub__registration-detials mt-3">
                        <div className="row gutter-20">
                          <h5 className="sub__title sub__title2">Shipping Address</h5>
                          <div className="col-md-12">
                            <div className="form-grp">
                              <label className="r__form__label">Street Address</label>
                              <input
                                type="text"
                                placeholder="Street Address"
                                name="street"
                                value={formData.street}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-grp">
                              <label className="r__form__label">Landmark</label>
                              <input
                                type="text"
                                placeholder="Landmark"
                                name="landmark"
                                value={formData.landmark}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-grp select-grp">
                              <label className="r__form__label">Country</label>
                              <select
                                className="orderby"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                              >
                                <option value="India">India</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="form-grp">
                              <label className="r__form__label">State</label>
                              <input
                                type="text"
                                placeholder="State"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="form-grp">
                              <label className="r__form__label">City</label>
                              <input
                                type="text"
                                placeholder="City"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-grp">
                              <label className="r__form__label">Postal Code</label>
                              <input
                                type="number"
                                placeholder="Postal Code"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Right Column - Order Summary & Payment */}
                <div className="col-md-6 col-sm-12 pr-0 mt-1 mb-3 checkout__div">
                  <div className="registration__form-wrap">
                    <form onSubmit={handlePlaceOrder} className="registration__form checkout__form">
                      <h4 className="title">Order Summary</h4>

                      {/* Cart Items */}
                      {loading ? (
                        <div className="d-flex justify-content-center align-items-center py-4">
                          <p className="mb-0">Loading cart...</p>
                        </div>
                      ) : (
                        <div
                          className="border rounded"
                          style={{
                            maxHeight: '300px',
                            overflowY: 'auto',
                            scrollbarWidth: 'thin',
                          }}
                        >
                          {cartItems.map((item, index) => (
                            <div
                              key={index}
                              className="p-3 border-bottom"
                              style={{
                                transition: 'all 0.3s ease',
                              }}
                            >
                              <div className="row align-items-center">
                                {/* Product Image */}
                                <div className="col-2">
                                  <div
                                    className="ratio ratio-1x1 bg-light rounded"
                                    style={{
                                      backgroundImage: `url(${API_URL}${item.product.productImages[0]})`,
                                      backgroundSize: 'cover',
                                      backgroundPosition: 'center'
                                    }}
                                  ></div>
                                </div>

                                {/* Product Details */}
                                <div className="col-6 ps-3">
                                  <h6
                                    className="mb-1 fw-medium text-truncate"
                                    style={{ fontSize: '0.95rem' }}
                                  >
                                    {item.product.productName}
                                  </h6>
                                  <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>
                                    ₹ {item.product.price.toFixed(2)}
                                  </p>
                                </div>

                                {/* Quantity & Total */}
                                <div className="col-4">
                                  <div className="d-flex align-items-center justify-content-end">
                                    <div
                                      className="px-2 py-1 border rounded bg-light me-2"
                                      style={{ minWidth: '40px', textAlign: 'center' }}
                                    >
                                      {item.quantity}
                                    </div>
                                    <p className="mb-0 fw-bold">
                                      ₹ {(item.product.price * item.quantity).toFixed(2)}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Coupon Section */}
                      <div className="sub__registration-detials mt-3">
                        <div className="row gutter-20">
                          <div className="col-md-12">
                            <div className="form-grp coupon__form">
                              <input type="text" placeholder="Coupon Code" />
                              <button type="button" className="btn">
                                Apply
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="divider-area">
                        <div className="container">
                          <div className="divider-wrap" />
                        </div>
                      </div>

                      {/* Payment Method Section */}
                      <div className="sub__registration-detials mt-3">
                        <div className="row gutter-20">
                          <h5 className="sub__title sub__title2">Payment Method</h5>
                          <div className="payment__type">
                            <input
                              type="radio"
                              id="Cash on Delivery"
                              name="paymentMode"
                              className="shipping__radio"
                              checked={formData.paymentMode === "Cash on Delivery"}
                              onChange={handleChange}
                            />
                            <label htmlFor="Cash on Delivery">Cash on Delivery</label>
                          </div>
                          <div className="payment__type">
                            <input
                              type="radio"
                              id="Online"
                              name="paymentMode"
                              className="shipping__radio"
                              checked={formData.paymentMode === "Online"}
                              onChange={handleChange}
                            />
                            <label htmlFor="Online Payment">Online Payment</label>
                            {formData.paymentMode === "Online" && (
                              <div className="pay_via_card mt-2">
                                <div className="col-md-12">
                                  <div className="form-grp">
                                    <input type="number" placeholder="Card Number" />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-grp">
                                    <input type="text" placeholder="Name on card" />
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-8">
                                    <div className="form-grp">
                                      <input type="date" placeholder="Valid till" />
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-grp">
                                      <input type="number" placeholder="CVV" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="divider-area">
                        <div className="container">
                          <div className="divider-wrap" />
                        </div>
                      </div>

                      {/* Order Total */}
                      <div className="sub__registration-detials mt-3">
                        <div
                          className="order-summary p-3"
                          style={{
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            backgroundColor: "#f9f9f9",
                          }}
                        >
                          <div className="order-summary-row d-flex justify-content-between mb-2">
                            <strong>₹ {subtotal.toFixed(2)}</strong>
                            <span>Subtotal</span>
                          </div>
                          <div className="order-summary-row d-flex justify-content-between mb-2">
                            <strong>₹ 0.00</strong>
                            <span>Shipping</span>
                          </div>
                          <div className="order-summary-row d-flex justify-content-between total pt-2 mt-2 border-top">
                            <strong>₹ {subtotal.toFixed(2)}</strong>
                            <span>Total</span>
                          </div>
                        </div>
                      </div>

                      {/* Terms and Place Order */}
                      <div className="col-md-12 mt-3">
                        <input
                          type="checkbox"
                          id="terms__toggle"
                          className="toggle-checkbox"
                        />
                        <label htmlFor="terms__toggle" className="r__form__label">
                          I agree to the <a href="#">terms and conditions</a>
                        </label>
                      </div>

                      <div className="product__details-content checkout__btn mt-3">
                   
                        <button type="submit" className="buy-btn">
                          Place Order
                        </button>
                     
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Checkout;