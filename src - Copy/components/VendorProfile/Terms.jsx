import React from 'react'
import SideBar from './SideBar'


function Terms() {
    return (
        <>
            <div>
                <section className="blog__area pt-50 pb-100 account__page">
                    <div className="container-fluid">
                        <div className="row">
                            <SideBar />
                            <div className="col-xl-9 col-lg-8 col-sm-7">

                                <div className="container">
                                    <h3 className="mb-3">Terms and Conditions</h3>

                                    <p>
                                        Welcome to <strong>Sunshine Mart</strong>. By accessing or
                                        using our services, you agree to comply with and be bound by
                                        the following terms and conditions. Please read them
                                        carefully.
                                    </p>

                                    <h5 className="mt-4">1. General</h5>
                                    <p>
                                        All prices and product availability are subject to change
                                        without notice. We reserve the right to refuse service to
                                        anyone for any reason at any time.
                                    </p>

                                    <h5 className="mt-4">2. Payment Terms</h5>
                                    <p>
                                        We accept payments through cash, credit/debit cards, and
                                        digital wallets. All payments must be made in full at the
                                        time of purchase.
                                    </p>

                                    <h5 className="mt-4">3. Return & Refund Policy</h5>
                                    <p>
                                        Products can be returned within 7 days of purchase with a
                                        valid receipt. Refunds will be processed using the original
                                        payment method. Perishable items are not eligible for
                                        return.
                                    </p>

                                    <h5 className="mt-4">4. Privacy Policy</h5>
                                    <p>
                                        We are committed to protecting your privacy. Any personal
                                        information collected will be used only for processing your
                                        orders and improving our services. We do not share your
                                        information with third parties.
                                    </p>

                                    <h5 className="mt-4">5. Changes to Terms</h5>
                                    <p>
                                        We reserve the right to modify these terms and conditions at
                                        any time. Changes will be effective immediately upon posting
                                        on this page.
                                    </p>

                                    <p className="mt-4">
                                        If you have any questions about these Terms and Conditions,
                                        please contact us at
                                        <strong> contact@sunshinemart.com</strong>.
                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Terms