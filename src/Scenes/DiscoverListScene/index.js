import React, { Component } from "react";
import "./DiscoverListScene.css";
import { Grid, Jumbotron, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { config } from "../../config.js";
import axios from "axios";

import Layout from "../../Layout";

class DiscoverListScene extends Component {
    componentDidMount() {
        localStorage.setItem("last_route", [this.props.location.pathname, new Date()]);

        const url = config.api_url + "/front/click_logs";
        axios
            .post(url, {
                id: 2
            })
            .catch(function(error) {
                console.log(error);
            });
    }
    onClickCat(cat) {
        var title = "infinite_" + cat;
        localStorage.removeItem(title);
    }
    render() {
        return (
            <Layout nav="discover">
                <Row className="cat_list">
                    <Col xs={12} md={12} className="cat_list_col">
                        <div className="cat_list_box cat_hype" onClick={this.onClickCat("hype")}>
                            <Link to="/d/hype">
                                <span>Hype</span>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={12} md={12} className="cat_list_col">
                        <div className="cat_list_box cat_sport" onClick={this.onClickCat("sport")}>
                            <Link to="/d/sport">
                                <span>Sport</span>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={12} md={12} className="cat_list_col">
                        <div className="cat_list_box cat_local" onClick={this.onClickCat("local")}>
                            <Link to="/d/local">
                                <span>Local</span>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={12} md={12} className="cat_list_col">
                        <div className="cat_list_box cat_techwear" onClick={this.onClickCat("techwear")}>
                            <Link to="/d/techwear">
                                <span>Techwear</span>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={12} md={12} className="cat_list_col">
                        <div className="cat_list_box cat_mini" onClick={this.onClickCat("minimalist")}>
                            <Link to="/d/minimalist">
                                <span>Minimalist</span>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={12} md={12} className="cat_list_col">
                        <div className="cat_list_box cat_korean" onClick={this.onClickCat("korean")}>
                            <Link to="/d/korean">
                                <span>Korean</span>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={12} md={12} className="cat_list_col">
                        <div className="cat_list_box cat_accessories" onClick={this.onClickCat("accessories")}>
                            <Link to="/d/accessories">
                                <span>Accessories</span>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default DiscoverListScene;
