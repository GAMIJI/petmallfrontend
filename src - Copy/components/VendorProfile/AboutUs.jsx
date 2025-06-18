import React from 'react'
import SideBar from './SideBar'


function AboutUs() {
  return (
    <>
      <div>
        <section className="blog__area pt-50 pb-100 account__page">
          <div className="container-fluid">
            <div className="row">
              <SideBar />
              <div className="col-xl-9 col-lg-8 col-sm-7">

                <div className="container ">
                  <h3 className="mb-3">About Us</h3>

                  <p>
                    Welcome to <strong>Sunshine Mart</strong>, your number one
                    source for daily groceries, fresh produce, and household
                    essentials. Founded in 2010, we have been serving our local
                    community with quality products at affordable prices.
                  </p>

                  <h5 className="mt-4">Our Mission</h5>
                  <p>
                    Our mission is to provide our customers with the best
                    shopping experience by offering top-quality products,
                    excellent customer service, and unbeatable prices. We
                    believe in supporting local farmers and sustainable
                    practices.
                  </p>

                  <h5 className="mt-4">Contact Information</h5>
                  <ul>
                    <li>
                      <strong>Store Name:</strong> Sunshine Mart
                    </li>
                    <li>
                      <strong>Address:</strong> 123 Main Street, Springfield
                    </li>
                    <li>
                      <strong>Phone:</strong> +1 234 567 8900
                    </li>
                    <li>
                      <strong>Email:</strong> contact@sunshinemart.com
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>


    </>
  )
}

export default AboutUs