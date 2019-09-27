import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {addCommasToMoney} from "./ProfileDetails";
import formatDate from '../../helpers/formatDate';

const Receipt = (receipt) => {
    let ticket;
    if (receipt.transaction) {
        const {
            transaction:
                {
                    transaction_type,
                    amount,
                    location,
                    created_at
                }, user:
                {
                    balance,
                    account_number
                }
        } = receipt;
        ticket = (
            <Fragment>
                <p className="mt-2 font-sans font-light text-grey-dark">Transaction Type:
                    <span className="font-medium"> {transaction_type.toUpperCase()}</span>
                </p>
                <p className="mt-2 font-sans font-light text-grey-dark">Amount:
                    <span className="font-medium"> N{addCommasToMoney(amount)}</span>
                </p>
                <p className="mt-2 font-sans font-light text-grey-dark">Location:
                    <span className="font-medium"> {location}</span>
                </p>
                <p className="mt-2 font-sans font-light text-grey-dark">Available Balance:
                    <span className="font-medium"> N{addCommasToMoney(balance)}</span>
                </p>
                <p className="mt-2 font-sans font-light text-grey-dark">Account Number:
                    <span className="font-medium"> {account_number}</span>
                </p>
                <p className="mt-2 font-sans font-light text-grey-dark">Date:
                    <span className="font-medium"> {formatDate(created_at).long}</span>
                </p>
            </Fragment>
        )
    } else {
        ticket = (<h1 className="text-gray-600 italic w-full text-center">No transactions to display</h1>)
    }

    return (
        <div className="w-full p-4">
            <h1 className="font-medium text-xl text-center w-full shadow p-3 text-white bg-blue-700 rounded-t-lg">Transaction
                Receipt</h1>
            <div className="w-full shadow p-8 rounded">
                {ticket}
            </div>
        </div>
    )
};

Receipt.propTypes = {
    receipt: PropTypes.object
};

Receipt.defaultProps = {
    receipt: {transaction: {}}
};

export default Receipt;
