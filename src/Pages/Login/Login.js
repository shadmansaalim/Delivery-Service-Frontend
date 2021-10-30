import React from 'react';
import './Login.css'
import googleIcon from '../../images/googleIcon.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import swal from 'sweetalert';

const Login = () => {

    const { handleLogin, handleLoginEmailChange,
        handleLoginPasswordChange, handleGoogleSignUp, handleFacebookSignUp, handleTwitterSignUp, setIsLoading } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirectURL = location.state?.from || '/home';

    const signUpUsingGoogle = () => {
        setIsLoading(true);
        handleGoogleSignUp()
            .then(result => {
                history.push(redirectURL);
            })
            .catch(error => {

            })
            .finally(() => {
                setIsLoading(false);
            });
    }
    const signUpUsingFacebook = () => {
        setIsLoading(true);
        handleFacebookSignUp()
            .then(result => {

            })
            .catch(error => {

            })
            .finally(() => {
                setIsLoading(false);
            });
    }
    const signUpUsingTwitter = () => {
        setIsLoading(true);
        handleTwitterSignUp()
            .then(result => {

            })
            .catch(error => {

            })
            .finally(() => {
                setIsLoading(false);
            });
    }


    const loginSubmission = (e) => {
        e.preventDefault();
        handleLogin()
            .then(result => {
                console.log(result);
                history.push(redirectURL);
                e.target.reset();
            })
            .catch(error => {

                if (error.message === "Firebase: Error (auth/wrong-password).") {
                    swal("Invalid Password!", "Please check your email & password and then try again", "error");
                }
                else if (error.message === "Firebase: Error (auth/user-not-found).") {
                    swal("User Not Found!", "Please check your email & password and then try again", "warning");
                }

            })

    }

    return (

        <section className="h-100 gradient-form pb-5" style={{ backgroundColor: '#eee' }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="card-body p-md-5 mx-md-4">

                                        <div className="text-center">
                                            <img src="https://www.packsend.com.au/assets/img/pas-logo.svg" style={{ width: '185px' }} alt="logo" />
                                            <p className="mt-3 mb-4 pb-1">We don't deliver boxes we deliver happiness</p>
                                        </div>

                                        <form onSubmit={loginSubmission}>
                                            <p>Please login to your account</p>

                                            <div className="form-floating mb-3">
                                                <input onBlur={handleLoginEmailChange} type="email" className="form-control" id="floatingLoginEmail" placeholder="name@example.com"
                                                    required />
                                                <label htmlFor="floatingLoginEmail">Email address</label>
                                            </div>

                                            <div className="form-floating mb-2">
                                                <input onBlur={handleLoginPasswordChange} type="password" className="form-control" id="floatingLoginPassword" placeholder="Password" required />
                                                <label htmlFor="floatingLoginPassword">Password</label>
                                            </div>

                                            <div className="text-start pt-1 mb-3 pb-1">
                                                <a className="text-muted" href="#!">Forgot password?</a>
                                            </div>

                                            <div className="text-center">
                                                <button className="btn app-blue-btn text-white btn-block mb-3" type="submit">Log in</button>
                                            </div>

                                            <div className="divider d-flex align-items-center my-3">
                                                <p className="text-center fw-bold mx-2 mb-0" style={{ color: 'rgb(69, 82, 110)' }}>OR</p>
                                            </div>
                                        </form>

                                        <div className="mb-4 mt-2">
                                            <button onClick={signUpUsingGoogle} className="btn btn-light w-100 btn-block  btn-outline" ><img width="16px" className="img-fluid mb-1 me-2" src={googleIcon} alt="Google" />Continue With Google</button>
                                            <button onClick={signUpUsingTwitter} className="mt-2 btn btn-block btn-twitter w-100 text-white"> <i className="fab fa-twitter"></i>   Continue With Twitter</button>
                                            <button onClick={signUpUsingFacebook} className="btn btn-block btn-facebook w-100 mt-2 text-white"> <i className="fab fa-facebook-f"></i>   Continue With Facebook</button>
                                        </div>

                                        <div className="d-flex align-items-center justify-content-center pb-4">
                                            <p className="mb-0 me-2">Don't have an account?</p>
                                            <Link to="/sign-up">
                                                <button type="button" className="btn btn-outline-warning">Create new</button>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center gradient-custom-2" style={{ backgroundColor: '#0057A7' }}>
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                        <h4 className="mb-4">PACK & SEND - Australia's Number One Parcel Courier & Freight Reseller</h4>
                                        <p className="small mb-0">PACK & SEND is Australia's leading and most recognised parcel courier and freight delivery reseller. We consolidate the services of the world's top parcel and freight carriers into a single access point under our brand - allowing our customers to save time, trouble and money on all their logistics needs.
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

export default Login;