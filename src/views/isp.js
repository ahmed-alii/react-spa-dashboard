import React, { useState } from 'react';


function isp(){
    return(
        <main className="container">
            <div className="dash">
                <div className="overview row">
                    <div className="col-3">
                        <div className="package-name top-boxes">
                            <h2>ISP Proxies</h2>
                            <a href="#" className="success-clr upgrade-btn"><i className="fa fa-shopping-bag mr-2" /> Upgrade Plan</a>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="isp-table">
                            <table className="table table-sm table-borderless text-light">
                                <thead className="table-light table-isp-head">
                                <tr>
                                    <th>#</th>
                                    <th>Plan</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Pricing</th>
                                    <th>Status</th>
                                    <th>Auth Mode</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Basic</td>
                                    <td>23-02-2021</td>
                                    <td>23-02-2021</td>
                                    <td>$99.9</td>
                                    <td>Active</td>
                                    <td><input type="checkbox" defaultChecked data-toggle="toggle" data-size="xs" data-on="none" data-off="auth" /></td>
                                    <td><a href="#" className="success-clr export-btn">Export <i className="fa fa-arrow-right" /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Basic</td>
                                    <td>23-02-2021</td>
                                    <td>23-02-2021</td>
                                    <td>$99.9</td>
                                    <td>Active</td>
                                    <td><input type="checkbox" data-toggle="toggle" data-size="xs" data-on="none" data-off="auth" /></td>
                                    <td><a href="#" className="success-clr export-btn">Export <i className="fa fa-arrow-right" /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Basic</td>
                                    <td>23-02-2021</td>
                                    <td>23-02-2021</td>
                                    <td>$99.9</td>
                                    <td>Active</td>
                                    <td><input type="checkbox" defaultChecked data-toggle="toggle" data-size="xs" data-on="none" data-off="auth" /></td>
                                    <td><a href="#" className="success-clr export-btn">Export <i className="fa fa-arrow-right" /></a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default isp;