import React from 'react';

const PostNav = () => {

    return (
        <div className='container mt-4 '>
            <div className='d-flex justify-content-between '>
                <div>
                    <ul style={{ cursor: 'pointer', listStyle: 'none' }} className='d-flex gap-4 '>
                        <li className='fw-bold'>All Posts(32)</li>
                        <li className='hidelink '>Article</li>
                        <li className='hidelink'>Event</li>
                        <li className='hidelink'>Education</li>
                        <li className='hidelink'>Job</li>
                    </ul>
                </div>
                <div className='gap-2'>
                    <button className='btn btn-light hidelink me-2 dropdown-toggle'>Write a Post</button>
                    <button className='btn btn-primary'> <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{ height: '20px' }} class="me-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                        Join Group</button>
                </div>
            </div>
            <hr />
            <div className='d-flex  gap-2 justify-content-between '>
                <div style={{ width: "692px", height: '472px' }}>

                    <div class="card mb-4 " >
                        <img src="https://i.ibb.co/smz7CcT/Rectangle-5.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p> Article</p>
                            <div className='d-flex justify-content-between gap-2'>
                                <h5 style={{ fontSize: '22px' }} class="card-title fw-bold">What if famous brands had regular fonts? Meet RegulaBrands!</h5>

                                <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>

                            </div>
                            <p class="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex justify-content-center align-middle'>
                                    <img style={{ width: '48px', height: '48px' }} src="https://i.ibb.co/8DKtCHg/Rectangle-3-6.png" class="card-img-top" alt="..." />
                                    <p style={{ marginTop: '12px' }} className='fw-bold ms-2 '>Sarthak Kamra</p>
                                </div>
                                <div className='d-flex justify-content-between gap-2'>

                                    <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{ height: '20px' }} >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                        1.4k views</p>
                                    <p className='bg-light'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{ height: '20px' }} class="">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                    </svg></p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-4 " >
                        <img src="https://i.ibb.co/frkDjMj/Rectangle-5-1.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p> Education</p>
                            <div className='d-flex justify-content-between gap-2'>
                                <h5 style={{ fontSize: '22px' }} class="card-title fw-bold">Tax Benefits for Investment under National Pension Scheme launched by Government</h5>

                                <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>

                            </div>
                            <p class="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex justify-content-center align-middle'>
                                    <img style={{ width: '48px', height: '48px' }} src="https://i.ibb.co/9qYn8vx/Rectangle-3-24.png" class="card-img-top" alt="..." />
                                    <p style={{ marginTop: '12px' }} className='fw-bold ms-2 '>Sarah West</p>
                                </div>
                                <div className='d-flex justify-content-between gap-2'>

                                    <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{ height: '20px' }} >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                        1.4k views</p>
                                    <p className='bg-light'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{ height: '20px' }} class="">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                    </svg></p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-4 " >
                        <img src="https://i.ibb.co/7GLBvHt/Rectangle-5-2.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p> Meetup</p>
                            <div className='d-flex justify-content-between gap-2'>
                                <h5 style={{ fontSize: '22px' }} class="card-title fw-bold">Finance & Investment Elite Social Mixer @Lujiazui</h5>

                                <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>


                            </div>

                            <input type="text" className='w-100 mt-2 mb-2 rounded-pill  text-center' placeholder='Visit Website' />
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex justify-content-center align-middle'>
                                    <img style={{ width: '48px', height: '48px' }} src="https://i.ibb.co/cCGmnQ2/Rectangle-3-25.png" class="card-img-top" alt="..." />
                                    <p style={{ marginTop: '12px' }} className='fw-bold ms-2 '>Ronal Jones</p>
                                </div>
                                <div className='d-flex justify-content-between gap-2'>

                                    <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{ height: '20px' }} >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                        1.4k views</p>
                                    <p className='bg-light'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{ height: '20px' }} class="">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                    </svg></p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-4 " >

                        <div class="card-body mb-2">
                            <p> 💼️ Job</p>
                            <div className='d-flex justify-content-between gap-2'>
                                <h5 style={{ fontSize: '22px' }} class="card-title fw-bold">Software Developer</h5>

                                <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>


                            </div>

                            <input type="text" className='w-100 mt-2 mb-2 rounded-pill  text-center' placeholder='Apply on Timesjobs' />
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex justify-content-center align-middle'>
                                    <img style={{ width: '48px', height: '48px' }} src="https://i.ibb.co/gVLbswG/Rectangle-3-29.png" class="card-img-top" alt="..." />
                                    <p style={{ marginTop: '12px' }} className='fw-bold ms-2 '>Ronal Jones</p>
                                </div>
                                <div className='d-flex justify-content-between gap-2'>

                                    <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{ height: '20px' }} >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                        1.4k views</p>
                                    <p className='bg-light'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{ height: '20px' }} class="">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                    </svg></p>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='hidelink' style={{ width: "18rem" }}>
                    <div >
                        <div className='d-flex justify-content-between'>
                            <h6> <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '20px' }} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="me-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                                Noida, India</h6>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '20px' }} fill="black" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                        </div>
                        <hr />
                    </div>
                    <div class="card-body d-flex">
                        <svg style={{ height: '25px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="me-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                        <p style={{ fontSize: '12px' }} class="card-text">
                            Your location will help us serve better and extend a personalised experience.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostNav;