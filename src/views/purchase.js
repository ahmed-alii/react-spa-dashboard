import React, { useState } from 'react';


function purchase(){
    return(
        <main id="purchase" className="container">
            <div className="dash">
                <div className="package-selector text-center">
                    <ul className="nav nav-pills nav-justified mb-3" id="purchase-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active mx-auto" id="p1" data-toggle="pill" href="#pills-residential" role="tab">
                                <div className="pricing-tab-nav">
                                    <h5>Residential</h5>
                                    <span>Starting from $199/month</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link mx-auto" id="p2" data-toggle="pill" href="#pills-virgin" role="tab">
                                <div className="pricing-tab-nav">
                                    <h5>Virgin ISPs</h5>
                                    <span>Starting from $199/month</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link mx-auto" id="p3" data-toggle="pill" href="#pills-bulk" role="tab">
                                <div className="pricing-tab-nav">
                                    <h5>Bulk ISPs</h5>
                                    <span>Starting from $199/month</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-residential" role="tabpanel">
                        <div className="row justify-content-center">
                            <div className="col-3">
                                <div className="pricing-card">
                                    <h2 className="pricing-h">Basic</h2>
                                    <h3 className="pricing-amount">$3.99/gb</h3>
                                    <ul className="pricing-f-list list-unstyled">
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                    </ul>
                                    <div className="pricing-btn">
                                        <a href="#" className="btn btn-success border-0">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="pricing-card">
                                    <h2 className="pricing-h">Basic</h2>
                                    <h3 className="pricing-amount">$3.99/gb</h3>
                                    <ul className="pricing-f-list list-unstyled">
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                    </ul>
                                    <div className="pricing-btn">
                                        <a href="#" className="btn btn-success border-0">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="pricing-card">
                                    <h2 className="pricing-h">Basic</h2>
                                    <h3 className="pricing-amount">$3.99/gb</h3>
                                    <ul className="pricing-f-list list-unstyled">
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                    </ul>
                                    <div className="pricing-btn">
                                        <a href="#" className="btn btn-success border-0">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="pricing-card">
                                    <h2 className="pricing-h">Basic</h2>
                                    <h3 className="pricing-amount">$3.99/gb</h3>
                                    <ul className="pricing-f-list list-unstyled">
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                    </ul>
                                    <div className="pricing-btn">
                                        <a href="#" className="btn btn-success border-0">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-virgin" role="tabpanel">
                        <div className="row justify-content-center">
                            <div className="col-3">
                                <div className="pricing-card">
                                    <h2 className="pricing-h">Virgin</h2>
                                    <h3 className="pricing-amount">$3.99/gb</h3>
                                    <ul className="pricing-f-list list-unstyled">
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                    </ul>
                                    <div className="pricing-btn">
                                        <a href="#" className="btn btn-success border-0">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="pricing-card">
                                    <h2 className="pricing-h">Basic</h2>
                                    <h3 className="pricing-amount">$3.99/gb</h3>
                                    <ul className="pricing-f-list list-unstyled">
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                    </ul>
                                    <div className="pricing-btn">
                                        <a href="#" className="btn btn-success border-0">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="pricing-card">
                                    <h2 className="pricing-h">Basic</h2>
                                    <h3 className="pricing-amount">$3.99/gb</h3>
                                    <ul className="pricing-f-list list-unstyled">
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                    </ul>
                                    <div className="pricing-btn">
                                        <a href="#" className="btn btn-success border-0">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="pricing-card">
                                    <h2 className="pricing-h">Basic</h2>
                                    <h3 className="pricing-amount">$3.99/gb</h3>
                                    <ul className="pricing-f-list list-unstyled">
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                    </ul>
                                    <div className="pricing-btn">
                                        <a href="#" className="btn btn-success border-0">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-bulk" role="tabpanel">
                        <div className="row justify-content-center">
                            <div className="col-3">
                                <div className="pricing-card">
                                    <h2 className="pricing-h">bulk</h2>
                                    <h3 className="pricing-amount">$3.99/gb</h3>
                                    <ul className="pricing-f-list list-unstyled">
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                    </ul>
                                    <div className="pricing-btn">
                                        <a href="#" className="btn btn-success border-0">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="pricing-card">
                                    <h2 className="pricing-h">Basic</h2>
                                    <h3 className="pricing-amount">$3.99/gb</h3>
                                    <ul className="pricing-f-list list-unstyled">
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                    </ul>
                                    <div className="pricing-btn">
                                        <a href="#" className="btn btn-success border-0">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="pricing-card">
                                    <h2 className="pricing-h">Basic</h2>
                                    <h3 className="pricing-amount">$3.99/gb</h3>
                                    <ul className="pricing-f-list list-unstyled">
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                    </ul>
                                    <div className="pricing-btn">
                                        <a href="#" className="btn btn-success border-0">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="pricing-card">
                                    <h2 className="pricing-h">Basic</h2>
                                    <h3 className="pricing-amount">$3.99/gb</h3>
                                    <ul className="pricing-f-list list-unstyled">
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                        <li><i className="fas fa-check" /> Some details here</li>
                                    </ul>
                                    <div className="pricing-btn">
                                        <a href="#" className="btn btn-success border-0">Buy Now</a>
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

export default purchase;