import React from 'react';
import './style.css';
import Logo from '../assets/sports-logo-transparent.png';
class footer extends React.Component {
	render() {
		return (
			<div className="foot">
				<footer class="page-footer">
					<div class="container">
						<div class="row">
							<div class="col l6 s12">
								<img className="logo" src={Logo} />
								{/* <h5 class="white-text"></h5> */}
								<p class="grey-text text-lighten-4">Go fight for it Team!</p>
							</div>
							<div class="col l4 offset-l2 s12">
								<h5 class="white-text">Contact US:</h5>
								<h6 class="white-text"> Mobile: +91999999999 ,<br/>
									Address: LCO Basketball Ground, <br/> 55 - Fictional Homes, Fictional Road <br/> Near
									Fictional Lake. <br/> India
								</h6>
							</div>
						</div>
					</div>
					<div class="footer-copyright ">
						<div class="container" style={{textAlign: "center"}}>© 2020 Copyright Text</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default footer;
