import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import { logoutUser } from "../../actions/auth";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    logoutBtnClicked = () => {
        const {logoutUser} = this.props;
        logoutUser()
    };

    render() {
        const {isAuthenticated} = this.props;

        if (!isAuthenticated) return <Redirect to="/auth"/>;
        return (
            <div>
                This is the user dashboard
                <button onClick={this.logoutBtnClicked} className="bg-red-400 rounded ml-4 p-2">
                    Logout
                </button>
            </div>
        )
    }
}

Home.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {logoutUser})(Home);
