import React from 'react';
import swal from 'sweetalert';
import { useState } from 'react';
import { useEffect } from 'react';

const Order = (props) => {
    const { _id, itemDescription, status, receiverName, receiverPhone, receiverAddress } = props.order;
    const [myOrders, setMyOrders] = props.ordersState;
    const [step, setStep] = useState(1);

    useEffect(() => {
        if (status === 'Pending') {
            setStep(1);
        }
        else if (status === 'Accepted') {
            setStep(2);
        }
        else if (status === 'Collected') {
            setStep(3);
        }
        else if (status === 'Shipped') {
            setStep(4);
        }
        else if (status === 'Delivered') {
            setStep(5);
        }
    }, [])
    const handleDeleteOrder = id => {
        swal({
            title: "Are you sure?",
            text: `Your order of ${itemDescription} will be cancelled!`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const url = `https://eerie-blood-54641.herokuapp.com/orders/${id}`;
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                const remainingOrders = myOrders.filter(order => order._id !== id);
                                setMyOrders(remainingOrders);


                            }
                        })
                    swal("Order Cancelled Successfully", {
                        icon: "success",
                    });

                }
            });

    }


    return (
        <div class="order row my-3 bg-light d-flex-md align-items-center rounded-3">
            <div className="col-lg-6">
                <p>Order ID : {_id}</p>
                <p>Item : {itemDescription}</p>
                <p>Delivery Status : <span class={step >= 4 ? "bg-success p-2 text-white" : "bg-dark p-2 text-white"}>{status}</span></p>
                <p>Receiver : {receiverName}</p>
                <p>Phone : {receiverPhone}</p>
                <p>Address : {receiverAddress}</p>
                <button onClick={() => handleDeleteOrder(_id)} className={step >= 4 ? "d-none" : "btn btn-outline-danger"}>Cancel Order</button>
            </div>
            <div class="progressbar-track col-lg-6 ms-auto">
                <ul class="progressbar">
                    <li id="step-1" class={step >= 1 ? "text-muted green" : "text-muted"}> <span class="fas fa-gift"></span> </li>
                    <li id="step-2" class={step >= 2 ? "text-muted green" : "text-muted"}> <span class="fas fa-check"></span> </li>
                    <li id="step-3" class={step >= 3 ? "text-muted green" : "text-muted"}> <span class="fas fa-box"></span> </li>
                    <li id="step-4" class={step >= 4 ? "text-muted green" : "text-muted"}> <span class="fas fa-truck"></span> </li>
                    <li id="step-5" class={step >= 5 ? "text-muted green" : "text-muted"}> <span class="fas fa-box-open"></span> </li>
                </ul>
                <div id="tracker"></div>
            </div>
        </div>
    );
};

export default Order;