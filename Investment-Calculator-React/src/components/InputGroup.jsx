export default function InputGroup({
  value1,
  value2,
  input1,
  input2,
  labelText1,
  labelText2,
}) {
  return (
    <div className="input-group">
      <p>
        <label>{labelText1}</label>
        <input
          value={value1}
          onChange={(ev) =>
            input1.handleChange(
              labelText1 === "Initial Investment"
                ? "initialInvestment"
                : "expectedReturn",
              ev.target.value
            )
          }
          {...input1}
        />
      </p>
      <p>
        <label>{labelText2}</label>
        <input
          value={value2}
          onChange={(ev) =>
            input2.handleChange(
              labelText2 === "Annual Investment"
                ? "annualInvestment"
                : "duration",
              ev.target.value
            )
          }
          {...input2}
        />
      </p>
    </div>
  );
}
