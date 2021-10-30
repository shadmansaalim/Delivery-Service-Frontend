import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import swal from 'sweetalert';


const SignUp = () => {
    const { handleFirstNameChange,
        handleLastNameChange,
        handleSignUpEmailChange,
        signUpPassword,
        signUpRepeatPassword,
        handleSignUpPasswordChange,
        handleSignUpRepeatPasswordChange,
        handleSignUp,
        verifyEmail,
        setUserDetails, setIsLoading, setUser } = useAuth();

    const signUpSubmission = (e) => {
        e.preventDefault();
        if (signUpPassword === signUpRepeatPassword) {
            setIsLoading(true)
            handleSignUp()
                .then(result => {
                    setUser(result.user);
                    verifyEmail();
                    setUserDetails()
                    e.target.reset();
                })
                .catch(error => {
                    if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                        swal("Invalid Password!", "Password should be at least 6 characters", "error");
                    }
                    setUser({});
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
        else {
            swal("Invalid Password!", "Please check your password and type correctly", "error");
        }

    }


    return (
        <section className="h-100 gradient-form pb-5" style={{ backgroundColor: '#eee' }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6 d-flex align-items-center gradient-custom-2" style={{ backgroundColor: '#0057A7' }}>
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                        <h4 className="mb-4">PACK & SEND - Australia's Number One Parcel Courier & Freight Reseller</h4>
                                        <p className="small mb-0">We give customers access to multiple freight, courier, shipping, postal and removalist services, with no limits on the size, value or weight of items we pack and send. No matter what our customers' needs are in terms of budget, delivery time and reliability, we can provide a solution. We have the resources and expertise to deliver to (and pick up from) virtually any destination on the planet.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card-body p-md-5 mx-md-4">

                                        <div className="text-center">
                                            <img src="https://www.packsend.com.au/assets/img/pas-logo.svg" style={{ width: '185px' }} alt="logo" />
                                            <p className="mt-3 mb-4 pb-1">We don't deliver boxes we deliver happiness</p>
                                        </div>

                                        <form onSubmit={signUpSubmission}>
                                            <p>Create an account to enjoy our services</p>

                                            <div className="form-floating mb-3">
                                                <input onBlur={handleFirstNameChange} type="text" className="form-control" id="floatingSignUpFirstName" placeholder="name@example.com"
                                                    required />
                                                <label htmlFor="floatingSignUpFirstName">First Name</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input onBlur={handleLastNameChange} type="text" className="form-control" id="floatingSignUpLastName" placeholder="name@example.com"
                                                    required />
                                                <label htmlFor="floatingSignUpLastName">Last Name</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input onBlur={handleSignUpEmailChange} type="email" className="form-control" id="floatingSignUpEmail" placeholder="name@example.com"
                                                    required />
                                                <label htmlFor="floatingSignUpEmail">Email address</label>
                                            </div>

                                            <div className="form-floating mb-3">
                                                <input onBlur={handleSignUpPasswordChange} type="password" className="form-control" id="floatingSignUpPassword" placeholder="Password" required />
                                                <label htmlFor="floatingSignUpPassword">Password</label>
                                            </div>
                                            <div className="form-floating mb-2">
                                                <input onBlur={handleSignUpRepeatPasswordChange} type="password" className="form-control" id="floatingSignUpRepeatPassword" placeholder="Password" />
                                                <label htmlFor="floatingSignUpRepeatPassword">Repeat Password</label>
                                            </div>

                                            <div className="text-center mt-4">
                                                <button className="btn app-blue-btn text-white btn-block mb-3" type="submit">Sign Up</button>
                                            </div>



                                            <div className="d-flex align-items-center justify-content-center pb-4">
                                                <p className="mb-0 me-2">Already have an account?</p>
                                                <Link to="/login">
                                                    <button type="button" className="btn btn-outline-warning">Login</button>
                                                </Link>
                                            </div>

                                        </form>

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

export default SignUp;