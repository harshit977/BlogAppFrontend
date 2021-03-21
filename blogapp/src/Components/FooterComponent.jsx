import React from 'react';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <div className="footer" style={{backgroundColor:"Menu"}}>
        <div className="container" style={{padding:10}}>
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Explore</h5>
                    <ul className="list-unstyled">
                        <li><Link to={{pathname:'/'}}>Home</Link></li>
                        <li><Link to="/allblogs">All Blogs</Link></li>
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Reach Us</h5>
		              <i className="fa fa-phone fa-lg" style={{padding:10}}></i>: +91-9823679125<br />
		              <i className="fa fa-fax fa-lg" style={{padding:10}}></i>: +911-22752186<br />
		              <i className="fa fa-envelope fa-lg" style={{padding:10}}></i>: <a href="mailto:blogapp@domain.net">
                         blogapp@domain.net</a>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                <h5>Follow Us Here ...</h5>
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-lg fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-lg fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-lg fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-lg fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-lg fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto" style={{fontFamily:'cursive',color:'black',paddingTop:10}}>
                    <p>© Copyright 2021 BlogApp</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;
