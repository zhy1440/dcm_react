/**
 * Copyright (c) 2018 Zhuang Yue
 * All Rights Reserved
 *
 **/

import React, { Component } from "react";
import OrderForm from "../modules/order_place/OrderForm.react";
import { Panel, PageHeader, Row, Col, TabContainer } from "react-bootstrap";
import { Tree } from "react-ui-tree";

class OrderPlaceMasterView extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="container">
                <Row>
                    <Col sm={3} md={2} className="sidebar">
                        {/* <Tree></Tree> */}
                        <div className="nav nav-sidebar">lalala</div>
                    </Col>
                    <Col smOffset={3} sm={9} mdOffset={2} md={10}>
                        <PageHeader bsClass="left">
                            捞单录入<small>新建</small>
                        </PageHeader>
                        <OrderForm />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default OrderPlaceMasterView;
