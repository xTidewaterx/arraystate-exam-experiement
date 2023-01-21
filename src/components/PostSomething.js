import { useEffect, useState } from "react"

//import base url so it has the origin of one value holder
import { baseUrl } from "./GetAllPosts"

const url = baseUrl + "api/v1/social/posts"


const PostSomething = () => {

const [state, changeState] = useState("default state value")


useEffect(() => {



  
const CreatePost = async() => {

    const response = await fetch(url, {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
                      
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTcyLCJuYW1lIjoiSm9oYW4iLCJlbWFpbCI6IkpvaEtqZTUyNTU0QHN0dWQubm9yb2ZmLm5vIiwiYXZhdGFyIjoiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzEwLzkxLzk0LzEwOTE5NDhjNmI4MGI2NWI5ZWVmOGMxNjNmMGFlNDJhLmpwZyIsImJhbm5lciI6bnVsbCwiaWF0IjoxNjc0MjcyNjg0fQ.-zdHEvNr1lm_-_Cl7HcNMz5p5qoYdeVidjDOO7ZvTlI',
       
                      
                },
       
       
                body: JSON.stringify( {

            
                "title": "postRequest16", // Required
                "body": "string", // Optional
                "tags": ["string"], // Optional
                "media": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Water_drop_001.jpg" 
             
              // Optional

            }),
                
  
   
    })

    const jsonData =  await response.json()


if(!jsonData.green) {

    console.log(jsonData.status + " -" + jsonData.errors[0].message)
} else {console.log("what, a value has been found")}




    console.log(jsonData)
}
CreatePost()

}, [state])



    return <>We have now posted something: {state}</>
}

export default PostSomething