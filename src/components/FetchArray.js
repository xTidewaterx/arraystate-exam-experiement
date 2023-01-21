import { useEffect, useState } from "react"


const baseUrl = "https://api.noroff.dev/"





//const url = "https://api.noroff.dev/api/v1";


//async function proble mupdating dom, use useEffect
const FetchArray =  () => {




const [token, changeToken] = useState(null);








    useEffect(() => {

const FetchData = async() => {

        const response = await  fetch('https://api.noroff.dev/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify ({ "username": "JohKje52554@stud.noroff.no" })
        })
        

        const dataValue  = await response.json();
        
        console.log(dataValue)

        changeToken(dataValue.accessToken)
    }



FetchData ()
    }, [token])


//we do post request ot create new profile endpoint allows for data creations POST /api/v1/social/auth/register




const FetchAllSocialEntries = () => {

//GET /api/v1/social/profiles



    useEffect(() => {

       const FetchProfilesEndpoint =async () => {

        const url = baseUrl + "api/vi/social/profiles";

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNjc0MDc2ODc5fQ.WbEOlQp8ydWThnPoGdDY9Fa1PTW9N2opb4kDjO_hS1Q '
            
            },
        
        


        })



         //our request mmust contain some extra

        const jsonData = await response.json();

        console.log(jsonData)
       }

       FetchProfilesEndpoint()

    }, [])
}
    






return <div>Token:: {token} <button onClick={FetchAllSocialEntries}>FetchPosts:</button></div>



}



export default FetchArray