import React from "react";
import MailIcon from '@mui/icons-material/Mail';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-lg-3">
                    <img className="logo" src="logo.png" />
                    <p className="mail"><MailIcon /> xyz@gmail.com</p>
                    <p className="phone"><PhoneInTalkIcon /> 9876543210</p>
                    <div className="link">
                        <FacebookIcon />
                        <TwitterIcon />
                        <LinkedInIcon />
                        <InstagramIcon/>
                    </div>
                </div>
                <div className="footerPart col-lg-3">
                    <h4>Company</h4>
                    <p><a href="#">About Us</a></p>
                    <p><a href="#">Careers</a></p>
                    <p><a href="#">Articles</a></p>
                    <p><a href="#">Press Releases</a></p>
                    <p><a href="#">Become Cashify Partner</a></p>
                    <p><a href="#">Become Supersale Partner</a></p>
                    <p><a href="#">Cashify Fresnchise</a></p>
                </div>
                <div className="footerPart col-lg-3">
                    <h4>Help & Support</h4>
                    <p><a href="#">FAQ</a></p>
                    <p><a href="#">Contact Us</a></p>
                    <p><a href="#">Warranty</a></p>
                    <p><a href="#">Refund Policy</a></p>
                </div>
                <div className="footerPart col-lg-3">
                    <h4>More Info</h4>
                    <p><a href="#">Terms & Conditions</a></p>
                    <p><a href="#">Privacy Policy</a></p>
                    <p><a href="#">Terms of Use</a></p>
                    <p><a href="#">E-Waste Policy</a></p>
                    <p><a href="#">Cookie Policy</a></p>
                    <p><a href="#">GDPR Compilance</a></p>
                </div>
            </div>
            <div className="copyright">
                <hr />
                <p>Copyright 2021 mobileservicedemo. All right reserved. Privacy | Terms of Use</p>
            </div>

        </div>
    )
}

export default Footer;