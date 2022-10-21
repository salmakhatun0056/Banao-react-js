import React from 'react';
import Modal from './SignUpModal';

const Navbar = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-white ">
            <div class="container">
                <img src="https://i.ibb.co/mHRybjy/whole.png" alt="" />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="navbar-nav mx-auto">
                        <div class="navbar-nav mx-auto">
                            <div class="row height d-flex justify-content-center align-items-center">
                                <div class="col-md-6">
                                    <div class="form">
                                        <i class="fa fa-search"></i>
                                        <input type="text" class="form-control form-input" placeholder="Search for your favorite groups in ATG" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" aria-expanded="false">
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