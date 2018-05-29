/**
 * Copyright (c) 2018 Zhuang Yue
 * All Rights Reserved
 *
 **/

import React, { Component } from "react";
import {
    FormGroup,
    Col,
    FormControl,
    ControlLabel,
    HelpBlock,
    InputGroup,
    Button
} from "react-bootstrap";

class OrderRowWithButton extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);

        this.state = {
            value: "",
            validate: null,
            errMessage: ""
        };
        this.handleClick = () => {
            this.setState({ value: "无" });
            this.setState({ validate: "" });
        };
    }

    // getValidationState(value) {
    //     const length = value.length;
    //     // const length = this.state.value.length;
    //     if (length > 10) return "success";
    //     else if (length > 5) return "warning";
    //     else if (length > 0) return "error";
    //     return null;
    // }

    getNullValidation() {
        const length = this.state.value.length;
        if (length === 0) {
            this.setState({ errMessage: "不能为空" });
            return "error";
        }
        else {
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
                    <InputGroup>
                        <InputGroup.Button>
                            <Button onClick={this.handleClick}>无</Button>
                        </InputGroup.Button>
                        <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder={must ? "必填" : ""}
                            onChange={this.handleChange}
                            onBlur={must ? this.handleBlur : null}
                        />
                        <FormControl.Feedback />
                    </InputGroup>
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

export default OrderRowWithButton;
