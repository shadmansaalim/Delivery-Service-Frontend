import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './ServiceDetails.css'
import { useForm } from 'react-hook-form';
import placedImg from '../../images/placed.svg';

const ServiceDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const history = useHistory();
    const [service, setService] = useState({});
    const [activeSection, setActiveSection] = useState(1);
    const [progress, setProgress] = useState(25);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        data.serviceTaken = service.name;
        data.status = "Pending";
        fetch('https://eerie-blood-54641.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    setOrderPlaced(true);
                    reset();
                }
            })
            .catch(error => {
                alert('Something went wrong')
            })
    };


    useEffect(() => {
        const url = `https://eerie-blood-54641.herokuapp.com/services/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setService(data);
            })
    }, [])






    return (
        <section>
            {
                service.name
                    ?
                    <section className="h-100 gradient-form pb-5" style={{ backgroundColor: '#eee' }}>
                        <div className="container pt-5 pb-5 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-xl-12">
                                    <div className="card rounded-3 text-black">
                                        <div className="row g-0">
                                            <div className="col-lg-6">

                                                <div className="text-center px-4 mb-2">
                                                    <div className="card px-0 pt-4 pb-0 mb-3">
                                                        <h2 id="heading">Provide Details For Delivery</h2>
                                                        <p>Fill all form field to go to next step</p>
                                                        <form onSubmit={handleSubmit(onSubmit)} id="msform" className="">

                                                            <ul id="progressbar">
                                                                <li className={activeSection >= 1 && "active"} id="personal"><strong>Sender</strong></li>
                                                                <li className={activeSection >= 2 && "active"} id="order"><strong>Order</strong></li>
                                                                <li className={activeSection >= 3 && "active"} id="personal"><strong>Receiver</strong></li>
                                                                <li className={activeSection >= 4 && "active"} id="confirm"><strong>Finish</strong></li>
                                                            </ul>
                                                            <div className="progress">
                                                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{ width: `${progress}%` }}></div>
                                                            </div>
                                                            <br />
                                                            <fieldset className={activeSection !== 1 ? "d-none" : "d-block"} >
                                                                <div className="form-card">
                                                                    <div className="row">
                                                                        <div className="col-7">
                                                                            <h2 className="fs-title">Sender Information</h2>
                                                                        </div>
                                                                        <div className="col-5">
                                                                            <h2 className="steps">Step {activeSection} - 4</h2>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-floating mb-3">
                                                                        <input type="text" defaultValue={user.displayName} {...register("senderName")} className="form-control " />
                                                                    </div>
                                                                    <div className="form-floating mb-3">
                                                                        <input type="email" className="form-control " defaultValue={user.email}  {...register("senderEmail", { required: true })} />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <input
                                                                            placeholder="Phone"
                                                                            type="number" className="form-control" defaultValue=""  {...register("senderPhone", { required: true })} />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <input
                                                                            placeholder="Sender Adress"
                                                                            type="text" className="form-control" defaultValue=""  {...register("senderAddress", { required: true })} />
                                                                    </div>
                                                                </div>
                                                                <input onClick={() => {
                                                                    setActiveSection(activeSection + 1)
                                                                    setProgress(50);
                                                                }} type="button" name="next" className="next action-button" value="Next" />
                                                            </fieldset>
                                                            <fieldset className={activeSection !== 2 ? "d-none" : "d-block"}>
                                                                <div className="form-card">
                                                                    <div className="row">
                                                                        <div className="col-7">
                                                                            <h2 className="fs-title">Order Information</h2>
                                                                        </div>
                                                                        <div className="col-5">
                                                                            <h2 className="steps">Step {activeSection} - 4</h2>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <input
                                                                            placeholder="Length(cm)"
                                                                            type="number" className="form-control" defaultValue=""  {...register("itemLength", { required: true })} />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <input
                                                                            placeholder="Width(cm)"
                                                                            type="number" className="form-control" defaultValue=""  {...register("itemWidth", { required: true })} />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <input
                                                                            placeholder="Height(cm)"
                                                                            type="number" className="form-control" defaultValue=""  {...register("itemHeight", { required: true })} />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <input
                                                                            placeholder="Weight(kg)"
                                                                            type="text" className="form-control" defaultValue=""  {...register("itemWeight", { required: true })} />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <input
                                                                            placeholder="$ Value(AUD)"
                                                                            type="number" className="form-control" defaultValue=""  {...register("itemValue", { required: true })} />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <textarea
                                                                            placeholder="Item Description"
                                                                            type="number" className="form-control" defaultValue=""  {...register("itemDescription", { required: true })} />
                                                                    </div>
                                                                </div>
                                                                <input onClick={() => {
                                                                    setActiveSection(activeSection + 1)
                                                                    setProgress(75);
                                                                }} type="button" name="next" className="next action-button" value="Next" />
                                                                <input onClick={() => setActiveSection(activeSection - 1)} type="button" name="previous" className="previous action-button-previous" value="Previous" />
                                                            </fieldset>
                                                            <fieldset className={activeSection !== 3 ? "d-none" : "d-block"}>
                                                                <div className="form-card">
                                                                    <div className="row">
                                                                        <div className="col-7">
                                                                            <h2 className="fs-title">Receiver Information</h2>
                                                                        </div>
                                                                        <div className="col-5">
                                                                            <h2 className="steps">Step {activeSection} - 4</h2>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">

                                                                        <input placeholder="Receiver Name"
                                                                            type="text"
                                                                            defaultValue="" {...register("receiverName")} className="form-control " />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <input placeholder="Email" type="email" className="form-control " defaultValue=""  {...register("receiverEmail", { required: true })} />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <input
                                                                            placeholder="Phone"
                                                                            type="number" className="form-control" defaultValue=""  {...register("receiverPhone", { required: true })} />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <input
                                                                            placeholder="Address"
                                                                            type="text" className="form-control" defaultValue=""  {...register("receiverAddress", { required: true })} />
                                                                    </div>
                                                                </div>
                                                                <input onClick={() => {
                                                                    setActiveSection(activeSection + 1)
                                                                    setProgress(100)
                                                                }} type="submit" name="next" className="next action-button" value="Submit" />
                                                                <input onClick={() => setActiveSection(activeSection - 1)} type="button" name="previous" className="previous action-button-previous" value="Previous" />
                                                            </fieldset>
                                                            <fieldset className={activeSection !== 4 ? "d-none" : "d-block"}>
                                                                {
                                                                    orderPlaced
                                                                        ?
                                                                        <div className="form-card">
                                                                            <div className="row">
                                                                                <div className="col-7">
                                                                                    <h2 className="fs-title">Finished</h2>
                                                                                </div>
                                                                                <div className="col-5">
                                                                                    <h2 className="steps">Step {activeSection} - 4</h2>
                                                                                </div>
                                                                            </div>
                                                                            <h2 className="purple-text text-center"><strong>SUCCESS !</strong></h2> <br />
                                                                            <div className="row justify-content-center">
                                                                                <img className="img-fluid col-lg-6" src={placedImg} alt="" />
                                                                            </div> <br /><br />
                                                                            <div className="row justify-content-center">
                                                                                <div className="col-7 text-center">
                                                                                    <h5 className="purple-text text-center">Your order has been placed</h5>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        :
                                                                        <section className="text-center" style={{ marginTop: '50px', marginBottom: '50px' }} >
                                                                            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                                                                        </section>
                                                                }
                                                            </fieldset>
                                                        </form>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-lg-6 d-flex align-items-center" style={{ backgroundColor: '#0057A7' }}>
                                                <div className="text-white px-3 py-4 p-md-5 mx-md-4 bg-warning rounded-3">
                                                    <h3 className="mb-3">{service.name}</h3>
                                                    <p className="mx-auto">{service.description}</p>
                                                    <h4 className="text-dark"><strong>Price : ${service.price}</strong></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>










                    :
                    <section className="text-center vh-100 d-flex justify-content-center align-items-center">
                        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </section>
            }
        </section>
    );
};

export default ServiceDetails;