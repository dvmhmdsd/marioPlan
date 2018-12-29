import React, { Component } from 'react';
import Notifications from './notification';
import ProjectList from '../project/projectList';
import { connect } from 'react-redux';
import { compose } from '../../../../../AppData/Local/Microsoft/TypeScript/3.2/node_modules/redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        const {projects, auth, notifications} = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        projects: state.firestore.ordered.projects, // project is from the rootReducer and projects is from the projectReducer
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects', orderBy: ['createdAt', 'desc']},
        { collection: 'notifications', limit: 3 }
    ])
)(Dashboard);