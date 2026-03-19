import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/CreateComponet";


export function SignIn() {
    const handleSumbit = () => {
        console.log('hi')
    }
    return <div className="w-screen h-screen bg-gray-400 flex justify-center items-center">
        
        <div className="w-full max-w-md bg-white rounded-lg shadow">
            <div className="flex justify-center text-4xl font-medium p-4">
                SignIn
            </div>
            <div className="p-4">
                <Input name={"Email"}/>
                <Input name={"Password"}/>
            </div>
        <div className="flex justify-center p-4">
            <Button variant="primary" text="Submit" size="md" onClick={handleSumbit}/>
        </div>
        </div>
    </div>
}