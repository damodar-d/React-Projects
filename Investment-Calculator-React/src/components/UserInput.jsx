import InputGroup from "./InputGroup";

export default function UserInput(){

    const[userInput, setUserInput]=useState({
        initialInestment:10000,
        annualInvestment:1200,
        expectedReturn:6,
        duration:10
    })

    function handleChange(inputKey, newValue){

        setUserInput( (prevUserInput) => {

            return{
                ...prevUserInput,
                [inputKey]:newValue
            }
        } )
    }
    return(
        <section id="user-input">
            
            <InputGroup 
            labelText1='Initial Investment' 
            labelText2='Annual Investment'
            input1={{type:'number', required:true, initialValue:initialInestment}} 
            input2={{type:'number', required:true,  annualIvestment:annualInvestment}}/>

            <InputGroup 
            labelText1='Expected Return' 
            labelText2='Duration'
            input1={{type:'number', required:true}} 
            input2={{type:'number', required:true}}/>
        </section>
    )
}