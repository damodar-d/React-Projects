import InputGroup from "./InputGroup";


export default function UserInput({handleChange,userInput}){

    return(
        <section id="user-input">
            
            <InputGroup 
            labelText1='Initial Investment' 
            labelText2='Annual Investment'
            value1={userInput.initialInvestment}
            value2={userInput.annualInvestment}
            input1={{type:'number', required:true, handleChange:handleChange}} 
            input2={{type:'number', required:true, handleChange:handleChange}}/>

            <InputGroup 
            labelText1='Expected Return' 
            labelText2='Duration'
            value1={userInput.expectedReturn}
            value2={userInput.duration}
            input1={{type:'number', required:true,  handleChange:handleChange}} 
            input2={{type:'number', required:true, handleChange:handleChange}}/>
        </section>
    )
}