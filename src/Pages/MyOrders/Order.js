import React from 'react';
const Order = (props) => {
    const { _id, itemDescription, status, step } = props.order;
    const [myOrders, setMyOrders] = props.ordersState;

    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingUsers = myOrders.filter(order => order._id !== id);
                        setMyOrders(remainingUsers);
                        alert('We have successfully deleted');
                        
                    }
                })
        }
    }


    return (
        <div class="order row my-3 bg-light d-flex-md align-items-center rounded-3">
            <div className="col-lg-6">
                <p>Order ID : {_id}</p>
                <p>Item : {itemDescription}</p>
                <p>Delivery Status : {status}</p>
                <button onClick={() => handleDeleteUser(_id)} className={step >= 4  ? "d-none" : "btn btn-outline-danger"}>Cancel Order</button>
            </div>
             <div class="progressbar-track col-lg-6 ms-auto">
                        <ul class="progressbar">
                            <li id="step-1" class={step >= 1 ? "text-muted green" : "text-muted"}> <span class="fas fa-gift"></span> </li>
                            <li id="step-2"  class={step >= 2 ? "text-muted green" : "text-muted"}> <span class="fas fa-check"></span> </li>
                            <li id="step-3"  class={step >= 3 ? "text-muted green" : "text-muted"}> <span class="fas fa-box"></span> </li>
                            <li id="step-4"  class={step >= 4 ? "text-muted green" : "text-muted"}> <span class="fas fa-truck"></span> </li>
                            <li id="step-5"  class={step >= 5 ? "text-muted green" : "text-muted"}> <span class="fas fa-box-open"></span> </li>
                        </ul>
                        <div id="tracker"></div>
            </div>
        </div>
    );
};

export default Order;