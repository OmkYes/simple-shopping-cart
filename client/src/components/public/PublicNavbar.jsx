import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const PublicNavbar = () => {

    return (
        <nav style={{ backgroundColor: 'purple' }} className="navbar navbar-expand-lg navbar-dark shadow-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand fst-italic fw-bold">
                    Ecommerce <i className="bi bi-geo-fill"></i>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="d-flex align-items-center gap-2 ms-auto">
                        <Link className="btn text-light fw-bold bi bi-cart4" to="/cart">  Cart
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default PublicNavbar;
