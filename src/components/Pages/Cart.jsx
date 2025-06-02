import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaShoppingBasket, FaArrowRight, FaTimes, FaTrash, FaHeart, FaSearch, FaExchangeAlt, FaArrowLeft } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [removingItem, setRemovingItem] = useState(null);
  const API_URL = import.meta.env.VITE_API_URLS;

  const token = localStorage.getItem("token");
  
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
    } catch (err) {
      console.error("Error updating cart quantity", err);
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
    try {
      setRemovingItem(productId);
      await axios.post(
        `${API_URL}api/user/removeFromCart`,
        { productId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      await new Promise(resolve => setTimeout(resolve, 300)); // Smooth transition
      fetchCartItems();
    } catch (err) {
      console.error("Error removing item from cart", err);
    } finally {
      setRemovingItem(null);
    }
  };

  return (
    <div className="cart-page">
      <main className="fix">
        <section className="shipping__cart">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="cart-header">
                  <h2 className="cart-title">Your Shopping Cart</h2>
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
                      {loading ? (
                        <tr>
                          <td colSpan="6" className="text-center py-5">
                            <div className="spinner-border text-primary" role="status">
                              <span className="visually-hidden">Loading...</span>
                            </div>
                          </td>
                        </tr>
                      ) : cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                          <tr 
                            key={item._id} 
                            className={`cart_list_product ${removingItem === item.productId._id ? 'removing' : ''}`}
                          >
                            <th scope="row">{index + 1}</th>
                            <td className="cart__item">
                              <div className="cart__image">
                                <Link to={`/product/${item.productId._id}`}>
                                  <img
                                    src={`${API_URL}${item.productId.productImages[0]}`}
                                    alt={item.productId.productName}
                                    className="img-fluid"
                                  />
                                </Link>
                              </div>
                              <div className="cart__info">
                                <Link to={`/product/${item.productId._id}`} className="cart__product-name">
                                  {item.productId.productName}
                                </Link>
                                <div className="cart__actions">
                                  <button className="btn-action" title="Add to wishlist">
                                    <FaHeart />
                                  </button>
                                  <button className="btn-action" title="View details">
                                    <FaSearch />
                                  </button>
                                  <button className="btn-action" title="Compare">
                                    <FaExchangeAlt />
                                  </button>
                                </div>
                              </div>
                            </td>
                            <td className="cart__price">
                              <p>₹{item.productId.price.toFixed(2)}</p>
                            </td>
                            <td className="cart__quantity">
                              <div className="quantity-control">
                                <button
                                  onClick={() => handleDecrease(item)}
                                  className="qty-btn qty-decrease"
                                  disabled={item.quantity <= 1}
                                >
                                  −
                                </button>
                                <span className="qty-value">{item.quantity}</span>
                                <button
                                  onClick={() => handleIncrease(item)}
                                  className="qty-btn qty-increase"
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td className="cart__subtotal">
                              <p>₹{(item.productId.price * item.quantity).toFixed(2)}</p>
                            </td>
                            <td className="cart__remove">
                              <button
                                onClick={() => handleDelete(item.productId._id)}
                                className="btn-remove"
                                title="Remove item"
                              >
                                <FaTrash />
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6">
                            <div className="empty-cart">
                              <div className="empty-cart__icon">
                                <FaShoppingBasket />
                              </div>
                              <h5>Your cart is empty</h5>
                              <p>Looks like you haven't added anything yet.</p>
                              <Link to="/productList" className="btn btn-primary btn-lg">
                                <FiShoppingBag className="me-2" />
                                Browse Products
                              </Link>
                            </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="col-lg-3 col-md-12">
                <div className="cart-summary">
                  <h4 className="summary-title">Cart Summary</h4>
                  <div className="summary-content">
                    <div className="summary-row">
                      <span>Subtotal</span>
                      <span>₹{total.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                      <span>Shipping</span>
                      <span className="text-success">FREE</span>
                    </div>
                    <div className="summary-divider"></div>
                    <div className="summary-row total">
                      <span>Total</span>
                      <span>₹{total.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="checkout-actions">
                    {/* <Link to="/checkout" className="btn btn-checkout">
                      Proceed to Checkout <FaArrowRight className="ms-2" /> 
                    </Link> */}
                    <Link to="/checkout"  className="header-btn">
                    <div className="tgmenu__action d-none d-md-block">
                    <ul className="list-wrap">
                      <li className="header-btn">
                        <a href="contact.html" className="btn">
                          <FaArrowRight className="ms-2" />
                           Proceed to Checkout
                        </a>
                      </li>
                    </ul>
                  </div>
                      </Link>
                    <Link to="/productList" className="btn btn-continue" style={{ marginTop: '10px' }}>
                  
                     <FaArrowLeft className="ms-2" />
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .cart-page {
          padding: 30px 0;
        }
        
        .cart-header {
          margin-bottom: 30px;
        }
        
        .cart-title {
          font-size: 28px;
          font-weight: 600;
          color: #333;
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
          text-align: left;
          border-bottom: 1px solid #dee2e6;
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
        
        .cart__image img:hover {
          transform: scale(1.05);
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
        
        .btn-action {
          background: none;
          border: none;
          color: #6c757d;
          font-size: 14px;
          cursor: pointer;
          transition: color 0.2s ease;
          padding: 0;
        }
        
        .btn-action:hover {
          color: #0d6efd;
        }
        
        .quantity-control {
          display: flex;
          align-items: center;
          border: 1px solid #ddd;
          border-radius: 4px;
          overflow: hidden;
          width: fit-content;
        }
        
        .qty-btn {
          background: #f8f9fa;
          border: none;
          padding: 5px 12px;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.2s ease;
        }
        
        .qty-btn:hover {
          background: #e9ecef;
        }
        
        .qty-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .qty-value {
          min-width: 30px;
          text-align: center;
          font-weight: 500;
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
        
        .btn-remove:hover {
          transform: scale(1.2);
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
        
        .btn-checkout {
          background: #0d6efd;
          color: white;
          padding: 12px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .btn-checkout:hover {
          background: #0b5ed7;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(13, 110, 253, 0.2);
        }
        
        .btn-continue {
          background: white;
          color: #0d6efd;
          border: 1px solid #0d6efd;
          padding: 12px;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .btn-continue:hover {
          background: #f8f9fa;
        }
      `}</style>
    </div>
  );
};

export default Cart;