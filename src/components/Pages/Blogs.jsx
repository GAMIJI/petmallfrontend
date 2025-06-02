import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      
      <section className="blog__post-area-four">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="section__title-two mb-20">
                <h2 className="title">
                  Latest News &amp; Updates{" "}
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
                <Link to="/blogsList">
                  See All <i className="flaticon-right-arrow-angle" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {[
              {
                img: "assets/img/blog/h4_blog_post01.jpg",
                tag: "Pet",
                title: "10 Things You Didn’t Know about The Shinese",
              },
              {
                img: "assets/img/blog/h4_blog_post02.jpg",
                tag: "Care",
                title: "A Complete Price Guide for the Shar Pei Breed",
              },
              {
                img: "assets/img/blog/h4_blog_post03.jpg",
                tag: "Pet Health",
                title: "Comparing the Blue vs. Lilac French Bulldog",
              },
              {
                img: "assets/img/blog/h4_blog_post04.jpg",
                tag: "Cat",
                title: "Five Things You Didn’t Know about the Red",
              },
            ].map((post, index) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
                <div className="blog__post-item-four shine-animate-item">
                  <div className="blog__post-thumb-four shine-animate">
                    <Link to="/blogDetails">
                      <img src={post.img} alt="img" />
                    </Link>
                    <ul className="list-wrap blog__post-tag blog__post-tag-three">
                      <li>
                        <Link to="/blogDetails">{post.tag}</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="blog__post-content-four">
                    <div className="blog__post-meta">
                      <ul className="list-wrap">
                        <li>
                          <i className="flaticon-calendar" />
                          25th Aug
                        </li>
                        <li>
                          <i className="flaticon-user" />
                          by <Link to="/blogDetails">admin</Link>
                        </li>
                      </ul>
                    </div>
                    <h2 className="title">
                      <Link to="/blogDetails">{post.title}</Link>
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="blog__shape-wrap-four">
          <img
            src="assets/img/blog/h4_blog_shape01.png"
            alt="img"
            data-aos="fade-down-left"
            data-aos-delay={400}
          />
          <img
            src="assets/img/blog/h4_blog_shape02.png"
            alt="img"
            data-aos="fade-up-right"
            data-aos-delay={400}
          />
        </div>
      </section>
    </div>
  );
};

export default Blogs;
