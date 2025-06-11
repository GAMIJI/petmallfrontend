import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactSlider from 'react-slider';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Preloader from "../Preloader";
import { useLocation } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";



const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const [totalPages, setTotalPages] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [debouncedPriceRange, setDebouncedPriceRange] = useState(priceRange);
  const API_URL = import.meta.env.VITE_API_URLS;
  const [cartItems, setCartItems] = useState([]);
  const token = localStorage.getItem("token");
  const location = useLocation();
  const [wishlist, setWishlist] = useState([]);
  const [wishlistLoading, setWishlistLoading] = useState(true);



  // Fetch cart items for show in the button

  const fetchCartItems = async () => {
    try {
      // setLoading(true);
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
    } catch (err) {
      console.error("Failed to fetch cart items", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
    fetchWishlist();
  }, []);

  const isInCart = (productId) => {
    return cartItems.some(item => item.productId._id === productId);
  };

  // fetch wishlist product 
  const fetchWishlist = async () => {
    try {
      const { data } = await axios.get(`${API_URL}api/user/getWishlist`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setWishlist(data.products || []);
    } catch (err) {
      console.error("Failed to load wishlist.", err);
    } finally {
      setWishlistLoading(false);
    }
  };


  const isInWishlist = (productId) => wishlist.some(item => item._id === productId);


  // search from header logic
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get("search") || "";
    const category = params.get("category");

    setSearchTerm(search);
    setCurrentPage(1);

    if (category) {
      setSelectedCategories([category]);
    } else {
      setSelectedCategories([]);
    }
  }, [location.search]);


  // Function to handle adding product to wishlist
  const handleAddToWishlist = async (product) => {

    const token = localStorage.getItem("token");
    if (!token) {
      AlertMsg("Please log in to use the wishlist.", "warning", "Login Required");
      return;
    }
    console.log("Adding product to wishlist:", product._id);
    try {

      await axios.post(`${API_URL}api/user/addProductWishlist`, { productId: product._id }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      AlertMsg("Product added to Wishlist!", "success", "Wishlist");
      fetchWishlist();
    } catch (err) {
      AlertMsg("Could not add to Wishlist", "error", "Error");
    }
  };

  // Debounce priceRange updates (300ms)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedPriceRange(priceRange);
    }, 300);
    return () => clearTimeout(handler);
  }, [priceRange]);

  // Function to handle adding product to cart
  const handleAddToCart = async (product) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please log in to add items to your cart.");
        return;
      }

      const payload = {
        productId: product._id,
        quantity: 1,
      };

      const response = await axios.post(`${API_URL}api/user/addToCart`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      AlertMsg("Product Added to Cart successfully!", "success", "Product Added");
      fetchCartItems();
    } catch (error) {
      console.error("Add to cart failed:", error);
      AlertMsg("Failed to Add Product", "error", "Product Added");
    }
  };

  // Function to show alert messages
  const AlertMsg = (msg, type, title) => {
    Swal.fire({ icon: type, title: title, text: msg });
  };

  // Fetch categories once
  useEffect(() => {
    const fetchCategories = async () => {
      setCategoriesLoading(true);
      try {
        const res = await axios.get(`${API_URL}api/user/getCategories`);
        setCategories(res.data.categories || res.data || []);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      } finally {
        setCategoriesLoading(false);
      }
    };
    fetchCategories();
  }, [API_URL]);

  // Fetch products
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);

    try {
      let queryParams = new URLSearchParams();
      queryParams.append("page", currentPage);
      queryParams.append("limit", productsPerPage);

      if (selectedCategories.length > 0) {
        queryParams.append("category", selectedCategories.join(","));
      }

      queryParams.append("minPrice", debouncedPriceRange[0]);
      queryParams.append("maxPrice", debouncedPriceRange[1]);

      if (searchTerm) {
        queryParams.append("search", searchTerm);
      }
      console.log("Query string sent to API:", queryParams.toString());

      const res = await axios.get(
        `${API_URL}api/user/getAllProducts?${queryParams.toString()}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setProducts(res.data.products || []);
      setTotalPages(res.data.totalPages || 1);
    } catch (err) {
      console.error("Failed to fetch products:", err);
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch products when dependencies change
  useEffect(() => {
    fetchProducts();
  }, [currentPage, selectedCategories, debouncedPriceRange]);

  // Function to handle search
  const handleSearch = () => {
    setCurrentPage(1);
    fetchProducts();
  };

  const handleCategoryChange = (categoryName) => {
    setCurrentPage(1);
    setSelectedCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(cat => cat !== categoryName)
        : [...prev, categoryName]
    );
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber !== currentPage && pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  if (categoriesLoading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading categories...</span>
        </div>
        <Preloader />
      </div>
    );
  }

  if (loading || wishlistLoading || categoriesLoading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading products...</span>
        </div>
        <Preloader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center my-5">
        {error}
        <button onClick={fetchProducts} className="btn btn-sm btn-outline-danger ms-3">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <main>
        <section className="animal__area-three">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-8 order-0 order-lg-2">
                <div className="container custom-container-two">
                  <div className="product__item-wrap-two">
                    <div className="row gutter-20 row-cols-1 row-cols-xl-3 row-cols-md-3 row-cols-sm-2 justify-content-center">
                      {products.length === 0 ? (
                        <div className="text-center py-5">
                          <img
                            src="assets/img/icon/lost-items-missing-svgrepo-com.svg"
                            alt="No products"
                            style={{ width: "200px", opacity: 0.7 }}
                          />
                          <h5 className="mt-3">No products found</h5>
                          <button
                            onClick={fetchProducts}
                            className="btn btn-outline-primary mt-2"
                          >
                            Refresh
                          </button>
                        </div>
                      ) : (
                        products.map((product) => (
                          <div className="col mb-4" key={product._id}>
                            <div className="card h-100 product-card product__item">
                              <div className="product__thumb">
                                <Link to={`/product/${product._id}`} className="card-img-top">
                                  <img
                                    src={
                                      product.productImages
                                        ? `${API_URL}${product.productImages[0]}`
                                        : "/placeholder-product.png"
                                    }
                                    className="object-fit-cover"
                                    alt={product.productName}
                                    style={{ height: "200px", width: "100%", objectFit: "cover", borderRadius: '15px 15px 0px 0px' }}
                                  />
                                </Link>
                                <div className="product__action">
                                  <a href="#" onClick={() => handleAddToWishlist(product)}>
                                    {isInWishlist(product._id) ? (
                                      <FaHeart style={{ color: "red", fontSize: "20px" }} />
                                    ) : (
                                      <FaRegHeart style={{ color: "#303030", fontSize: "20px" }} />
                                    )}
                                  </a>
                                  <a href="#">
                                    <i className="flaticon-loupe" />
                                  </a>
                                  <a href="#">
                                    <i className="flaticon-exchange" />
                                  </a>
                                </div>
                                {product.onSale && (
                                  <div className="sale-wrap sale-wrap-two">
                                    <span>Sale!</span>
                                  </div>
                                )}
                                <div className="product__add-cart">
                                  <button
                                    onClick={() => handleAddToCart(product)}
                                    className="btn"
                                  // disabled={isInCart(product._id)} 
                                  >
                                    <i className="flaticon-shopping-bag" />
                                    {isInCart(product._id) ? "Added" : "Add To Cart"}
                                  </button>
                                </div>
                              </div>
                              <div className="card-body product__content">
                                <div className="product__reviews">
                                  <div className="rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                  </div>
                                  <span>(2 Reviews)</span>
                                </div>
                                <h4 className="title">
                                  <Link to={`/product/${product._id}`}>
                                    {product.productName}
                                  </Link>
                                </h4>
                                <h3 className="price">
                                  ₹{product.price.toFixed(2)}
                                  {product.originalPrice && (
                                    <del> ₹{product.originalPrice.toFixed(2)}</del>
                                  )}
                                </h3>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                {/* Pagination */}
                {products.length > 0 && (
                  <nav style={{ marginTop: "50px" }} aria-label="Product pagination">
                    <ul style={{
                      listStyle: "none",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                      padding: 0,
                      margin: 0,
                      flexWrap: "wrap"
                    }}>
                      {/* Previous arrow */}
                      <li>
                        <button
                          aria-label="Previous page"
                          disabled={currentPage === 1}
                          onClick={handlePrevPage}
                          style={{
                            padding: "8px",
                            border: "1px solid #e0e0e0",
                            borderRadius: "6px",
                            background: currentPage === 1 ? "#f5f5f5" : "white",
                            color: currentPage === 1 ? "#999" : "#333",
                            cursor: currentPage === 1 ? "not-allowed" : "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "48px",
                            height: "48px",
                            transition: "all 0.2s ease"
                          }}
                          onMouseOver={e => currentPage !== 1 && (e.currentTarget.style.background = "#f0f0f0")}
                          onMouseOut={e => currentPage !== 1 && (e.currentTarget.style.background = "white")}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                      </li>

                      {/* Page numbers */}
                      {Array.from({ length: totalPages }, (_, index) => (
                        <li key={index}>
                          <button
                            aria-current={currentPage === index + 1 ? "page" : undefined}
                            onClick={() => handlePageChange(index + 1)}
                            style={{
                              padding: "8px 12px",
                              border: currentPage === index + 1 ? "1px solid #05576e" : "1px solid #e0e0e0",
                              borderRadius: "6px",
                              background: currentPage === index + 1 ? "#05576e" : "white",
                              color: currentPage === index + 1 ? "white" : "#333",
                              cursor: "pointer",
                              transition: "all 0.2s ease",
                              minWidth: "48px",
                              height: "48px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center"
                            }}
                            onMouseOver={e => currentPage !== index + 1 && (e.currentTarget.style.background = "#05576e")}
                            onMouseOut={e => currentPage !== index + 1 && (e.currentTarget.style.background = "white")}
                          >
                            {index + 1}
                          </button>
                        </li>
                      ))}

                      {/* Next arrow */}
                      <li>
                        <button
                          aria-label="Next page"
                          disabled={currentPage === totalPages}
                          onClick={handleNextPage}
                          style={{
                            padding: "8px",
                            border: "1px solid #e0e0e0",
                            borderRadius: "6px",
                            background: currentPage === totalPages ? "#f5f5f5" : "white",
                            color: currentPage === totalPages ? "#999" : "#333",
                            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "48px",
                            height: "48px",
                            transition: "all 0.2s ease"
                          }}
                          onMouseOver={e => currentPage !== totalPages && (e.currentTarget.style.background = "#f0f0f0")}
                          onMouseOut={e => currentPage !== totalPages && (e.currentTarget.style.background = "white")}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </nav>
                )}

              </div>

              {/* Sidebar with categories and price filter */}
              <div className="col-xl-3 col-lg-4">


                <aside className="animal__sidebar">
                  {/* Filters Title */}
                  <div>
                    <div >
                      <h4 className="animal__widget-title">Filter Product</h4>
                    </div>

                    <div style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <input
                        type="text"
                        style={{
                          color: "black",
                          width: '100%',
                          padding: '12px 16px',
                          paddingRight: '42px',
                          border: '1px solid #e0e0e0',
                          borderRadius: '8px',
                          fontSize: '14px',
                          transition: 'border-color 0.2s'
                        }}
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleSearch();
                          }
                        }}
                        onFocus={(e) => {
                          e.target.style.outline = 'none';
                          e.target.style.borderColor = '#4a90e2';
                          e.target.style.boxShadow = '0 0 0 2px rgba(74, 144, 226, 0.2)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#e0e0e0';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                      <button
                        style={{
                          position: 'absolute',
                          right: '8px',
                          background: 'none',
                          border: 'none',
                          padding: '8px',
                          cursor: 'pointer',
                          color: '#666'
                        }}
                        type="button"
                        onClick={handleSearch}
                        aria-label="Search"
                        onMouseOver={(e) => e.currentTarget.style.color = '#333'}
                        onMouseOut={(e) => e.currentTarget.style.color = '#666'}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          style={{ display: 'block' }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="animal__widget mt-3">
                    <h4 className="animal__widget-title">Price Range</h4>


                    <div style={{ padding: '0 16px', margin: '24px 0' }}>

                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '20px',
                        fontSize: '14px'
                      }}>
                        <span style={{ color: '#555' }}>Price Range</span>
                        <span style={{
                          fontWeight: '600',
                          color: '#2c3e50',
                          background: '#f8f9fa',
                          padding: '4px 8px',
                          borderRadius: '4px'
                        }}>
                          ₹{debouncedPriceRange[0]} - ₹{debouncedPriceRange[1]}
                        </span>
                      </div>


                      <div style={{ position: 'relative', padding: '12px 0' }}>
                        <ReactSlider
                          min={0}
                          max={2000}
                          step={10}
                          value={priceRange}
                          onChange={(range) => {
                            setPriceRange(range);
                            setCurrentPage(1);
                          }}
                          pearling
                          minDistance={10}
                          renderTrack={(props, state) => (
                            <div
                              {...props}
                              style={{
                                ...props.style,
                                height: '4px',
                                background: state.index === 1 ? '#4a90e2' : '#e0e0e0',
                                borderRadius: '4px',
                                top: '50%',
                                transform: 'translateY(-50%)'
                              }}
                            />
                          )}
                          renderThumb={(props) => (
                            <div
                              {...props}
                              style={{
                                ...props.style,
                                height: '20px',
                                width: '20px',
                                backgroundColor: '#fff',
                                border: '2px solid #4a90e2',
                                borderRadius: '50%',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                cursor: 'grab',
                                outline: 'none'
                              }}
                            />
                          )}
                        />
                      </div>
                    </div>


                  </div>

                  {/* Pet Categories */}
                  <div className="animal__widget">
                    <h4 className="animal__widget-title">Pet Categories</h4>
                    <div className="courses-cat-list">
                      <ul className="list-wrap">
                        {categories.length > 0 ? (
                          categories.map((category, index) => (
                            <li key={index}>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id={`cat_${index}`}
                                  onChange={() => handleCategoryChange(category.name)}
                                  checked={selectedCategories.includes(category.name)}
                                />
                                <label className="form-check-label" htmlFor={`cat_${index}`}>
                                  {category.name}
                                </label>
                              </div>
                            </li>
                          ))
                        ) : (
                          <li className="text-muted">No categories found</li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Clear Filters Button */}
                  <div className="animal__widget text-center mt-3">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => {
                        setPriceRange([0, 2000]);
                        setSelectedCategories([]);
                        setSearchTerm("");
                        setCurrentPage(1);
                      }}
                    >
                      Clear Filters
                    </button>
                  </div>
                </aside>


              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductList;