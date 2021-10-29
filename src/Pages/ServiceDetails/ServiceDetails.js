import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useServices from '../../hooks/useServices';
import './ServiceDetails.css'
import { useForm } from 'react-hook-form';

const ServiceDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const history = useHistory();
    const [services, setServices] = useServices();
    const [service, setService] = useState({});
    const [activeSection, setActiveSection] = useState(1);
    const [progress, setProgress] = useState(25);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch('', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    history.push('/order-confirmed');
                    reset();
                }
            })
    };


    useEffect(() => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setService(data);
            })
    }, [])






    return (
        <section className="mb-5">
            {
                service.name
                    ?
                    <section className="text-center">
                        <div className="details-banner d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${service.banner})` }}>
                            <div className="text-white shadow-lg p-4 col-6 mx-auto rounded-3 bg-warning" >
                                <h3 className="mb-3">{service.name}</h3>
                                <p className="mx-auto">{service.description}</p>
                            </div>
                        </div>
                        {/* <img src={service.banner} alt="" style={{ width: '100%', height: '500px' }} /> */}





                        <div class="container-fluid">
                            <div class="row justify-content-center">
                                <div class="col-11 col-sm-9 col-md-7 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
                                    <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                                        <h2 id="heading">Provide Details For Delivery</h2>
                                        <p>Fill all form field to go to next step</p>
                                        <form onSubmit={handleSubmit(onSubmit)} id="msform" className="shadow-lg p-5 rounded-3">

                                            <ul id="progressbar">
                                                <li class={activeSection >= 1 && "active"} id="personal"><strong>Sender</strong></li>
                                                <li class={activeSection >= 2 && "active"} id="order"><strong>Order</strong></li>
                                                <li class={activeSection >= 3 && "active"} id="personal"><strong>Receiver</strong></li>
                                                <li class={activeSection >= 4 && "active"} id="confirm"><strong>Finish</strong></li>
                                            </ul>
                                            <div class="progress">
                                                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{ width: `${progress}%` }}></div>
                                            </div>
                                            <br />
                                            <fieldset class={activeSection !== 1 ? "d-none" : "d-block"} >
                                                <div class="form-card">
                                                    <div class="row">
                                                        <div class="col-7">
                                                            <h2 class="fs-title">Sender Information</h2>
                                                        </div>
                                                        <div class="col-5">
                                                            <h2 class="steps">Step {activeSection} - 4</h2>
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
                                                }} type="button" name="next" class="next action-button" value="Next" />
                                            </fieldset>
                                            <fieldset class={activeSection !== 2 ? "d-none" : "d-block"}>
                                                <div class="form-card">
                                                    <div class="row">
                                                        <div class="col-7">
                                                            <h2 class="fs-title">Order Information</h2>
                                                        </div>
                                                        <div class="col-5">
                                                            <h2 class="steps">Step {activeSection} - 4</h2>
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
                                                            type="number" className="form-control" defaultValue=""  {...register("itemWeight", { required: true })} />
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
                                                }} type="button" name="next" class="next action-button" value="Next" />
                                                <input onClick={() => setActiveSection(activeSection - 1)} type="button" name="previous" class="previous action-button-previous" value="Previous" />
                                            </fieldset>
                                            <fieldset class={activeSection !== 3 ? "d-none" : "d-block"}>
                                                <div class="form-card">
                                                    <div class="row">
                                                        <div class="col-7">
                                                            <h2 class="fs-title">Receiver Information</h2>
                                                        </div>
                                                        <div class="col-5">
                                                            <h2 class="steps">Step {activeSection} - 4</h2>
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
                                                }} type="submit" name="next" class="next action-button" value="Submit" />
                                                <input onClick={() => setActiveSection(activeSection - 1)} type="button" name="previous" class="previous action-button-previous" value="Previous" />
                                            </fieldset>
                                            <fieldset class={activeSection !== 4 ? "d-none" : "d-block"}>
                                                <div class="form-card">
                                                    <div class="row">
                                                        <div class="col-7">
                                                            <h2 class="fs-title">Finish:</h2>
                                                        </div>
                                                        <div class="col-5">
                                                            <h2 class="steps">Step {activeSection} - 4</h2>
                                                        </div>
                                                    </div> <br /><br />
                                                    <h2 class="purple-text text-center"><strong>SUCCESS !</strong></h2> <br />
                                                    <div class="row justify-content-center">
                                                        <div class="col-3"> <img src="https://i.imgur.com/GwStPmg.png" class="fit-image" alt="" /> </div>
                                                    </div> <br /><br />
                                                    <div class="row justify-content-center">
                                                        <div class="col-7 text-center">
                                                            <h5 class="purple-text text-center">You Have Successfully Signed Up</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    :
                    <section className="text-center vh-100 d-flex justify-content-center align-items-center">
                        <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </section>
            }
        </section>
    );
};

export default ServiceDetails;