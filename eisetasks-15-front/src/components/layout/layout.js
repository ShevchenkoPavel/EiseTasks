import React, { Component } from 'react';

import burgerheader from './images/burgerheader.png';

import './style.css';

import Sidebar from '../sidebar/sidebar';
import Content from '../content/content';
import MenuItem from '../menuItem/menuItem';


				/*
				<Sidebar name={this.props.name}>
				</Sidebar>
				*/

class Layout extends Component {
	
	constructor(props) {
		super(props);
		this.state = {important: false,
					  urgent: false,
					  understood: false
					 };
	}
	
	render() {
		return (
			<div>
			
			<Sidebar name={this.props.name}>
				</Sidebar>
				
				<Content>			
					<header className="header">
			
							<nav className="menu">
			
								<a href="index.html" id="burgerheader"><img src={burgerheader} alt="burger"></img></a>
			
								<MenuItem link={this.props.todoLink} name="сегодня" number={this.props.todoNumber}></MenuItem>
			
								<p className="menu">|</p>
			
								<MenuItem link={this.props.laterLink} name="потом" number={this.props.laterNumber}></MenuItem>
			
								<p className="menu">|</p>
			
								<MenuItem link={this.props.doneLink} name="выполненные" number={this.props.doneNumber}></MenuItem>
			
							</nav>
					
					</header>

				</Content>
 
			{this.props.children}
			</div>
		);
	}
}


Layout.propTypes = {
	name: React.PropTypes.string,
	
	importantNumber: React.PropTypes.number,
	urgentNumber: React.PropTypes.number,
	understoodNumber: React.PropTypes.number,
	
	todoLink: React.PropTypes.string,
	todoNumber: React.PropTypes.number,
	
	laterLink: React.PropTypes.string,
	laterNumber: React.PropTypes.number,
	
	doneLink: React.PropTypes.string,
	doneNumber: React.PropTypes.number,
};

Layout.defaultProps = {
	name: 'имя фамилия',
	
	todoLink: '/todo',
	laterLink: '/later',
	doneLink: '/done',
	
	todoNumber: 0,
	laterNumber: 0,
	doneNumber: 0
}

export default Layout;
