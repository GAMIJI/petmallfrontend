import React, { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const SideBar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will be logged out!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, logout!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                // Clear all tokens and role flags
                localStorage.removeItem("token");
                localStorage.removeItem("role");
                localStorage.removeItem("isVendorLoggedIn");
                localStorage.removeItem("isDoctorLoggedIn");
                localStorage.removeItem("isUserLoggedIn");

                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Logout successful!",
                }).then(() => {
                    window.location.href = "/";
                });
            }
        });
    };

    const isActive = (path) => {
        return location.pathname === path ? {
            backgroundColor: "#f8f9fa",
            color: "#0d6efd",
            borderLeft: "3px solid #0d6efd",
            fontWeight: "600"
        } : {};
    };
    return (

        <div className="col-xl-3 col-lg-4 col-sm-5">
            <div style={{
                width: "100%",
                padding: "20px",
                backgroundColor: "#f8f8f8",
                border: "1px solid #eae6e6",
                borderRadius: "12px",
                boxShadow: "0 0 15px rgba(0,0,0,0.05)",
                borderRadius: "8px",
                height: "fit-content",
                position: "sticky",
                top: "20px"
            }}>
                <aside style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        marginBottom: "25px",
                        paddingBottom: "20px",
                        borderBottom: "1px solid #eee"
                    }}>
                        <img
                            src="https://us.123rf.com/450wm/virtosmedia/virtosmedia2301/virtosmedia230116752/197246325-programmer-programmer-developer-vector-illustration-in-flat-style.jpg"
                            style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "50%",
                                objectFit: "cover",
                                border: "3px solid #e0e0e0",
                                marginBottom: "15px"
                            }}
                            alt="profile"
                        />
                        <p style={{ color: "#6c757d", margin: "0" }}>Hello,</p>
                        <p style={{ fontWeight: "600", fontSize: "1.1rem", margin: "5px 0 0" }}>Test</p>
                    </div>

                    <h5 style={{
                        fontSize: "0.9rem",
                        textTransform: "uppercase",
                        color: "#6c757d",
                        letterSpacing: "1px",
                        marginBottom: "15px"
                    }}>ACCOUNT SETTINGS</h5>

                    <ul style={{
                        listStyle: "none",
                        padding: "0",
                        margin: "0 0 20px 0"
                    }}>
                        <li style={{ marginBottom: "5px" }}>
                            <Link
                                to="/vendorprofile"
                                style={{
                                    display: "block",
                                    padding: "10px 15px",
                                    borderRadius: "5px",
                                    textDecoration: "none",
                                    color: "#212529",
                                    transition: "all 0.3s ease",
                                    ...isActive("/vendorprofile")
                                }}
                            >
                                Profile Information
                            </Link>
                        </li>
                        <li style={{ marginBottom: "5px" }}>
                            <Link
                                to="/mystore"
                                style={{
                                    display: "block",
                                    padding: "10px 15px",
                                    borderRadius: "5px",
                                    textDecoration: "none",
                                    color: "#212529",
                                    transition: "all 0.3s ease",
                                    ...isActive("/mystore")
                                }}
                            >
                                My Store
                            </Link>
                        </li>
                        <li style={{ marginBottom: "5px" }}>
                            <Link
                                to="/myProducts"
                                style={{
                                    display: "block",
                                    padding: "10px 15px",
                                    borderRadius: "5px",
                                    textDecoration: "none",
                                    color: "#212529",
                                    transition: "all 0.3s ease",
                                    ...isActive("/myProducts")
                                }}
                            >
                                My Products
                            </Link>
                        </li>
                        <li style={{ marginBottom: "5px" }}>
                            <Link
                                to="/neworders"
                                style={{
                                    display: "block",
                                    padding: "10px 15px",
                                    borderRadius: "5px",
                                    textDecoration: "none",
                                    color: "#212529",
                                    transition: "all 0.3s ease",
                                    ...isActive("/neworders")
                                }}
                            >
                                New Orders
                            </Link>
                        </li>
                        <li style={{ marginBottom: "5px" }}>
                            <Link
                                to="/completedorders"
                                style={{
                                    display: "block",
                                    padding: "10px 15px",
                                    borderRadius: "5px",
                                    textDecoration: "none",
                                    color: "#212529",
                                    transition: "all 0.3s ease",
                                    ...isActive("/completedorders")
                                }}
                            >
                                Completed Orders
                            </Link>
                        </li>
                        <li style={{ marginBottom: "5px" }}>
                            <Link
                                to="/cancelorders"
                                style={{
                                    display: "block",
                                    padding: "10px 15px",
                                    borderRadius: "5px",
                                    textDecoration: "none",
                                    color: "#212529",
                                    transition: "all 0.3s ease",
                                    ...isActive("/cancelorders")
                                }}
                            >
                                Cancel Orders
                            </Link>
                        </li>
                        <li style={{ marginBottom: "5px" }}>
                            <Link
                                to="/aboutus"
                                style={{
                                    display: "block",
                                    padding: "10px 15px",
                                    borderRadius: "5px",
                                    textDecoration: "none",
                                    color: "#212529",
                                    transition: "all 0.3s ease",
                                    ...isActive("/aboutus")
                                }}
                            >
                                About Us
                            </Link>
                        </li>
                        <li style={{ marginBottom: "5px" }}>
                            <Link
                                to="/review"
                                style={{
                                    display: "block",
                                    padding: "10px 15px",
                                    borderRadius: "5px",
                                    textDecoration: "none",
                                    color: "#212529",
                                    transition: "all 0.3s ease",
                                    ...isActive("/review")
                                }}
                            >
                                Review and Ratings
                            </Link>
                        </li>
                        <li style={{ marginBottom: "5px" }}>
                            <Link
                                to="/terms"
                                style={{
                                    display: "block",
                                    padding: "10px 15px",
                                    borderRadius: "5px",
                                    textDecoration: "none",
                                    color: "#212529",
                                    transition: "all 0.3s ease",
                                    ...isActive("/terms")
                                }}
                            >
                                Terms & Condition
                            </Link>
                        </li>
                        <li style={{ marginBottom: "5px" }}>
                            <Link
                                to="/privacy"
                                style={{
                                    display: "block",
                                    padding: "10px 15px",
                                    borderRadius: "5px",
                                    textDecoration: "none",
                                    color: "#212529",
                                    transition: "all 0.3s ease",
                                    ...isActive("/privacy")
                                }}
                            >
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>

                    <button
                        onClick={handleLogout}
                        style={{
                            width: "100%",
                            padding: "10px",
                            backgroundColor: "#dc3545",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontWeight: "500",
                            transition: "all 0.3s ease",
                            marginTop: "10px",
                            ":hover": {
                                backgroundColor: "#bb2d3b"
                            }
                        }}
                    >
                        Logout
                    </button>
                </aside>
            </div>

        </div>

    )
}

export default SideBar