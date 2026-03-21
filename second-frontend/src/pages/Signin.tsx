import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/CreateComponet";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";


export function SignIn() {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    async function singIn(){
        const email = emailRef.current?.value
        const password = passwordRef.current?.value

        const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
                email,
                password
            
        })
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate('/dashboard');
    }

    return <div className="w-screen h-screen bg-gray-400 flex justify-center items-center">
        
        <div className="w-full max-w-md bg-white rounded-lg shadow">
            <div className="flex justify-center text-4xl font-medium p-4">
                SignIn
            </div>
            <div className="p-4">
                <Input ref={emailRef}  name={"Email"}/>
                <Input ref={passwordRef} name={"Password"}/>
            </div>
        <div className="flex justify-center p-4">
            <Button variant="primary" text="Submit" size="md" onClick={singIn}/>
        </div>
        </div>
    </div>
}