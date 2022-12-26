

function Button(props){

    var count = props.count;
    var length = props.valid;
    
    


    // in case of step 3, when button clicked, both functions are called
    
    function myFunction(){

        props.step3();
        props.click();
    } 
   
    function validator(){

        var empty = "";

       if(count === 1 && length === empty){
            props.validation();
            window.location.reload();
       }else if(count === 3){
        myFunction();
       }else{
        props.click();
       }
    }


    return <div className="button-container">

        <button className = "next" onClick={validator} type="button">

        {count === 4 ? "Confirm ": "NextStep"}
        
        </button>
    </div>
}



export default Button;