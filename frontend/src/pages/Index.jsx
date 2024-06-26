import {useUser} from "../hooks/useUser"
import {Navigate} from "react-router-dom"
export const Index = ()=>{
    const user = useUser();
    console.log(user)
    if(user.loading){
        return "loading....";
    }
    if(!user.userDetails){
        return <Navigate to={"/signup"}/>
    }
    return <Navigate to={"/dashboard"}/>
}