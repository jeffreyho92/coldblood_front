import React, { Component } from "react";
import "./DiscoverScene.css";
import { Grid, Jumbotron, Button, Row, Col } from "react-bootstrap";
import { config } from "../../config.js";
import axios from "axios";

import Layout from "../../Layout";
import NavBar from "../../Components/NavBar";
import Infinite from "../../Components/Infinite";

class DiscoverScene extends Component {
    componentDidMount() {
        localStorage.setItem("last_route", [this.props.location.pathname, new Date()]);

        var id = "";
        var cat = this.props.match.params.cat;
        switch (cat) {
            case "hype":
                id = 3;
                break;
            case "sport":
                id = 4;
                break;
            case "techwear":
                id = 5;
                break;
            case "local":
                id = 6;
                break;
            case "minimalist":
                id = 7;
                break;
            case "korean":
                id = 8;
                break;
            case "accessories":
                id = 9;
                break;
            default:
                id = "";
        }

        if (id != "") {
            const url = config.api_url + "/front/click_logs";
            axios
                .post(url, {
                    id: id
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }
    render() {
        var cat = this.props.match.params.cat;
        var img_class = null;
        switch (cat) {
            case "hype":
                img_class = "img_cat_hype";
                break;
            case "sport":
                img_class = "img_cat_sport";
                break;
            case "techwear":
                img_class = "img_cat_techwear";
                break;
            case "minimalist":
                img_class = "img_cat_mini";
                break;
            case "korean":
                img_class = "img_cat_korean";
                break;
            case "local":
                img_class = "img_cat_local";
                break;
            case "accessories":
                img_class = "img_cat_accessories";
                break;
            default:
                img_class = null;
        }
        return (
            <Layout nav="discover">
                <div className="title">
                    <div className={"title_img " + img_class}>
                        <em>{cat.toUpperCase()}</em>
                    </div>
                    <div className="title_spacing">&emsp;</div>
                </div>
                <Grid>
                    <Infinite cat={cat} />
                </Grid>
            </Layout>
        );
    }
}

export default DiscoverScene;
