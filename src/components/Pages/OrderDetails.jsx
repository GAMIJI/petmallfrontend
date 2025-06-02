import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation} from 'react-router-dom';
import { 
  FaBox, FaMapMarkerAlt, FaCalendarAlt, FaCreditCard, 
  FaShoppingBag, FaStore, FaUser, FaCheckCircle, 
  FaTimesCircle, FaPhone, FaEnvelope, FaWallet,
  FaShippingFast, FaCheck, FaChevronRight
} from 'react-icons/fa';
import { FiPackage, FiTruck } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { BsBoxSeam, BsCreditCard } from 'react-icons/bs';

const OrderDetails = () => {
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
   const { orderId } = location.state || {};
    const API_URL = import.meta.env.VITE_API_URLS;


    console.log(orderId, "orderId from OrderDetails");
    
    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                setLoading(true);
                const token = localStorage.getItem('token');
                const res = await axios.get(`${API_URL}api/user/getOrderDetailsById`, {
                    params: { orderId }
                });
                setOrder(res.data.order);
            } catch (err) {
                console.error(err);
                setError("Failed to fetch order details. Please try again.");
            } finally {
                setLoading(false);
            }
        };
        fetchOrderDetails();
    }, [orderId, API_URL]);

    if (loading) return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <motion.div
                animate={{ 
                    rotateY: 360,
                    scale: [1, 1.2, 1]
                }}
                transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="spinner-grow text-primary"
                style={{ width: '4rem', height: '4rem' }}
            />
        </div>
    );

    if (error) return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="alert alert-danger mx-auto mt-5 shadow-lg"
            style={{ maxWidth: '600px' }}
        >
            {error}
        </motion.div>
    );

    if (!order) return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="alert alert-warning mx-auto mt-5 shadow-lg"
            style={{ maxWidth: '600px' }}
        >
            No order found with ID: {orderId}
        </motion.div>
    );

    const { address, paymentMode, status, createdAt, products = [], user, store } = order;
    const totalAmount = products.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const statusConfig = {
        'Placed': { color: 'bg-blue-500', icon: <BsBoxSeam className="me-2" /> },
        'Shipped': { color: 'bg-purple-500', icon: <FiTruck className="me-2" /> },
        'Delivered': { color: 'bg-green-500', icon: <FaCheck className="me-2" /> },
        'Cancelled': { color: 'bg-red-500', icon: <FaTimesCircle className="me-2" /> },
        'Processing': { color: 'bg-yellow-500', icon: <FiPackage className="me-2" /> }
    };

    const paymentIcons = {
        'Cash on Delivery': <FaWallet className="me-2" />,
        'Credit Card': <BsCreditCard className="me-2" />,
        'UPI': <FaCreditCard className="me-2" />
    };

    const statusSteps = [
        { id: 1, name: 'Order Placed', icon: <FaCalendarAlt />, status: 'complete' },
        { id: 2, name: 'Processing', icon: <FiPackage />, status: status === 'Placed' ? 'pending' : ['Processing', 'Shipped', 'Delivered'].includes(status) ? 'complete' : 'pending' },
        { id: 3, name: 'Shipped', icon: <FiTruck />, status: ['Shipped', 'Delivered'].includes(status) ? 'complete' : 'pending' },
        { id: 4, name: 'Delivered', icon: <FaBox />, status: status === 'Delivered' ? 'complete' : 'pending' }
    ];

    return (
        <div className="container py-5">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="row"
            >
                <div className="col-lg-10 mx-auto">
                    {/* Order Header */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
                        <motion.div whileHover={{ scale: 1.02 }}>
                            <h1 className="display-6 fw-bold text-gradient">
                                <FaShoppingBag className="me-3" />
                                Order #{order.orderId}
                            </h1>
                            <p className="text-muted">
                                <FaCalendarAlt className="me-2" />
                                {new Date(createdAt).toLocaleString('en-US', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                            </p>
                        </motion.div>
                        
                        <motion.span 
                            whileHover={{ scale: 1.05 }}
                            className={`badge rounded-pill p-3 fs-6 mt-3 mt-md-0 ${statusConfig[status]?.color || 'bg-secondary'} text-white shadow-sm`}
                        >
                            {statusConfig[status]?.icon}
                            {status}
                        </motion.span>
                    </div>

                    {/* Order Summary Card */}
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="card border-0 shadow-lg mb-4 overflow-hidden"
                    >
                        <div className="card-header bg-primary bg-gradient text-white py-3">
                            <h5 className="mb-0 d-flex align-items-center">
                                <FaShoppingBag className="me-3 fs-4" />
                                Order Summary
                            </h5>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th className="ps-4">Product</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((item, idx) => (
                                            <motion.tr 
                                                key={idx}
                                                whileHover={{ 
                                                    backgroundColor: 'rgba(248,249,250,0.8)',
                                                    scale: 1.005
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <td className="ps-4">
                                                    <div className="d-flex align-items-center">
                                                        {item.images?.[0] && (
                                                            <motion.img
                                                                whileHover={{ scale: 1.1 }}
                                                                src={`${API_URL}${item.images[0]}`}
                                                                alt={item.name}
                                                                width="80"
                                                                className="rounded-3 me-3 shadow-sm"
                                                                style={{ objectFit: 'cover' }}
                                                            />
                                                        )}
                                                        <div>
                                                            <h6 className="mb-1 fw-bold">{item.name}</h6>
                                                            <small className="text-muted">{item.brand || 'Generic Brand'}</small>
                                                            {item.size && <div className="mt-1"><span className="badge bg-light text-dark">Size: {item.size}</span></div>}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="align-middle">₹{item.price.toFixed(2)}</td>
                                                <td className="align-middle">{item.quantity}</td>
                                                <td className="align-middle fw-bold">₹{(item.price * item.quantity).toFixed(2)}</td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                    <tfoot className="table-light">
                                        <tr>
                                            <td colSpan="3" className="text-end fw-bold ps-4">Subtotal:</td>
                                            <td className="fw-bold">₹{totalAmount.toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3" className="text-end fw-bold ps-4">Shipping:</td>
                                            <td className="fw-bold">₹0.00</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3" className="text-end fw-bold ps-4">Total:</td>
                                            <td className="fw-bold text-primary">₹{totalAmount.toFixed(2)}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </motion.div>

                    {/* Order Timeline */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="card border-0 shadow-lg mb-4"
                    >
                        <div className="card-header bg-white py-3">
                            <h5 className="mb-0 d-flex align-items-center">
                                <FaShippingFast className="me-3 fs-4 text-primary" />
                                Order Status
                            </h5>
                        </div>
                        <div className="card-body">
                            <div className="stepper-wrapper">
                                {statusSteps.map((step, index) => (
                                    <motion.div 
                                        key={step.id}
                                        whileHover={{ scale: 1.05 }}
                                        className={`stepper-item ${step.status === 'complete' ? 'completed' : ''} ${step.status === 'pending' && statusSteps[index-1]?.status === 'complete' ? 'active' : ''}`}
                                    >
                                        <div className="step-counter">
                                            {step.status === 'complete' ? (
                                                <span className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center">
                                                    {step.icon}
                                                </span>
                                            ) : step.status === 'active' ? (
                                                <span className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center">
                                                    {step.icon}
                                                </span>
                                            ) : (
                                                <span className="bg-light text-muted rounded-circle d-flex align-items-center justify-content-center">
                                                    {step.icon}
                                                </span>
                                            )}
                                        </div>
                                        <div className="step-name">{step.name}</div>
                                        {index < statusSteps.length - 1 && (
                                            <div className="step-connector">
                                                <div className={`connector-line ${statusSteps[index+1].status === 'complete' ? 'completed' : ''}`}></div>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Two Column Section */}
                    <div className="row">
                        {/* Left Column */}
                        <div className="col-md-6 mb-4">
                            {/* Payment Info */}
                            <motion.div 
                                whileHover={{ y: -3 }}
                                className="card border-0 shadow-sm h-100"
                            >
                                <div className="card-header bg-white">
                                    <h5 className="mb-0 d-flex align-items-center">
                                        <FaCreditCard className="me-3 fs-4 text-primary" />
                                        Payment Information
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="icon-circle bg-light-primary text-primary me-3">
                                            {paymentIcons[paymentMode] || <FaWallet />}
                                        </div>
                                        <div>
                                            <h6 className="mb-0">Payment Method</h6>
                                            <p className="text-muted mb-0">{paymentMode}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="icon-circle bg-light-success text-success me-3">
                                            <FaCheck />
                                        </div>
                                        <div>
                                            <h6 className="mb-0">Payment Status</h6>
                                            <p className="text-muted mb-0">
                                                {paymentMode === 'Cash on Delivery' ? 'Pending' : 'Completed'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column */}
                        <div className="col-md-6 mb-4">
                            {/* Delivery Address */}
                            <motion.div 
                                whileHover={{ y: -3 }}
                                className="card border-0 shadow-sm h-100"
                            >
                                <div className="card-header bg-white">
                                    <h5 className="mb-0 d-flex align-items-center">
                                        <FaMapMarkerAlt className="me-3 fs-4 text-danger" />
                                        Delivery Address
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <address className="mb-0">
                                        <div className="d-flex align-items-start mb-2">
                                            <FaUser className="me-3 mt-1 text-muted" />
                                            <div>
                                                <strong>{address?.name || user?.name}</strong><br />
                                                {address?.street}, {address?.landmark}<br />
                                                {address?.city}, {address?.state}<br />
                                                {address?.country} - {address?.postalCode}
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <FaPhone className="me-3 text-muted" />
                                            <span>{address?.phone || user?.phone}</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <FaEnvelope className="me-3 text-muted" />
                                            <span>{address?.email || user?.email || 'N/A'}</span>
                                        </div>
                                    </address>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Seller Information */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="card border-0 shadow-lg mb-4"
                    >
                        <div className="card-header bg-white py-3">
                            <h5 className="mb-0 d-flex align-items-center">
                                <FaStore className="me-3 fs-4 text-warning" />
                                Seller Information
                            </h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="icon-circle bg-light-warning text-warning me-3">
                                            <FaStore />
                                        </div>
                                        <div>
                                            <h5 className="mb-0">{store?.storeName}</h5>
                                            <small className="text-muted">Store ID: {store?._id}</small>
                                        </div>
                                    </div>
                                    
                                    <div className="ms-5 ps-3">
                                        <div className="d-flex align-items-center mb-2">
                                            <FaUser className="me-3 text-muted" />
                                            <span><strong>Owner:</strong> {store?.storeOwner}</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <FaPhone className="me-3 text-muted" />
                                            <span><strong>Contact:</strong> {store?.contactNumber}</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <FaEnvelope className="me-3 text-muted" />
                                            <span><strong>Email:</strong> {store?.storeEmail}</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <FaMapMarkerAlt className="me-3 text-muted" />
                                            <span><strong>Address:</strong> {store?.storeAddress}</span>
                                        </div>
                                        
                                         <span className={`position-absolute top-0 end-0 badge ${store?.isVerified ? 'bg-success' : 'bg-secondary'} rounded-pill p-2 mt-3 me-3`}>
                                                {store?.isVerified ? 'Verified' : 'Unverified'}
                                                {store?.isVerified ? (
                                                    <FaCheckCircle className="ms-1" />
                                                ) : (
                                                    <FaTimesCircle className="ms-1" />
                                                )}
                                            </span>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <motion.div 
                                        whileHover={{ scale: 1.05 }}
                                        className="mt-3 mt-md-0"
                                    >
                                        {/* <div className="position-relative">
                                            {store?.storeImages?.[0] && (
                                                <img 
                                                    src={`${API_URL}${store.storeImages[0]}`}
                                                    alt="Store"
                                                    className="img-fluid rounded-3 shadow-sm"
                                                    style={{ maxHeight: '150px', objectFit: 'cover' }}
                                                />
                                            )}
                                            <span className={`position-absolute top-0 end-0 badge ${store?.isVerified ? 'bg-success' : 'bg-secondary'} rounded-pill p-2`}>
                                                {store?.isVerified ? 'Verified' : 'Unverified'}
                                                {store?.isVerified ? (
                                                    <FaCheckCircle className="ms-1" />
                                                ) : (
                                                    <FaTimesCircle className="ms-1" />
                                                )}
                                            </span>
                                        </div> */}
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="btn btn-outline-primary mt-3"
                                        >
                                            View Store <FaChevronRight className="ms-1" />
                                        </motion.button>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <style jsx>{`
                .text-gradient {
                    background: linear-gradient(45deg, #4e54c8, #8f94fb);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                .icon-circle {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.25rem;
                }
                
                .bg-light-primary {
                    background-color: rgba(13,110,253,0.1);
                }
                
                .bg-light-success {
                    background-color: rgba(25,135,84,0.1);
                }
                
                .bg-light-warning {
                    background-color: rgba(255,193,7,0.1);
                }
                
                .stepper-wrapper {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 20px;
                }
                
                .stepper-item {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    flex: 1;
                }
                
                .stepper-item.completed .step-counter {
                    background-color: #198754;
                    color: white;
                }
                
                .stepper-item.active .step-counter {
                    background-color: #0d6efd;
                    color: white;
                }
                
                .step-counter {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background-color: #e9ecef;
                    color: #6c757d;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 10px;
                    font-size: 1.25rem;
                    z-index: 2;
                }
                
                .step-name {
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: #6c757d;
                    text-align: center;
                }
                
                .stepper-item.completed .step-name {
                    color: #198754;
                    font-weight: 600;
                }
                
                .stepper-item.active .step-name {
                    color: #0d6efd;
                    font-weight: 600;
                }
                
                .step-connector {
                    position: absolute;
                    top: 25px;
                    left: calc(50% + 25px);
                    right: calc(-50% + 25px);
                    height: 2px;
                    background-color: #e9ecef;
                    z-index: 1;
                }
                
                .connector-line {
                    height: 100%;
                    background-color: #e9ecef;
                    transition: width 0.3s ease;
                }
                
                .connector-line.completed {
                    background-color: #198754;
                }
                
                @media (max-width: 768px) {
                    .stepper-wrapper {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    
                    .stepper-item {
                        flex-direction: row;
                        margin-bottom: 20px;
                        width: 100%;
                    }
                    
                    .step-counter {
                        margin-right: 15px;
                        margin-bottom: 0;
                    }
                    
                    .step-name {
                        text-align: left;
                        margin-top: 5px;
                    }
                    
                    .step-connector {
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
};

export default OrderDetails;