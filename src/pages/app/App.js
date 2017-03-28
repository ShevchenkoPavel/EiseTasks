import React, { Component } from 'react';
import logo from './images/logo.svg';

import avatar from './images/avatar.png';
import burgerheader from './images/burgerheader.png';
import burgersidebar from './images/burgersidebar.png';
import create from './images/create.png';
import del from './images/delete.png';
import edit from './images/edit.png';
import ocular from './images/ocular.png';

import './App.css';


class App extends Component {
	render() {
		return (
			<div>
				<div className = "left">
            <aside className = "sidebar">
			
                <div id = "sidebar__user">
                    <img src={avatar}></img>
                    <p className = "username"> {this.props.name} </p>
                </div> 
			
                <div className = "sidebar__lists">
                    <img src={burgersidebar}></img>
                    <p>списки</p>
                    <img src={create}></img>
                </div>
                <div className = "sidebar__criterions">
                    <a href = "index.html">#важно
					
						<div className = "circle circle_right">
							{this.props.importantNumber}
						</div>					
			
					</a>
                    <a href = "index.html">#срочно
			
					<div className = "circle circle_right">
						{this.props.urgentNumber}
					</div>
			
					</a>
                    <a href = "index.html">#понятно
			
					<div className = "circle circle_right">
						{this.props.understoodNumber}
					</div>
			
					</a>
                </div>
                <div className = "sidebar__other">
                    <a href = "index.html">личный кабинет</a>
                    <a href = "index.html">настройки</a>
                    <a href = "index.html">о нас</a>
                </div>
                <div className = "sidebar__other">
                    <a href = "index.html">выход</a>
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
                        <form>
                            <p><input id = "inputTask" type="text" name="taskName" placeholder="Task"/>
							<input id = "add" type="submit" value="Добавить"/>
							</p>
                        </form>
                </header>
                <h1 id = "h1">{this.props.which} :</h1>
                <h2 id = "important">#важно</h2>
                <div className = "task">
                    <div className = "objstatus">
						<img src=""></img>
						<p className = "subj">зайти за заданием</p>
						<div className = "ops">
							<img className = "ops__item" src={edit}></img>
							<img className = "ops__item" src={del}></img> 
						</div>
					</div>
                </div>
			
            </main>
			
        </div>
			</div>
		);
	}
}


App.propTypes = {
	name: React.PropTypes.string,
	importantNumber: React.PropTypes.number,
	urgentNumber: React.PropTypes.number,
	understoodNumber: React.PropTypes.number,
	which: React.PropTypes.string
};

App.defaultProps = {
	name: 'имя фамилия',
	which: 'на сегодня',
	importantNumber: 4,
	urgentNumber: 1,
	understoodNumber: 6
}

export default App;