import React, { Component } from "react";
import ReactDOM from "react-dom";
import InfiniteScroll from "react-infinite-scroller";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import "./Infinite.css";
import { config } from "../config.js";

class Infinite extends Component {
    constructor(props) {
        super(props);

        const cat = this.props.cat ? this.props.cat : "";
        const title = "infinite_" + cat;
        let infinite = {
            imageList: [],
            hasMoreItems: true,
            currentPage: 0
        };
        console.log("constructor");
        if (localStorage.getItem(title)) {
            infinite = JSON.parse(localStorage.getItem(title));
        }

        this.state = {
            imageList: infinite.imageList,
            hasMoreItems: infinite.hasMoreItems,
            nextHref: null,
            currentPage: infinite.currentPage,
            title: title
        };
    }

    loadItems(page) {
        console.log("loadItems");
        var self = this;

        var currentPage = self.state.currentPage;
        console.log(currentPage);
        var api_url = "";
        if (this.props.cat) {
            api_url = `${config.api_url}/front/lists?page=${currentPage}&cat=${this.props.cat}`;
        } else if (this.props.user) {
            api_url = `${config.api_url}/api/user/images/?page=${currentPage}&username=${this.props.user}`;
        } else {
            api_url = `${config.api_url}/front/lists?page=${currentPage}`;
        }
        console.log(api_url);

        axios.get(api_url).then(res => {
            var result = [];
            console.log(res);
            res.data.map(data => {
                var arr = [data.click_link, data.img_link];
                result.push(arr);
            });
            var hasMoreItems = true;
            if (result.length < 3) {
                hasMoreItems = false;
            }
            var imageList = self.state.imageList;
            imageList.push(result);
            self.setState({
                imageList: imageList,
                hasMoreItems: hasMoreItems,
                currentPage: ++currentPage
            });

            var obj = {
                imageList: imageList,
                hasMoreItems: hasMoreItems,
                currentPage: currentPage
            };
            localStorage.setItem(self.state.title, JSON.stringify(obj));
        });
    }

    componentWillMount() {
        /*
        //this.loadItems(1);
        console.log("componentWillMount");
        //scoll to last row
        var size = Object.keys(this.refs).length;
        console.log("size" + size);
        if (size != 0) {
            var rp = "rp" + (size - 1);
            //var rp = "rp0";
            let node = ReactDOM.findDOMNode(this.refs[rp]);
            window.scrollTo(0, node.offsetTop);
        }
        */
    }
    componentDidMount() {
        //scoll to last row
        var size = Object.keys(this.refs).length;
        if (size > 0) {
            var rp = "rp";
            if (size == 1) {
                rp += size - 1;
            } else {
                rp += size - 2;
            }
            //var rp = "rp0";
            let node = ReactDOM.findDOMNode(this.refs[rp]);
            window.scrollTo(0, node.offsetTop);
        }
        /*
        let node = ReactDOM.findDOMNode(this.refs["rp1"]);
        console.log(node);
        if (node) {
            window.scrollTo(0, node.offsetTop);
            console.log(node.offsetTop);
        }
        //window.scrollTo(0, 500);
        console.log("window.scrollTo");
        */
    }

    render() {
        const loader = (
            <div id="loader_padding">
                <div className="loader" id="loader" />
            </div>
        );
        var items = [];

        this.state.imageList.map((track, i) => {
            var content = (
                <Row className="show-grid img_row" ref={"rp" + i} key={i}>
                    {track.map(function(row, i) {
                        return (
                            <Col xs={6} md={4} key={i} className="img_box">
                                {/*<a href={"/p/"+row[0]}>
                                <img src={row[1]} className="img" />
                                </a>*/}
                                <a href={row[0]} target="_blank" rel="noopener">
                                    <img
                                        src={row[1]}
                                        className="img"
                                        onError={e => {
                                            e.target.src = "blank.png";
                                        }}
                                    />
                                </a>
                            </Col>
                        );
                    })}
                </Row>
            );
            items.push(content);
        });

        return (
            <InfiniteScroll pageStart={0} loadMore={this.loadItems.bind(this)} hasMore={this.state.hasMoreItems} loader={loader}>
                <div className="imageList">{items}</div>
            </InfiniteScroll>
        );
    }
}

export default Infinite;
