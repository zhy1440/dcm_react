/**
 * Copyright (c) 2018 Zhuang Yue
 * All Rights Reserved
 *
 **/

import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Col } from "react-bootstrap";

class PicUploadRow extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();

        this.handlePaste = (e) => {
            const cbData = e.clipboardData;
            let regexp = /^image\//;

            if (cbData) {
                for (let index = 0; index < cbData.items.length; index++){
                    if (cbData.items[index].type.match(regexp)) {
                        let reader = new FileReader();
                        reader.onload = (event) => {
                            var canvas = document.getElementById("canvas");
                            var ctx = canvas.getContext("2d");
                            var img = new Image();
                            img.src = event.target.result;
                            img.onload = function() {
                                canvas.width = img.width;
                                canvas.height = img.height;
                                ctx.drawImage(img, 0, 0);
                            };
                        };
                        // reader.onload = (event)=> {//# 注意这里是异步的哦
                        // getImageData event.target.result, (data)->
                        console.log(cbData.items[index].getAsFile());
                        reader.readAsDataURL(cbData.items[index].getAsFile());
                    } else if (cbData.items[index].kind === "string") {
                        console.log(cbData.getData("text"));
                    }
                }
            }
        };
    }

    render() {
        return (
            <div>
                <FormGroup controlId="formControlsTextarea">
                    <Col sm={2}>
                        <ControlLabel>Textarea</ControlLabel>
                    </Col>
                    <Col sm={8}>
                        <FormControl
                            componentClass="textarea"
                            placeholder="textarea"
                            onPaste={this.handlePaste}
                        />
                    </Col>
                </FormGroup>
                <Col smOffset={2} sm={8}>
                    <canvas id="canvas" />
                </Col>
                <Col sm={2} />
            </div>
        );
    }
}

export default PicUploadRow;
