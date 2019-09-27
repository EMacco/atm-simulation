import React from 'react';
import PropTypes from 'prop-types';

export const addCommasToMoney = (money) => {
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ProfileDetails = ({first_name, last_name, email, account_number, balance, changePage}) => {
    return (
        <div className="rounded overflow-hidden shadow max-w-xs my-3">
            <img src="https://i.imgur.com/dYcYQ7E.png" className="w-full" alt="Cover Image"/>
            <div className="flex justify-center -mt-8">
                <img src="data:image/png;base64,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"
                     className="rounded-full border-solid border-white border-2 -mt-3  h-20 w-20" alt="Profile Image" />
            </div>
            <div className="text-center px-3 pb-6 pt-2">
                <h3 className="text-black text-lg bold font-sans">{first_name} {last_name}</h3>
                <p className="mt-2 font-sans font-light text-grey-dark">Account Number: <span className="font-medium">{account_number}</span></p>
                <p className="mt-2 font-sans font-light text-grey-dark">Email: <span className="font-medium">{email}</span></p>
                <p className="mt-6 font-sans font-light text-grey-dark">Available Balance</p>
                <p className="mt-2 font-sans font-light "><span className="font-medium text-lg text-green-500">N{addCommasToMoney(balance)}</span></p>
            </div>
            <div className="flex justify-center pb-3 text-grey-dark">
                <span className="text-center mr-3 border-r pr-3 font-bold text-blue-700 hover:text-blue-800 spanLink"
                      onClick={() => {changePage('deposit')}}>
                    <h2>+</h2>
                    <span>Deposit</span>
                </span>
                <span className="text-center text-blue-700 font-bold hover:text-blue-800 spanLink"
                      onClick={() => {changePage('withdraw')}}>
                    <h2>-</h2>
                    <span>Withdraw</span>
                </span>
            </div>
        </div>
    )
};

ProfileDetails.propTypes = {
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    account_number: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired,
    changePage: PropTypes.func.isRequired
};

export default ProfileDetails;
