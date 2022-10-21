import React, { useState } from 'react';

const SignUpModal = () => {
    const [open, setOpen] = useState(true)

    return (
        <div className="modal mx-auto  fade mt-4" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

            {
                !open &&
                <div className="modal-dialog">
                    <div style={{ width: '736px' }} className="modal-content ">
                        <div style={{ background: '#EFFFF4', height: '50px' }} className="modal-header  ">
                            <small style={{ fontSize: '14px', color: '#008A45' }} className="modal-title text-center" id="exampleModalLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</small>
                            <button type="button " className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='container'>
                            <div className="modal-body d-flex justify-content-between gap-2 ">

                                <form>
                                    <h4>Crate  Account</h4>

                                    <div className="mb-1">
                                        <input placeholder='Email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                    </div>
                                    <div className="mb-1">
                                        <input placeholder='Password' type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>


                                    <button type="submit" className="btn btn-primary w-100 mt-3 rounded-pill">Sign In</button>
                                    <button type="submit" className="btn btn-outline-secondary w-100 mt-3 "><img src="https://i.ibb.co/sqMK4Lr/f-logo-RGB-Blue-1024.png" className='ms-2' alt="" /> Sign in with Facebook</button>
                                    <button type="submit" className="btn btn-outline-secondary w-100 mt-3 ">Sign in with Google</button>
                                </form>

                                <div className="mb-3 ms-2">
                                    <p style={{ fontSize: '13px' }} className='text-end'>Don’t have an account yet?  <span onClick={() => setOpen(!open)} style={{ cursor: 'pointer' }} className=' text-primary fw-bold' href="">Create new for free!</span></p>
                                    <img style={{ width: '320px' }} src="https://i.ibb.co/Jx25rYd/Group-3.png" alt="" />
                                    <p style={{ fontSize: '11px' }} className=' '>By signing up,you agree to our Terms & conditions, Privacy policy</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            }

            {
                open &&
                <div className="modal-dialog">
                    <div style={{ width: '736px' }}>
                        <div className="modal-content ">
                            <div style={{ background: '#EFFFF4', height: '50px' }} className="modal-header  ">
                                <small style={{ fontSize: '14px', color: '#008A45' }} className="modal-title text-center" id="exampleModalLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</small>
                                <button type="button " className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className='container'>
                                <div className="modal-body d-flex justify-content-between gap-2 ">

                                    <form>
                                        <h4>Crate  Account</h4>
                                        <div className="input-group mb-1">
                                            <input placeholder='First Name' type="text" aria-label="First name" className="form-control  " />
                                            <input placeholder='Last Name' type="text" aria-label="Last name" className="form-control  " />
                                        </div>
                                        <div className="mb-1">
                                            <input placeholder='Email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                        </div>
                                        <div className="mb-1">
                                            <input placeholder='Password' type="password" className="form-control" id="exampleInputPassword1" />
                                        </div>
                                        <div className="mb-1">
                                            <input placeholder='Confirm Password' type="password" className="form-control" id="exampleInputPassword1" />
                                        </div>

                                        <button type="submit" className="btn btn-primary w-100 mt-3 rounded-pill">Create Account</button>
                                        <button type="submit" className="btn btn-outline-secondary w-100 mt-3 "><img src="https://i.ibb.co/sqMK4Lr/f-logo-RGB-Blue-1024.png" className='ms-2' alt="" /> Sign up with Facebook</button>
                                        <button type="submit" className="btn btn-outline-secondary w-100 mt-3 ">Sign up with Google</button>
                                    </form>

                                    <div className="mb-3 ms-2">
                                        <p style={{ fontSize: '13px' }} className='text-end'>Already have an account? <span onClick={() => setOpen(!open)} style={{ cursor: 'pointer' }} className='cursor-pointer text-primary fw-bold' >Sign In</span></p>
                                        <img style={{ width: '320px', height: '320px' }} src="https://i.ibb.co/Jx25rYd/Group-3.png" alt="" />
                                        <p style={{ fontSize: '11px' }} className=' '>By signing up,you agree to our Terms & conditions, Privacy policy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default SignUpModal;