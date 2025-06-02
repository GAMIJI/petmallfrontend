import React from "react";
import { Link } from "react-router-dom";

const NearByStore = () => {
  return (
    <div>
      <section className="near-by-store">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="section__title-two mb-25">
                <h2 className="title">
                  Near By Store{" "}
                  <img
                    src="assets/img/images/title_shape.svg"
                    alt=""
                    className="injectable"
                  />
                </h2>
              </div>
            </div>
            <div className="col-md-5">
              <div className="view-all-btn">
                <Link to="/storeList">
                  See All Store <i className="flaticon-right-arrow-angle" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 p-0">
              <div className="store__pic">
                <img
                  src="https://threebestrated.in/images/GiantlandPetShop-Indore-MP.jpeg"
                  alt="img"
                />
                <div className="row store__profile">
                  <div className="store__profile_1 p-0">
                    <img
                      className=""
                      src="https://ih1.redbubble.net/image.5013357025.2285/tst,large,507x507-pad,600x600,f8f8f8.u2.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="store__profile_2">
                    <h5 className="title"> Pet Shop Indore</h5>
                    <p>500.0 m away</p>
                    <div className="product__reviews">
                      <div className="rating" style={{ marginLeft: 0 }}>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span>(2 Reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="store__add">
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
                <div className="store__btn">
                  <Link to="/shopProductList" className="btn shop-btn">
                    Shop Now{" "}
                    <img
                      src="assets/img/icon/right_arrow.svg"
                      alt=""
                      className="injectable"
                    />
                  </Link>
                </div>
                {/* <div class="view-store">
                          <button class="view-store-btn">View Store →</button>
                      </div> */}
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 p-0">
              <div className="store__pic">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrE6Npglqi0GIJREX1vWlcDTx1GJehNgj3uqXlZBoqZcIh9PUA1wujaJuGpcOlz-cXZDs&usqp=CAU"
                  alt="img"
                />
                <div className="row store__profile">
                  <div className="store__profile_1 p-0">
                    <img
                      src="https://i.pinimg.com/736x/1a/fb/fd/1afbfd6c2fdb71242db1c7389d15720d.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="store__profile_2">
                    <h5 className="title"> Persian Paradise Cattery</h5>
                    <p>500.0 m away</p>
                    <div className="product__reviews">
                      <div className="rating" style={{ marginLeft: 0 }}>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span>(2 Reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="store__add">
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
                <div className="store__btn">
                  <Link to="/shopProductList" className="btn shop-btn">
                    Shop Now{" "}
                    <img
                      src="assets/img/icon/right_arrow.svg"
                      alt=""
                      className="injectable"
                    />
                  </Link>
                </div>
                {/* <div class="view-store">
                          <button class="view-store-btn">View Store →</button>
                      </div> */}
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 p-0">
              <div className="store__pic">
                <img
                  src="https://threebestrated.in/images/GiantlandPetShop-Indore-MP.jpeg"
                  alt="img"
                />
                <div className="row store__profile">
                  <div className="store__profile_1 p-0">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaNg9qiPZ3VyJouaLMs66R5kaMSi_rcp3WvA&s"
                      alt="img"
                    />
                  </div>
                  <div className="store__profile_2">
                    <h5 className="title"> Pet Shop Indore</h5>
                    <p>1.5 km away</p>
                    <div className="product__reviews">
                      <div className="rating" style={{ marginLeft: 0 }}>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span>(2 Reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="store__add">
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
                <div className="store__btn h-20">
                  <Link to="/shopProductList" className="btn shop-btn">
                    Shop Now{" "}
                    <img
                      src="assets/img/icon/right_arrow.svg"
                      alt=""
                      className="injectable"
                    />
                  </Link>
                </div>
                {/* <div class="view-store">
                          <button class="view-store-btn">View Store →</button>
                      </div> */}
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 p-0">
              <div className="store__pic">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKdqhd2iQh9TMYWTtt7a_KNDvYd5YLkZc1g&s"
                  alt="img"
                />
                <div className="row store__profile">
                  <div className="store__profile_1 p-0">
                    <img
                      src="https://img.freepik.com/premium-vector/colorful-cute-dog-sticker-dog-clipart-dog-lover-design-vector-illustration_658322-94.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="store__profile_2">
                    <h5 className="title"> Pet Shop Indore</h5>
                    <p>1.5 km away</p>
                    <div className="product__reviews">
                      <div className="rating" style={{ marginLeft: 0 }}>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span>(2 Reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="store__add">
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
                <div className="store__btn">
                  <Link to="/shopProductList" className="btn shop-btn">
                    Shop Now{" "}
                    <img
                      src="assets/img/icon/right_arrow.svg"
                      alt=""
                      className="injectable"
                    />
                  </Link>
                </div>
                {/* <div class="view-store">
                      <button class="view-store-btn">View Store →</button>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NearByStore;
