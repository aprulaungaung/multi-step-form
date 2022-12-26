
function SwitchButton(props){

    return <div className="switch-container">

     <label className="switch">

        <p className="month">monthly</p>

        <input onClick={props.choose} type="checkbox" />

          <span className="slider round"></span>

          <p className="year">yearly</p>
          
        </label>
        
    </div>
}

export default SwitchButton;