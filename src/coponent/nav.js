import React from 'react';
import Logo from '../assets/sports-logo-transparent.png'
import '../coponent/style.css';
import { BrowserRouter, Link, Route,Switch } from 'react-router-dom';
import Contact from '../pagee/Contact';
import About from '../pagee/About';
import Home from '../pagee/Home';
import Team from '../pagee/Team';
import Tournament from '../pagee/Tournament'

class nav extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<nav>
					<div class="nav-wrapper navbar">
						<a href="#" class="brand-logo">
							<img className='logo' src={Logo} />
						</a>
						<ul id="nav-mobile" class="right hide-on-med-and-down">
							<li>
								<Link  to="/"> Home</Link>
							</li>
							<li>
								<Link to="/Team">Team </Link>
							</li>
							<li>
								<Link to="/Tournament">Tournament </Link>
							</li>
							<li>
								<Link to="/About">About Us</Link>
							</li>
							<li>
								<Link to="/Contact"> Contact Us</Link>
							</li>
						</ul>
					</div>
				</nav>
				<Switch>
        <Route path="/Contact" component={Contact} ></Route>
        <Route exact path="/" component={Home}></Route>
         <Route path="/About" component={About}></Route>
         <Route path="/Tournament" component={Tournament}></Route>
         <Route path="/Team" component={Team}></Route>
		 </Switch>
			</BrowserRouter>
		);
	}
}

export default nav;
