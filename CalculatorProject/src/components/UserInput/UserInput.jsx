import './UserInput.css';

export default function UserInput() {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type='number' placeholder='0.00' />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type='number' placeholder='0.00' />
                </p>
            </div>    
            <div className="input-group">

                <p>
                    <label>Expected Return</label>
                    <input type='number' placeholder='0.00' />
                </p>
                <p>
                    <label>Duration</label>
                    <input type='number' placeholder='0' />
                </p>
            </div>
        </section>

    );
}