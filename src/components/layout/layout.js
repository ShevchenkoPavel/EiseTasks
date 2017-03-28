import React, { Component } from 'react';

import burgersidebar from '../../pages/app/images/burgersidebar.png';
import burgerheader from '../../pages/app/images/burgerheader.png';
import create from '../../pages/app/images/create.png';

import './style.css';
import User from '../user/user';
import AddForm from '../addForm/addForm';
import Task from '../task/task';
import Which from '../which/which';
import Criterion from '../criterion/criterion';

class Layout extends Component {
	render() {
		return (
			<div>
				<div className="left">
					<aside className="sidebar">

						<User></User>

						<div className="sidebar__lists">
							<img src={burgersidebar}
								alt="burger"></img>
							<p>списки</p>
							<img src={create}
								alt="create"></img>
						</div>

						<div className="sidebar__criterions">
							<a href="index.html">#важно	
								<div className="circle circle_right">
									{this.props.importantNumber}
								</div>					
							</a>

							<a href="index.html">#срочно
							<div className="circle circle_right">
								{this.props.urgentNumber}
							</div>
							</a>

							<a href="index.html">#понятно
							<div className="circle circle_right">
								{this.props.understoodNumber}
							</div>
							</a>
						</div>

						<div className="sidebar__other">
							<a href="index.html">личный кабинет</a>
							<a href="index.html">настройки</a>
							<a href="index.html">о нас</a>
						</div>
						<div className="sidebar__other">
							<a href="index.html">выход</a>
						</div>
					</aside>
				</div>
			
				<div className = "right">
				<main className = "content">
					<header className = "header">
							<nav className = "menu">
								<a href="index.html" id = "burgerheader"><img src={burgerheader}></img></a>
								<a href = "index.html">
									сегодня 
									<div className = "circle nofloat">
										9
									</div>
								</a>
								<p className = "menu">|</p>
								<a href = "index.html">
									потом
									<div className = "circle">
										20
									</div>
								</a>
								<p className = "menu">|</p>
								<a href = "index.html">
									выполненные
									<div className = "circle nofloat">
										30
									</div>
								</a>
							</nav>
							
						<AddForm></AddForm>
					
					</header>
			
					<Which></Which>
			
					<Criterion></Criterion>
			
					<Task></Task>

				</main>

			</div>
 
			</div>
		);
	}
}


Layout.propTypes = {
};

Layout.defaultProps = {
}

export default Layout;
