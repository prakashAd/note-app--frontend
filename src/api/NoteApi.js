import {API} from "../config"

export const Noteadd =(note,description) =>{
    return fetch(`${API}/addnote`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"

        },
        body:JSON.stringify({note,description})
    })
        .then(response=>{return response.json()})
        .catch(error=>console.log(error))

}