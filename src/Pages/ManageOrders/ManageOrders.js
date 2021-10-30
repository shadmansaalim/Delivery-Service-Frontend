import React from 'react';
import './ManageOrders.css';
import { useState } from 'react';
import { useEffect } from 'react';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
        .then(res => res.json())
        .then(data => setAllOrders(data));
    },[])
    return (

            <div class="container mx-auto table-responsive text-nowrap" style={{marginBottom: '120px', marginTop: '120px'}}>
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
                  allOrders.length
                  ?
                  allOrders.map(order => 
                    <tr>
                      <th scope="row">{order._id}</th>
                      <td>{order.senderName}</td>
                      <td>{order.senderAddress}</td>
                      <td>{order.receiverName}</td>
                      <td>{order.receiverAddress}</td>
                      <td>Person to Person Delivery</td>
                      <td class="dropdown">
                         <button class="btn btn-primary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                         {order.status}
                          </button>
                          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                             <li><a class="dropdown-item" href="!#">Accepted</a></li>
                             <li><a class="dropdown-item" href="!#">Collected</a></li>
                             <li><a class="dropdown-item" href="!#">Shipped</a></li>
                             <li><a class="dropdown-item" href="!#">Delivered</a></li>
                          </ul>
                      </td>
                      <td>
                      <button class="btn btn-sm btn-outline-danger">Cancel Order</button>
                      </td>
                    </tr>
                  )
                  :
                  null
              }
          </tbody>


        </table>
      </div>


    );
};

export default ManageOrders;