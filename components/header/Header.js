import React from 'react';
import Link from 'next/link';
import './header.styles.css';

class Header extends React.Component{
	constructor(){
	    super();
	    this.state = {
	    	displayMenu: false
	    }
	  }

	  showHideMenu = () =>{
	  	this.setState({
	  		displayMenu: !this.state.displayMenu
	  	});
	  }

  render(){

  	const { displayMenu } = this.state

	//Controls class of menu item
	let menuClass;
	if (displayMenu){
		menuClass = 'header-menu visible-menu';
	} else {
		menuClass = 'header-menu';
	}

  	return(
  		<header>
			<div className="row">
				<div className="col-10 col-lg-3">
					<Link href="/">
						<img src="./../../static/logo.png" alt="Header logo" className="header-logo pointer"/>
					</Link>
				</div>
				<div className="col-2 menu-icon father-vertical only-mobile" onClick={this.showHideMenu}>
					<img src="./../../static/menu.svg" className="child-vertical" />
				</div>
				<div className="col-12 offset-lg-4 col-lg-5">
					<span className={menuClass}>
						<Link href="/#gallery"><a>Home</a></Link>
						<Link href="/#shop"><a>Shop</a></Link>
						<Link href="/#trivia"><a>Did You Know?</a></Link>
						<Link href="/#merry-christmas"><a>Merry Christmas!</a></Link>
					</span>
				</div>
			</div>
	</header>
	
)
  }
};

export default Header;