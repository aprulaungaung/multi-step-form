import React from "react";


function MultiPages(props){
   
      var count= props.count;
     
 
      return <div className="return-package">
      
      {count === 1 ?

        <div className="row page">

          <div className="col left-col"></div>

          <div className="col-sm-12 col-lg-6 right-col">

            <h3 className="name">Personal Info</h3>

            <p className="request">Please provide your name, email address and phone number</p>

          </div>

        </div>

        : null
      }
        
          
       
      {count === 2?

        <div className="row page">

        <div className ="col-lg-4 left-window"></div>

        <div className="col-sm-12 col-lg-8 right-window">

        <h3 className="name">Select your plan</h3>

        <p className="request">You have the option of monthly or yearly billing.</p>

        
        </div>

      </div>

      : null
      
      }
      
      {count === 3?

        <div className="row page">

          <div className="col-lg-4 left-window"></div>

          <div className="col-lg-8 right-window">

            <h3 className="name">Pick add-ons</h3>

            <p className="request">Add-ons help enhance your gamming experience</p>

          </div>

        </div>

        : null

      }
        
      {count === 4 ?

        <div className="row page">

        <div className="col-lg-4 left-window"></div>

        <div className="col-lg-8 right-window">

          <h3 className="name">Finishing up</h3>

          <p className="request">Double check everything looks OK before confirming.</p>

        </div>
       
      </div>

      : null

      }
      
      {count === 5 ?
      
      <div className = "row page">

        <div className="col-lg-4 left-window"></div>

        <div className="col-lg-8 right-window">

          <div className="up">

            <div className="thanks">

            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><g fill="none"><circle cx="40" cy="40" r="40" fill="#F9818E"/><path fill="#E96170" d="M48.464 79.167c.768-.15 1.53-.321 2.288-.515a40.04 40.04 0 0 0 3.794-1.266 40.043 40.043 0 0 0 3.657-1.63 40.046 40.046 0 0 0 12.463-9.898A40.063 40.063 0 0 0 78.3 51.89c.338-1.117.627-2.249.867-3.391L55.374 24.698a21.6 21.6 0 0 0-15.332-6.365 21.629 21.629 0 0 0-15.344 6.365c-8.486 8.489-8.486 22.205 0 30.694l23.766 23.775Z"/><path fill="#FFF" d="M40.003 18.333a21.58 21.58 0 0 1 15.31 6.351c8.471 8.471 8.471 22.158 0 30.63-8.47 8.47-22.156 8.47-30.627 0-8.47-8.472-8.47-22.159 0-30.63a21.594 21.594 0 0 1 15.317-6.35Zm9.865 15c-.316.028-.622.15-.872.344l-12.168 9.13-5.641-5.642c-1.224-1.275-3.63 1.132-2.356 2.356l6.663 6.663c.56.56 1.539.63 2.173.156l13.326-9.995c1.122-.816.43-2.993-.956-3.013a1.666 1.666 0 0 0-.17 0Z"/></g></svg>

            </div>

          </div>

          <div className="down">

            <h3 className="name">Thank you!</h3>

            <p >

            Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.
            </p>

          </div>

        </div>
        
      </div>
     
      : null
      }
      
  </div>
}
   

export default MultiPages;