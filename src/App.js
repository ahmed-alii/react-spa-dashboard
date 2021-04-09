import {BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";

import Dash from "./views/Dash";
import purchase from "./views/purchase";
import isp from "./views/isp";
import logo from "./assets/logo.svg";


function App() {
    return (
        <Router>
            <header className="container">
                <nav className="navbar navbar-expand-md navbar-dark">
                    <a className="navbar-brand" href="/"><img src={logo} alt="spa proxies"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to='/'
                                         exact={true}>Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" id="proxies-dropdown" data-toggle="dropdown"
                                   aria-haspopup="true" aria-expanded="false">Proxies</a>
                                <div className="dropdown-menu" aria-labelledby="proxies-dropdown">

                                    <NavLink className="dropdown-item" activeClassName="active" to='/basic'
                                             exact={true}>Basic</NavLink>
                                    <NavLink className="dropdown-item" activeClassName="active" to='/fresh'
                                             exact={true}>Fresh</NavLink>
                                    <NavLink className="dropdown-item" activeClassName="active" to='/premium'
                                             exact={true}>Premium</NavLink>
                                    <NavLink className="dropdown-item" activeClassName="active" to='/isp'
                                             exact={true}>ISP</NavLink>
                                    <NavLink className="dropdown-item" activeClassName="active" to='/elite'
                                             exact={true}>Elite</NavLink>

                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active"
                                         to='/purchase'>Purchase</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" id="settings-dropdown" data-toggle="dropdown"
                                   aria-haspopup="true" aria-expanded="false">Settings</a>
                                <div className="dropdown-menu" aria-labelledby="settings-dropdown-dropdown">

                                    <NavLink className="dropdown-item" activeClassName="active" to='/chinese'
                                             exact={true}>Switch: Chinese</NavLink>
                                    <NavLink className="dropdown-item" activeClassName="active" to='/light-theme'
                                             exact={true}>Light Theme</NavLink>

                                </div>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/logout">Logout</NavLink>
                            </li>

                        </ul>
                    </div>
                </nav>
            </header>
            <Switch>
                <Route exact path="/" component={Dash}/>
                <Route path="/purchase" component={purchase}/>
                <Route path="/isp" component={isp}/>
                <Route path="/logout"/>
                <Route path="*">
                    <h2>404</h2>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
