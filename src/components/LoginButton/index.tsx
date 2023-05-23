import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";


const LoginButton:React.FC =()=>{
    interface userI {
        name: string | null;
        iat?: number;
        iss?: string;
        picture?: string;
    } 
    const [user, setUser] = useState<userI>({name: null});

    function handleCallbackResponse(response:any) {
        console.log("Encoded JWT ID token:" + response.credential);
        const userObject = jwtDecode(response.credential);
        console.log(userObject)

        setUser(userObject as userI);
        document.getElementById("signInDiv")!.hidden = true;
    }
    function handleSignout(){
        setUser({name: null});
        document.getElementById("signInDiv")!.hidden = false;
    }

    useEffect(()=>{
        /* global google */
        google.accounts!.id.initialize({
            client_id:
                "488131369581-oms526oiaqc55adh4bd8rusd3i8e8qoo.apps.googleusercontent.com",
            callback: handleCallbackResponse,
        });
        const docGetId = document.getElementById("signInDiv")!;
        google.accounts.id.renderButton(docGetId,{
            theme: "outline",
            size: "large",
            type: "standard",
        })

        google.accounts.id.prompt();
    }, [])

    return(
        <div>
            
                <div id = "signInDiv"></div>
                { Object.keys(user).length != 0
                
                }
                <button onClick ={ () => handleSignout()}>Sign out</button>
                {user && 
                    <div>
                        <img src = {user.picture}></img>
                        <h3>{user.name}</h3>
                    </div>
                    
                }
            <Footer/>
        </div>
    )
}
export default LoginButton;