import React from "react";
import './InvestemntCalculator.css'
function Header() {
    return (
        <header className="header">
            <img
                src="/investment_calci.jpg"
                alt="investment-calculator"
                className="header__image"
            />
            <h1 className="header__title">Investment Calculator</h1>
        </header>
    );
}

export default Header;
