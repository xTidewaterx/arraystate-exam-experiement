import { useEffect } from "react"

//this function creates a registered user for us in the noroff endpoint database
//with a registered user we can append password and username values in the post request when requesting token for auth on endpointss


const baseUrl = "https://api.noroff.dev/"

const RegisterProfile = () => {



useEffect(() => {



    const CreateRegisteredUser = async() => {

        const response = await fetch(baseUrl + "api/v1/social/auth/register", {


            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
         body: JSON.stringify ({ 
        "name": "Johan",
        "email": "JohKje52554@stud.noroff.no",
        "password": "XN2em7p4DHxXxbe",
        "avatar": "https://i.pinimg.com/originals/10/91/94/1091948c6b80b65b9eef8c163f0ae42a.jpg"

        })
        //this closes json.stringiffy
//close request

    }) //this closes await fetch

    const jsonValue = await response.json();

    console.log(jsonValue)
    console.log("Our error is: " + jsonValue.errors[0])



        return <div>gggg</div>
    } //this closes CreateRegisteredUser
    CreateRegisteredUser()

 },[] )  //this doesnt close useEffect

    return <>hh</>

}


export default RegisterProfile