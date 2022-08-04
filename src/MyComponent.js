
const MyComponent =(props) =>{
    console.log(props)
    return(
        <div>
            <h1>
                {props.info}: My name is {props.name}, I am {props.age} years old, and a solid {props.career}, from {props.tribe} land. I am also a {props.religion}.
            </h1>
        </div>
    )
}

export default MyComponent;