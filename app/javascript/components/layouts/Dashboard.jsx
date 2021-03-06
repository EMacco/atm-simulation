import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import { logoutUser } from "../../actions/auth";
import NavBar from '../common/NavBar';
import ProfileDetails from '../common/ProfileDetails';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    logoutBtnClicked = () => {
        const {logoutUser} = this.props;
        logoutUser()
    };

    render() {
        const {isAuthenticated, user, changePage} = this.props;

        if (!isAuthenticated) return <Redirect to="/auth"/>;
        return (
            <div>
                <NavBar logoutBtnClicked={this.logoutBtnClicked} />
                <div className="container flex-wrap md:flex-no-wrap mx-auto flex">
                    <ProfileDetails {...user} changePage={changePage} />
                    <div className="w-full flex flex-wrap md:flex-no-wrap">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

Dashboard.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logoutUser: PropTypes.func.isRequired,
    changePage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(mapStateToProps, {logoutUser})(Dashboard);
