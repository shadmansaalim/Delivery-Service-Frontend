import React from 'react';
import './ManageOrders.css';
import { useState } from 'react';
import { useEffect } from 'react';
import swal from 'sweetalert';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, [])

    const handleDeleteOrder = (id, name) => {
        swal({
            title: "Are you sure?",
            text: `Order of ${name} will be cancelled!`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const url = `http://localhost:5000/orders/${id}`;
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                const remainingOrders = allOrders.filter(order => order._id !== id);
                                setAllOrders(remainingOrders);


                            }
                        })
                    swal("Order Cancelled Successfully", {
                        icon: "success",
                    });

                }
            });

    }

    const updateOrderStatus = (e, id) => {
        const updatedStatus = e.target.value;
        console.log(updatedStatus);
        swal({
            title: "Are you sure?",
            text: `Order Status will be updated to ${updatedStatus}`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willUpdate) => {
                if (willUpdate) {
                    const url = `http://localhost:5000/ordersUpdate/${id}`;
                    fetch(url, {
                        method: "PUT",
                        headers: {
                            "content-type": "application/json"

                        },
                        body: JSON.stringify([updatedStatus])
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.modifiedCount > 0) {
                                swal("Order Updated Successfully", {
                                    icon: "success",
                                });
                            }
                        })

                }
            });
    }
    return (
        <div class="container mx-auto table-responsive text-nowrap vh-100 mt-5">
            {
                allOrders.length
                    ?
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Sender</th>
                                <th>Sender Address</th>
                                <th>Receiver</th>
                                <th>Receiver Address</th>
                                <th>Service</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allOrders.map(order =>
                                    <tr>
                                        <th scope="row">{order._id}</th>
                                        <td>{order.senderName}</td>
                                        <td>{order.senderAddress}</td>
                                        <td>{order.receiverName}</td>
                                        <td>{order.receiverAddress}</td>
                                        <td>{order.serviceTaken}</td>
                                        <td>
                                            <select class="form-select mb-3 bg-warning" aria-label=".example" onChange={(e) => {
                                                updateOrderStatus(e, order._id);
                                            }}>
                                                <option selected>{order.status}</option>
                                                <option value="Accepted">Accepted</option>
                                                <option value="Collected">Collected</option>
                                                <option value="Shipped">Shipped</option>
                                                <option value="Delivered">Delivered</option>
                                            </select>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDeleteOrder(order._id, order.senderName)} class="btn btn-sm btn-outline-danger">Cancel Order</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    :
                    <section className="text-center vh-100 d-flex justify-content-center align-items-center">
                        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </section>
            }
        </div>


    );
};

export default ManageOrders;