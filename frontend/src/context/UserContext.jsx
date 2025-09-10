import { Flag } from "lucide-react";
import React, { Children, useEffect, useState } from "react";
import { createContext } from "react";
export const UserContext = createContext();



const UserProvider = ({Children}) => {
    const [user, setUser] = useState(null);
    cnst [loading , setLoading] = useState(true);


    useEffect(() => {
        if(user) return 

        const accessToken = localStorage.getItem('token')
        if(!accessToken) {
            setLoading(false)
            return;
        }
const fetchUser = async () =>{
    try{

const response = await


    } catch (error){

    }
}

    })

}