import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserOrderHeader = () => {
    const [activeTab, setActiveTab] = useState('Placed'); // Capitalized
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const API_URL = import.meta.env.VITE_API_URLS;

    const [orders, setOrders] = useState({
        Placed: [],
        Dispatched: [],
        Completed: [],
        Cancelled: []
    });


    useEffect(() => {
        const fetchOrders = async () => {
            try {
                setLoading(true);
                const token = localStorage.getItem('token');

                const res = await axios.get(
                    `${API_URL}api/user/getUserOrdersByStatus?status=${activeTab}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                console.log("Response from API:", res.data);

                if (res.status === 200) {
                    const formattedOrders = res.data.orders.map(order => ({
                        id: order._id,
                        
                
                        date: new Date(order.createdAt).toLocaleDateString(),
                        total: `₹${order.products.reduce((sum, p) => sum + (p.product.price * p.quantity), 0)}`,
                        items: order.products.map(p => ({
                            id: p.product._id,
                            name: p.product.productName,
                            image: `${API_URL}${p.product.productImages[0]}`,
                            status: order.status === "Placed" && order.paymentMode === "Online" ? "Payment pending" : order.status,
                            quantity: p.quantity,
                        })),
                        paymentMode: order.paymentMode // ✅ Added
                    }));
                    

                    // console.log("Formatted Orders:", res);

                    setOrders(prev => ({ ...prev, [activeTab]: formattedOrders }));
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
    }, [activeTab]); // 👈 add activeTab here


    const renderOrders = () => {
        const currentOrders = orders[activeTab] || [];

        console.log(orders);

        if (loading) {
            return <p className="text-center py-4">Loading orders...</p>;
        }

        if (error) {
            return <p className="text-center text-danger py-4">{error}</p>;
        }

        return (
            <div className="mt-4" style={{ transition: 'opacity 0.5s ease-in-out' }}>
                {currentOrders.length === 0 ? (
                    <div
                        className="text-center py-5"
                        style={{
                            animation: 'fadeIn 0.5s ease',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '12px',
                            padding: '40px 20px',
                            marginTop: '20px'
                        }}
                    >
                        <i
                            className="bi bi-emoji-frown"
                            style={{ fontSize: '4rem', color: '#adb5bd', marginBottom: '20px', display: 'block' }}
                        ></i>
                        <p className="mt-3" style={{ fontSize: '1.1em', color: '#6c757d' }}>
                            No {activeTab} orders found.
                        </p>
                        {activeTab === 'placed' && <p style={{ color: '#6c757d' }}>Why not place one now?</p>}
                    </div>
                ) : (
                    currentOrders.map((order, orderIndex) => (
                        <div
                            key={`${order.id}-${orderIndex}`}
                            className="card mb-4 shadow-sm order-card"
                            style={{
                                backgroundColor: '#ffffff',
                                borderRadius: '12px',
                                border: '1px solid #e9ecef',
                                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                            }}
                        >
                            <div
                                className="card-header d-flex justify-content-between align-items-center"
                                style={{
                                    backgroundColor: '#f8f9fa',
                                    padding: '15px 20px',
                                    borderBottom: '1px solid #e9ecef',
                                    borderTopLeftRadius: '12px',
                                    borderTopRightRadius: '12px'
                                }}
                            >
                                <div className="d-flex align-items-center gap-3">
                                    <span style={{ fontSize: '0.85em', color: '#6c757d' }}>
                                        <strong style={{ color: '#495057' }}>Payment Mode:</strong> {order.paymentMode}
                                    </span>
                                    <span style={{ fontSize: '0.85em', color: '#6c757d' }}>
                                        <strong style={{ color: '#495057' }}>Date:</strong> {order.date}
                                    </span>
                                </div>


                                <div className="text-end">
                                    <span className="fw-bold" style={{ fontSize: '1.1em', color: '#198754' }}>{order.total}</span>
                                </div>
                            </div>
                            <div className="card-body" style={{ padding: '20px' }}>
                                {order.items.map((item, itemIndex) => (
                                    <div
                                        key={item.id}
                                        className="d-flex align-items-center item-row"
                                        style={{
                                            paddingBottom: order.items.length - 1 === itemIndex ? '0' : '15px',
                                            marginBottom: order.items.length - 1 === itemIndex ? '0' : '15px',
                                            borderBottom: order.items.length - 1 === itemIndex ? 'none' : '1px solid #f0f0f0',
                                        }}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            width="70"
                                            height="70"
                                            className="rounded me-3 product-image"
                                            style={{ objectFit: 'cover', borderRadius: '8px' }}
                                        />
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1" style={{ fontWeight: '500', color: '#333' }}>{item.name}</h6>
                                            <p style={{ fontSize: '0.85em', margin: 0, color: '#6c757d' }}>
                                                Quantity: {item.quantity}
                                            </p>
                                            <small
                                                className={`d-block ${activeTab === 'Completed' ? 'text-success' :
                                                    activeTab === 'Cancelled' ? 'text-danger' : 'text-primary'}`}
                                                style={{ fontSize: '0.85em', fontWeight: '500' }}
                                            >
                                                {item.status}
                                            </small>

                                        </div>
                                        {activeTab === 'completed' && (
                                            <button className="btn btn-sm btn-primary buy-again-btn">
                                                Buy Again
                                            </button>
                                        )}
                                    </div>
                                ))}
                                <div className="d-flex justify-content-between align-items-center mt-4 pt-3" style={{ borderTop: order.items.length > 0 ? '1px solid #f0f0f0' : 'none' }}>
                                    <Link to='/order' state={{ orderId: order.id }}>
                                    <button className="btn btn-sm btn-outline-secondary action-btn">Order Details</button>
                                    </Link>
                                    {activeTab === 'completed' && (
                                        <button className="btn btn-sm btn-success rate-product-btn">Rate Products</button>
                                    )}
                                    {activeTab === 'placed' && order.items.some(item => item.status === 'Payment pending') && (
                                        <button className="btn btn-sm btn-warning">Complete Payment</button>
                                    )}
                                    {activeTab === 'placed' && !order.items.some(item => item.status === 'Payment pending') && (
                                        <button className="btn btn-sm btn-outline-danger cancel-order-btn">Cancel Order</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        );
    };

    return (
        <div className="container py-4"  style={{borderRadius: '25px', backgroundColor: '#f4f7f9', minHeight: '100vh', padding: '25px' }}>
            <h2 className="mb-4" style={{
                color: '#2c3e50',
                fontWeight: '600',
                paddingBottom: '15px',
                borderBottom: '1px solid #e0e0e0'
            }}>
                My Orders
            </h2>

            <div className="d-flex justify-content-center flex-wrap gap-3 mb-4" style={{ backgroundColor: '#f4f7f9' }}>
                {['Placed', 'Dispatched', 'Completed', 'Cancelled'].map((tab) => {
                    const icons = {
                        Placed: 'bi-cart-check-fill',
                        Dispatched: 'bi-truck',
                        Completed: 'bi-check-circle-fill',
                        Cancelled: 'bi-x-circle-fill'
                    };
                    const isActive = activeTab === tab;

                    return (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`btn tab-pill ${isActive ? 'active-pill' : ''}`}
                            style={{
                                backgroundColor: isActive ? '#0d6efd' : '#ffffff',
                                color: isActive ? '#ffffff' : '#6c757d',
                                border: isActive ? '1px solid #0d6efd' : '1px solid #dee2e6',
                                borderRadius: '50px',
                                fontWeight: 500,
                                fontSize: '0.95em',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                boxShadow: isActive ? '0 4px 12px rgba(13, 110, 253, 0.2)' : 'none',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <i className={`bi ${icons[tab]}`} style={{ fontSize: '1.1em' }}></i>
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    );
                })}
            </div>

            {renderOrders()}

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(15px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .order-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 8px 25px rgba(0,0,0,0.1) !important;
                }

                .product-image:hover {
                    transform: scale(1.08);
                    transition: transform 0.2s ease-in-out;
                }

                .buy-again-btn:hover {
                    background-color: #0056b3 !important;
                    border-color: #0056b3 !important;
                }

                .action-btn:hover {
                    background-color: #f0f0f0 !important;
                    color: #333 !important;
                }

                .rate-product-btn:hover {
                    background-color: #157347 !important;
                    border-color: #157347 !important;
                }

                .cancel-order-btn:hover {
                    background-color: #dc3545 !important;
                    color: white !important;
                }

                .tab-pill:hover {
                    background-color: #e9ecef !important;
                    color: #343a40 !important;
                    border-color: #ced4da !important;
                }

                .active-pill:hover {
                    background-color: #0b5ed7 !important;
                    border-color: #0b5ed7 !important;
                }
            `}</style>
        </div>
    );
};

export default UserOrderHeader;
