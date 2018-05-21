import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import FooterBar from "./Components/FooterBar";
import { Modal, Button } from "react-bootstrap";
import ios_share from "../src/img/ios_share.png";

export default class extends Component {
	constructor(props) {
		super(props);

		var show_ios_banner = { display: "none" };
		const isInStandaloneMode = window.matchMedia("(display-mode: standalone)").matches;
		const isIos = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
		console.log(isIos, isInStandaloneMode);
		if (isIos && !isInStandaloneMode) {
			show_ios_banner = {};
		}

		this.state = {
			show: show_ios_banner
		};

		this.handleClose = this.handleClose.bind(this);
	}
	handleClose() {
		this.setState({
			show: false
		});
	}

	componentWillMount() {}
	render() {
		return (
			<div>
				<div id="pwa_banner_ios" style={this.state.show}>
					<p>
						Install app: Tap
						<img src={ios_share} width="25" />
						then 'Add to Home Screen' (Safari)
					</p>
				</div>
				<NavBar active={this.props.nav} />
				{this.props.children}
				<FooterBar />
				{/*
				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton />
					<p>asb</p>
				</Modal>
*/}
			</div>
		);
	}
}
