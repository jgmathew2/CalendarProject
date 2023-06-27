import "./Notification.css"; 

function Notification(props) {   

    if(props.notifs == null) {
        return; 
    } 
    
    return (
        <div id="notification" hidden={props.notifs.length === 0 || props.taskComp == true}>
            
            <p id="num_total"> {props.notifs.length} </p>
        </div>

    );

}

export default Notification; 