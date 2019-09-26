import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormField from "../common/FormField";
import {loginUser} from "../../actions/auth";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accountNumber: "",
            password: ""
        }
    }

    textChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        this.setState({...this.state, isLoading: true});

        const {accountNumber: account_number, password} = this.state;
        const userData = {account_number, password};
        this.props.loginUser(userData);
    };

    render() {
        const { accountNumber, password } = this.state;
        const {isLoading} = this.props;

        return (
            <form onSubmit={this.onSubmit}>
                <FormField placeholder={"Account Number"}
                           name={"accountNumber"}
                           value={accountNumber}
                           textChange={ this.textChange } />
                <FormField placeholder={"Password"}
                           name={"password"}
                           value={password}
                           textChange={ this.textChange }/>
                <div className="flex flex-col mt-8">
                    {
                        isLoading ? (
                            <span
                                    className="bg-gray-500 text-center text-white text-sm font-semibold py-2 px-4 rounded disabled">
                                Loading...
                            </span>
                        ) : (
                            <button type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                                Login
                            </button>
                        )
                    }

                </div>
            </form>
        );
    }
}

Login.propTypes = {
    isLoading: PropTypes.bool.isRequired
};


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.loading
});

export default connect(
    mapStateToProps,
    {loginUser}
)(Login);


