import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaStar, FaFileAlt, FaRegStar } from 'react-icons/fa';
import { MdPayment, MdCancel } from 'react-icons/md';


const TABS = ['Placed', 'Dispatched', 'Completed', 'Cancelled'];
const ICONS = {
    Placed: 'bi-cart-check-fill',
    Dispatched: 'bi-truck',
    Completed: 'bi-check-circle-fill',
    Cancelled: 'bi-x-circle-fill'
};

const UserOrderHeader = () => {
    const [activeTab, setActiveTab] = useState('Placed');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [reviewData, setReviewData] = useState({ orderId: '', productId: '', rating: 5, comment: '' });
    const API_URL = import.meta.env.VITE_API_URLS;
    const [showReviewModal, setShowReviewModal] = useState(false);


    const [orders, setOrders] = useState({
        Placed: [],
        Dispatched: [],
        Completed: [
            {
                id: 'static-order-1',
                date: 'Oct 17, 2024',
                total: '₹699',
                paymentMode: 'Online',
                items: [
                    {
                        id: 'static-product-1',
                        name: 'Whiskar',
                        image: 'assets/img/products/products_img13.jpg',
                        status: 'Delivered',
                        quantity: 1
                    }
                ]
            },
            {
                id: 'static-order-2',
                date: 'Nov 5, 2024',
                total: '₹1,299',
                paymentMode: 'COD',
                items: [
                    {
                        id: 'static-product-2',
                        name: 'prosense',
                        image: 'assets/img/products/products_img12.jpg',
                        status: 'Delivered',
                        quantity: 2
                    }
                ]
            }
        ],
        Cancelled: []
    });

    useEffect(() => {
        if (activeTab === 'Completed') return;

        const fetchOrders = async () => {
            setLoading(true);
            setError(null);
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get(`${API_URL}api/user/getUserOrdersByStatus?status=${activeTab}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                if (res.status === 200) {
                    const formatted = res.data.orders.map(order => ({
                        id: order._id,
                        date: new Date(order.createdAt).toLocaleDateString(),
                        total: `₹${order.products.reduce((sum, p) => sum + p.product.price * p.quantity, 0)}`,
                        items: order.products.map(p => ({
                            id: p.product._id,
                            name: p.product.productName,
                            image: `${API_URL}${p.product.productImages[0]}`,
                            status: order.status === "Placed" && order.paymentMode === "Online" ? "Payment pending" : order.status,
                            quantity: p.quantity,
                        })),
                        paymentMode: order.paymentMode
                    }));

                    setOrders(prev => ({
                        ...prev,
                        [activeTab]: formatted
                    }));
                } else {
                    setError("Failed to fetch orders.");
                }
            } catch (err) {
                console.error("Error fetching orders:", err);
                setError("Something went wrong.");
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, [activeTab]);

    const openReviewModal = (orderId, productId) => {
        setReviewData({ orderId, productId, rating: 0, comment: '' });
        setShowReviewModal(true);
    };

    const handleReviewSubmit = () => {
        console.log('Submit review:', reviewData);
        // TODO: POST to backend
        setShowReviewModal(false);
    };


    return (
        <div className="container py-4" style={{ borderRadius: '25px', backgroundColor: '#f4f7f9', minHeight: '100vh' }}>
            <h2 className="mb-4" style={{ color: '#2c3e50', fontWeight: '600' }}>My Orders</h2>

            <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
                {TABS.map(tab => {
                    const isActive = activeTab === tab;
                    return (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`btn ${isActive ? 'btn-primary' : 'btn-outline-secondary'}`}
                            style={{ borderRadius: '50px', backgroundColor: 'white', color: 'black', border: '1px #05576e solid' }}
                        >
                            <i className={`bi ${ICONS[tab]} me-1`}></i> {tab}
                        </button>
                    );
                })}
            </div>

            {loading && <p className="text-center">Loading orders...</p>}
            {error && <p className="text-center text-danger">{error}</p>}

            {!loading && !error && (orders[activeTab]?.length === 0 ? (
                <p className="text-center text-muted">No {activeTab} orders found.</p>
            ) : (
                <div className="order-list">
                    {orders[activeTab].map(order => (
                        <div key={order.id} className="card mb-4 shadow-sm">
                            <div className="card-header d-flex justify-content-between">
                                <div>
                                    <strong>Payment:</strong> {order.paymentMode} <br />
                                    <strong>Date:</strong> {order.date}
                                </div>
                                <div className="fw-bold text-success">{order.total}</div>
                            </div>
                            <div className="card-body">
                                {order.items.map(item => (

                                    <div key={item.id} className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3">
                                        <Link to='/order' state={{ orderId: order.id }} style={{ width: '100%' }}>
                                            <div className="d-flex align-items-center">
                                                <img src={item.image} alt={item.name} className="rounded me-3" width="60" height="60" />
                                                <div>
                                                    <div className="fw-semibold">{item.name}</div>
                                                    <small className="text-muted">Qty: {item.quantity}</small><br />
                                                    <small className={`text-${activeTab === 'Completed' ? 'success' : activeTab === 'Cancelled' ? 'danger' : 'primary'}`}>
                                                        {item.status}
                                                    </small>
                                                    {activeTab === 'Completed' && (
                                                        <div className="mt-1">
                                                            <small className="text-muted">Delivered on {order.date}</small>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="d-flex gap-2">

                                            {activeTab === 'Completed' && (
                                                <> 
                                                <Link to='/checkout'>
                                                    <button className="btn1 btn-light btn-sm" title="Buy Again">
                                                        <FaCartPlus />
                                                    </button>
                                                    </Link>
                                                    <button
                                                        className="btn1 btn-light btn-sm"

                                                        title="Review Product"
                                                        onClick={() => openReviewModal(order.id, item.id)}
                                                    >
                                                        <FaStar className="text-warning" />
                                                    </button>
                                                </>
                                            )}
                                            {activeTab === 'Placed' && item.status === 'Payment pending' && (
                                                <button className="btn1 btn-warning btn-sm" title="Complete Payment">
                                                    <MdPayment />
                                                </button>
                                            )}
                                            {activeTab === 'Placed' && item.status !== 'Payment pending' && (
                                                <button className="btn1 btn-outline-danger btn-sm" title="Cancel Order">
                                                    <MdCancel />
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}

            {/* Review Modal */}
            {/* <div className="modal fade" id="reviewModal" tabIndex="-1" aria-labelledby="reviewModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0">
            <div className="modal-header border-0 pb-0">
              <h5 className="modal-title fw-bold" id="reviewModalLabel">Rate this product</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body pt-0">
              <div className="text-center mb-4">
                <div className="star-rating mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="btn btn-link p-0 border-0 bg-transparent"
                      onClick={() => setReviewData({...reviewData, rating: star})}
                    >
                      {star <= reviewData.rating ? (
                        <FaStar className="text-warning" style={{ fontSize: '2rem' }} />
                      ) : (
                        <FaRegStar className="text-secondary" style={{ fontSize: '2rem' }} />
                      )}
                    </button>
                  ))}
                </div>
                <small className="text-muted">
                  {reviewData.rating} Star{reviewData.rating !== 1 ? 's' : ''}
                </small>
              </div>

              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="reviewText"
                  placeholder="Share your experience"
                  style={{ height: '100px' }}
                  value={reviewData.comment}
                  onChange={(e) => setReviewData({...reviewData, comment: e.target.value})}
                ></textarea>
                <label htmlFor="reviewText">Your review (optional)</label>
              </div>
            </div>
            <div className="modal-footer border-0 pt-0">
              <button 
                type="button" 
                className="btn btn-outline-secondary" 
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button 
                className="btn btn-primary" 
                onClick={handleReviewSubmit}
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div> */}
            {showReviewModal && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999,
                    }}
                >
                    <div
                        style={{
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            width: '90%',
                            maxWidth: '500px',
                            padding: '20px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '15px',
                            }}
                        >
                            <h5 style={{ margin: 0 }}>Rate this product</h5>
                            <button
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '1.5rem',
                                    cursor: 'pointer',
                                    lineHeight: 1,
                                }}
                                onClick={() => setShowReviewModal(false)}
                            >
                                &times;
                            </button>
                        </div>

                        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    onClick={() => setReviewData({ ...reviewData, rating: star })}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        fontSize: '1.8rem',
                                        cursor: 'pointer',
                                        color: star <= reviewData.rating ? '#ffc107' : '#ccc',
                                    }}
                                >
                                    {star <= reviewData.rating ? <FaStar /> : <FaRegStar />}
                                </button>
                            ))}
                            <div style={{ fontSize: '0.9rem', color: '#555' }}>
                                {reviewData.rating} Star{reviewData.rating !== 1 ? 's' : ''}
                            </div>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <textarea
                                style={{
                                    width: '100%',
                                    height: '100px',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    border: '1px solid #ccc',
                                    resize: 'none',
                                    fontSize: '0.95rem',
                                }}
                                placeholder="Share your experience"
                                value={reviewData.comment}
                                onChange={(e) => setReviewData({ ...reviewData, comment: e.target.value })}
                            />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                            <button
                                onClick={() => setShowReviewModal(false)}
                                style={{
                                    padding: '8px 16px',
                                    backgroundColor: '#ccc',
                                    border: '1px solid #05576e',
                                    borderRadius: '50px',
                                    cursor: 'pointer',
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleReviewSubmit}
                                style={{
                                    padding: '8px 16px',
                                    backgroundColor: '#05576e',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '50px',
                                    cursor: 'pointer',
                                }}
                            >
                                Submit Review
                            </button>
                        </div>
                    </div>
                </div>
            )}



        </div>



    );
};

export default UserOrderHeader;