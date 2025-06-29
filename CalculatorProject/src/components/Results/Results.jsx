import { calculateInvestmentResults, formatter } from '../../util/investment';
import './results.css';

export default function Results( { userInput } ) {
    
    const results = calculateInvestmentResults(userInput);


    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map((data) => {
                    const totalInterest = data.valueEndOfYear - 
                        data.annualInvestment * data.year - userInput.initialInvestment;
                    const totalAmountInvested = 
                        data.valueEndOfYear - totalInterest;
                    
                    
                    return (
                    <tr key={data.year}>
                        <td>{data.year}</td>
                        <td>{formatter.format(data.valueEndOfYear)}</td>
                        <td>{formatter.format(data.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                    );
                })}
            </tbody>
        </table>
            

    );
}