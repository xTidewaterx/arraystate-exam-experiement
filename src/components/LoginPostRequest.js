import { useEffect, useState } from "react"


//this component does one thing: it does a post request to the auth login endpoint so that we return our token for auth


const baseUrl = "https://api.noroff.dev/"





//const url = "https://api.noroff.dev/api/v1";


//async function proble mupdating dom, use useEffect
const LoginPostRequest =  () => {




const [token, changeToken] = useState(null);
const [ternaryState, changeTernaryState] = useState(null)





//we now have th request be 401 unauthorized instead, meaning we are structuring correctly, there lacks correct input


    useEffect(() => {

const FetchData = async() => {

    //we have managed to create a post request that is all there, we now need to do this with a registered user
    //create a registered user with data in request body, data object goes in request body 
    //data object, object consiting of data, now have the object in the async, we have state to update

        const response = await  fetch(baseUrl + "api/v1/social/auth/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
         body: JSON.stringify ({ 
        "email": "JohKje52554@stud.noroff.no",
        "password": "XN2em7p4DHxXxbe"
    })
        })
        

        const dataValue  = await response.json();

        const ternaryTokenReturn = dataValue.accessToken ? 'Token: ' + dataValue.accessToken : 'Without Token permission'
        //if false second value is chosen


        console.log(dataValue)

        changeTernaryState(ternaryTokenReturn)

        if(dataValue.accessToken) {

       
 
            console.log("validation successful, accessToken: " + dataValue.accessToken)
            changeToken(dataValue.accessToken)
        }

        else { console.log("error message:" + dataValue.statusCode)}

  
    }



FetchData ()
    }, [token])


//we do post request ot create new profile endpoint allows for data creations POST /api/v1/social/auth/register











return <div>If validation is successful, token value appears here: {ternaryState}</div>



}



export default LoginPostRequest