
import './results.css';

export default function Results({ results }) {


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
                <tr>
                    <td>1</td>
                    <td>$10,850</td>
                    <td>$550</td>
                    <td>$550</td>
                    <td>$10,300</td>
                </tr>
            </tbody>
        </table>
            

    );
}