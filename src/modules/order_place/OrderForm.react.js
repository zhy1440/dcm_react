/**
 * Copyright (c) 2018 Zhuang Yue
 * All Rights Reserved
 *
 **/

import React, { Component } from "react";
import { FormGroup, Form, Col, Checkbox, Button } from "react-bootstrap";
import OrderRow from "./OrderRow.react";
import OrderRowWithButton from "./OrderRowWithButton.react";
import PicUploadRow from "./PicUploadRow.react";
import { OrderPlaceFields } from "../../enum/OrderFieldEnum";

class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            value: ""
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return "success";
        else if (length > 5) return "warning";
        else if (length > 0) return "error";
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {}

    render() {
        const orderList = OrderPlaceFields;
        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                {orderList[0].map((field) => (
                    <OrderRow id={field.fieldName} name={field.displayName} must ={field.must}/>
                ))}
                {orderList[1].map((field) => (
                    <OrderRowWithButton id={field.fieldName} name={field.displayName} must ={field.must}/>
                ))}
                {orderList[2].map((field) => (
                    <OrderRow id={field.fieldName} name={field.displayName} must ={field.must}/>
                ))}
                <PicUploadRow />
                {/* <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Checkbox>Remember me</Checkbox>
                    </Col>
                </FormGroup> */}
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit">Sign in</Button>
                    </Col>
                </FormGroup>{" "}
            </Form>
        );
    }
}

export default OrderForm;
