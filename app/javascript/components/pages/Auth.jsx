import React, {Component, Fragment} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import Login from '../layouts/Login';


class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginPage: true
        }
    }

    changePage = () => {
        const {loginPage} = this.state;
        this.setState({loginPage: !loginPage})
    };

    render() {
        const {loginPage} = this.state;
        const {isAuthenticated, isLoading} = this.props;

        if (isAuthenticated) return <Redirect to="/"/>;
        return (
            <Fragment>
                <div className="bg-blue-400 h-screen w-screen">
                    <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
                        <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0 height_500">
                            <div className="flex flex-col w-full md:w-1/2 p-4">
                                <div className="flex flex-col flex-1 justify-center mb-8">
                                    <h1 className="text-4xl text-center font-thin">{loginPage ? "Welcome Back" : "Join Us"}</h1>
                                    <div className="w-full mt-4">
                                        {
                                            loginPage ?
                                                <Login isLoading={isLoading}/> : "This is the registration page"
                                        }
                                        <div className="text-center mt-4">
                                            {
                                                loginPage ? (
                                                    <span
                                                        className="no-underline hover:underline text-blue-dark text-xs"
                                                        onClick={this.changePage}>
                                                    Don't have an account? Register
                                                </span>
                                                ) : (
                                                    <span
                                                        className="no-underline hover:underline text-blue-dark text-xs"
                                                        onClick={this.changePage}>
                                                    Already have an account? Login
                                                </span>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block md:w-1/2 rounded-r-lg login_image"/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

Auth.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.loading
});

export default connect(
    mapStateToProps,
    {}
)(Auth);
