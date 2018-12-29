import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './signedIn';
import SignedOutLinks from './signedOut';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth, profile } = props;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">MarioPlan</Link>
                {/* <SignedInLinks />
                <SignedOutLinks /> */}
                {auth.isEmpty ? (<SignedOutLinks />) : (<SignedInLinks profile={profile} />)}
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);