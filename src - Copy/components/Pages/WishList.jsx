import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner, Toast, Button, Badge, Card, Row, Col } from "react-bootstrap";
import { FaHeart, FaShoppingCart, FaRupeeSign, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [processingId, setProcessingId] = useState(null);
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

    const handleCartAndRemove = async (productId) => {
        setProcessingId(productId);
        try {
            // First add to cart
            await axios.post(
                `${API_URL}api/user/addToCart`,
                { productId, quantity: 1 },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            // Then remove from wishlist
            await axios.delete(`${API_URL}api/user/removeProductFromWishlist`, {
                headers: { Authorization: `Bearer ${token}` },
                data: { productId },
            });

            setWishlist(prev => prev.filter(item => item._id !== productId));
            showSuccessToast("Item moved to cart");
        } catch (err) {
            console.error("Error:", err);
            showErrorToast(err.response?.data?.message || "Failed to process");
        } finally {
            setProcessingId(null);
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

            {/* Header */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="d-flex justify-content-between align-items-center mb-4"
            >
                <h2 className="mb-0" style={{ color: '#05576e' }}>
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
                <Row xs={1} md={2} lg={3} xl={5} className="g-3">
                    <AnimatePresence>
                        {wishlist.map((item) => (
                            <Col key={item._id} className="d-flex">
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="w-100" 
                                >
                                    <Card className="h-100 d-flex flex-column" style={{
                                        borderRadius: "8px", // Rounded corners for entire card
                                        overflow: "hidden", // Ensures child elements respect the border radius
                                        boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)" // Replaces shadow-sm with custom shadow
                                    }}>
                                        <div
                                            onClick={() => navigate(`/product/${item._id}`)}
                                            style={{ cursor: "pointer" }}
                                            className="flex-grow-1"
                                        >
                                            <Card.Img
                                                variant="top"
                                                src={`${API_URL}${item.productImages[0]}`}
                                                style={{
                                                    height: "200px",
                                                    objectFit: "cover",
                                                    width: "100%",
                                                    borderTopLeftRadius: "8px",
                                                    borderTopRightRadius: "8px"
                                                }}
                                            />
                                            <Card.Body>
                                                <Card.Title className="text-truncate">{item.productName}</Card.Title>
                                                <div className="d-flex align-items-center">
                                                    <FaRupeeSign size={14} />
                                                    <span className="h5 mb-0 ms-1">
                                                        {item.price.toLocaleString()}
                                                    </span>
                                                    {true && (
                                                        <del className="small text-muted ms-2">
                                                            <FaRupeeSign size={10} />
                                                            1000
                                                        </del>
                                                    )}
                                                </div>
                                            </Card.Body>
                                        </div>
                                        <Card.Footer className="bg-white p-0 w-100" style={{
                                            borderBottomLeftRadius: "8px",
                                            borderBottomRightRadius: "8px"
                                        }}>
                                            <Button
                                                variant="primary"
                                                className="w-100 d-flex justify-content-center align-items-center"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleCartAndRemove(item._id);
                                                }}
                                                disabled={processingId === item._id}
                                                style={{
                                                    padding: "0.75rem",
                                                    borderRadius: "0 0 8px 8px", // Rounded bottom corners
                                                    border: "none",
                                                    gap: "0.5rem"
                                                }}
                                            >
                                                {processingId === item._id ? (
                                                    <span>Processing...</span>
                                                ) : (
                                                    <>
                                                        <FaShoppingCart />
                                                        <span>Move to Cart</span>
                                                    </>
                                                )}
                                            </Button>
                                        </Card.Footer>
                                    </Card>
                                </motion.div>
                            </Col>
                        ))}
                    </AnimatePresence>
                </Row>
            )}
        </div>
    );
};

export default Wishlist;