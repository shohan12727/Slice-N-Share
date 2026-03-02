function UserGreeting (props) {
 
    return(props.isloggedIn) ?  <h2 className="welcome-message">Welcome {props.userName}</h2> : 
    <h2>please  log in to continue </h2> ;
}

export default UserGreeting 