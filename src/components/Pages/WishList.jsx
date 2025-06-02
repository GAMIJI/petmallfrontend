import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner, Toast, Button, Badge } from "react-bootstrap";
import { FaTrash, FaHeart, FaShoppingCart, FaRupeeSign, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [removingId, setRemovingId] = useState(null);
    const API_URL = import.meta.env.VITE_API_URLS;
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const { data } = await axios.get(`${API_URL}api/user/getWishlist`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setWishlist(data.products || []);
            } catch (err) {
                setError("Failed to load wishlist.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
    
        fetchWishlist();
    }, []);

    const handleRemoveFromWishlist = async (productId) => {
        setRemovingId(productId);
        try {
            await axios.delete(`${API_URL}api/user/removeProductFromWishlist`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: { productId },
            });

            setTimeout(() => {
                setWishlist(prev => prev.filter(item => item._id !== productId));
                showSuccessToast("Item removed from wishlist");
                setRemovingId(null);
            }, 300);
        } catch (err) {
            console.error("Error removing from wishlist:", err);
            showErrorToast("Failed to remove item");
            setRemovingId(null);
        }
    };

    const handleAddToCart = async (productId) => {
        try {
            // Replace with your actual add to cart API call
            await axios.post(`${API_URL}api/user/addToCart`, 
                { productId, quantity: 1 },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            showSuccessToast("Item added to cart");
        } catch (err) {
            console.error("Error adding to cart:", err);
            showErrorToast("Failed to add to cart");
        }
    };

    const showSuccessToast = (message) => {
        setToastMessage(message);
        setShowToast(true);
    };

    const showErrorToast = (message) => {
        setToastMessage(message);
        setShowToast(true);
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

    if (error) {
        return (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="container mt-5"
            >
                <div className="alert alert-danger text-center">{error}</div>
            </motion.div>
        );
    }

    return (
        <div className="container my-4">
            {/* Toast Notification */}
            <Toast 
                onClose={() => setShowToast(false)} 
                show={showToast} 
                delay={3000} 
                autohide
                className="position-fixed top-20 end-20 z-index-9999"
            >
                <Toast.Header className="bg-primary text-white">
                    <strong className="me-auto">Notification</strong>
                </Toast.Header>
                <Toast.Body>{toastMessage}</Toast.Body>
            </Toast>

            {/* Header */}
            <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="d-flex justify-content-between align-items-center mb-4"
            >
                <h2 className="mb-0">
                    <FaHeart className="text-danger me-2" />
                    My Wishlist <Badge bg="secondary" pill>{wishlist.length}</Badge>
                </h2>
            
            </motion.div>

            {wishlist.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-5 bg-light rounded-3"
                >
                    <FaHeart size={48} className="text-muted mb-3" />
                    <h4 className="mb-3">Your Wishlist is Empty</h4>
                    <p className="text-muted mb-4">You haven't added any items to your wishlist yet.</p>
                    <Link to="/productList" className="btn btn-primary">
                        Continue Shopping
                    </Link>
                </motion.div>
            ) : (
                <div className="list-group">
                    <AnimatePresence>
                        {wishlist.map((item) => (
                            <motion.div
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
                                    x: 20,
                                    transition: { duration: 0.3 }
                                }}
                                transition={{ duration: 0.3 }}
                                className={`list-group-item list-group-item-action ${removingId === item._id ? "removing-item" : ""}`}
                                onClick={() => navigate(`/product/${item._id}`)}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="d-flex align-items-center">
                                    <div className="position-relative me-3" style={{ width: "80px", height: "80px" }}>
                                        <img
                                            src={`${API_URL}${item.productImages[0]}`}
                                            alt={item.productName}
                                            className="img-fluid rounded"
                                            style={{ 
                                                width: "100%", 
                                                height: "100%", 
                                                objectFit: "cover",
                                                transition: "transform 0.3s ease"
                                            }}
                                        />
                                        {item.discount && (
                                            <Badge 
                                                bg="danger" 
                                                className="position-absolute top-0 start-0 translate-middle-y"
                                            >
                                                {item.discount}% OFF
                                            </Badge>
                                        )}
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className="mb-1">{item.productName}</h6>
                                        <div className="d-flex align-items-center">
                                            <h5 className="mb-0 text-dark me-2">
                                                <FaRupeeSign size={14} className="align-text-top" />
                                                {item.price.toLocaleString()}
                                            </h5>
                                            {item.originalPrice && (
                                                <del className="small text-muted">
                                                    <FaRupeeSign size={10} className="align-text-top" />
                                                    {item.originalPrice.toLocaleString()}
                                                </del>
                                            )}
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center ms-3">
                                        <Button 
                                            variant="outline-success" 
                                            size="sm" 
                                            className="me-2"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleAddToCart(item._id);
                                            }}
                                        >
                                            <FaShoppingCart />
                                        </Button>
                                        <Button 
                                            variant="outline-danger" 
                                            size="sm"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleRemoveFromWishlist(item._id);
                                            }}
                                        >
                                            <FaTrash />
                                        </Button>
                                        <FaChevronRight className="ms-3 text-muted" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
};

export default Wishlist;