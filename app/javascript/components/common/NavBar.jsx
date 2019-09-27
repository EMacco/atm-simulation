import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const NavBar = ({logoutBtnClicked}) => {
    return(
        <nav className="flex items-center justify-between flex-wrap bg-teal p-6 bg-blue-700 shadow">
            <div className="flex items-center flex-no-shrink text-white mr-6">
                <img src="https://static.thenounproject.com/png/92146-200.png" alt="Home icon" className="home_icon" />
                <Link className="font-semibold text-xl tracking-tight" to="/">ATM Simulation</Link>
            </div>
            <div className="flex items-center w-auto">
                <div>
                    <span onClick={logoutBtnClicked}
                       className="spanLink inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white hover:text-blue-700 mt-0">Logout</span>
                </div>
            </div>
        </nav>
    )
};

NavBar.propTypes = {
    logoutBtnClicked: PropTypes.func.isRequired
};

export default NavBar;
