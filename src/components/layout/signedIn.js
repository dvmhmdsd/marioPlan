import React from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../actions/authAction';
import { connect } from 'react-redux';

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li>
                <NavLink to="/create">New Project</NavLink>
            </li>
            <li>
                <NavLink to="/" onClick={props.signOut}>Log Out</NavLink>
            </li>
            <li>
                <NavLink to="/" className="btn btn-floating lighten-1 green">
                    {props.profile.initials}
                </NavLink>
            </li>
        </ul>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);