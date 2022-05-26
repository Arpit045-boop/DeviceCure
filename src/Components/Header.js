import React from 'react';
function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand " href="#"><img src="logo.png"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Contact</a>
                            </li>
                            <button type="button" className="btn btn-light mx-5 my-2">Sign in</button>

                        </ul>

                    </div>
                </div>
            </nav>

            <div className="row-title row">
                <div className="col-lg-6">
                    <h1 className="big-heading " >Doorstep Mobile Repair in Jaipur Rajasthan</h1>
                    <button type="button" className="btn btn-dark btn-lg contact-button">Contact Us</button>
                </div>
                <div className="col-lg-6">
                    <img className="mobile" src="samle.jpg" />
                </div>
            </div>
        </header>
    );
}

export default Header;