/**
 * Copyright (c) 2018 Zhuang Yue
 * All Rights Reserved
 *
 **/

import React, { Component } from "react";
import OrderForm from "../modules/order_place/OrderForm.react";
import { Panel } from "react-bootstrap";

class OrderPlaceMasterView extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Panel>
                <Panel.Heading>lalala</Panel.Heading>
                <Panel.Body>
                    <OrderForm />
                </Panel.Body>
            </Panel>
        );
    }
}

export default OrderPlaceMasterView;
