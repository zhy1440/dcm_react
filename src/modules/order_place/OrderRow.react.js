/**
 * Copyright (c) 2018 Zhuang Yue
 * All Rights Reserved
 *
 **/

import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormGroup, Col, FormControl, ControlLabel, HelpBlock } from "react-bootstrap";

class OrderRow extends Component {
    static get propTypes() {
        return {
            id: PropTypes.string,
            name: PropTypes.string,
            must: PropTypes.bool
        };
    }

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);

        this.state = {
            value: "",
            validate: null,
            errMessage: ""
        };
    }

    getNullValidation() {
        const length = this.state.value.length;
        if (length === 0) {
            this.setState({ errMessage: "不能为空" });
            return "error";
        } else{
            return "success";
        }
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleBlur(e) {
        this.setState({ validate: this.getNullValidation() });
    }

    render() {
        const { id, name, must = false, children } = this.props;
        return (
            <FormGroup controlId={id} validationState={this.state.validate}>
                <Col componentClass={ControlLabel} className="text-left" sm={2}>
                    {must ? <span className="text-danger">*</span> : null}
                    {name}:
                </Col>
                <Col sm={8}>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder={must ? "必填" : ""}
                        onChange={this.handleChange}
                        onBlur={must ? this.handleBlur : null}
                    />
                    <FormControl.Feedback />
                </Col>
                <Col sm={2}>
                    <span>
                        {children}
                        <HelpBlock>{this.state.errMessage}</HelpBlock>
                    </span>
                </Col>
            </FormGroup>
        );
    }
}

export default OrderRow;
