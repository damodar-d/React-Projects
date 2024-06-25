export default function InputGroup({ input1, input2, labelText1, labelText2 }) {
    return (
        <div className="input-group">
            <p>
                <label>{labelText1}</label>
                <input
                    onChange={input1.onChange}
                    value={input1.initialInvestment === undefined ? input1.expectedReturn : input1.initialInvestment}
                    {...input1} />
            </p>
            <p>
                <label>{labelText2}</label>
                <input
                    onChange={input2.onChange}
                    value={input2.annualInvestment === undefined ? input2.duration : input2.annualInvestment}
                    {...input2} />
            </p>
        </div>
    )
}
