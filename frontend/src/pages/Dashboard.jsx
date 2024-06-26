import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios";
import {useUser} from "../hooks/useUser"
import { useState } from "react";
import {Navigate} from "react-router-dom"
export const Dashboard = () => {
    const user = useUser();
    console.log(user.loading)
    if(user.loading){
        return "loading.."
    }
    if(!user.userDetails){
        console.log("in the not if ")
        return <Navigate to="/signup"/>
    }


//getting the user balance
    const id = localStorage.getItem("userID")
    const [balance,setBalance] = useState("cant get the balance")

    const bal = async ()=>{
        console.log("the user id:"+id)
        console.log("Bearer " + localStorage.getItem("token"))
try{
        const response = await axios.get("http://localhost:3000/api/v1/account/balance",{
            userId :id ,
            headers: {
                authorization: "Bearer " + localStorage.getItem("token")
            }
    })
    console.log(response)
    setBalance(response.data.balance)
}catch(e){
    console.log(e)
}}
    bal();
    
    
    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}