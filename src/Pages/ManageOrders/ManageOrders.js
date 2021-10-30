import React from 'react';
import './ManageOrders.css';
import { useState } from 'react';
import { useEffect } from 'react';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([1,2,3,4,5,6]);

    useEffect(() => {

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
                  allOrders.map(order => 
                  <tr>
                    <th scope="row">9439423021312312</th>
                    <td>Saalim</td>
                    <td>Nasirabad</td>
                    <td>Ibnul</td>
                    <td>CDA</td>
                    <td>Person to Person Delivery</td>
                    <td class="dropdown">
                       <button class="btn btn-primary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          Pending
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
              }
          </tbody>


        </table>
      </div>


    );
};

export default ManageOrders;