import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const AddService = () => {
    // const [service, setService] = useState(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Service Addded')
                }
            })
    }


    return (
        <div className="vh-100">
            <div className="col-lg-6 mx-auto shadow-lg p-3 rounded-3 mt-5">
                <div className="card-body p-md-5 mx-md-4">

                    <div className="text-center">
                        <img src="https://www.packsend.com.au/assets/img/pas-logo.svg" style={{ width: '185px' }} alt="logo" />
                        <p className="mt-3 mb-4 pb-1">We don't deliver boxes we deliver happiness</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p>Add a new service</p>

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingServiceName" placeholder="name@example.com" required  {...register("name")} />
                            <label htmlFor="floatingServiceName">Service Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingServiceId" placeholder="name@example.com" required {...register("sID")} />
                            <label htmlFor="floatingServiceId">Service ID</label>
                        </div>
                        <div class="form-floating mb-3">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingServiceDescription" style={{ height: '100px' }} {...register("description")}></textarea>
                            <label htmlFor="floatingServiceDescription">Description</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingServiceImage" placeholder="name@example.com" required {...register("img")} />
                            <label htmlFor="floatingServiceImage">Image Link</label>
                        </div>
                        <div className="form-floating">
                            <input type="number" className="form-control" id="floatingServicePrice" placeholder="name@example.com" required {...register("price")} />
                            <label htmlFor="floatingServicePrice">Price (AUD)</label>
                        </div>
                        <div className="text-center mt-4">
                            <button className="btn app-blue-btn text-white btn-block mb-3" type="submit">Continue</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddService;