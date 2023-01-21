import { useState } from "react"


const defaultArray = ["value1", "value2", "value3", "value4"]

const PostComment = (e) => {


    const [state, changeState] = useState("default state value")
    //have comment array
    //add values to an array
    const [arrayState, changeArrayState] = useState([defaultArray])



const logInput = (e) => {




    changeState(e.target.value)
}



const addInputToArray = () => {

//we want to change the arraystate array, we want to append the value from normal state into, add into arraystate
changeArrayState([state].concat(arrayState) )

console.log("added input from normal state into arrayState, to add value to array")
console.log(arrayState)



} 



    return <div>


<input 

onChange={logInput}
/>


<h1>Values of input paramter e.target.value, stateValue:: {state}</h1>
    
    
    
    <button onClick={addInputToArray}>Add regular state value to array state</button>
    
    
    </div>

}


export default PostComment