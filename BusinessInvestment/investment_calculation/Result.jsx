import React from "react";
import './InvestemntCalculator.css'
function calculateInvestmentResults({
    initialInvestemnt,
    annualInvestemnt,
    expectedReturn,
    duration,
}) {
    const annualData = [];
    let investedCapital = initialInvestemnt;
    let totalInterest = 0;
    let investmentValue = initialInvestemnt;

    for (let year = 1; year <= duration; year++) {
        const yearlyInterest = investmentValue * (expectedReturn / 100);
        investmentValue += yearlyInterest + annualInvestemnt;
        investedCapital += annualInvestemnt;
        totalInterest = investmentValue - investedCapital;

        annualData.push({
            year,
            investmentValue: investmentValue.toFixed(2),
            interest: yearlyInterest.toFixed(2),
            totalInterest: totalInterest.toFixed(2),
            investedCapital: investedCapital.toFixed(2),
        });
    }

    return annualData;
}

export default function Result({ userInput }) {
    const results = calculateInvestmentResults(userInput);

    return (
        <table className="results-table">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map((row) => (
                    <tr key={row.year}>
                        <td>{row.year}</td>
                        <td>{row.investmentValue}</td>
                        <td>{row.interest}</td>
                        <td>{row.totalInterest}</td>
                        <td>{row.investedCapital}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
