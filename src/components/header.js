import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderLinks() {
        if ( this.props.authenticated) {
           return <li className="nav-item" >
                <Link className="nav-link" to="/signout">Sign out</Link>
            </li>
        } else {
            return [
                <li className="nav-item">
                    <Link className="nav-link" to="/signin">Sign in</Link>
                </li>,
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">Not A User? Sign Up </Link>
                </li>
                ];
        }
    }

    render() {
        return (
            <nav className="navbar navbar-light">
                <Link to="/" className="navbar-brand"> Energybox </Link>
                <ul className="nav navbar-nav">
                    { this.renderLinks()}
                </ul>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps)(Header);


