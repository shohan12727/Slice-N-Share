
function Student (props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "yes" : "no"}</p> 
        </div>

    )
}

export default Student

// Student.defaultProps = {
//     name:"your name",
//     age:0 ,
//     isStudent:false 
// }

Student.defaultProps = {
    name: "your name",
    age: 0,
    isStudent: false
};
