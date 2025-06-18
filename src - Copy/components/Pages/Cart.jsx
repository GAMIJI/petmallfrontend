import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaShoppingBasket, FaArrowRight, FaTimes, FaTrash, FaHeart, FaSearch, FaExchangeAlt, FaArrowLeft, FaBookmark, FaShoppingCart, FaRupeeSign } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Spinner, Toast, Badge } from "react-bootstrap";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [removingItem, setRemovingItem] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const API_URL = import.meta.env.VITE_API_URLS;
  const token = localStorage.getItem("token");

  // Static saved for later data
  const [savedItems, setSavedItems] = useState([
    {
      id: 1,
      productName: "super deodorizing shampoo",
      variant: "shampoo",
      price: 299,
      originalPrice: 999,
      discount: 70,
      image: "assets/img/products/products_img02.jpg",
      payOptions: {
        total: 269,
        fee: 30
      }
    },
    {
      id: 2,
      productName: "Calming bites",
      size: "100 gm",
      price: 211,
      originalPrice: 595,
      discount: 64,
      image: "assets/img/products/latest_products_img06.jpg",
      payOptions: {
        total: 186,
        fee: 25
      }
    }
  ]);

  const showSuccessToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
  };

  const showErrorToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
  };

  const fetchCartItems = async () => {
    try {
      setLoading(true);
      if (!token) {
        alert("Please login to view your cart");
        return;
      }

      const response = await axios.get(`${API_URL}api/user/getUserCart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const items = response.data.items || [];
      setCartItems(items);

      const totalAmount = items.reduce(
        (acc, item) => acc + item.productId.price * item.quantity,
        0
      );
      setTotal(totalAmount);
    } catch (err) {
      console.error("Failed to fetch cart items", err);
      showErrorToast("Failed to load cart items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, [API_URL]);

  const updateQuantity = async (productId, newQty) => {
    try {
      await axios.post(
        `${API_URL}api/user/addToCart`,
        {
          productId,
          quantity: newQty,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchCartItems();
      showSuccessToast("Quantity updated");
    } catch (err) {
      console.error("Error updating cart quantity", err);
      showErrorToast("Failed to update quantity");
    }
  };

  const handleIncrease = (item) => {
    const newQty = item.quantity + 1;
    updateQuantity(item.productId._id, newQty);
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      const newQty = item.quantity - 1;
      updateQuantity(item.productId._id, newQty);
    }
  };

const handleDelete = async (productId) => {
  setRemovingItem(productId);
  try {
    await axios.delete(`${API_URL}api/user/removeFromCart`, {
      headers: { Authorization: `Bearer ${token}` },
      data: { productId },
    });

    setTimeout(() => {
      // fetchCartItems();  
      setCartItems(prev => prev.filter(item => item.productId._id !== productId));
      showSuccessToast("Item removed from cart");
      setRemovingItem(null);
    }, 300);
  } catch (err) {
    console.error("Error removing item from cart", err);
    showErrorToast("Failed to remove item");
    setRemovingItem(null);
  }
};


  const moveToSaved = async (item) => {
    try {
      // First remove from cart
      await handleDelete(item.productId._id);

      // Then add to saved items (client-side only for static data)
      setSavedItems([...savedItems, {
        id: Date.now(), // temporary ID
        productName: item.productId.productName,
        variant: item.productId.variant || "",
        price: item.productId.price,
        originalPrice: item.productId.originalPrice || item.productId.price * 1.5,
        discount: Math.floor(Math.random() * 50) + 10,
        image: `${API_URL}${item.productId.productImages[0]}`,
        payOptions: {
          total: Math.floor(item.productId.price * 0.9),
          fee: Math.floor(Math.random() * 30) + 10
        }
      }]);
      showSuccessToast("Item saved for later");
    } catch (err) {
      console.error("Error moving item to saved", err);
      showErrorToast("Failed to save item");
    }
  };

  const removeSaved = (id) => {
    setSavedItems(savedItems.filter(item => item.id !== id));
    showSuccessToast("Saved item removed");
  };

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <Spinner animation="border" variant="primary" />
      </motion.div>
    );
  }

  return (
    <div className="cart-page">
      {/* Toast Notification */}
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
        className="position-fixed bottom-0 start-50 translate-middle-x mb-4 shadow-lg"
        style={{
          minWidth: '300px',
          zIndex: 9999,
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <Toast.Header className="text-white" style={{ backgroundColor: '#05576e' }}>
          <strong className="me-auto">Notification</strong>
        </Toast.Header>
        <Toast.Body className="text-dark">{toastMessage}</Toast.Body>
      </Toast>

      <main className="fix">
        <section className="shipping__cart">
          <div className="container">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="row"
            >
              <div className="col-lg-8 col-md-12">
                <div className="cart-header">
                  <h2 className="cart-title" style={{ color: '#05576e' }}>
                    <FaShoppingCart className="me-2" />
                    Your Shopping Cart <Badge bg="secondary" pill>{cartItems.length}</Badge>
                  </h2>
                  <p className="cart-subtitle">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</p>
                </div>

                <div className="table-responsive">
                  <table className="table shipping__maincart">
                    <thead>
                      <tr className="cart_list_head">
                        <th>#</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <AnimatePresence>
                        {cartItems.length > 0 ? (
                          cartItems.map((item, index) => (
                            <motion.tr
                              key={item._id}
                              layout
                              initial={{ opacity: 0, x: -20 }}
                              animate={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.3 }
                              }}
                              exit={{
                                opacity: 0,
                                x: 50,
                                transition: { 
                                  duration: 0.5,
                                  ease: "easeInOut"
                                }
                              }}
                              className={`cart_list_product ${removingItem === item.productId._id ? "removing" : ""}`}
                              transition={{
                                layout: { duration: 0.3, ease: "easeInOut" }
                              }}
                            >
                              <th scope="row">{index + 1}</th>
                              <td className="cart__item">
                                <div className="cart__item-inner">
                                  <div className="cart__image">
                                    <Link to={`/product/${item.productId._id}`}>
                                      <motion.img
                                        src={`${API_URL}${item.productId.productImages[0]}`}
                                        alt={item.productId.productName}
                                        className="img-fluid"
                                        style={{
                                          width: '80px',
                                          height: '80px',
                                          objectFit: 'cover',
                                          borderRadius: '4px'
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                      />
                                    </Link>
                                  </div>
                                  <div className="cart__info">
                                    <Link
                                      to={`/product/${item.productId._id}`}
                                      className="cart__product-name"
                                      style={{
                                        display: 'block',
                                        marginBottom: '8px',
                                        fontWeight: '500',
                                        color: '#333'
                                      }}
                                    >
                                      {item.productId.productName}
                                    </Link>
                                    <div className="cart__actions" style={{ display: 'flex', gap: '12px' }}>
                                      <motion.button
                                        className="btn-action"
                                        title="Add to wishlist"
                                        style={{
                                          background: 'none',
                                          border: 'none',
                                          padding: '0',
                                          color: '#666',
                                          cursor: 'pointer'
                                        }}
                                        whileHover={{ scale: 1.1, color: '#05576e' }}
                                      >
                                        <FaHeart />
                                      </motion.button>
                                      <motion.button
                                        className="btn-action"
                                        title="Compare"
                                        style={{
                                          background: 'none',
                                          border: 'none',
                                          padding: '0',
                                          color: '#666',
                                          cursor: 'pointer'
                                        }}
                                        whileHover={{ scale: 1.1, color: '#05576e' }}
                                      >
                                        <FaExchangeAlt />
                                      </motion.button>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="cart__price" style={{ fontWeight: 'bold' }}>
                                <p style={{ fontWeight: 'bold' }}>
                                  <FaRupeeSign size={12} className="align-text-top" />
                                  {item.productId.price.toFixed(2)}
                                </p>
                              </td>
                              <td className="cart__quantity">
                                <motion.div 
                                  className="quantity-control"
                                  whileHover={{ borderColor: '#cbd5e1' }}
                                >
                                  <motion.button
                                    onClick={() => handleDecrease(item)}
                                    className="qty-btn qty-decrease"
                                    disabled={item.quantity <= 1}
                                    aria-label="Decrease quantity"
                                    whileTap={{ scale: 0.9 }}
                                  >
                                    −
                                  </motion.button>
                                  <span className="qty-value">{item.quantity}</span>
                                  <motion.button
                                    onClick={() => handleIncrease(item)}
                                    className="qty-btn qty-increase"
                                    aria-label="Increase quantity"
                                    whileTap={{ scale: 0.9 }}
                                  >
                                    +
                                  </motion.button>
                                </motion.div>
                              </td>
                              <td className="cart__subtotal">
                                <p>
                                  <FaRupeeSign size={12} className="align-text-top" />
                                  {(item.productId.price * item.quantity).toFixed(2)}
                                </p>
                              </td>
                              <td className="cart__remove">
                                <motion.button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    moveToSaved(item);
                                  }}
                                  className="btn-save"
                                  title="Save for later"
                                  whileHover={{ scale: 1.1, color: '#05576e' }}
                                >
                                  <FaBookmark />
                                </motion.button>
                                <motion.button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDelete(item.productId._id);
                                  }}
                                  className="btn-remove"
                                  title="Remove item"
                                  whileHover={{ scale: 1.2 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <FaTrash />
                                </motion.button>
                              </td>
                            </motion.tr>
                          ))
                        ) : (
                          <motion.tr
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <td colSpan="6">
                              <div className="empty-cart">
                                <motion.div 
                                  className="empty-cart__icon"
                                  animate={{ 
                                    rotate: [0, 10, -10, 0],
                                    y: [0, -10, 0]
                                  }}
                                  transition={{ 
                                    duration: 1,
                                    repeat: Infinity,
                                    repeatDelay: 3
                                  }}
                                >
                                  <FaShoppingBasket size={60} />
                                </motion.div>
                                <h5>Your cart is empty</h5>
                                <p>Looks like you haven't added anything yet.</p>
                                <Link to="/productList" className="btn btn-primary btn-lg">
                                  <FiShoppingBag className="me-2" />
                                  Browse Products
                                </Link>
                              </div>
                            </td>
                          </motion.tr>
                        )}
                      </AnimatePresence>
                    </tbody>
                  </table>
                </div>

                {/* Saved For Later Section - Static Data */}
                {savedItems.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="saved-later-section"
                  >
                    <div className="saved-header">
                      <h3 className="saved-title">Saved For Later ({savedItems.length})</h3>
                    </div>

                    <div className="saved-items">
                      <AnimatePresence>
                        {savedItems.map((item) => (
                          <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="saved-item"
                          >
                            <div className="saved-item-image">
                              <motion.img
                                src={item.image}
                                alt={item.productName}
                                whileHover={{ scale: 1.05 }}
                              />
                            </div>
                            <div className="saved-item-details">
                              <h5>{item.productName}</h5>
                              <p className="variant">{item.variant || item.size}</p>
                              <p className="price">
                                <FaRupeeSign size={10} className="align-text-top" />
                                {item.price.toFixed(2)}
                                <span className="original-price">
                                  <FaRupeeSign size={8} className="align-text-top" />
                                  {item.originalPrice.toFixed(2)}
                                </span>
                                <span className="discount">{item.discount}% Off</span>
                              </p>
                              <p className="pay-options">
                                Or Pay <FaRupeeSign size={10} className="align-text-top" />
                                {item.payOptions.total} + <FaRupeeSign size={10} className="align-text-top" />
                                {item.payOptions.fee}
                              </p>
                            </div>
                            <div className="saved-item-actions">
                              <motion.button
                                className="btn-move-to-cart"
                                title="Move to cart"
                                whileHover={{ scale: 1.1, color: '#033d4d' }}
                              >
                                <FaShoppingCart />
                              </motion.button>
                              <motion.button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removeSaved(item.id);
                                }}
                                className="btn-remove-saved"
                                title="Remove item"
                                whileHover={{ scale: 1.1 }}
                              >
                                <FaTrash />
                              </motion.button>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="col-lg-4 col-md-12 mt-5 pt-4">
                <motion.div 
                  className="cart-summary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  style={{ border: '1px solid #eae6e6', borderRadius: '8px', padding: '20px' }}
                >
                  <h4 className="summary-title mb-4">Cart Summary</h4>
                  <div className="summary-content">
                    <div className="summary-row">
                      <span>Price ({cartItems.length} items)</span>
                      <span>
                        <FaRupeeSign size={10} className="align-text-top" />
                        {total.toFixed(2)}
                      </span>
                    </div>

                    <div className="summary-row">
                      <span>Discount</span>
                      <span className="text-success">
                        − <FaRupeeSign size={10} className="align-text-top" />
                        10
                      </span>
                    </div>

                    <div className="summary-row">
                      <span>Coupon</span>
                      <span className="text-success">
                        − <FaRupeeSign size={10} className="align-text-top" />
                        350
                      </span>
                    </div>

                    <div className="summary-row">
                      <span>Protect Promise Fee</span>
                      <span>
                        <FaRupeeSign size={10} className="align-text-top" />
                        15
                      </span>
                    </div>

                    <div className="summary-row">
                      <span>Delivery Charges</span>
                      <span> <span className="text-success">FREE</span></span>
                    </div>

                    <div className="summary-divider my-2"></div>

                    <div className="summary-row total fw-bold">
                      <span>Total Amount</span>
                      <span>
                        <FaRupeeSign size={12} className="align-text-top" />
                        {total.toFixed(2)}
                      </span>
                    </div>

                    <div className="summary-row text-success mt-2" style={{ fontSize: '14px' }}>
                      You will save <FaRupeeSign size={10} className="align-text-top" />
                      350 on this order
                    </div>
                  </div>

                  <div className="checkout-actions">
                    <Link to="/checkout" className="header-btn">
                      <div className="tgmenu__action d-none d-md-block">
                        <ul className="list-wrap">
                          <li className="header-btn">
                            <motion.a 
                              href="contact.html" 
                              className="btn"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <FaArrowRight className="ms-2" />
                              Proceed to Checkout
                            </motion.a>
                          </li>
                        </ul>
                      </div>
                    </Link>
                    <Link to="/productList" className="btn btn-continue" style={{ marginTop: '10px', paddingTop: '15px', width: 'fit-content', marginLeft: '10px' }}>
                      <FaArrowLeft className="ms-2" />
                      Continue Shopping
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .cart-page {
          padding: 30px 0;
        }
        
        .cart-header {
          color: 05576e;
          margin-bottom: 30px;
        }
        
        .cart-title {
          font-size: 28px;
          font-weight: 600;
          color: #05576e;
          display: flex;
          align-items: center;
        }
        
        .cart-subtitle {
          color: #6c757d;
          font-size: 16px;
        }
        
        .shipping__maincart {
          width: 100%;
          border-collapse: collapse;
        }
        
        .cart_list_head th {
          padding: 15px;
          background-color: #f8f9fa;
          font-weight: 600;
          text-align: center;
          border-bottom: 1px solid #dee2e6;
          color: #05576e;
        }
        
        .cart_list_product td {
          padding: 20px 15px;
          vertical-align: middle;
          border-bottom: 1px solid #eee;
          transition: all 0.3s ease;
        }
        
        .cart_list_product.removing {
          opacity: 0;
          transform: translateX(-50px);
        }
        
        .cart__item {
          display: flex;
          align-items: center;
          padding: 12px 0;
        }

        .cart__item-inner {
          display: flex;
          align-items: center;
          gap: 16px;
          width: 100%;
        }

        .cart__image {
          flex-shrink: 0;
        }

        .cart__info {
          flex-grow: 1;
        }

        .cart__image {
          width: 80px;
          height: 80px;
          margin-right: 15px;
          overflow: hidden;
          border-radius: 4px;
        }
        
        .cart__image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .cart__product-name {
          font-weight: 500;
          color: #333;
          margin-bottom: 5px;
          display: block;
          transition: color 0.2s ease;
        }
        
        .cart__product-name:hover {
          color: #0d6efd;
          text-decoration: none;
        }
        
        .cart__actions {
          display: flex;
          gap: 10px;
          margin-top: 8px;
        }
        
        .quantity-control {
          display: inline-flex;
          align-items: center;
          border: 1px solid #e2e8f0;
          border-radius: 9999px;
          overflow: hidden;
          width: fit-content;
          background: #f8fafc;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          transition: all 0.2s ease;
        }

        .qty-btn {
          background: transparent;
          border: none;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 16px;
          color: #64748b;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .qty-btn:hover {
          background: #f1f5f9;
          color: #334155;
        }

        .qty-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
          background: transparent;
        }

        .qty-value {
          min-width: 36px;
          text-align: center;
          font-weight: 500;
          color: #1e293b;
          font-size: 0.95rem;
        }

        .qty-decrease {
          padding-left: 18px;
        }

        .qty-increase {
          padding-right: 18px;
        }
        
        .btn-remove {
          background: none;
          border: none;
          color: #dc3545;
          font-size: 16px;
          cursor: pointer;
          transition: transform 0.2s ease;
          padding: 5px;
        }
        
        .btn-save {
          background: none;
          border: none;
          color: #6c757d;
          font-size: 16px;
          cursor: pointer;
          transition: transform 0.2s ease;
          padding: 5px;
          margin-right: 10px;
        }
        
        .empty-cart {
          text-align: center;
          padding: 50px 0;
        }
        
        .empty-cart__icon {
          font-size: 60px;
          color: #6c757d;
          opacity: 0.5;
          margin-bottom: 20px;
        }
        
        .empty-cart h5 {
          font-size: 20px;
          color: #495057;
          margin-bottom: 10px;
        }
        
        .empty-cart p {
          color: #6c757d;
          margin-bottom: 20px;
        }
        
        .cart-summary {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 25px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          position: sticky;
          top: 20px;
        }
        
        .summary-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #dee2e6;
        }
        
        .summary-content {
          margin-bottom: 20px;
        }
        
        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        
        .summary-row.total {
          font-weight: 600;
          font-size: 18px;
          margin-top: 15px;
        }
        
        .summary-divider {
          height: 1px;
          background: #dee2e6;
          margin: 15px 0;
        }
        
        .checkout-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        /* Saved For Later Section */
        .saved-later-section {
          border-top: 1px solid #eee;
          padding-top: 30px;
          margin-top: 40px;
        }

        .saved-header {
          margin-bottom: 20px;
        }

        .saved-title {
          font-size: 22px;
          font-weight: 600;
          color: #05576e;
        }

        .saved-items {
          display: grid;
          gap: 20px;
        }

        .saved-item {
          display: flex;
          gap: 20px;
          padding: 20px;
          border: 1px solid #eee;
          border-radius: 8px;
          background: #fff;
          position: relative;
          align-items: center;
        }

        .saved-item-image {
          width: 120px;
          height: 120px;
          flex-shrink: 0;
        }

        .saved-item-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .saved-item-details {
          flex: 1;
        }

        .saved-item-details h5 {
          font-size: 16px;
          margin-bottom: 5px;
          color: #333;
        }

        .variant, .size {
          color: #666;
          font-size: 14px;
          margin-bottom: 8px;
        }

        .price {
          font-weight: 600;
          color: #05576e;
          margin-bottom: 5px;
        }

        .original-price {
          text-decoration: line-through;
          color: #999;
          margin-left: 8px;
          font-size: 14px;
        }

        .discount {
          color: #28a745;
          font-size: 14px;
          margin-left: 8px;
        }

        .pay-options {
          color: #666;
          font-size: 14px;
          margin-bottom: 10px;
        }

        .saved-item-actions {
          display: flex;
          flex-direction: column;
          gap: 15px;
          padding-right: 22px;
        }

        .btn-move-to-cart {
          background: none;
          border: none;
          color: #05576e;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-remove-saved {
          background: none;
          border: none;
          color: #dc3545;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default Cart;