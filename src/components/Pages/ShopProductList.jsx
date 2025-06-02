import React from "react";

const ShopProductList = () => {
  return (
    <div>
      <main className="fix">
        {/* features-area */}
        <section className="shop_profile">
          <div className="container">
            <div className="shop__profile__image">
              <img
                src="assets/img/images/store-details-profile-cover-img1.jpg"
                alt="img"
              />
            </div>
            <div className="row shop__profile__item">
              <div className="col-md-4 store__add">
                <div className="store__location">
                  <img
                    src="assets/img/icon/icons8-location-100.png"
                    alt="gif"
                  />
                </div>
                <div className="store__location2">
                  Shanker Nagar Lodhipara Chowk, Raipur-Chhattisgarh
                </div>
              </div>
              <div className=" shop__circle">
                <div className="shop__profile__pic">
                  <div className="shop__profile__picture">
                    <img
                      src="https://probid-nextjs.vercel.app/assets/img/inner-pages/store-details-profile-img1.png"
                      alt="img"
                    />
                  </div>
                  <div className="shop__profile__name">
                    <h3 className="title mt-10">Nilesh Barod </h3>
                    <p>45,212 Items</p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 shop__rating">
                <div className="product__reviews">
                  <div className="rating" style={{ marginLeft: 0 }}>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <span>(154 Reviews)</span>
                </div>
                <p>500.0 Metre Away From You</p>
              </div>
            </div>
          </div>
        </section>
        {/* features-area-end */}
        {/* product-area */}
        <section className="product__area-four">
          <div className="container">
            <div className="row gutter-20 row-cols-1 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center">
              <div className="col">
                <div className="product__item">
                  <div className="product__thumb">
                    <a href="product-details.html">
                      <img
                        src="assets/img/products/products_img01.jpg"
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
                    <div className="sale-wrap">
                      <span>New</span>
                    </div>
                    <div className="product__add-cart">
                      <a href="product-details.html" className="btn">
                        <i className="flaticon-shopping-bag" />
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="product__content" style={{ padding: 12 }}>
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
                        Dog Harness-Neoprene Comfort Liner-Orange and ...
                      </a>
                    </h4>
                    <h3 className="price">
                      $12.00 <del>$25.00</del>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="product__item">
                  <div className="product__thumb">
                    <a href="product-details.html">
                      <img
                        src="assets/img/products/products_img02.jpg"
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
                  <div className="product__content" style={{ padding: 12 }}>
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
                        Arm &amp; Hammer Super Deodori zing Dog Shampoo, Pet
                        Wash
                      </a>
                    </h4>
                    <h3 className="price">
                      $20.00 <del>$30.00</del>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="product__item">
                  <div className="product__thumb">
                    <a href="product-details.html">
                      <img
                        src="assets/img/products/products_img03.jpg"
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
                    <div className="product__add-cart">
                      <a href="product-details.html" className="btn">
                        <i className="flaticon-shopping-bag" />
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="product__content" style={{ padding: 12 }}>
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
                        Milk-Bone Brushing Chews Daily Dental Dog Treats ...
                      </a>
                    </h4>
                    <h3 className="price">
                      $36.00 <del>$56.00</del>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="product__item">
                  <div className="product__thumb">
                    <a href="product-details.html">
                      <img
                        src="assets/img/products/products_img04.jpg"
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
                  <div className="product__content" style={{ padding: 12 }}>
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
                        Two Door Top Load Plastic Kennel &amp; Pet Carrier, Blue
                        19”
                      </a>
                    </h4>
                    <h3 className="price">
                      $18.00 <del>$33.00</del>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="product__item">
                  <div className="product__thumb">
                    <a href="product-details.html">
                      <img
                        src="assets/img/products/products_img05.jpg"
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
                    <div className="sale-wrap">
                      <span>New</span>
                    </div>
                    <div className="product__add-cart">
                      <a href="product-details.html" className="btn">
                        <i className="flaticon-shopping-bag" />
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  <div className="product__content" style={{ padding: 12 }}>
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
                      $19.00 <del>$28.00</del>
                    </h3>
                  </div>
                </div>
              </div>
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
                  <div className="product__content" style={{ padding: 12 }}>
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
                      $18.00 <del>$33.00</del>
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
                    <div className="sale-wrap">
                      <span>New</span>
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
                        Zesty Paws Calming Puppy Bites Stress Relief for Dogs,
                        60 Count
                      </a>
                    </h4>
                    <h3 className="price">
                      $16.00 <del>$50.00</del>
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
                        Hartz Groomer's Best Extra Gentle Puppy Shampoo, 18oz.
                      </a>
                    </h4>
                    <h3 className="price">
                      $30.00 <del>$88.00</del>
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
                    <div className="sale-wrap">
                      <span>New</span>
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
                      $22.00 <del>$59.00</del>
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
                        Dog Harness-Neoprene Comfort Liner-Orange and Comfort
                      </a>
                    </h4>
                    <h3 className="price">
                      $11.00 <del>$48.00</del>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="product__item">
                  <div className="product__thumb">
                    <a href="product-details.html">
                      <img
                        src="assets/img/products/products_img11.jpg"
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
                    <div className="sale-wrap">
                      <span>New</span>
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
                      <span>(7 Reviews)</span>
                    </div>
                    <h4 className="title">
                      <a href="product-details.html">
                        Dog Puzzle Toys, Squeaky Treat Dispensing Dog
                      </a>
                    </h4>
                    <h3 className="price">
                      $19.00 <del>$28.00</del>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="product__item">
                  <div className="product__thumb">
                    <a href="product-details.html">
                      <img
                        src="assets/img/products/products_img12.jpg"
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
                    <div className="sale-wrap">
                      <span>New</span>
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
                        Zesty Paws Calming Puppy Bites Stress Relief for Dogs,
                        60 Count
                      </a>
                    </h4>
                    <h3 className="price">$16.00</h3>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="product__item">
                  <div className="product__thumb">
                    <a href="product-details.html">
                      <img
                        src="assets/img/products/products_img13.jpg"
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
                      <span>(20 Reviews)</span>
                    </div>
                    <h4 className="title">
                      <a href="product-details.html">
                        Hartz Groomer's Best Extra Gentle Puppy Shampoo, 18oz
                        Shampoo
                      </a>
                    </h4>
                    <h3 className="price">
                      $30.00 <del>$88.00</del>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="product__item">
                  <div className="product__thumb">
                    <a href="product-details.html">
                      <img
                        src="assets/img/products/products_img14.jpg"
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
                    <div className="sale-wrap">
                      <span>New</span>
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
                      <span>(10 Reviews)</span>
                    </div>
                    <h4 className="title">
                      <a href="product-details.html">
                        The Kitten House with Mat Sleeping Bed House
                      </a>
                    </h4>
                    <h3 className="price">
                      $22.00 <del>$59.00</del>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="product__item">
                  <div className="product__thumb">
                    <a href="product-details.html">
                      <img
                        src="assets/img/products/products_img15.jpg"
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
                        Dog Harness-Neoprene Comfort Liner-Orange and ...
                      </a>
                    </h4>
                    <h3 className="price">
                      $11.00 <del>$48.00</del>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <nav className="pagination__wrap mt-50">
              <ul className="list-wrap">
                <li className="link-arrow">
                  <a href="#">
                    <img
                      src="assets/img/icon/pagination_icon01.svg"
                      alt=""
                      className="injectable"
                    />
                  </a>
                </li>
                <li className="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="courses.html">2</a>
                </li>
                <li>
                  <a href="courses.html">3</a>
                </li>
                <li>
                  <a href="courses.html">4</a>
                </li>
                <li className="link-arrow">
                  <a href="#">
                    <img
                      src="assets/img/icon/pagination_icon02.svg"
                      alt=""
                      className="injectable"
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        {/* product-area-end */}
      </main>
    </div>
  );
};

export default ShopProductList;
