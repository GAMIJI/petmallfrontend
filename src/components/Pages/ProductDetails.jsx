import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";



const styles = {
  container: {
    background: 'white',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    // maxWidth: '400px',
    margin: '0 auto',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
    // backgroundColor: '#f8f9fa',
    transition: 'all 0.3s ease',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#2d3748',
  },
  button: {
    background: 'white',
    border: '1px solid #05576e',
    color: '#05576e',
    padding: '8px 20px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  buttonHover: {
    background: '#05576e',
    color: 'white',
  },
  shopInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '20px',
  },
  shopIcon: {
    width: '48px',
    height: '48px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  shopName: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#2d3748',
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
  },
  statItem: {
    textAlign: 'center',
    flex: 1,
  },
  statValue: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    fontSize: '18px',
    fontWeight: 700,
    color: '#2d3748',
    marginBottom: '4px',
  },
  starIcon: {
    color: '#fbbf24',
    fontSize: '16px',
  },
  ratingValue: {
    color: '#3b82f6',
  },
  statLabel: {
    fontSize: '13px',
    color: '#718096',
    fontWeight: 400,
  },
  divider: {
    width: '1px',
    height: '40px',
    background: '#e2e8f0',
    alignSelf: 'center',
  },
};

const ProductDetails = () => {
  return (
    <div>
      <main className="fix">
        {/* breadcrumb-area */}
        <section className="breadcrumb__area fix">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-12">
                <div className="breadcrumb__content">
                  <nav className="breadcrumb">
                    <span property="itemListElement" typeof="ListItem">
                      <a href="index-2.html">Home</a>
                    </span>
                    <span className="breadcrumb-separator">
                      <i className="flaticon-right-arrow-angle" />
                    </span>
                    <span property="itemListElement" typeof="ListItem">
                      All Products
                    </span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* product-details-area */}
        <section className="product__details-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="product__details-images-wrap">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane show active"
                      id="itemOne-tab-pane"
                      role="tabpanel"
                      aria-labelledby="itemOne-tab"
                      tabIndex={0}
                    >
                      <a
                        href="assets/img/products/products_img01.jpg"
                        className="popup-image"
                      >
                        <img
                          src="assets/img/products/products_img01.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div
                      className="tab-pane"
                      id="itemTwo-tab-pane"
                      role="tabpanel"
                      aria-labelledby="itemTwo-tab"
                      tabIndex={0}
                    >
                      <a
                        href="assets/img/products/products_img02.jpg"
                        className="popup-image"
                      >
                        <img
                          src="assets/img/products/products_img02.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div
                      className="tab-pane"
                      id="itemThree-tab-pane"
                      role="tabpanel"
                      aria-labelledby="itemThree-tab"
                      tabIndex={0}
                    >
                      <a
                        href="assets/img/products/products_img03.jpg"
                        className="popup-image"
                      >
                        <img
                          src="assets/img/products/products_img03.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div
                      className="tab-pane"
                      id="itemFour-tab-pane"
                      role="tabpanel"
                      aria-labelledby="itemFour-tab"
                      tabIndex={0}
                    >
                      <a
                        href="assets/img/products/products_img04.jpg"
                        className="popup-image"
                      >
                        <img
                          src="assets/img/products/products_img04.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="itemOne-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#itemOne-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="itemOne-tab-pane"
                        aria-selected="true"
                      >
                        <img
                          src="assets/img/products/products_img01.jpg"
                          alt="img"
                        />
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="itemTwo-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#itemTwo-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="itemTwo-tab-pane"
                        aria-selected="false"
                      >
                        <img
                          src="assets/img/products/products_img02.jpg"
                          alt="img"
                        />
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="itemThree-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#itemThree-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="itemThree-tab-pane"
                        aria-selected="false"
                      >
                        <img
                          src="assets/img/products/products_img03.jpg"
                          alt="img"
                        />
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="itemFour-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#itemFour-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="itemFour-tab-pane"
                        aria-selected="false"
                      >
                        <img
                          src="assets/img/products/products_img04.jpg"
                          alt="img"
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="product__details-content">
                  <div className="product__reviews-wrap">
                    <div className="product__reviews">
                      <span className="tag  mt-10">In stock</span>
                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span>(2 Reviews)</span>
                    </div>
                    <div className="product__code">
                      <span>
                        SKU: <strong>CAT4502</strong>
                      </span>
                    </div>
                    <div className="product__code">
                      <span>
                        Brands: <strong>Ark Naturals</strong>
                      </span>
                    </div>
                  </div>
                  <h3 className="title">
                    Meow Mix Seafood Medley Dry Cat Food, 3.15-Pound
                  </h3>
                  <h4 className="price">$29.00</h4>
                  <div className="product__code">
                    <a href="store-details.html">
                      <span>
                        <b>Furry pet shop </b>
                      </span>
                    </a>
                  </div>
                  {/* <p>Cat Food nullam malesuada aenean congue semper donec velit ultrice search hendrerit enim, conubia sociis adipiscing sed tempor curae elit nibh rutrum ipsum. Consectetur sollicitudin.</p> */}
                  <br />
                  <div className="product__size-wrap">
                    <span className="size-title">Size:</span>
                    <ul className="list-wrap">
                      <li>
                        <button>250mg</button>
                      </li>
                      <li>
                        <button>500mg</button>
                      </li>
                      <li>
                        <button>1kg</button>
                      </li>
                    </ul>
                  </div>
                  <div className="product__details-qty">
                    <div className="cart-plus-minus">
                      <input type="text" defaultValue={1} />
                    </div>
                    <a href="product-details.html" className="add-btn">
                      Add To Cart
                    </a>
                  </div>
                  <a href="product-details.html" className="buy-btn">
                    Buy it Now
                  </a>
                  <div className="product__wishlist-wrap">
                    <a href="product-details.html">
                      <i className="flaticon-love" />
                      Add To Wishlist
                    </a>
                    {/* <a href="product-details.html"><i class="flaticon-exchange"></i>Compare To Other</a> */}
                  </div>
                  <div className="product__details-bottom">
                    <ul className="list-wrap">
                      <li className="product__details-category">
                        <span className="title">Categories:</span>
                        <a href="product-details.html">Cat,</a>
                        <a href="product-details.html">Food,</a>
                        <a href="product-details.html">Care</a>
                      </li>
                      <li className="product__details-tags">
                        <span className="title">Tags:</span>
                        <a href="product-details.html">Food Pet,</a>
                        <a href="product-details.html">Pet Essentials</a>
                      </li>
                      <li className="product__details-social">
                        <span className="title">Share :</span>
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
                            <a
                              href="https://www.instagram.com/"
                              target="_blank"
                            >
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
                  <div className="product__details-checkout">
                    <span className="title">Guaranteed Safe Checkout</span>
                    <img src="assets/img/products/card.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row " >
              <div className="col-12">
                <div className="product-desc-wrap">


                  <ul className="nav nav-tabs" id="myTab2" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="description-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#description-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="description-tab-pane"
                        aria-selected="true"
                      >
                        Description
                      </button>
                    </li>

                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="reviews-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#reviews-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="reviews-tab-pane"
                        aria-selected="false"
                      >
                        Reviews
                      </button>
                    </li>

                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="FAQ-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#FAQ-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="FAQ-tab-pane"
                        aria-selected="false"
                      >
                        FAQ
                      </button>
                    </li>

                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="store-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#store-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="reviews-tab-pane"
                        aria-selected="false"
                      >
                        Sold By
                      </button>
                    </li>
                  </ul>

                  <div className="tab-content" id="myTabContent2">
                    {/* description-tab-pane */}
                    <div
                      className="tab-pane fade show active"
                      id="description-tab-pane"
                      role="tabpanel"
                      aria-labelledby="description-tab"
                      tabIndex={0}
                    >
                      <p>
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Vestibulum tortor
                        quam, feugiat vitae, ultricies eget, tempor sit amet
                        ante. ibero sit amet quam egestas semper. Aenean
                        ultricies mi vitae est. Mauris placerat eleifend leo.ea
                        commodo consat. Duis aute irure dolor in reprehenderit
                        volup tate velitesse cillum dolore euy elit ale ruin
                        irure dolor.uis aute irure dolor in reprehenderit n
                        volup tate velit esse cillum,
                      </p>
                      <p>
                        habitant morbi tristique senectus et netus et malesuada
                        fames ac turpis egestas. Vestibulum tortor quam, feugiat
                        vitae, ultricies eget, tempor sit amet bero sit amet uam
                        egestas semper. Aenean ultricies mi vitae est. Mauris
                        placerat eleifend leo.ea commodo consat.
                      </p>
                    </div>

                    {/* reviews-tab-pane */}
                    <div
                      className="tab-pane fade"
                      id="reviews-tab-pane"
                      role="tabpanel"
                      aria-labelledby="reviews-tab"
                      tabIndex={0}
                    >
                      <div className="product-desc-review">
                        <div className="product-desc-review-title mb-15">
                          <h5 className="title">Customer Reviews (3)</h5>
                        </div>

                        {/* Review Form */}
                        {/* <div className="review-form mb-30">
                          <h6 className="mb-3">Add Your Review</h6>
                          <div className="rating mb-3">
                            <span className="me-2">Your Rating:</span>
                            {[1, 2, 3, 4, 5].map((star) => (
                              <span key={star} className="star">★</span>
                            ))}
                          </div>
                          <div className="mb-3">
                            <textarea
                              className="form-control"
                              rows="4"
                              placeholder="Write your review here..."
                            ></textarea>
                          </div>
                          <button className="btn btn-primary">Submit Review</button>
                        </div> */}

                        {/* Reviews List */}
                        <div className="review-list">
                          <div className="single-review mb-4">
                            <div className="review-header d-flex justify-content-between mb-2">
                              <div className="reviewer-name fw-bold">John Doe</div>
                              <div className="review-date text-muted">2023-10-15</div>
                            </div>
                            <div className="review-rating mb-2">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star} className="star">★</span>
                              ))}
                            </div>
                            <div className="review-content">
                              <p>Great product! Exactly as described and arrived quickly.</p>
                            </div>
                          </div>

                          <div className="single-review mb-4">
                            <div className="review-header d-flex justify-content-between mb-2">
                              <div className="reviewer-name fw-bold">Jane Smith</div>
                              <div className="review-date text-muted">2023-09-28</div>
                            </div>
                            <div className="review-rating mb-2">
                              {[1, 2, 3, 4].map((star) => (
                                <span key={star} className="star">★</span>
                              ))}
                            </div>
                            <div className="review-content">
                              <p>Good quality but shipping took longer than expected.</p>
                            </div>
                          </div>

                          <div className="single-review mb-4">
                            <div className="review-header d-flex justify-content-between mb-2">
                              <div className="reviewer-name fw-bold">Mike Johnson</div>
                              <div className="review-date text-muted">2023-08-10</div>
                            </div>
                            <div className="review-rating mb-2">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star} className="star">★</span>
                              ))}
                            </div>
                            <div className="review-content">
                              <p>Excellent service and product quality. Will buy again!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* FAQ tab */}
                    <div
                      className="tab-pane fade"
                      id="FAQ-tab-pane"
                      role="tabpanel"
                      aria-labelledby="FAQ-tab"
                      tabIndex={0}
                    >
                      <div className="product-desc-review">
                        <div className="product-desc-review-title mb-15">
                          <h5 className="title">Frequently Asked Questions</h5>
                        </div>

                        <div className="accordion" id="faqAccordion">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                What is the return policy?
                              </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                              <div className="accordion-body">
                                You can return this product within 30 days of purchase. The product must be in its original condition with all tags attached.
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                How long does shipping take?
                              </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                              <div className="accordion-body">
                                Standard shipping typically takes 3-5 business days. Express shipping options are available at checkout for faster delivery.
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                Is international shipping available?
                              </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                              <div className="accordion-body">
                                Yes, we ship internationally. Shipping costs and delivery times vary depending on the destination country.
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                How do I track my order?
                              </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                              <div className="accordion-body">
                                Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* store-tab-pane */}
                    <div
                      className="tab-pane fade"
                      id="store-tab-pane"
                      role="tabpanel"
                      aria-labelledby="store-tab"
                      tabIndex={0}
                    >
                      <div className="product-desc-review">
                        <div style={styles.container}>
                          <div style={styles.header}>
                            <h2 style={styles.title}>Sold By</h2>
                            <button
                              style={styles.button}
                              onMouseOver={(e) => {
                                e.target.style.background = styles.buttonHover.background;
                                e.target.style.color = styles.buttonHover.color;
                              }}
                              onMouseOut={(e) => {
                                e.target.style.background = styles.button.background;
                                e.target.style.color = styles.button.color;
                              }}
                            >
                              View Shop
                            </button>
                          </div>

                          <div style={styles.shopInfo}>
                            <div style={styles.shopIcon}>Store</div>
                            <div style={styles.shopName}>Dream_makers</div>
                          </div>

                          <div style={styles.statsContainer}>
                            <div style={styles.statItem}>
                              <div style={styles.statValue}>
                                <span style={styles.ratingValue}>3.9</span>
                                <span style={styles.starIcon}>★</span>
                              </div>
                              <div style={styles.statLabel}>243,933 Ratings</div>
                            </div>

                            <div style={styles.divider}></div>

                            <div style={styles.statItem}>
                              <div style={styles.statValue}>4,017</div>
                              <div style={styles.statLabel}>Followers</div>
                            </div>

                            <div style={styles.divider}></div>

                            <div style={styles.statItem}>
                              <div style={styles.statValue}>128</div>
                              <div style={styles.statLabel}>Products</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>

          </div>
        </section>
        <section className="product__area-two ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <div className="section__title-two mb-20">
                  <h2 className="title">
                    Related  Products
                    <img
                      src="assets/img/images/title_shape.svg"
                      alt=""
                      className="injectable"
                    />
                  </h2>
                </div>
              </div>
              <div className="col-md-4">
                <div className="view-all-btn">
                  <a href="product.html">
                    See All
                    <i className="flaticon-right-arrow-angle" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container custom-container-two">
            <div className="product__item-wrap-two">
              <div className="row gutter-20 row-cols-1 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center">
                <div className="col">
                  <div className="product__item">
                    <div className="product__thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/img/products/products_img06.jpg"
                          alt="img"
                        />
                      </a>
                      <div className="product__action">
                        <a href="product-details.html">
                          <i className="flaticon-love" />
                        </a>
                        <a href="product-details.html">
                          <i className="flaticon-loupe" />
                        </a>
                        <a href="product-details.html">
                          <i className="flaticon-exchange" />
                        </a>
                      </div>
                      <div className="sale-wrap sale-wrap-two">
                        <span>Sale!</span>
                      </div>
                      <div className="product__add-cart">
                        <a href="product-details.html" className="btn">
                          <i className="flaticon-shopping-bag" />
                          Add To Cart
                        </a>
                      </div>
                    </div>
                    <div className="product__content">
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
                        <a href="product-details.html">
                          Dog Puzzle Toys, Squeaky Treat Dispensing Dog
                        </a>
                      </h4>
                      <h3 className="price">
                        {" "}
                        ₹ 18.00 <del> ₹ 33.00</del>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="product__item">
                    <div className="product__thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/img/products/products_img07.jpg"
                          alt="img"
                        />
                      </a>
                      <div className="product__action">
                        <a href="product-details.html">
                          <i className="flaticon-love" />
                        </a>
                        <a href="product-details.html">
                          <i className="flaticon-loupe" />
                        </a>
                        <a href="product-details.html">
                          <i className="flaticon-exchange" />
                        </a>
                      </div>
                      <div className="sale-wrap sale-wrap-two">
                        <span>Sale!</span>
                      </div>
                      <div className="product__add-cart">
                        <a href="product-details.html" className="btn">
                          <i className="flaticon-shopping-bag" />
                          Add To Cart
                        </a>
                      </div>
                    </div>
                    <div className="product__content">
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
                        <a href="product-details.html">
                          Zesty Paws Calming Puppy Bites Stress Relief for
                          Dogs, 60 Count
                        </a>
                      </h4>
                      <h3 className="price">
                        {" "}
                        ₹ 16.00 <del> ₹ 50.00</del>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="product__item">
                    <div className="product__thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/img/products/products_img08.jpg"
                          alt="img"
                        />
                      </a>
                      <div className="product__action">
                        <a href="product-details.html">
                          <i className="flaticon-love" />
                        </a>
                        <a href="product-details.html">
                          <i className="flaticon-loupe" />
                        </a>
                        <a href="product-details.html">
                          <i className="flaticon-exchange" />
                        </a>
                      </div>
                      <div className="sale-wrap sale-wrap-two">
                        <span>Sale!</span>
                      </div>
                      <div className="product__add-cart">
                        <a href="product-details.html" className="btn">
                          <i className="flaticon-shopping-bag" />
                          Add To Cart
                        </a>
                      </div>
                    </div>
                    <div className="product__content">
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
                        <a href="product-details.html">
                          Hartz Groomer's Best Extra Gentle Puppy Shampoo,
                          18oz.
                        </a>
                      </h4>
                      <h3 className="price">
                        {" "}
                        ₹ 30.00 <del> ₹ 88.00</del>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="product__item">
                    <div className="product__thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/img/products/products_img09.jpg"
                          alt="img"
                        />
                      </a>
                      <div className="product__action">
                        <a href="product-details.html">
                          <i className="flaticon-love" />
                        </a>
                        <a href="product-details.html">
                          <i className="flaticon-loupe" />
                        </a>
                        <a href="product-details.html">
                          <i className="flaticon-exchange" />
                        </a>
                      </div>
                      <div className="sale-wrap sale-wrap-two">
                        <span>Sale!</span>
                      </div>
                      <div className="product__add-cart">
                        <a href="product-details.html" className="btn">
                          <i className="flaticon-shopping-bag" />
                          Add To Cart
                        </a>
                      </div>
                    </div>
                    <div className="product__content">
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
                        <a href="product-details.html">
                          The Kitten House with Mat Sleeping Bed House
                        </a>
                      </h4>
                      <h3 className="price">
                        {" "}
                        ₹ 22.00 <del> ₹ 59.00</del>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="product__item">
                    <div className="product__thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/img/products/products_img10.jpg"
                          alt="img"
                        />
                      </a>
                      <div className="product__action">
                        <a href="product-details.html">
                          <i className="flaticon-love" />
                        </a>
                        <a href="product-details.html">
                          <i className="flaticon-loupe" />
                        </a>
                        <a href="product-details.html">
                          <i className="flaticon-exchange" />
                        </a>
                      </div>
                      <div className="sale-wrap sale-wrap-two">
                        <span>Sale!</span>
                      </div>
                      <div className="product__add-cart">
                        <a href="product-details.html" className="btn">
                          <i className="flaticon-shopping-bag" />
                          Add To Cart
                        </a>
                      </div>
                    </div>
                    <div className="product__content">
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
                        <a href="product-details.html">
                          Dog Harness-Neoprene Comfort Liner-Orange and
                          Comfort
                        </a>
                      </h4>
                      <h3 className="price">
                        {" "}
                        ₹ 11.00 <del> ₹ 48.00</del>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product__shape-wrap">
            <img
              src="assets/img/products/products_shape01.png"
              alt="shape"
              className="ribbonRotate"
            />
            <img
              src="assets/img/products/products_shape02.png"
              alt="shape"
              data-aos="fade-up-right"
              data-aos-delay={400}
            />
          </div>
        </section>
        {/* product-details-area-end */}
      </main>
    </div>
  );
};

export default ProductDetails;
