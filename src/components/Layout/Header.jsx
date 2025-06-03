import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");
    setToken(storedToken);
    setRole(storedRole);
  }, []);

  const getProfileLink = () => {
    if (role === "doctor") return "/docProfile";
    if (role === "user") return "/profile";
    if (role === "vendor") return "/vendorProfile";
    return "/profile";
  };

  // Toggle submenu
  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  // Close mobile menu when screen is resized to large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const mobileMenu = document.querySelector(".tgmobile__menu");
      const toggler = document.querySelector(".mobile-nav-toggler");

      if (mobileMenuOpen &&
        !mobileMenu?.contains(event.target) &&
        !toggler?.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <div>
      {/* Scroll-top */}
      <button className="scroll__top scroll-to-target" data-target="html">
        <i className="fas fa-angle-up" />
      </button>
      {/* Scroll-top-end*/}
      {/* header-area */}
      <header>
        <div id="header-fixed-height" />
        <div className="tg-header__top">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-8">
                <ul className="tg-header__top-info left-side list-wrap">
                  <li>
                    <i className="flaticon-placeholder" />
                    59 Jakc Street Brooklyn, New York
                  </li>
                  <li>
                    <i className="flaticon-mail" />
                    <a href="mailto:Petspostinfo@gmail.com">
                      Petspostinfo@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-6 col-lg-4">
                <ul className="tg-header__top-right list-wrap">
                  <li>
                    <i className="flaticon-phone" />
                    Need help? Call Us: <a href="tel:0123456789">+ 1800 2900</a>
                  </li>
                  <li className="tg-header__top-social">
                    <ul className="list-wrap">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.whatsapp.com/" target="_blank">
                          <i className="fab fa-whatsapp" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/" target="_blank">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          id="sticky-header"
          className="tg-header__area tg-header__area-four"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tgmenu__wrap">
                  <nav className="tgmenu__nav">
                    <div className="col-xl-3 col-lg-3">
                      <div className="logo">
                        <Link to="/">
                          <img src="assets/img/logo/logo.png" alt="Logo" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                      <div className="tgmenu__search">
                        <form action="#" className="tgmenu__search-form">
                          <input type="text" placeholder="Search Here . . ." />
                          <div className="select-grp">
                            <select
                              className="form-select"
                              id="course-cat"
                              aria-label="Default select example"
                              style={{ width: 130 }}
                            >
                              <option selected="" disabled="">
                                All Categories
                              </option>
                              <option value={1}>Dogs</option>
                              <option value={2}>Cats</option>
                              <option value={3}>Rabbit</option>
                              <option value={4}>Birds</option>
                              <option value={5}>Fish</option>
                              <option value={6}>Others</option>
                            </select>
                          </div>
                          <button style={{ margin: "4px" }} type="submit">
                            <i className="flaticon-loupe" />
                          </button>
                        </form>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 p-3">
                      <div className="tgmenu__action tgmenu__action-three d-none d-lg-block " style={{ fontSize: "14px", width: "90%" }}>
                        <ul className="list-wrap m-0" >
                          <Link style={{ fontSize: "14px", width: "100%", color: "#05576e" }} to="/register">
                            Become a Partner
                          </Link>

                          {token ? (
                            <li className="header-login">
                              <Link to={getProfileLink()}>
                                <i className="flaticon-user" />
                              </Link>
                            </li>
                          ) : (
                            <li className="header-login">
                              <Link style={{ fontSize: "14px" }} to="/login">
                                Login/Register
                              </Link>
                            </li>
                          )}
                          <li className="header-wishlist">
                            <Link to="/wishList">
                              <i className="flaticon-love" />
                            </Link>
                          </li>
                          <li className="header-cart header-cart-two">
                            <Link to="/cart">
                              <i className="flaticon-shopping-bag" />
                              <span>1</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="mobile-nav-toggler"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      >
                        <i className="flaticon-layout" />
                      </div>
                    </div>
                  </nav>
                </div>
                {/* Mobile Menu  */}
                <div className={`tgmobile__menu ${mobileMenuOpen ? 'show' : ''}`}>
                  <nav className="tgmobile__menu-box">
                    <div className="close-btn" onClick={() => setMobileMenuOpen(false)}>
                      <i className="fas fa-times" />
                    </div>
                    <div className="nav-logo">
                      <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                        <img src="assets/img/logo/logo.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="tgmobile__search">
                      <form action="#">
                        <input type="text" placeholder="Search here..." />
                        <button><i className="fas fa-search" /></button>
                      </form>
                    </div>
                    <div className="tgmobile__menu-outer">
                      <ul className="navigation">
                        {/* Shop by category */}
                        <li className={`menu-item-has-children ${activeSubmenu === 0 ? 'active' : ''}`}>
                          <a onClick={() => toggleSubmenu(0)}>Shop by category</a>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/productList" onClick={() => setMobileMenuOpen(false)}>Dog Deals</Link>
                            </li>
                            <li>
                              <Link to="/productList" onClick={() => setMobileMenuOpen(false)}>Cat Deals</Link>
                            </li>
                            <li>
                              <Link to="/productList" onClick={() => setMobileMenuOpen(false)}>Fish Deals</Link>
                            </li>
                            <li>
                              <Link to="/productList" onClick={() => setMobileMenuOpen(false)}>Birds Deals</Link>
                            </li>
                            <li>
                              <Link to="/productList" onClick={() => setMobileMenuOpen(false)}>Rabbit Deals</Link>
                            </li>
                          </ul>
                        </li>

                        {/* Pet care */}
                        <li className={`menu-item-has-children ${activeSubmenu === 1 ? 'active' : ''}`}>
                          <a onClick={() => toggleSubmenu(1)}>Pet care</a>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/animalList" onClick={() => setMobileMenuOpen(false)}>Pet Care & Veterinary</Link>
                            </li>
                            <li>
                              <Link to="/animalList" onClick={() => setMobileMenuOpen(false)}>Pet Breed</Link>
                            </li>
                            <li>
                              <Link to="/animalList" onClick={() => setMobileMenuOpen(false)}>Pet Adopt</Link>
                            </li>
                          </ul>
                        </li>

                        {/* Dog */}
                        <li className={`menu-item-has-children ${activeSubmenu === 2 ? 'active' : ''}`}>
                          <a onClick={() => toggleSubmenu(2)}>Dog</a>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/animalList" onClick={() => setMobileMenuOpen(false)}>Labrador Retriever</Link>
                            </li>
                            <li>
                              <Link to="/animalList" onClick={() => setMobileMenuOpen(false)}>German Shepherd</Link>
                            </li>
                            <li>
                              <Link to="/animalList" onClick={() => setMobileMenuOpen(false)}>Golden Retriever</Link>
                            </li>
                            <li>
                              <Link to="/animalList" onClick={() => setMobileMenuOpen(false)}>Bulldog</Link>
                            </li>
                            <li>
                              <Link to="/animalList" onClick={() => setMobileMenuOpen(false)}>Boxer</Link>
                            </li>
                          </ul>
                        </li>

                        {/* Cat */}
                        <li className={`menu-item-has-children ${activeSubmenu === 3 ? 'active' : ''}`}>
                          <a onClick={() => toggleSubmenu(3)}>Cat</a>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/animalList" onClick={() => setMobileMenuOpen(false)}>Persian</Link>
                            </li>
                            <li>
                              <Link to="/animalList" onClick={() => setMobileMenuOpen(false)}>Maine Coon</Link>
                            </li>
                            <li>
                              <Link to="/animalList" onClick={() => setMobileMenuOpen(false)}>Siamese</Link>
                            </li>
                            <li>
                              <Link to="/animalList" onClick={() => setMobileMenuOpen(false)}>British Shorthair</Link>
                            </li>
                          </ul>
                        </li>

                        {/* Birds */}
                        <li className={`menu-item-has-children ${activeSubmenu === 4 ? 'active' : ''}`}>
                          <a onClick={() => toggleSubmenu(4)}>Birds</a>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/animalList" onClick={() => setMobileMenuOpen(false)}>Parakeet (Budgerigar)</Link>
                            </li>
                            <li>
                              <Link to="/animalList" onClick={() => setMobileMenuOpen(false)}>Cockatiel</Link>
                            </li>
                            <li>
                              <Link to="/animalList" onClick={() => setMobileMenuOpen(false)}>African Grey Parrot</Link>
                            </li>
                            <li>
                              <Link to="/animalList" onClick={() => setMobileMenuOpen(false)}>Macaw</Link>
                            </li>
                          </ul>
                        </li>

                        {/* Simple links */}
                        <li>
                          <Link to="/animalList" onClick={() => setMobileMenuOpen(false)}>Pet Adopt</Link>
                        </li>
                        <li>
                          <Link to="/doctorList" onClick={() => setMobileMenuOpen(false)}>Doctors</Link>
                        </li>

                        {/* Fish & Aquarium */}
                        <li className={`menu-item-has-children ${activeSubmenu === 5 ? 'active' : ''}`}>
                          <a onClick={() => toggleSubmenu(5)}>Fish & Aquarium</a>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/productList" onClick={() => setMobileMenuOpen(false)}>Our Products</Link>
                            </li>
                            <li>
                              <Link to="/storeList" onClick={() => setMobileMenuOpen(false)}>Stores</Link>
                            </li>
                          </ul>
                        </li>

                        {/* Login/Profile */}
                        {token ? (
                          <li>
                            <Link to={getProfileLink()} onClick={() => setMobileMenuOpen(false)}>
                              <i className="flaticon-user" /> My Profile
                            </Link>
                          </li>
                        ) : (
                          <li>
                            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Login/Register</Link>
                          </li>
                        )}
                      </ul>
                    </div>
                    <div className="social-links">
                      <ul className="list-wrap">
                        <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" /></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div
                  className={`tgmobile__menu-backdrop ${mobileMenuOpen ? 'show' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                />
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="divider-area">
        <div className="container">
          <div className="divider-wrap" />
        </div>
      </div>

      <div className="container custom-container">
        <div>
          <div className="row">
            <div className="col-12">
              <div className="tgmenu__wrap">
                <nav className="tgmenu__nav">
                  <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      <li className=" menu-item-has-children">
                       {/* Shop by category */}
                       
                        <li className="menu-item-has-children">
                          <a href="#" >Shop by category</a>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/productList">Dog Deals</Link>
                            </li>
                            <li>
                              <Link to="/productList" >Cat Deals</Link>
                            </li>
                            <li>
                              <Link to="/productList" >Fish Deals</Link>
                            </li>
                            <li>
                              <Link to="/productList" >Birds Deals</Link>
                            </li>
                            <li>
                              <Link to="/productList">Rabbit Deals</Link>
                            </li>
                          </ul>
                        </li>

                        <ul className="sub-menu">
                          <li className="active">
                            <Link to="/productList">Dog Deals</Link>
                          </li>
                          <li>
                            <Link to="/productList">Cat Deals</Link>
                          </li>
                          <li>
                            <Link to="/productList">Fish Deals</Link>
                          </li>
                          <li>
                            <Link to="/productList">Birds Deals</Link>
                          </li>
                          <li>
                            <Link to="/productList">Rabbit Deals</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                         
                        <a  href="#"   style={{ cursor: "pointer" }}>Pet care</a>
                        <ul className="sub-menu">
                          <li className="active">
                            <Link to="/animalList" >
                              Pet Care &amp; Veterinary
                            </Link>
                          </li>
                          <li>
                            <Link to="/animalList">Pet Breed</Link>
                          </li>
                          <li>
                            <Link to="/animalList">Pet Adopt</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#"   style={{ cursor: "pointer" }}>Dog</a>
                        <ul className="sub-menu">
                          <li className="active">
                            <Link to="/animalList">Labrador Retriever</Link>
                          </li>
                          <li>
                            <Link to="/animalList">German Shepherd</Link>
                          </li>
                          <li>
                            <Link to="/animalList">Golden Retriever</Link>
                          </li>
                          <li>
                            <Link to="/animalList">Bulldog</Link>
                          </li>
                          <li>
                            <Link to="/animalList">Boxer</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#"   style={{ cursor: "pointer" }}>Cat</a>
                        <ul className="sub-menu">
                          <li className="active">
                            <Link to="/animalList">Persian</Link>
                          </li>
                          <li>
                            <Link to="/animalList">Maine Coon</Link>
                          </li>
                          <li>
                            <Link to="/animalList">Siamese</Link>
                          </li>
                          <li>
                            <Link to="/animalList">British Shorthair</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#"   style={{ cursor: "pointer" }}>Birds</a>
                        <ul className="sub-menu">
                          <li className="active">
                            <Link to="/animalList">Parakeet (Budgerigar)</Link>
                          </li>
                          <li>
                            <Link to="/animalList">Cockatiel </Link>
                          </li>
                          <li>
                            <Link to="/animalList">African Grey Parrot</Link>
                          </li>
                          <li>
                            <Link to="/animalList">Macaw </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/animalList">Pet Adopt</Link>
                      </li>
                      <li>
                        <Link to="/doctorList">Doctors</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Fish &amp; Aquarium</a>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/productList">Our Products</Link>
                          </li>
                          <li>
                            <Link to="/storeList">Stores</Link>
                          </li>
                        </ul>
                      </li>
                      {/* <li class="menu-item-has-children"><a href="#">Pages</a>
              <ul class="sub-menu">
                <li><a href="animal.html">All Pets</a></li>
                <li><a href="animal-details.html">Pet Details</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="faq.html">Faq Page</a></li>
                <li><a href="pricing.html">Pricing Page</a></li>
                <li><a href="reservation.html">Reservation Page</a></li>
                <li><a href="team.html">Our Team</a></li>
                <li><a href="team-details.html">Team Details</a></li>
                <li><a href="blog.html">Our Blog</a></li>
                <li><a href="blog-details.html">Blog Details</a></li>
                <li><a href="error.html">404 Error Page</a></li>
              </ul>
            </li> */}
                      {/* <li><a href="contact.html">contacts</a></li> */}
                    </ul>
                  </div>
                  <div className="tgmenu__action d-none d-md-block">
                    <ul className="list-wrap">
                      <li className="header-btn">
                        <a href="contact.html" className="btn">
                          <i className="flaticon-calendar-1" />
                          Appointment
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="divider-area">
        <div className="container">
          <div className="divider-wrap" />
        </div>
      </div>
      {/* header-area-end */}
    </div>
  );
};

export default Header;
