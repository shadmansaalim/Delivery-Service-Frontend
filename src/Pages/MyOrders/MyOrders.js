import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css'
import Order from './Order';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';
import img from '../../images/empty.svg';
import box from '../../images/box.png';
const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([])
    const history = useHistory();

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
                    ;
                })

        }
    }, [])


    return (
        <div>
            {
                myOrders.length
                    ?
                    <div class="container mx-auto" style={{ marginTop: 50, marginBottom: 150 }}>
                        <div class="my-lg-0 my-1 mx-auto">
                            <div id="main-content" class="bg-white border">
                                <div class="d-flex flex-column">
                                    <div class="h5">{user.displayName}'s Order History</div>
                                </div>
                                <div class="d-flex my-4 flex-wrap">
                                    <div class="box me-4 my-1 bg-light"> <img src={box} alt="" />
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
                                        ordersState={[myOrders, setMyOrders]}
                                    ></Order>)
                                }


                            </div>
                        </div>
                    </div>
                    :
                    <>
                        {
                            myOrders.length === 0
                                ?
                                <Row>
                                    <Col lg="6" className="mx-auto shadow-lg my-5 p-5 rounded-3 text-center">
                                        <img className="img-fluid mb-3 col-6" src={img} alt="" />
                                        <h3>No Orders</h3>
                                        <p>You have not ordered any items till now. Please order something to view your order history</p>
                                        {/* Navigating the user back to homepage */}
                                        <Button onClick={() => history.push('/home')} variant="outline-warning me-3">Home <FontAwesomeIcon icon={faHome} /></Button>
                                    </Col>
                                </Row>
                                :
                                <section className="text-center d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                                    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                                </section>
                        }
                    </>
            }
        </div>
    );
};

export default MyOrders;