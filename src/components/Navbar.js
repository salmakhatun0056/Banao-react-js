import React from 'react';
import Modal from './SignUpModal';

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-white ">
            <div className="container">
                <img src="https://i.ibb.co/mHRybjy/whole.png" alt="" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav mx-auto">
                        <div className="navbar-nav mx-auto">
                            <div className="row height d-flex justify-content-center align-items-center">
                                <div className="col-md-6">
                                    <div className="form">
                                        <i className="fa fa-search"></i>
                                        <input type="text" className="form-control form-input" placeholder="Search for your favorite groups in ATG" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" aria-expanded="false">
                                Create account. <span className='text-primary fw-bold'>It’s free!</span>
                            </a>
                        </li>
                        <Modal />

                    </ul>
                </div>


            </div>

        </nav >

    );
};

export default Navbar;