import { useEffect, useState, useSyncExternalStore } from "react"
import { useNavigate } from "react-router-dom"
const Home = (name, id) => {


    
    const logoutUser = async() => {
        
        const url = `http://localhost:8000/logout/`;
        const settings = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            
        }
        };
        try {
            const fetchResponse = await fetch(url, settings);
            const response = await fetchResponse.json();
           
            
            } catch (e) {
            console.log(e);
            }
    
    
}
    
    return(
        <>
            <div className="Home">
            <div className="Home-sub" >
            <div className="Welcome-box">
                    Welcome {name}!!
            </div>
            <div className="Logout-Button"
                onClick={() => {logoutUser()}}
                >
                        LOGOUT
            </div>
            </div>
           
            </div>
        </>
    )
}
export default Home