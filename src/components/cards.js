import React, {useEffect, useState} from "react";
import Card from "./card";

export default function Cards () {
 /*  const [data,setData] = useState({
       users:[],
   });
   const [error,setError] = useState(null);


   useEffect( ()=> {
       /!*let users = {
           name,
           email,
           position,
           phone
       }*!/

       fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6")
           .then(res=>res.json())
           .then(
               (result)=> {
                   setData(result);
                   /!*console.log('DATA_fetch:',JSON.stringify(data));*!/
                   console.log("DTA",data.users)
                   /!*const user = data.users.map()*!/


               },
               (error)=> {
                   setError(error);
                   console.log('ERROR: ',error)
               }
           )

       },[]
   )*/
return (
    <>

        {data.users.map((user)=> (
            /*console.log("re:",user)*/
            <Card data={user} />
        ))}
    </>
)

}