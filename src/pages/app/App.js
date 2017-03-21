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
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class Now extends Component {
	render() {
		return (
			<div className = "Now">
				<div className = "left">
            <aside className = "sidebar">
                <div id = "sidebar__user">
                    <img src={avatar}></img>
                    <p className = "username">имя фамилия</p>
                </div>
                <div className = "sidebar__lists">
                    <img src={burgersidebar}></img>
                    <p>списки</p>
                    <img src={create}></img>
                </div>
                <div className = "sidebar__criterions">
                    <a href = "index.html">#важно
					
						<div className = "circle">
							<span>
								4
							</span>
						</div>					
			
					</a>
                    <a href = "index.html">#срочно
			
					<div className = "circle">
						<span>
							1
						</span>
					</div>
			
					</a>
                    <a href = "index.html">#понятно
			
					<div className = "circle">
						<span>
							6
						</span>
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
									<span>
									9
									</span>
								</div>
							</a>
                            <p className = "menu">|</p>
                            <a href = "index.html">
								потом
									<div className = "circle nofloat">
									<span>
									20
									</span>
								</div>
							</a>
                            <p className = "menu">|</p>
                            <a href = "index.html">
								выполненные
								<div className = "circle nofloat">
									<span>
									30
									</span>
								</div>
							</a>
                        </nav>
                        <form>
                            <p><input id = "srch" type="search" name="search" placeholder="найти"/>
                            <button id = "add">Добавить</button>
							</p>
                        </form>
                </header>
                <h1 id = "h1">на сегодня :</h1>
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

export default Now;
