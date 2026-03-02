
import Button from './Button'
import Student from './Student'
import UserGreeting from './UserGreeting'

function App() {


  return (
    <>
      <Button></Button>
      <Student name="Shohan" age={33} isStudent ={true} ></Student>
      <Student name="Islam" age={22} isStudent={false}></Student>
      <Student name="Islam" age={22} isStudent={false}></Student>
      <Student name="Islam" age={22} isStudent={false}></Student>
      <Student name="Islam" age={22} isStudent={false}></Student>
      <Student></Student>
      <UserGreeting isloggedIn= {true} userName="Shohan"></UserGreeting> 
    </>
  )
}

export default App
