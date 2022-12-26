import React,{useState} from "react";


function Input(props){

    

    var customStyle = {

        border:"2px solid red"
    }

const [contact, setContact] = useState({
    name:"",
    email:"",
    phone:""
});

var phoneNumber = contact.phone;


var numberLength = phoneNumber.length;
  

function handleChange(event){

   var field = event.target;

   const {name, value} = field;

   setContact(prevValue =>{

    return {

        ...prevValue,

        [name]: value
    }
   });

   props.valid(numberLength);
  
   }

  
  
// return section//////////////////////////////////////////////////

   return <div className="input-form">
        
    <div className="input-pocket">

    <label className="label">Name</label>

    <input className="data" onChange={handleChange} name="name" value={contact.name}  type="text" 

        placeholder="please type your name"

    />

    </div>

    <div className="input-pocket">

    <label className="label">Email address</label>

    <input className="data" onChange={handleChange} name="email" value={contact.email}  type="text" 

        placeholder="please type your email address"

    />

    </div>

    <div className="input-pocket">

    <label className="label">Phone Number</label>

    {numberLength < 5 ? <p className="reminder">This field is required</p>: null}

    <input className="data" onChange={handleChange}  name="phone" value={contact.phone}  style={numberLength < 5 ? customStyle : null} type="text" 

        placeholder = "please type your phone number"

    />
    
    </div>
        
 </div>
   
}

export default Input;