import React from 'react';
import './Footer.css';
const Footer = () => {
    return (

        <footer className="bg-dark text-center text-white">

            <div className="container p-4">

                <section className="mb-4">

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-facebook-f"></i
                    ></a>


                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-twitter"></i
                    ></a>


                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-google"></i
                    ></a>


                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-instagram"></i
                    ></a>


                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-linkedin-in"></i
                    ></a>


                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-github"></i
                    ></a>
                </section>

                <section className="">
                    <form action="">
                        <div className="row d-flex justify-content-center">

                            <div className="col-auto">
                                <p className="pt-2">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>



                            <div className="col-md-5 col-12">

                                <div className="form-outline form-white mb-4">
                                    <input type="email" placeholder="Your Email" className="form-control" />

                                </div>
                            </div>



                            <div className="col-auto">

                                <button type="submit" className="btn btn-outline-light mb-4">
                                    Subscribe
                                </button>
                            </div>

                        </div>

                    </form>
                </section>



                <section className="mb-4">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                        eum harum corrupti dicta, aliquam sequi voluptate quas.
                    </p>
                </section>



                <section className="">

                    <div className="row">

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 >Couriers & Freight</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">Parcel & Courier Services</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">Domestic Freight</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">Import Services</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">Track & Trace</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5>eCommerce</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">Online Self Service</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">Regular Senders</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">Import Services</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">Latest Services</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5>Logistics Solutions</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">Industry Solutions</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">Corporate Solutions</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">Project Management</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">Mailbox Rental Services</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5>Baggage & Removals</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">Fragile & Sensitive Goods</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">Personal Goods</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">Baggage Removals</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">Excess Baggage</a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </section>

            </div>

            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                <small>© {new Date().getFullYear()} Copyright. Application Developed By Saalim Shadman, A Computer Science Student At RMIT, Australia.</small>
            </div>

        </footer>

    );
};

export default Footer;