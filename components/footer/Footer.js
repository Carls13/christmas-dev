import React from "react";
import './footer.styles.css';

function Footer(){
    return(
		   	<footer>
		         <div className="row" id="merry-christmas">
		   			<div className="col-12 col-lg-6 p-4 mt-4">
	   					<h3 className="text-center">“As long as we know in our hearts what Christmas ought to be, Christmas is.”</h3>
	   					<h6 className="text-center p-3"> — Eric Sevareid</h6>
	   					<h4 className="text-center mt-4">We wish you a Merry Christmas 2019</h4>
	   					<h4 className="text-center">and a Happy New Year 2020!</h4>
		   			</div>
					<div className="col-12 col-lg-6 p-4 mt-4">
						<img src="./../static/logo.png" alt="Christmas" className="center-image footer-logo"/>	
					</div>
		         </div>
		   	</footer>
 );

}

export default Footer;