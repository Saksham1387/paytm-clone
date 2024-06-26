import { useState,useEffect } from "react"
import axios from "axios"
export const useUser = async ()=>{
    const [loading,setLoading] = useState(true);
    const [userDetails,setUserDetails] = useState(null)

    async function getDetails(){
        try{
            const response = await axios.get("http://localhost:3000/api/v1/user/me",{
                headers:{
                    authorization: "Bearer "+ localStorage.getItem("token")
                }
            });
            console.log(response.data)
            setUserDetails(response.data)
        }catch(e){
            console.error(e)
        }
        setLoading(false)
    }
    useEffect(()=>{
        getDetails();
    },[]);
    console.log(userDetails)
    return {
        loading,
        userDetails
    }
}

