import React, {useState} from "react";
import Sidebar from "./Sidebar";
import Menu from "./Menu";
import MultiPages from "./MultiPages";
import Button from "./Button";
import Back from "./Back";
import Input from "./Input";
import Card from "./Card";
import SwitchButton from "./SwitchButton";
import Service from "./Service";
import FinalStep from "./FinalStep";






function App(){

    const [count, setCount] = useState(1);
    const [selection, setSelection] = useState([]);
    const [total, setTotal] = useState([]);
    const [plan, setPlan] = useState(true);
    const [phoneLength, setPhoneLength] = useState("")
    const [first, second, third] = selection;
    
    function buttonClick(){
        setCount(count + 1);
    }

    function decreaseCount(){
        setCount(count - 1);
    }
   
    function stepUp(){
        setCount(3);
    }
  
    function selector(selectedOption){
     setSelection(prevValue =>{
        return [
            ...prevValue,
            selectedOption
        ]
     });
    }

    function showTotal(){
        setTotal(prevValue =>{
        return [
            ...prevValue,
            plan ? 9 : 90,
            first === "one" && plan ? 1 : 0,
            first === "one" && !plan ? 10 : 0,
            second === "two" && plan ? 2 : 0,
            second === "two" && !plan ? 20 : 0,
            third === "three" && plan ? 2 : 0,
            third === "three" && !plan ? 20 : 0
        ]
        })

    }
    
    function choosePlan(){
   
        setPlan(!plan);
      }

  function messenger(userPhone){
  
    setPhoneLength(userPhone)
  }

  function validation(){
    setCount(1);
  }
  
  

// returning section ////////////////////////////////////////////////
   
   return <div className="app">   
   
   <Sidebar />
   <div className="outer-container">
   <Menu 
    step={count}
   />
   </div>
   <MultiPages 
    count = {count}
   />
   
   {count === 1? <Input valid={messenger} /> : null} 
  
   {count === 2? <Card up={stepUp} term ={plan}/> : null}

   {count > 4 ? null 
   :
   <Button 
    count={count}
    click = {buttonClick}
    step3={showTotal}
    valid = {phoneLength}
    validation={validation}
   
   /> 
   }
   
 {count > 1 && count < 5 ?
 
    <Back 
    prev={decreaseCount}
   />  
   : null
 }
    
 
 {count === 2? <SwitchButton choose={choosePlan}/> : null}  
 {count === 3 ? <Service messenger = {selector} option={plan}/> : null} 
 {count === 4 ? <FinalStep option = {selection} sum={total} change={decreaseCount} term = {plan}/> : null}
 </div>
}

export default App;