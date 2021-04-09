import React, { useState } from 'react';


function Dash(){
    return(
        <main className="container">
            <div className="welcome">
                <h2>Welcome, User-name</h2>
            </div>
            <div className="dash">
                <div className="row">
                    <div className="col-4">
                        <div className="box">
                            <h3 className="box-h">Sneaker Releases</h3>
                            <div className="box-item-list">
                                <div className="box-item row" data-aos="fade-right">
                                    <div className="col-2 p-0 d-flex align-items-center justify-content-center">
                                        <img src="https://via.placeholder.com/50x50" alt="" />
                                    </div>
                                    <div className="col-10 d-flex align-items-center">
                                        <div className="d-block w-100">
                                            <h4>New Sneaker Release.</h4>
                                            <div className="box-list-item-content d-flex justify-content-between">
                                                <div className="launch-time"><i className="fa fa-rocket" />
                                                    <span>tomorrow 9:00 EST</span></div>
                                                <div className="launch-location"><i className="fa fa-map-marker" />
                                                    <span>Canada</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-item row" data-aos="fade-right">
                                    <div className="col-2 p-0 d-flex align-items-center justify-content-center">
                                        <img src="https://via.placeholder.com/50x50" alt="" />
                                    </div>
                                    <div className="col-10 d-flex align-items-center">
                                        <div className="d-block w-100">
                                            <h4>New Sneaker Release.</h4>
                                            <div className="box-list-item-content d-flex justify-content-between">
                                                <div className="launch-time"><i className="fa fa-rocket" />
                                                    <span>tomorrow 9:00 EST</span></div>
                                                <div className="launch-location"><i className="fa fa-map-marker" />
                                                    <span>Canada</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="d-flex flex-column justify-content-between h-100">
                            <div className="box-sm">
                                <h3 className="box-h">Purchase Plan</h3>
                                <p>Browse our different plans for all your needs.</p>
                                <a href="#" className="btn btn-success border-0">Explore</a>
                            </div>
                            <div className="box-sm">
                                <h3 className="box-h">Need help?</h3>
                                <p>Get in touch with us and get
                                    answers to all your questions.</p>
                                <a href="#" className="btn btn-danger border-0">Join discord</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="box">
                            <h3 className="box-h">Announcements</h3>
                            <div className="box-item-list">
                                <div className="box-item" data-aos="fade-left">
                                    <div className="d-flex align-items-center">
                                        <div className="d-block w-100">
                                            <h4><i className="fa fa-circle mr-2 small err-clr" /> Important Update Issue</h4>
                                            <div className="box-list-item-content">
                                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                                                    cum delectus dolor eum.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Dash;