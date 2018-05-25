/**
 * Copyright (c) 2018 Zhuang Yue
 * All Rights Reserved
 *
 **/

import React, { Component } from "react";
import DcmNavBar from "../utils/DcmNavBar.react";
import OrderPlaceMasterView from "../view/OrderPlaceMasterView.react";
// import GistExamples from "../example/GistExamples.react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../view/Home.react';
import FeedBacks from '../view/FeedBacks.react';

class MainBoard extends Component {
    render() {
        return (
            <Router>
                <div>
                    <DcmNavBar />
                    <Route exact path="/" component={Home} />
                    <Route path="/feedback" component={FeedBacks} />
                    <Route path="/orderplace" component={OrderPlaceMasterView} />
                </div>
            </Router>
        );
    }
}

export default MainBoard;
