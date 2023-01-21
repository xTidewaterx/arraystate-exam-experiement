import { useEffect, useState } from "react"


const baseUrl = "https://api.noroff.dev/"




const FetchAllSocialEntries = () => {

    //GET /api/v1/social/profiles
    
    //If you want to get all posts by a specific profile, you can use the posts by profile endpoint.
    
        useEffect(() => {
    
           const FetchProfilesEndpoint =async () => {
    
            const url = baseUrl + "api/vi/social/posts";
    
            const response = await fetch(url, {
           
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpvaEtqZTUyNTU0QHN0dWQubm9yb2ZmLm5vIiwiaWF0IjoxNjc0MDc3OTQ1fQ.E5WrtOFsGlDXYRarkAn_FT6MUuzCzyfsWXDZDIe0flI'
                
                },
            
            
    
    
            })
            
    
    
    
             //our request mmust contain some extra
    
            const jsonData = await response.json();
    
            console.log(jsonData)
           }
    
           FetchProfilesEndpoint()
    
        }, [])



        return <>
        This is our get request post return: </>
    }


    export default FetchAllSocialEntries