/**
 * Copyright (c) 2018 Zhuang Yue
 * All Rights Reserved
 *
 **/

import React, { Component } from "react";
import { FormGroup, Form, Col, Checkbox, Button } from "react-bootstrap";
import OrderRow from "./OrderRow.react";
import OrderRowWithButton from "./OrderRowWithButton.react";

class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

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

    render() {
        return (
            <Form horizontal>
                <OrderRow id="id" name="用户Id" must />
                <OrderRow id="link" name="网站链接" must />
                <OrderRow id="spName" name="商品名称" must />
                <OrderRow id="perPrice" name="单价" must />
                <OrderRow id="amount" name="数量" must />
                <OrderRowWithButton id="color" name="颜色" must />
                <OrderRowWithButton id="size" name="尺寸" must />
                <OrderRow id="discount" name="折扣" must />
                <OrderRow id="comment" name="备注" />
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Checkbox>Remember me</Checkbox>
                    </Col>
                </FormGroup>
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
