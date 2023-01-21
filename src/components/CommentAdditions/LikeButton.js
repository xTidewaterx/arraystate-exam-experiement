import { useEffect, useState } from "react";

//state hook callback function calls after every state update
//useeffect hook that trigger after state update and call the function after that 

function LikeButton (prop) {

    const [likeValue, changeLikeValue] = useState(parseInt(localStorage.getItem("likeValueID:"+prop.id +":")));

    console.log(parseInt(likeValue))

  function renderNullAsZero () {

//a problem is some things are setting localstorage before argument reaches
    if (isNaN(likeValue)) {
      changeLikeValue(0)

       // console.log("statelikevalue is not null")
      //we can have state different than localstorage
     
        
    } else {
      console.log("hhh")
     
       // changeLikeValue(0)
        //perhaps a problem: when logged all is first null, then each of the values become zero, the likeValue has to immediate automatic states
    }

  }


  renderNullAsZero()

    const subtractLike = () => {

        if(likeValue>=1) {
        changeLikeValue(likeValue - 1);
        localStorage.setItem("likeValueID:" + prop.id + ":", likeValue)

        } else {

           // console.log("amount of likes has reached a minimum value")
          //  console.log(prop.value)
            localStorage.setItem("likeValueID:" + prop.id + ":", likeValue)
        }

    }


    
    function AddLike  ()  {

   
    
    changeLikeValue(likeValue + 1 );


       


 


    }


    useEffect (()=> {

        function setDynamicLikeValue () { localStorage.setItem("likeValueID:" + prop.id + ":", likeValue)
       // console.log("usEffect console.log" + likeValue)

    }
    setDynamicLikeValue()


    },[likeValue])





    return (<> 
    
    <button onClick={subtractLike}>Dislike</button>
   
    <button onClick={AddLike}>Like</button>

    <b>Likes: {likeValue}</b>

    </>
)}

export default LikeButton








function setLocalValue () {

    localStorage.setItem("key", "keyvalue")


}

setLocalValue()