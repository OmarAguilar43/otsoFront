import axios from "axios"
import { cookies } from "next/headers"
import {TOKEN_NAME} from "@/constants"

const CountPage=async ()=>{
    const userCookies = cookies()

    const token = userCookies.get(TOKEN_NAME)?.value

    const countLocations = await axios.get("http://localhost:4000/locations",{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return "Numero de locations registradas son: " + countLocations?.data?.length
}

export default CountPage