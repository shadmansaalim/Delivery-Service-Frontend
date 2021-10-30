import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css'
import Order from './Order';
const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([])

    useEffect(() => {
        if (user.email) {
            fetch('http://localhost:5000/myOrders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(result => {
                    setMyOrders(result);
;                })

        }
    }, [])


    return (
        <div style={{ marginTop: 50, marginBottom: 150 }}>
            <div class="container mx-auto">
                <div class="my-lg-0 my-1 mx-auto">
                    <div id="main-content" class="bg-white border">
                        <div class="d-flex flex-column">
                            <div class="h5">{user.displayName}'s Order History</div>
                        </div>
                        <div class="d-flex my-4 flex-wrap">
                            <div class="box me-4 my-1 bg-light"> <img src="https://www.freepnglogos.com/uploads/box-png/cardboard-box-brown-vector-graphic-pixabay-2.png" alt="" />
                                <div class="d-flex align-items-center mt-2">
                                    <div class="tag">Orders placed</div>
                                    <div class="mx-auto number">{myOrders.length}</div>
                                </div>
                            </div>
                        </div>
                        <div class="text-uppercase">My recent orders</div>
                        {
                            myOrders.map(order => <Order
                                key={order._id}
                                order={order}
                                ordersState={[myOrders,setMyOrders]}
                            ></Order>)
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;