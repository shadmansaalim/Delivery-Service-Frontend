import React from 'react';
const Order = ({ order }) => {
    const { _id, itemDescription, status } = order;

    return (
        <div class="order row my-3 bg-light d-flex-md align-items-center rounded-3">
            <div className="col-lg-6">
                <p>Order ID : {_id}</p>
                <p>Item : {itemDescription}</p>
                <p>Delivery Status : {status}</p>
                <button className="btn btn-outline-danger">Cancel Order</button>
            </div>
             <div class="progressbar-track col-lg-6 ms-auto">
                        <ul class="progressbar">
                            <li id="step-1" class={status === 'Pending' ? "text-muted green" : "text-muted"}> <span class="fas fa-gift"></span> </li>
                            <li id="step-2"  class={status === 'Accepted' ? "text-muted green" : "text-muted"}> <span class="fas fa-check"></span> </li>
                            <li id="step-3"  class={status === 'Packed' ? "text-muted green" : "text-muted"}> <span class="fas fa-box"></span> </li>
                            <li id="step-4"  class={status === 'Shipped' ? "text-muted green" : "text-muted"}> <span class="fas fa-truck"></span> </li>
                            <li id="step-5"  class={status === 'Delivered' ? "text-muted green" : "text-muted"}> <span class="fas fa-box-open"></span> </li>
                        </ul>
                        <div id="tracker"></div>
            </div>
        </div>
    );
};

export default Order;