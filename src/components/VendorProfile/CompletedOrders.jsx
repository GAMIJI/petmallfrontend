import React from 'react'
import SideBar from './SideBar'

function CompletedOrders() {
  return (
    <>

      <div>
        <section className="blog__area pt-50 pb-100 account__page">
          <div className="container-fluid">
            <div className="row">
              <SideBar />
              <div className="col-xl-9 col-lg-8 col-sm-7">

                <div className="container">
                  <h3 className="mb-3">Completed Orders</h3>

                  {/* Order 1 */}
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Order #1001</h5>
                      <p className="card-text">
                        <strong>Customer:</strong> John Doe <br />
                        <strong>Items:</strong> Apples (2kg), Milk (1L), Bread
                        (1 pack) <br />
                        <strong>Total:</strong> $25.50 <br />
                        <strong>Status:</strong> Pending
                      </p>
                    </div>
                  </div>

                  {/* Order 2 */}
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Order #1002</h5>
                      <p className="card-text">
                        <strong>Customer:</strong> Emily Smith <br />
                        <strong>Items:</strong> Rice (5kg), Cooking Oil (2L){" "}
                        <br />
                        <strong>Total:</strong> $40.00 <br />
                        <strong>Status:</strong> Pending
                      </p>
                    </div>
                  </div>

                  {/* Order 3 */}
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Order #1003</h5>
                      <p className="card-text">
                        <strong>Customer:</strong> Michael Johnson <br />
                        <strong>Items:</strong> Bananas (1 dozen), Orange Juice
                        (2L) <br />
                        <strong>Total:</strong> $15.75 <br />
                        <strong>Status:</strong> Pending
                      </p>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default CompletedOrders