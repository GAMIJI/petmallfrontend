import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {
    FaBox, FaMapMarkerAlt, FaCalendarAlt, FaCreditCard,
    FaShoppingBag, FaStore, FaUser, FaCheckCircle,
    FaTimesCircle, FaPhone, FaEnvelope, FaWallet,
    FaShippingFast, FaCheck, FaChevronRight, FaInfoCircle,
    FaShare, FaRupeeSign, FaTag, FaTruck, FaHome
} from 'react-icons/fa';

const OrderDetails = () => {
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeStatus, setActiveStatus] = useState('confirmed');
    const location = useLocation();
    const { orderId } = location.state || {};
    const API_URL = import.meta.env.VITE_API_URLS;

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                setLoading(true);
                const token = localStorage.getItem('token');
                const res = await axios.get(`${API_URL}api/user/getOrderDetailsById`, {
                    params: { orderId }
                });
                setOrder(res.data.order);
                updateActiveStatus(res.data.order.status);
            } catch (err) {
                console.error(err);
                setError("Failed to fetch order details. Please try again.");
            } finally {
                setLoading(false);
            }
        };
        fetchOrderDetails();
    }, [orderId, API_URL]);

    const updateActiveStatus = (status) => {
        const statusMap = {
            'pending': 'confirmed',
            'confirmed': 'confirmed',
            'shipped': 'shipped',
            'out_for_delivery': 'out_for_delivery',
            'delivered': 'delivered',
            'cancelled': 'cancelled'
        };
        setActiveStatus(statusMap[status] || 'confirmed');
    };

    const getStatusPercentage = () => {
        switch (activeStatus) {
            case 'confirmed': return 25;
            case 'shipped': return 50;
            case 'out_for_delivery': return 75;
            case 'delivered': return 100;
            default: return 0;
        }
    };

    if (loading) return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );

    if (error) return (
        <div className="alert alert-danger mx-auto mt-5" style={{ maxWidth: '600px' }}>
            {error}
        </div>
    );

    if (!order) return (
        <div className="alert alert-warning mx-auto mt-5" style={{ maxWidth: '600px' }}>
            No order found with ID: {orderId}
        </div>
    );

    const { address, paymentMode, status, createdAt, products = [], user, store } = order;
    const totalAmount = products.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountAmount = products.reduce((sum, item) => sum + ((item.price * 0.2) * item.quantity), 0);

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-IN', options);
    };

    const deliveryDate = new Date(createdAt);
    deliveryDate.setDate(deliveryDate.getDate() + 3);

    return (
        <div className="container py-4">
            <nav aria-label="breadcrumb" className="mb-4">
                <ol className="breadcrumb">
                    <li ><a href="/" className="text-decoration-none">Home/</a></li>
                    <li ><a href="/account" className="text-decoration-none">My Account/</a></li>
                    <li ><a href="/orders" className="text-decoration-none">My Orders/</a></li>
                    <li className="breadcrumb-item active" aria-current="page">/Order #{order.orderId}</li>
                </ol>
            </nav>

            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="mb-1">Order #{order.orderId}</h2>
                    <p className="text-muted mb-0">
                        <FaCalendarAlt className="me-1" />
                        Placed on {formatDate(createdAt)}
                    </p>
                </div>
                <button className="btn btn-outline-primary btn-sm">
                    <FaShare className="me-1" /> Share Order
                </button>
            </div>

            <div className="row">
                {/* Left Column - Order Items with Vertical Progress Bar */}
                <div className="col-lg-8 mb-4">
                    <div className="card border-0 shadow-sm mb-4">
                        <div className="card-body">
                            <div className="row">
                                {/* Vertical Progress Bar */}
                                <div className="col-md-2 d-none d-md-block">
                                    <div className="vertical-progress-container">
                                        <div
                                            className="vertical-progress-bar"
                                            style={{ height: `${getStatusPercentage()}%` }}
                                        ></div>
                                        <div className="vertical-progress-steps">
                                            <div className={`vertical-progress-step ${activeStatus === 'confirmed' ? 'active' : ''} ${activeStatus !== 'confirmed' ? 'completed' : ''}`}>
                                                <div className="step-icon">
                                                    <FaCheckCircle />
                                                </div>
                                                <div className="step-label">Confirmed</div>
                                            </div>
                                            <div className={`vertical-progress-step ${activeStatus === 'shipped' ? 'active' : ''} ${['out_for_delivery', 'delivered'].includes(activeStatus) ? 'completed' : ''}`}>
                                                <div className="step-icon">
                                                    <FaShippingFast />
                                                </div>
                                                <div className="step-label">Shipped</div>
                                            </div>
                                            <div className={`vertical-progress-step ${activeStatus === 'out_for_delivery' ? 'active' : ''} ${activeStatus === 'delivered' ? 'completed' : ''}`}>
                                                <div className="step-icon">
                                                    <FaTruck />
                                                </div>
                                                <div className="step-label">On the way</div>
                                            </div>
                                            <div className={`vertical-progress-step ${activeStatus === 'delivered' ? 'active' : ''}`}>
                                                <div className="step-icon">
                                                    <FaHome />
                                                </div>
                                                <div className="step-label">Delivered</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Order Items */}
                                <div className="col-md-10">
                                    <h5 className="card-title mb-4">Order Summary</h5>
                                    {products.map((product, index) => (
                                        <div key={index} className="mb-4 pb-4 border-bottom">
                                            <div className="row">
                                                <div className="col-3 col-md-2">
                                                    <img
                                                        src={`${API_URL}${product?.images[0]}`}
                                                        alt={product?.name}
                                                        className="img-fluid rounded"
                                                        style={{ maxHeight: '100px' }}
                                                    />
                                                </div>
                                                <div className="col-9 col-md-6">
                                                    <h6 className="mb-1">{product?.name}</h6>
                                                    <p className="text-muted mb-1">Color: {product?.color || 'Not specified'}</p>
                                                    <p className="mb-2">
                                                        <FaStore className="me-1 text-warning" />
                                                        Seller: {store?.storeName}
                                                    </p>
                                                    <p className="text-success mb-0">
                                                        <FaCheckCircle className="me-1" />
                                                        {product.verified ? 'Verified at delivery' : 'Will be verified at delivery'}
                                                    </p>
                                                </div>
                                                <div className="col-12 col-md-4 mt-3 mt-md-0 text-md-end">
                                                    <div className="d-flex flex-column">
                                                        <h5 className="text-danger mb-1">
                                                            <FaRupeeSign /> {(product.price * product.quantity).toLocaleString('en-IN')}
                                                        </h5>
                                                        {product.price > product.originalPrice && (
                                                            <small className="text-muted text-decoration-line-through">
                                                                <FaRupeeSign /> {(product.originalPrice * product.quantity).toLocaleString('en-IN')}
                                                            </small>
                                                        )}
                                                        <small className="text-success">
                                                            {product.discount > 0 ? `${product.discount}% off` : 'No discount'}
                                                        </small>
                                                        <small className="text-muted">Qty: {product.quantity}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Delivery Information */}
                                    <div className="alert alert-light d-flex align-items-center mt-4">
                                        <FaInfoCircle className="me-2 text-primary" size={20} />
                                        <div>
                                            <strong>Delivery update:</strong> Your order is {activeStatus.replace('_', ' ')}.
                                            {activeStatus === 'delivered' ? ' It was delivered successfully.' : ' Expected delivery by ' + formatDate(deliveryDate)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shipping Details */}
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title mb-4">Shipping & Billing Details</h5>
                            <div className="row">
                                <div className="col-md-6 mb-4 mb-md-0">
                                    <h6 className="d-flex align-items-center mb-3">
                                        <FaMapMarkerAlt className="me-2 text-primary" />
                                        Shipping Address
                                    </h6>
                                    <address className="mb-0">
                                        <p className="mb-1"><strong>{address?.name || user?.name}</strong></p>
                                        <p className="mb-1">{address?.street}, {address?.landmark}</p>
                                        <p className="mb-1">{address?.city}, {address?.state} - {address?.postalCode}</p>
                                        <p className="mb-0">
                                            <FaPhone className="me-1" />
                                            {address?.phone || user?.phone}
                                        </p>
                                    </address>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="d-flex align-items-center mb-3">
                                        <FaCreditCard className="me-2 text-primary" />
                                        Payment Information
                                    </h6>
                                    <div>
                                        <p className="mb-1"><strong>Payment Method:</strong> {paymentMode}</p>
                                        <p className="mb-1"><strong>Payment Status:</strong> Paid</p>
                                        <p className="mb-1"><strong>Transaction ID:</strong> TXN{orderId.slice(0, 8).toUpperCase()}</p>
                                        <p className="mb-0"><strong>Paid Amount:</strong> <FaRupeeSign /> {totalAmount.toLocaleString('en-IN')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Order Summary */}
                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm sticky-top" style={{ top: '20px' }}>
                        <div className="card-body">
                            <h5 className="card-title mb-4">Order Total</h5>

                            <div className="mb-3">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Subtotal ({products.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                                    <span><FaRupeeSign /> {totalAmount.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Discount</span>
                                    <span className="text-success">- <FaRupeeSign /> {discountAmount.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Delivery Fee</span>
                                    <span className="text-success">Free</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Taxes</span>
                                    <span><FaRupeeSign /> {(totalAmount * 0.18).toLocaleString('en-IN')}</span>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between fw-bold fs-5">
                                    <span>Total</span>
                                    <span><FaRupeeSign /> {(totalAmount - discountAmount + (totalAmount * 0.18)).toLocaleString('en-IN')}</span>
                                </div>
                            </div>

                            <hr />

                            <div className="mb-4">
                                <h6 className="d-flex align-items-center mb-3">
                                    <FaTag className="me-2 text-warning" />
                                    Applied Offers
                                </h6>
                                <div className="alert alert-success py-2 mb-2">
                                    <div className="d-flex justify-content-between">
                                        <small>10% off on first order</small>
                                        <small className="text-success">- <FaRupeeSign /> {discountAmount.toLocaleString('en-IN')}</small>
                                    </div>
                                </div>
                                <div className="alert alert-success py-2">
                                    <div className="d-flex justify-content-between">
                                        <small>Free delivery</small>
                                        <small className="text-success">Applied</small>
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div className="d-grid gap-2">
                                <button className="btn btn-primary">
                                    Track Package
                                </button>
                                <button className="btn btn-outline-secondary">
                                    Download Invoice
                                </button>
                                {activeStatus === 'delivered' && (
                                    <button className="btn btn-success">
                                        Rate & Review Products
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Progress Bar (Horizontal) */}
            <div className="d-block d-md-none mb-4">
                <div className="card border-0 shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title mb-3">Order Status</h5>
                        <div className="progress-container">
                            <div className="progress-bar" style={{ width: `${getStatusPercentage()}%` }}></div>
                            <div className="progress-steps">
                                <div className={`progress-step ${activeStatus === 'confirmed' ? 'active' : ''} ${activeStatus !== 'confirmed' ? 'completed' : ''}`}>
                                    <div className="step-icon">
                                        <FaCheckCircle />
                                    </div>
                                    <div className="step-label">Confirmed</div>
                                </div>
                                <div className={`progress-step ${activeStatus === 'shipped' ? 'active' : ''} ${['out_for_delivery', 'delivered'].includes(activeStatus) ? 'completed' : ''}`}>
                                    <div className="step-icon">
                                        <FaShippingFast />
                                    </div>
                                    <div className="step-label">Shipped</div>
                                </div>
                                <div className={`progress-step ${activeStatus === 'out_for_delivery' ? 'active' : ''} ${activeStatus === 'delivered' ? 'completed' : ''}`}>
                                    <div className="step-icon">
                                        <FaTruck />
                                    </div>
                                    <div className="step-label">On the way</div>
                                </div>
                                <div className={`progress-step ${activeStatus === 'delivered' ? 'active' : ''}`}>
                                    <div className="step-icon">
                                        <FaHome />
                                    </div>
                                    <div className="step-label">Delivered</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .breadcrumb {
                    background-color: transparent;
                    padding: 0.75rem 1rem;
                    border-radius: 0.5rem;
                    background-color: #f8f9fa;
                }
                
                .breadcrumb-item a {
                    color: #6c757d;
                    transition: color 0.2s;
                }
                
                .breadcrumb-item a:hover {
                    color: #0d6efd;
                    text-decoration: none;
                }
                
              /* Vertical Progress Bar Styles */
/* Vertical Progress Bar Styles */
.vertical-progress-container {
    position: relative;
    height: 100%;
    width: 100%;

}

.vertical-progress-bar {
    position: absolute;
    left: 20px; /* Half of step-icon width (40px/2) */
    top: 0;
    width: 4px;
    background-color: #0d6efd;
    transition: height 0.5s ease;
    z-index: 1;
}

.vertical-progress-steps {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    z-index: 2;
}

.vertical-progress-step {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    position: relative;
    gap: 8px;
}

.vertical-progress-step:last-child {
    margin-bottom: 0;
}

.vertical-progress-step .step-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e9ecef;
    color: #6c757d;
    border: 3px solid #e9ecef;
    font-size: 1rem;
    position: relative;
    flex-shrink: 0; /* Prevent icon from shrinking */
}

.vertical-progress-step.completed .step-icon {
    background-color: #198754;
    border-color: #198754;
    color: white;
}

.vertical-progress-step.active .step-icon {
    background-color: #0d6efd;
    border-color: #0d6efd;
    color: white;
    animation: pulse 1.5s infinite;
}

.vertical-progress-step .step-content {
    margin-left: 1rem; /* Space between icon and text */
}

.vertical-progress-step .step-label {
    font-weight: 500;
    font-size: 0.85rem;
    color: #212529;
}

.vertical-progress-step .step-date {
    font-size: 0.75rem;
    color: #6c757d;
    margin-top: 0.25rem;
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(13, 110, 253, 0.7);
    }
    70% {
        box-shadow: 0 0 0 10px rgba(13, 110, 253, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(13, 110, 253, 0);
    }
}
                
                /* Horizontal Progress Bar (for mobile) */
                .progress-container {
                    position: relative;
                    width: 100%;
                    margin: 1rem 0;
                }
                
                .progress-bar {
                    position: absolute;
                    top: 20px;
                    left: 0;
                    height: 4px;
                    background-color: #0d6efd;
                    transition: width 0.5s ease;
                    z-index: 1;
                }
                
                .progress-steps {
                    display: flex;
                    justify-content: space-between;
                    position: relative;
                    z-index: 2;
                }
                
                .progress-step {
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    flex: 1;
                    position: relative;
                }
                
                .progress-step .step-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 0.5rem;
                    background-color: #e9ecef;
                    color: #6c757d;
                    border: 3px solid #e9ecef;
                    font-size: 1rem;
                }
                
                .progress-step.completed .step-icon {
                    background-color: #198754;
                    border-color: #198754;
                    color: white;
                }
                
                .progress-step.active .step-icon {
                    background-color: #0d6efd;
                    border-color: #0d6efd;
                    color: white;
                    animation: pulse 1.5s infinite;
                }
                
                .progress-step .step-label {
                    font-weight: 500;
                    font-size: 0.75rem;
                    text-align: center;
                }
                
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                    100% { transform: scale(1); }
                }
                
                .card {
                    border-radius: 0.75rem;
                    overflow: hidden;
                }
                
                .card-title {
                    font-weight: 600;
                    color: #2c3e50;
                }
            `}</style>
        </div>
    );
};

export default OrderDetails;