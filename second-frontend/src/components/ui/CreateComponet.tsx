
import { useRef, useState } from "react";
import { CrosIcon } from "../../icons/CrosIcon"
import { Button } from "./Button"
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useNavigate } from "react-router-dom";


enum ContentTypes {
  Youtube = "Youtube",
  Twitter = "Twitter"
}

interface ComponentProps {
  open:boolean;
  onClose:() => void;
}

export const CreateComponent = ({ open , onClose }: ComponentProps) => {
    if (!open) return null;
    const navigate = useNavigate();
    const [type, setType] = useState(ContentTypes.Youtube);

    const linkRef = useRef<HTMLInputElement | null>(null)
    const titleRef = useRef<HTMLInputElement | null>(null)

    async function addContent(){
      

        const link = linkRef.current?.value
        const title = titleRef.current?.value

        await axios.post(`${BACKEND_URL}/api/v1/content`, {
          type,
          link,
          title
        } , {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          }
        })
        alert('content create')
        navigate('/dashboard');
    }

    return (
        <div className={`fixed inset-0 flex justify-center items-center z-50 transition-all duration-300 
${open ? "bg-black/40 backdrop-blur-sm opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div className="h-100 w-100 bg-white justify-center rounded-lg shadow">
                <div className="flex justify-end p-2" >
                    <CrosIcon  onClose={onClose}/>
                </div>
                <div className="flex justify-center">
                    <div className="text-2xl font-medium">Create Content</div>
                </div>

                <div className="p-5">
                    <Input ref={linkRef} name={"Link"} />
                    <Input ref={titleRef} name={"Title"} />
                </div>

                <div className="flex justify-center p-3 gap-2">
                  <Button text="Youtube" variant={type === ContentTypes.Youtube ? "primary" : "secondary"} onClick={() => {setType(ContentTypes.Youtube)}} size="md"/>
                  <Button text="twitter" variant={type === ContentTypes.Twitter ? "primary" : "secondary"} onClick={() => {setType(ContentTypes.Twitter)}} size="md"/>
                </div>

                <div className="flex justify-center">
                    <Button onClick={addContent} variant="primary" text="Submit" size="md" />
                </div>
            </div>
        </div>
    );
};

interface InputProps {
  name: string;
  ref?:any;
}


export function Input({name, ref}:  InputProps) {
  return (
    <div className="pt-5 flex items-center">
      <span className="w-40 text-2xl font-medium">
        {name}
      </span>
      <input
        type={"text"}
        ref={ref}
        className="h-10 w-64 border rounded-lg px-2"
      />
    </div>
  );
}