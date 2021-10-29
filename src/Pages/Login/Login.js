import React from 'react';
import './Login.css'
import googleIcon from '../../images/googleIcon.png';
import { Link } from 'react-router-dom';
const RegisterLogin = () => {
    return (

        <section class="h-100 gradient-form pb-5" style={{ backgroundColor: '#eee' }}>
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-xl-10">
                        <div class="card rounded-3 text-black">
                            <div class="row g-0">
                                <div class="col-lg-6">
                                    <div class="card-body p-md-5 mx-md-4">

                                        <div class="text-center">
                                            <img src="https://www.packsend.com.au/assets/img/pas-logo.svg" style={{ width: '185px' }} alt="logo" />
                                            <p class="mt-3 mb-4 pb-1">We don't deliver boxes we deliver happiness</p>
                                        </div>

                                        <form>
                                            <p>Please login to your account</p>

                                            <div className="form-floating mb-3">
                                                <input type="email" className="form-control" id="floatingLoginEmail" placeholder="name@example.com" />
                                                <label htmlFor="floatingLoginEmail">Email address</label>
                                            </div>

                                            <div className="form-floating mb-2">
                                                <input type="password" className="form-control" id="floatingLoginPassword" placeholder="Password" />
                                                <label htmlFor="floatingLoginPassword">Password</label>
                                            </div>

                                            <div class="text-start pt-1 mb-3 pb-1">
                                                <a class="text-muted" href="#!">Forgot password?</a>
                                            </div>

                                            <div className="text-center">
                                                <button class="btn app-blue-btn text-white btn-block mb-3" type="button">Log in</button>
                                            </div>

                                            <div className="divider d-flex align-items-center my-3">
                                                <p className="text-center fw-bold mx-2 mb-0" style={{ color: 'rgb(69, 82, 110)' }}>OR</p>
                                            </div>
                                            <div className="mb-4 mt-2">
                                                <button class="btn btn-light w-100 btn-block  btn-outline" ><img width="16px" className="img-fluid mb-1 me-2" src={googleIcon} alt="Google" />Login With Google</button>
                                                <button className="mt-2 btn btn-block btn-twitter w-100 text-white"> <i className="fab fa-twitter"></i>   Login With Twitter</button>
                                                <button className="btn btn-block btn-facebook w-100 mt-2 text-white"> <i className="fab fa-facebook-f"></i>   Login With Facebook</button>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-center pb-4">
                                                <p class="mb-0 me-2">Don't have an account?</p>
                                                <Link to="/sign-up">
                                                    <button type="button" class="btn btn-outline-warning">Create new</button>
                                                </Link>
                                            </div>

                                        </form>

                                    </div>
                                </div>
                                <div class="col-lg-6 d-flex align-items-center gradient-custom-2" style={{ backgroundColor: '#0057A7' }}>
                                    <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                                        <h4 class="mb-4">PACK & SEND - Australia's Number One Parcel Courier & Freight Reseller</h4>
                                        <p class="small mb-0">PACK & SEND is Australia's leading and most recognised parcel courier and freight delivery reseller. We consolidate the services of the world's top parcel and freight carriers into a single access point under our brand - allowing our customers to save time, trouble and money on all their logistics needs.
                                            We have been providing pack and send services to businesses and consumers since 1993, including providing a whole range of value-add services such as packaging solutions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterLogin;