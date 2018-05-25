/**
 * Copyright (c) 2018 Zhuang Yue
 * All Rights Reserved
 *
 **/

import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

class GistExamples extends Component {
    // constructor(props) {
    //     super(props);
    // }

    state = {
        gist: null
    };

    componentDidMount() {
        fetch("https://api.github.com/gists")
            .then((res) => res.json())
            .then((gists) => {
                this.setState({ gists });
            });
    }
    render() {
        // const { gist } = this.state;
        return (
            <Router>
            </Router>
        );
    }
}

export default GistExamples;
