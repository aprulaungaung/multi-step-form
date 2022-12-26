

function Service(props){

    var month = props.option;

    function selection(event){

        var element = event.target;

        var option = element.getAttribute("id");

        props.messenger(option);
    }


    return <div className="service-container">

   <div className="pocket">

     <input id="one" onClick={selection} className="service" type="checkbox" />

    <div className="row service-package">

    <div className="col-lg-2"> 

    </div>

    <div className="col-sm-10 col-lg-8 choose">

        <p className="service-title">Online service</p>

        <p className="request">Access to multiplayer games</p>

    </div>
    <div className="col-lg-2 price">

    <small className="text-muted fw-light">{month ? "+$1/mo" :"+$10/mo"}</small>

    </div>

    </div>

    </div>

    <div className="pocket">

     <input id="two" onClick={selection} className="service" type="checkbox" />

    <div className="row service-package">

    <div className="col-lg-2">   

    </div>

    <div className="col-sm-10 col-lg-8 choose">

        <p className="service-title">Larger storage</p>

        <p className="request">Extra 1TB of cloud save.</p>

    </div>
    <div className="col-lg-2 price">

    <small className="text-muted fw-light">{month ? "+$2/mo" : "+$20/mo"}</small>

    </div>

    </div>

    </div>

    <div className="pocket">

     <input id="three" onClick={selection} className="service" type="checkbox" />

    <div className="row service-package">

    <div className="col-lg-2">    

    </div>

    <div className="col-sm-10 col-lg-8 choose">

        <p className="service-title">Customizable Profile</p>

        <p className="request">Custom theme on your profile.</p>

    </div>

    <div className="col-lg-2 price">

    <small className="text-muted fw-light">{month ? "+$2/mo" : "+$20/mo"}</small>

    </div>

    </div>

    </div>

</div>
    
}

export default Service;