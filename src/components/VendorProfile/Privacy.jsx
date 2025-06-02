import React from 'react'
import SideBar from './SideBar'


function Privacy() {
    return (
        <>
            <div>
                <section className="blog__area pt-50 pb-100 account__page">
                    <div className="container-fluid">
                        <div className="row">
                            <SideBar />
                            <div className="col-xl-9 col-lg-8 col-sm-7">




                                <div className="container">
                                    <h3 className="mb-3">Privacy Policy</h3>

                                    <p>
                                        At <strong>Sunshine Mart</strong>, we are committed to
                                        protecting your privacy. This Privacy Policy explains how we
                                        collect, use, and safeguard your personal information when
                                        you visit our store or website.
                                    </p>

                                    <h5 className="mt-4">1. Information We Collect</h5>
                                    <p>
                                        We may collect personal information such as your name, email
                                        address, phone number, and payment details when you make a
                                        purchase or sign up for our services.
                                    </p>

                                    <h5 className="mt-4">2. How We Use Your Information</h5>
                                    <p>
                                        We use your information to process transactions, provide
                                        customer support, improve our services, and send promotional
                                        offers. We will not sell or rent your personal information
                                        to third parties.
                                    </p>

                                    <h5 className="mt-4">3. Cookies and Tracking</h5>
                                    <p>
                                        Our website uses cookies to enhance your browsing
                                        experience. Cookies help us understand user behavior and
                                        improve our website functionality.
                                    </p>

                                    <h5 className="mt-4">4. Data Security</h5>
                                    <p>
                                        We implement appropriate security measures to protect your
                                        personal information against unauthorized access,
                                        alteration, or disclosure.
                                    </p>

                                    <h5 className="mt-4">5. Your Rights</h5>
                                    <p>
                                        You have the right to access, update, or delete your
                                        personal information. To exercise these rights, please
                                        contact us at <strong>contact@sunshinemart.com</strong>.
                                    </p>

                                    <h5 className="mt-4">6. Changes to This Policy</h5>
                                    <p>
                                        We reserve the right to update this Privacy Policy at any
                                        time. Changes will be posted on this page with an updated
                                        revision date.
                                    </p>

                                    <p className="mt-4">
                                        If you have any questions or concerns about our Privacy
                                        Policy, please reach out to us at
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

export default Privacy