import React from "react";

function FinalStep(props){

  // getting information for which plan has been choosen by user (monthly or yearly)
  var month = props.term;

  // getting information for what added services are picked by user

  var selectedService = props.option;
 
  // all charges are accumalated in an array depending by the services customer chosen

  var totalArray = props.sum;
 
const [one, two, three] = selectedService;

// getting total charges 

var grandTotal = totalArray.reduce((accumalator, currentValue)=>{

  var result = accumalator + currentValue;

  return result;

});

// if customer want to change the plan , able to go back previous section

function handleClick(){
 props.change();
}


// return section /////////////////////////////////////////////

  return <div className="summary-container">

  <div className="summary">

      <div className="row ">

      <div className="col-10">

      <div className="breakdown">

        <p className="arcade">{month ? "Arcade(monthly)" : "Arcade(Yearly)"}</p>

          <p className="change" onClick={handleClick}>change</p>

          <hr></hr>
        
          <p className="online">{one === "one" ? "Online service": null}</p>

          <p className="store">{two === "two" ? "Larger storage" : null}</p>

          <p className="profile">{three === "three" ? "customizable profile": null}</p>

      </div>
         
      </div>
      <div className="col-2 right-pane">

      <p className="text-muted subscription">{month ? "$9/mo" : "$90/yr"}</p>

      <p className="small-text">{one === "one" && month ? "+$1/mo" : null}</p>
      <p className="small-text notMonth">{one === "one" && !month ? "+$10/yr" : null}</p>

      <p className="small-text">{two === "two" && month ? "+$2/mo" : null}</p>
      <p className="small-text notMonth">{two === "two" && !month ? "+$20/yr" : null}</p>

      <p className="small-text">{three === "three" && month ? "+$2/mo" : null}</p>
      <p className="small-text notMonth">{three === "three" && !month ? "+$20/yr" : null}</p>
      </div>

      </div>
      
  </div>

  <div className="grand-total">

  <p className="total">Total(per month)</p>

  <p className="total-cost">${grandTotal}</p>
  
  </div>
  
</div>

 
   
}

export default FinalStep;