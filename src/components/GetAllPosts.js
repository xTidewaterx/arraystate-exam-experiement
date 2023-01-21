import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import LikeButton from "./CommentAdditions/LikeButton";

export const baseUrl = "https://api.noroff.dev/"

const allPostsEndpoint = "https://api.noroff.dev/api/v1/social/posts"
const GetAllPosts  = () => {


const [posts, changePostsArray] = useState(null)

        //GET /api/v1/social/profiles
        
        
        
            useEffect(() => {
        
               const FetchProfilesEndpoint =async () => {
        
                const url = baseUrl + "api/vi/social/posts";
        
                 const url2 = "https://api.noroff.dev/api/v1/social/posts"

                const response = await fetch(url2, {
                 method: 'GET',
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpvaEtqZTUyNTU0QHN0dWQubm9yb2ZmLm5vIiwiaWF0IjoxNjc0MDc3OTQ1fQ.E5WrtOFsGlDXYRarkAn_FT6MUuzCzyfsWXDZDIe0flI'
                    
                    },
                
                
        
        
                })
        
        
        
                 //our request mmust contain some extra
        
                const jsonData = await response.json();
        
                console.log(jsonData)

                changePostsArray(jsonData)
               }
        
               FetchProfilesEndpoint()
        
            }, [])
    
    
    if (posts !== null) {
            return (
            
            <>Get request, return object, endpoint with auth in headers request
            
            
             { posts.map((item) => {

                  return <li key={item.id}>{item.id} <LikeButton value="prop has been exchanged with parent component value mitigator" id={item.id}/></li>
                })
            
            
              } </> ) } else {


return <div>...Loading</div>
              } 
                
                }
            
    
    


        export default GetAllPosts