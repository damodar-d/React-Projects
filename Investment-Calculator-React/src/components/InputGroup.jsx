export default function InputGroup({input1, input2, labelText1, labelText2}){
    return(
        <div className="input-group">
            <p>
                <label>{labelText1}</label>
                <input {...input1}/>
            </p>
            <p>
                <label>{labelText2}</label>
                <input {...input2}/>
            </p>
        </div>
    )
}
