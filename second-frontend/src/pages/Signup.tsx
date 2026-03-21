import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/CreateComponet";
import axios from "axios";


export function SignUp() {

    const nameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    function singup(){
        const name = nameRef.current?.value
        const email = emailRef.current?.value
        const password = passwordRef.current?.value

        
    }

    const handleSumbit = () => {
        console.log('hi');
    }
    return <div className="w-screen h-screen bg-gray-400 flex justify-center items-center">
        
        <div className="w-full max-w-md bg-white rounded-lg shadow">
            <div className="flex justify-center text-4xl font-medium p-8">
                SignUp
            </div>
            <div className="p-4">
                <Input ref={nameRef} name={"Name"}/>
                <Input name={"Email"} ref={emailRef}/>
                <Input name={"Password"} ref={passwordRef}/>
            </div>
        <div className="flex justify-center p-4">
            <Button variant="primary" text="Submit" size="md" onClick={handleSumbit}/>
        </div>
        </div>
    </div>
}