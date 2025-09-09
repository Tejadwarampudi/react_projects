import React from "react";
import './InvestemntCalculator.css'
function UserInput({ userInput, onChangeInput }) {
    function handleChange(inputIdentifier, newValue) {
        onChangeInput(inputIdentifier, Number(newValue));
    }

    return (
        <section className="user-input">
            <div className="user-input__group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.initialInvestemnt}
                        onChange={(event) =>
                            handleChange("initialInvestemnt", event.target.value)
                        }
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.annualInvestemnt}
                        onChange={(event) =>
                            handleChange("annualInvestemnt", event.target.value)
                        }
                    />
                </p>
                <p>
                    <label>Expected Return (%)</label>
                    <input
                        type="number"
                        required
                        value={userInput.expectedReturn}
                        onChange={(event) =>
                            handleChange("expectedReturn", event.target.value)
                        }
                    />
                </p>
                <p>
                    <label>Duration (years)</label>
                    <input
                        type="number"
                        required
                        value={userInput.duration}
                        onChange={(event) =>
                            handleChange("duration", event.target.value)
                        }
                    />
                </p>
            </div>
        </section>
    );
}

export default UserInput;
