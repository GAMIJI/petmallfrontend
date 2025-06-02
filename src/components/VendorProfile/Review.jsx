import React from 'react'
import SideBar from './SideBar'

function Review() {
    return (
        <>
            <div>
                <section className="blog__area pt-50 pb-100 account__page">
                    <div className="container-fluid">
                        <div className="row">
                            <SideBar />
                            <div className="col-xl-9 col-lg-8 col-sm-7">

                                <div className="container">
                                    <h3 className="mb-3">Customer Reviews & Ratings</h3>

                                    {/* Review 1 */}
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title">John Doe</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">
                                                ★★★★☆ (4/5)
                                            </h6>
                                            <p className="card-text">
                                                Great store with fresh products! The staff is very
                                                helpful and the prices are reasonable. Will definitely
                                                shop again.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Review 2 */}
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title">Emily Smith</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">
                                                ★★★★★ (5/5)
                                            </h6>
                                            <p className="card-text">
                                                Absolutely love Sunshine Mart! Clean, well-organized and
                                                the variety of organic products is amazing.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Review 3 */}
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title">Michael Johnson</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">
                                                ★★★☆☆ (3/5)
                                            </h6>
                                            <p className="card-text">
                                                Decent store but parking space is limited. Product
                                                quality is good though.
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

export default Review