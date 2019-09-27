import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Dashboard from "../layouts/Dashboard";
import Receipt from "../common/Receipt";
import Button from "../common/Button";
import {performTransaction} from "../../actions/transactions";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {amount: 0, currentPage: 'deposit'};
    }

    textChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    changePage = pageName => {
        this.setState({currentPage: pageName})
    };

    performTransaction = e => {
        e.preventDefault();
        const {amount, currentPage} = this.state;
        const {performTransaction} = this.props;
        performTransaction(currentPage, {amount});
    };

    render() {
        const {amount, currentPage} = this.state;
        const {isLoading, receipt} = this.props;

        return (
            <Dashboard changePage={this.changePage}>
                <div className="p-4 w-full">
                    <h1 className="font-medium text-sm w-full mb-4">
                        Make a { currentPage === 'deposit' ? "Deposit" : "Withdrawal"}</h1>
                    <form className="w-full shadow p-8 rounded" onSubmit={this.performTransaction}>
                        <div className="flex flex-col">
                            <label htmlFor="amount"
                                   className="mb-1 uppercase text-grey-darker text-xs font-bold">Amount</label>
                            <div className="flex flex-row">
                        <span
                            className="flex items-center bg-grey-lighter rounded rounded-r-none pr-3 font-bold text-grey-darker">N</span>
                                <input type="number" name="amount"
                                       className="mr-3 w-full pl-2 bg-grey-lighter text-grey-darker py-2 font-normal rounded text-grey-darkest border border-grey-lighter rounded-l-none font-bold"
                                       onChange={this.textChange}/>
                                {
                                    isLoading ? (
                                        <Button text="Loading" enabled={false}/>
                                    ) : (
                                        amount <= 0 || amount === '' || amount === '0' ? (
                                            <Button text={
                                                currentPage === 'deposit' ? "Deposit" : "Withdraw"
                                            } enabled={false}/>
                                        ) : (
                                            <Button text={
                                                currentPage === 'deposit' ? "Deposit" : "Withdraw"
                                            }/>
                                        )
                                    )
                                }
                            </div>

                        </div>
                    </form>
                </div>
                <Receipt {...receipt}/>
            </Dashboard>
        )
    }
}

Home.propTypes = {
    receipt: PropTypes.object.isRequired,
    performTransaction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    receipt: state.transaction.receipt,
    isLoading: state.transaction.loading
});

export default connect(mapStateToProps, {performTransaction})(Home);
