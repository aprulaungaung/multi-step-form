import React from "react";


function Menu(props){
    
  var count= props.step;

  
 
   var background={backgroundColor:"paleturquoise",color:"black"};

//    return section /////////////////////////////

    return <div>

     <div className="row menu-package" id="one" >

        <div className="col left"><div className="number" style={count===1?background:null}>1</div></div>

          <div className="col right">

            <p className="top">STEP 1</p>

            <p className="bottom">YOUR INFO</p>

        </div>

    </div>
        
        <div className="row menu-package" id="two" >

        <div className="col left"><div className="number" style={count===2?background:null}>2</div></div>

        <div className="col right">

            <p className="top">STEP 2</p>

            <p className="bottom">SELECT PLAN</p>

        </div>

        </div>

        <div className="row menu-package" id="three" >

        <div className="col left"><div className="number" style={count===3?background:null}>3</div></div>

        <div className="col right">

            <p className="top">STEP 3</p>

            <p className="bottom">ADD-ONS</p>

        </div>

        </div>

        <div className="row menu-package" id="four" >

        <div className="col left"><div className="number" style={count >=4?background:null}>4</div></div>

        <div className="col right">

            <p className="top">STEP 4</p>

            <p className="bottom">SUMMARY</p>

        </div>
        
        </div>
        
    </div>
      
}


export default Menu;