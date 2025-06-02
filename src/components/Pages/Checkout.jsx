import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

// Static data for addresses
const STATIC_SAVED_ADDRESSES = [
  {
    _id: "1",
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phone: "9876543210",
    street: "24, Sunshine Apartments",
    landmark: "Near MG Road",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    postalCode: "400001",
    isDefault: true
  },
  {
    _id: "2",
    name: "Rahul Sharma (Work)",
    email: "rahul@company.com",
    phone: "9876543211",
    street: "Tech Park, Building 5",
    landmark: "5th Floor, Suite 502",
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    postalCode: "560001",
    isDefault: false
  }
];

// Static data for cart items
const STATIC_CART_ITEMS = [
  {
    product: {
      _id: "prod1",
      productName: "Wireless Headphones",
      price: 1999,
      productImages: ["img/products/products_img09.jpg"],
      storeId: "store1"
    },
    quantity: 2
  },
  {
    product: {
      _id: "prod2",
      productName: "Smart Watch",
      price: 4999,
      productImages: ["img/products/products_img09.jpg"],
      storeId: "store1"
    },
    quantity: 1
  }
];


const Checkout = () => {
  const [step, setStep] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { productId, quantity } = location.state || {};
  const API_URL = import.meta.env.VITE_API_URLS;

  const [isEditingAddress, setIsEditingAddress] = useState(false); // Edit mode flag
  const [editingAddressId, setEditingAddressId] = useState(null); // ID of address being edited

  const [formData, setFormData] = useState({
    paymentMode: '', // 'Cash on Delivery' or 'Online'
    onlinePaymentMethod: '', // 'UPI', 'Credit/Debit Card', 'Net Banking', 'Wallet', 'EMI'
    upiId: '',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
    bank: '',
    wallet: '',
    emiBank: ''
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "radio" ? e.target.id : value;
    setFormData({ ...formData, [name]: val });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use static addresses
        setSavedAddresses(STATIC_SAVED_ADDRESSES);

        // Set default address if exists
        const defaultAddress = STATIC_SAVED_ADDRESSES.find(addr => addr.isDefault);
        if (defaultAddress) {
          setSelectedAddress(defaultAddress);
        }

        // For demo purposes, use static cart items
        if (process.env.NODE_ENV === 'development') {
          setCartItems(STATIC_CART_ITEMS);
          const total = STATIC_CART_ITEMS.reduce(
            (acc, item) => acc + item.product.price * item.quantity,
            0
          );
          setSubtotal(total);
          setTotal(total);
          setLoading(false);
          return;
        }

        // Original API calls for production
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No auth token found");

        if (productId && quantity) {
          const productRes = await axios.get(`${API_URL}api/user/getProductById?id=${productId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const product = productRes.data;
          setCartItems([{ product, quantity }]);
          setSubtotal(product.price * quantity);
          setTotal(product.price * quantity);
        } else {
          const response = await axios.get(`${API_URL}api/user/getUserCart`, {
            headers: { Authorization: `Bearer ${token}` },
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
        }
      } catch (error) {
        console.error("Error:", error);
        // Fallback to static data if API fails
        setCartItems(STATIC_CART_ITEMS);
        const total = STATIC_CART_ITEMS.reduce(
          (acc, item) => acc + item.product.price * item.quantity,
          0
        );
        setSubtotal(total);
        setTotal(total);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [productId, quantity]);

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return alert("You must be logged in to place an order.");

    let addressData = {};
    if (selectedAddress) {
      addressData = {
        name: selectedAddress.name,
        email: selectedAddress.email,
        street: selectedAddress.street,
        city: selectedAddress.city,
        state: selectedAddress.state,
        postalCode: selectedAddress.postalCode,
        country: selectedAddress.country,
        landmark: selectedAddress.landmark,
        phone: selectedAddress.phone,
      };
    } else {
      addressData = {
        name: formData.name,
        email: formData.email,
        street: formData.street,
        city: formData.city,
        state: formData.state,
        postalCode: formData.postalCode,
        country: formData.country,
        landmark: formData.landmark,
        phone: formData.phone,
      };
    }

    const payload = {
      products: cartItems.map((item) => ({
        productId: item.product._id,
        quantity: item.quantity,
      })),
      address: addressData,
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
      } else {
        AlertMsg("Product Order successfully!", "success", "Product Order");
        navigate("/orderList");
      }
    } catch (err) {
      console.error("Order error:", err);
      AlertMsg("Failed to Order Product", "error", "Product Order");
    }
  };

  //  Function to select an address

  // Function to save a new address
  const saveAddress = (addressData) => {
    // Here you would typically make an API call to save the address
    const newAddress = {
      ...addressData,
      _id: Date.now().toString() // Temporary ID, replace with actual ID from API response
    };

    setSavedAddresses(prev => [...prev, newAddress]);
    setSelectedAddress(newAddress);
    resetForm();
  };

  // Function to update an existing address
  const updateAddress = (addressId, updatedData) => {
    // Here you would typically make an API call to update the address
    setSavedAddresses(prev =>
      prev.map(address =>
        address._id === addressId ? { ...address, ...updatedData } : address
      )
    );

    // Update selected address if it's the one being edited
    if (selectedAddress && selectedAddress._id === addressId) {
      setSelectedAddress({ ...selectedAddress, ...updatedData });
    }

    resetForm();
  };

  // Function to reset the form
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      street: '',
      landmark: '',
      country: 'India',
      state: '',
      city: '',
      postalCode: ''
    });
    setIsEditingAddress(false);
    setEditingAddressId(null);
  };

  // Function to proceed to next step

  // You might also want to load saved addresses when component mounts
  useEffect(() => {
    // Example: Load addresses from API or localStorage
    const loadAddresses = async () => {
      // Mock data - replace with actual API call
      const mockAddresses = [
        {
          _id: '1',
          name: 'John Doe',
          email: 'john@example.com',
          phone: '9876543210',
          street: '123 Main Street',
          landmark: 'Near Central Park',
          city: 'Mumbai',
          state: 'Maharashtra',
          country: 'India',
          postalCode: '400001'
        },
        {
          _id: '2',
          name: 'Jane Smith',
          email: 'jane@example.com',
          phone: '9876543211',
          street: '456 Oak Avenue',
          landmark: 'Opposite City Mall',
          city: 'Bangalore',
          state: 'Karnataka',
          country: 'India',
          postalCode: '560001'
        }
      ];
      setSavedAddresses(mockAddresses);
    };

    loadAddresses();
  }, []);

  const AlertMsg = (msg, type, title) => {
    Swal.fire({
      icon: type,
      title: title,
      text: msg,
    });
  };

  const validateStep = () => {
    if (step === 1) {
      if (!showAddressForm && !selectedAddress) {
        AlertMsg("Please select an address or add a new one", "error", "Missing Information");
        return false;
      }
      if (showAddressForm) {
        const requiredFields = ['name', 'email', 'phone', 'street', 'city', 'state', 'postalCode'];
        for (const field of requiredFields) {
          if (!formData[field]) {
            AlertMsg(`Please fill in your ${field}`, "error", "Missing Information");
            return false;
          }
        }
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const selectAddress = (address) => {
    setSelectedAddress(address);
    setShowAddressForm(false);
  };

  const useSelectedAddress = () => {
    if (selectedAddress) {
      setFormData({
        ...formData,
        name: selectedAddress.name,
        email: selectedAddress.email,
        phone: selectedAddress.phone,
        street: selectedAddress.street,
        country: selectedAddress.country,
        state: selectedAddress.state,
        city: selectedAddress.city,
        postalCode: selectedAddress.postalCode,
        landmark: selectedAddress.landmark,
      });
    }
  };

  // Price Summary Componentv
  const PriceSummary = () => (
    <div className="col-md-4">
      <div className="order-summary p-4" style={{ border: "1px solid #ddd", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
        <h5 className="mb-3">Order Summary</h5>

        {loading ? (
          <div className="d-flex justify-content-center align-items-center py-4">
            <p className="mb-0">Loading cart...</p>
          </div>
        ) : (
          <>
            <div className="border rounded" style={{ maxHeight: '200px', overflowY: 'auto', marginBottom: '20px' }}>
              {cartItems.map((item, index) => (
                <div key={index} className="p-3 border-bottom">
                  <div className="row align-items-center">
                    <div className="col-3">
                      <img
                        src={`/assets/${item.product.productImages[0]}`}
                        alt="Product"
                        className="ratio ratio-1x1 bg-light rounded"
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'center',
                          width: '100%',
                          height: '100%'
                        }}
                      />

                    </div>
                    <div className="col-5 ps-2">
                      <h6 className="mb-1 fw-medium text-truncate" style={{ fontSize: '0.85rem' }}>
                        {item.productName}
                      </h6>
                      <p className="mb-0 text-muted" style={{ fontSize: '0.8rem' }}>
                        ₹ {item.product.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="col-4">
                      <div className="d-flex align-items-center justify-content-end">
                        <div className="px-1 py-1 border rounded bg-light me-2" style={{ minWidth: '30px', textAlign: 'center', fontSize: '0.8rem' }}>
                          {item.quantity}
                        </div>
                        <p className="mb-0 fw-bold" style={{ fontSize: '0.9rem' }}>
                          ₹ {(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="order-summary-row d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <strong>₹ {subtotal.toFixed(2)}</strong>
            </div>
            <div className="order-summary-row d-flex justify-content-between mb-2">
              <span>Shipping</span>
              <strong>₹ 0.00</strong>
            </div>
            <div className="order-summary-row d-flex justify-content-between total pt-2 mt-2 border-top">
              <span>Total</span>
              <strong>₹ {subtotal.toFixed(2)}</strong>
            </div>
          </>
        )}
      </div>
    </div>
  );

  // Step 1: Address Information
  const renderAddressStep = () => (
    <>
      <div className="col-md-8 pl-0 mt-1 d-flex">
        <div className="registration__form-wrap" style={{ width: '100%' }}>
          <form className="registration__form checkout__form">
            <h4 className="title">Shipping Information</h4>

            {!showAddressForm && (
              <div className="sub__registration-detials mt-3">
                <div className="row gutter-20">
                  <h5 className="sub__title sub__title2">Saved Addresses</h5>
                  {savedAddresses.length > 0 ? (
                    savedAddresses.map((address, index) => (
                      <div key={index} className="col-md-6 mb-3">
                        <div
                          className={`address-card p-3 border rounded ${selectedAddress?._id === address._id ? 'border-primary' : ''}`}
                          style={{ cursor: 'pointer' }}
                          onClick={() => selectAddress(address)}
                        >
                          <div className="d-flex justify-content-between align-items-start">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="addressRadio"
                                id={`address-${index}`}
                                checked={selectedAddress?._id === address._id}
                                onChange={() => selectAddress(address)}
                              />
                              <label className="form-check-label" htmlFor={`address-${index}`}>
                                <strong>{address.name}</strong>
                              </label>
                            </div>
                            <a
                              type="button"
                              className="  btn-outline-secondary"
                              onClick={(e) => {
                                e.stopPropagation();
                                setFormData(address);
                                setShowAddressForm(true);
                                setIsEditingAddress(true);
                                setEditingAddressId(address._id);
                              }}
                            >
                              <FiEdit />
                            </a>
                          </div>
                          <p className="mb-1">{address.street}</p>
                          <p className="mb-1">{address.landmark && `${address.landmark}, `}{address.city}, {address.state}</p>
                          <p className="mb-1">{address.country}, {address.postalCode}</p>
                          <p className="mb-0">Phone: {address.phone}</p>
                          {address.email && <p className="mb-0">Email: {address.email}</p>}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-12">
                      <p>No saved addresses found</p>
                    </div>
                  )}
                </div>

                <div className="product__details-content checkout__btn mt-3">
                  <button
                    type="button"
                    className="buy-btn"
                    onClick={() => {
                      setShowAddressForm(true);
                      setIsEditingAddress(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        street: '',
                        landmark: '',
                        country: 'India',
                        state: '',
                        city: '',
                        postalCode: ''
                      });
                    }}
                  >
                    Add New Address
                  </button>
                  {selectedAddress && (
                    <button
                      type="button"
                      className="buy-btn ms-3"
                      onClick={nextStep}
                    >
                      Continue to Payment
                    </button>
                  )}
                </div>
              </div>
            )}

            {showAddressForm && (
              <>
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
                          required
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
                          required
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
                          required
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
                          required
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
                          required
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
                          required
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
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product__details-content checkout__btn mt-3">
                  <button
                    type="button"
                    className="buy-btn btn-secondary"
                    onClick={() => {
                      setShowAddressForm(false);
                      setIsEditingAddress(false);
                    }}
                  >
                    Back to Saved Addresses
                  </button>
                  <button
                    type="button"
                    className="buy-btn ms-3"
                    onClick={() => {
                      if (isEditingAddress) {
                        // Handle address update
                        updateAddress(editingAddressId, formData);
                      } else {
                        // Handle new address creation
                        saveAddress(formData);
                      }
                      setShowAddressForm(false);
                      setIsEditingAddress(false);
                    }}
                  >
                    {isEditingAddress ? 'Update Address' : 'Save Address'}
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
      <PriceSummary />
    </>
  );

  // Step 2: Payment Method
  const renderPaymentStep = () => (
    <>
      <div className="col-md-8 pl-0 mt-1">
        <div className="registration__form-wrap">
          <form className="registration__form checkout__form">
            <h4 className="title">Payment Method</h4>

            <div className="sub__registration-detials mt-3">
              <div className="row gutter-20">
                {/* Cash on Delivery Option */}
                <div className="payment__type" style={{ marginBottom: '1rem' }}>
                  <input
                    type="radio"
                    id="Cash on Delivery"
                    name="paymentMode"
                    checked={formData.paymentMode === "Cash on Delivery"}
                    onChange={handleChange}
                    style={{ marginRight: '10px' }}
                  />
                  <label htmlFor="Cash on Delivery" style={{ fontSize: '16px', cursor: 'pointer' }}>
                    Cash on Delivery
                  </label>
                </div>

                {/* Online Payment Option */}
                <div className="payment__type" style={{ marginBottom: '1rem' }}>
                  <input
                    type="radio"
                    id="Online"
                    name="paymentMode"
                    checked={formData.paymentMode === "Online"}
                    onChange={handleChange}
                    style={{ marginRight: '10px' }}
                  />
                  <label htmlFor="Online" style={{ fontSize: '16px', cursor: 'pointer' }}>
                    Online Payment
                  </label>

                  {formData.paymentMode === "Online" && (
                    <div style={{
                      borderLeft: '3px solid #4a6bff',
                      paddingLeft: '15px',
                      marginTop: '15px'
                    }}>
                      {/* Payment Method Tabs */}
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                        marginBottom: '15px'
                      }}>
                        {['UPI', 'Card', 'Net Banking', 'Wallet', 'EMI'].map(method => (
                          <button
                            key={method}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, onlinePaymentMethod: method === 'Card' ? 'Credit/Debit Card' : method }))}
                            style={{
                              padding: '8px 15px',
                              borderRadius: '6px',
                              border: '1px solid',
                              borderColor: formData.onlinePaymentMethod === (method === 'Card' ? 'Credit/Debit Card' : method) ? '#4a6bff' : '#ddd',
                              backgroundColor: formData.onlinePaymentMethod === (method === 'Card' ? 'Credit/Debit Card' : method) ? '#f0f4ff' : '#fff',
                              color: formData.onlinePaymentMethod === (method === 'Card' ? 'Credit/Debit Card' : method) ? '#4a6bff' : '#333',
                              fontWeight: '500',
                              cursor: 'pointer',
                              minWidth: '80px',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            {method}
                          </button>
                        ))}
                      </div>

                      {/* Payment Method Details */}
                      <div style={{ marginTop: '15px' }}>
                        {/* UPI Payment Method */}
                        {formData.onlinePaymentMethod === 'UPI' && (
                          <div>
                            <div style={{ marginBottom: '15px' }}>
                              <label style={{
                                display: 'block',
                                marginBottom: '5px',
                                fontSize: '14px',
                                fontWeight: '500'
                              }}>UPI ID</label>
                              <input
                                type="text"
                                placeholder="name@upi"
                                value={formData.upiId || ''}
                                onChange={(e) => setFormData(prev => ({ ...prev, upiId: e.target.value }))}
                                style={{
                                  width: '100%',
                                  padding: '10px',
                                  borderRadius: '6px',
                                  border: '1px solid #ddd',
                                  fontSize: '14px'
                                }}
                              />
                            </div>
                            <div>
                              <p style={{
                                marginBottom: '10px',
                                fontSize: '14px',
                                color: '#666'
                              }}>Or pay using UPI apps:</p>
                              <div style={{
                                display: 'flex',
                                gap: '10px'
                              }}>
                                <div style={{ display: 'flex', gap: '10px' }}>

                                  <button
                                    type="button"
                                    style={{
                                      width: '50px',
                                      height: '35px',
                                      padding: '5px',
                                      borderRadius: '8px',
                                      border: '1px solid #ddd',
                                      backgroundColor: '#fff',
                                      cursor: 'pointer',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center'
                                    }}
                                  >
                                    <img
                                      src="/assets/img/pay/icons8-phone-pe-48.png"
                                      alt="gpay"
                                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                    />
                                  </button>

                                  <button
                                    type="button"
                                    style={{
                                      width: '50px',
                                      height: '35px',
                                      padding: '5px',
                                      borderRadius: '8px',
                                      border: '1px solid #ddd',
                                      backgroundColor: '#fff',
                                      cursor: 'pointer',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center'
                                    }}
                                  >
                                    <img
                                      src="/assets/img/pay/icons8-google-pay-48.png"
                                      alt="paytm"
                                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                    />
                                  </button>

                                  <button
                                    type="button"
                                    style={{
                                      width: '50px',
                                      height: '35px',
                                      padding: '5px',
                                      borderRadius: '8px',
                                      border: '1px solid #ddd',
                                      backgroundColor: '#fff',
                                      cursor: 'pointer',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center'
                                    }}
                                  >
                                    <img
                                      src="/assets/img/pay/icons8-amazon-pay-32.png"
                                      alt="amazon-pay"
                                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                    />
                                  </button>
                                </div>

                              </div>
                            </div>
                          </div>
                        )}

                        {/* Credit/Debit Card Payment Method */}
                        {formData.onlinePaymentMethod === 'Credit/Debit Card' && (
                          <div>
                            <div style={{ marginBottom: '15px' }}>
                              <label style={{
                                display: 'block',
                                marginBottom: '5px',
                                fontSize: '14px',
                                fontWeight: '500'
                              }}>Card Number</label>
                              <input
                                type="text"
                                placeholder="1234 5678 9012 3456"
                                value={formData.cardNumber || ''}
                                onChange={(e) => setFormData(prev => ({ ...prev, cardNumber: e.target.value.replace(/\s/g, '') }))}
                                style={{
                                  width: '100%',
                                  padding: '10px',
                                  borderRadius: '6px',
                                  border: '1px solid #ddd',
                                  fontSize: '14px'
                                }}
                              />
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                              <label style={{
                                display: 'block',
                                marginBottom: '5px',
                                fontSize: '14px',
                                fontWeight: '500'
                              }}>Name on Card</label>
                              <input
                                type="text"
                                placeholder="John Doe"
                                value={formData.cardName || ''}
                                onChange={(e) => setFormData(prev => ({ ...prev, cardName: e.target.value }))}
                                style={{
                                  width: '100%',
                                  padding: '10px',
                                  borderRadius: '6px',
                                  border: '1px solid #ddd',
                                  fontSize: '14px'
                                }}
                              />
                            </div>
                            <div style={{
                              display: 'flex',
                              gap: '15px',
                              marginBottom: '15px'
                            }}>
                              <div style={{ flex: '2' }}>
                                <label style={{
                                  display: 'block',
                                  marginBottom: '5px',
                                  fontSize: '14px',
                                  fontWeight: '500'
                                }}>Expiry Date</label>
                                <input
                                  type="text"
                                  placeholder="MM/YY"
                                  value={formData.cardExpiry || ''}
                                  onChange={(e) => setFormData(prev => ({ ...prev, cardExpiry: e.target.value }))}
                                  style={{
                                    width: '100%',
                                    padding: '10px',
                                    borderRadius: '6px',
                                    border: '1px solid #ddd',
                                    fontSize: '14px'
                                  }}
                                />
                              </div>
                              <div style={{ flex: '1' }}>
                                <label style={{
                                  display: 'block',
                                  marginBottom: '5px',
                                  fontSize: '14px',
                                  fontWeight: '500'
                                }}>CVV</label>
                                <input
                                  type="text"
                                  placeholder="123"
                                  value={formData.cardCvv || ''}
                                  onChange={(e) => setFormData(prev => ({ ...prev, cardCvv: e.target.value }))}
                                  style={{
                                    width: '100%',
                                    padding: '10px',
                                    borderRadius: '6px',
                                    border: '1px solid #ddd',
                                    fontSize: '14px'
                                  }}
                                />
                              </div>
                            </div>
                            <div style={{
                              display: 'flex',
                              gap: '10px'
                            }}>

                            </div>
                          </div>
                        )}

                        {/* Net Banking Payment Method */}
                        {formData.onlinePaymentMethod === 'Net Banking' && (
                          <div>
                            <div style={{ marginBottom: '15px' }}>
                              <label style={{
                                display: 'block',
                                marginBottom: '5px',
                                fontSize: '14px',
                                fontWeight: '500'
                              }}>Select Bank</label>
                              <select
                                value={formData.bank || ''}
                                onChange={(e) => setFormData(prev => ({ ...prev, bank: e.target.value }))}
                                style={{
                                  width: '100%',
                                  padding: '10px',
                                  borderRadius: '6px',
                                  border: '1px solid #ddd',
                                  fontSize: '14px',
                                  backgroundColor: '#fff'
                                }}
                              >
                                <option value="">Select your bank</option>
                                <option value="SBI">State Bank of India</option>
                                <option value="HDFC">HDFC Bank</option>
                                <option value="ICICI">ICICI Bank</option>
                                <option value="Axis">Axis Bank</option>
                                <option value="Kotak">Kotak Mahindra Bank</option>
                                <option value="Other">Other Banks</option>
                              </select>
                            </div>
                          </div>
                        )}

                        {/* Wallet Payment Method */}
                        {formData.onlinePaymentMethod === 'Wallet' && (
                          <div>
                            <div style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '10px'
                            }}>
                              {[
                                { id: 'paytm-wallet', name: 'Paytm', value: 'Paytm', image: '/assets/img/pay/icons8-paytm-48.png' },
                                { id: 'amazonpay-wallet', name: 'Amazon Pay', value: 'AmazonPay', image: '/assets/img/pay/icons8-amazon-pay-32.png' },
                                { id: 'mobikwik-wallet', name: 'MobiKwik', value: 'MobiKwik', image: '/assets/img/pay/mobikwik-logo-icon.png' }
                              ].map(wallet => (
                                <div
                                  key={wallet.id}
                                  style={{
                                    padding: '10px',
                                    border: '1px solid #dee2e6',
                                    borderRadius: '6px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    cursor: 'pointer'
                                  }}
                                >
                                  <input
                                    type="radio"
                                    id={wallet.id}
                                    name="wallet"
                                    checked={formData.wallet === wallet.value}
                                    onChange={() => setFormData(prev => ({ ...prev, wallet: wallet.value }))}
                                    style={{
                                      marginRight: '10px',
                                      width: '16px',
                                      height: '16px'
                                    }}
                                  />
                                  <label
                                    htmlFor={wallet.id}
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '10px',
                                      cursor: 'pointer'
                                    }}
                                  >
                                    <img
                                      src={wallet.image}  // <-- here use wallet.image directly
                                      alt={wallet.name}
                                      style={{
                                        width: '30px',
                                        height: '30px',
                                        objectFit: 'contain'
                                      }}
                                    />
                                    {wallet.name}
                                  </label>
                                </div>
                              ))}

                            </div>
                          </div>
                        )}

                        {/* EMI Payment Method */}
                        {formData.onlinePaymentMethod === 'EMI' && (
                          <div>
                            <div style={{ marginBottom: '15px' }}>
                              <label style={{
                                display: 'block',
                                marginBottom: '5px',
                                fontSize: '14px',
                                fontWeight: '500'
                              }}>Select Bank for EMI</label>
                              <select
                                value={formData.emiBank || ''}
                                onChange={(e) => setFormData(prev => ({ ...prev, emiBank: e.target.value }))}
                                style={{
                                  width: '100%',
                                  padding: '10px',
                                  borderRadius: '6px',
                                  border: '1px solid #ddd',
                                  fontSize: '14px',
                                  backgroundColor: '#fff'
                                }}
                              >
                                <option value="">Select EMI Bank</option>
                                <option value="HDFC">HDFC Bank (3 months EMI)</option>
                                <option value="ICICI">ICICI Bank (6 months EMI)</option>
                                <option value="SBI">SBI Card (9 months EMI)</option>
                                <option value="Axis">Axis Bank (12 months EMI)</option>
                              </select>
                            </div>
                            {formData.emiBank && (
                              <div style={{
                                padding: '10px',
                                backgroundColor: '#f8f9fa',
                                borderRadius: '6px',
                                fontSize: '14px',
                                color: '#495057',
                                border: '1px solid #e9ecef'
                              }}>
                                EMI options will be shown on the next page after you confirm your order.
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '20px'
            }}>
              <button
                type="button"
                onClick={prevStep}
                style={{
                  padding: '10px 20px',
                  borderRadius: '6px',
                  border: '1px solid #6c757d',
                  backgroundColor: '#fff',
                  color: '#6c757d',
                  fontWeight: '500',
                  cursor: 'pointer',
                  minWidth: '150px',
                  transition: 'all 0.2s ease'
                }}
              >
                Back to Address
              </button>
              <button
                type="button"
                onClick={nextStep}
                disabled={formData.paymentMode === "Online" && !validateOnlinePayment()}
                style={{
                  padding: '10px 20px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: formData.paymentMode === "Online" && !validateOnlinePayment() ? '#cccccc' : '#4a6bff',
                  color: '#fff',
                  fontWeight: '500',
                  cursor: formData.paymentMode === "Online" && !validateOnlinePayment() ? 'not-allowed' : 'pointer',
                  minWidth: '150px',
                  transition: 'all 0.2s ease',
                  opacity: formData.paymentMode === "Online" && !validateOnlinePayment() ? '0.7' : '1'
                }}
              >
                Review Order
              </button>
            </div>
          </form>
        </div>
      </div>
      <PriceSummary />
    </>
  );
  // Add this validation function to your component
  const validateOnlinePayment = () => {
    if (formData.paymentMode !== "Online") return true;

    switch (formData.onlinePaymentMethod) {
      case 'UPI':
        return !!formData.upiId && formData.upiId.includes('@');
      case 'Credit/Debit Card':
        return !!formData.cardNumber && formData.cardNumber.length === 16 &&
          !!formData.cardName &&
          !!formData.cardExpiry &&
          !!formData.cardCvv && formData.cardCvv.length === 3;
      case 'Net Banking':
        return !!formData.bank;
      case 'Wallet':
        return !!formData.wallet;
      case 'EMI':
        return !!formData.emiBank;
      default:
        return false;
    }
  };
  // Step 3: Order Review
  const renderReviewStep = () => (
    <>
      <div className="col-md-8 pl-0 mt-1">
        <div className="registration__form-wrap">
          <form onSubmit={handlePlaceOrder} className="registration__form checkout__form">
            <h4 className="title">Review Your Order</h4>

            {/* Shipping Address Review */}
            <div className="sub__registration-detials mt-3">
              <h5 className="sub__title sub__title2">Shipping To</h5>
              <div className="border rounded p-3">
                <p>{selectedAddress ? selectedAddress.name : formData.name}</p>
                <p>{selectedAddress ? selectedAddress.street : formData.street}</p>
                <p>{(selectedAddress ? selectedAddress.landmark : formData.landmark) && `${selectedAddress ? selectedAddress.landmark : formData.landmark}, `}
                  {selectedAddress ? selectedAddress.city : formData.city}, {selectedAddress ? selectedAddress.state : formData.state}</p>
                <p>{selectedAddress ? selectedAddress.country : formData.country}, {selectedAddress ? selectedAddress.postalCode : formData.postalCode}</p>
                <p>Phone: {selectedAddress ? selectedAddress.phone : formData.phone}</p>
                <p>Email: {selectedAddress ? selectedAddress.email : formData.email}</p>
              </div>
            </div>

            {/* Payment Method Review */}
            <div className="sub__registration-detials mt-3">
              <h5 className="sub__title sub__title2">Payment Method</h5>
              <div className="border rounded p-3">
                <p>{formData.paymentMode}</p>
              </div>
            </div>

            {/* Terms and Place Order */}
            <div className="col-md-12 mt-3">
              <input type="checkbox" id="terms__toggle" className="toggle-checkbox" required />
              <label htmlFor="terms__toggle" className="r__form__label">
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>

            <div className="product__details-content checkout__btn mt-3 d-flex justify-content-between">
              <button
                type="button"
                className="buy-btn btn-secondary"
                onClick={prevStep}
              >
                Back to Payment
              </button>
              <button type="submit" className="buy-btn">
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
      <PriceSummary />
    </>
  );

  return (
    <div>
      <main className="fix">
        <section className="registration__area-two p-0">
          <div className="container-fluid mt-3">
            <div className="registration__inner-wrap-two">
              {/* Progress Steps */}
              <div className="row mb-4" style={{ marginRight: "10px", marginLeft: "10px" }}>
                <div className="col-12">
                  <div className="checkout-steps">
                    <div className={`step ${step >= 1 ? 'active' : ''}`}>
                      <div className="step-number">1</div>
                      <div className="step-title">Address</div>
                    </div>
                    <div className={`step ${step >= 2 ? 'active' : ''}`}>
                      <div className="step-number">2</div>
                      <div className="step-title">Payment</div>
                    </div>
                    <div className={`step ${step >= 3 ? 'active' : ''}`}>
                      <div className="step-number">3</div>
                      <div className="step-title">Review</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row" style={{ marginRight: "10px", marginLeft: "10px" }}>
                {step === 1 && renderAddressStep()}
                {step === 2 && renderPaymentStep()}
                {step === 3 && renderReviewStep()}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Add some CSS for the steps */}
      <style jsx>{`
        .checkout-steps {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          position: relative;
          color: #999;
        }
        .step:not(:last-child):after {
          content: '';
          position: absolute;
          top: 15px;
          left: 50%;
          width: 100%;
          height: 2px;
          background-color: #ddd;
          z-index: 0;
        }
        .step.active:not(:last-child):after {
          background-color: #05576e;
        }
        .step-number {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: #ddd;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 5px;
          position: relative;
          z-index: 1;
        }
        .step.active .step-number {
          background-color: #05576e;
        }
        .step-title {
          font-size: 14px;
        }
        .btn-secondary {
          background-color: #6c757d;
          border-color: #6c757d;
        }
        .btn-secondary:hover {
          background-color: #5a6268;
          border-color: #545b62;
        }
        .address-card:hover {
          border-color: #05576e !important;
        }
      `}</style>
    </div>
  );
};

export default Checkout;