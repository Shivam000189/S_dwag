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
  open: boolean;
  onClose: () => void;
}

export const CreateComponent = ({ open, onClose }: ComponentProps) => {
  if (!open) return null;
  const navigate = useNavigate();
  const [type, setType] = useState(ContentTypes.Youtube);

  const linkRef = useRef<HTMLInputElement | null>(null);
  const titleRef = useRef<HTMLInputElement | null>(null);

  async function addContent() {
    const link = linkRef.current?.value;
    const title = titleRef.current?.value;

    await axios.post(`${BACKEND_URL}/api/v1/content`, {
      type,
      link,
      title
    }, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    });
    alert('content created');
    navigate('/dashboard');
  }

  return (
    <div className={`fixed inset-0 flex justify-center items-center z-50 transition-all duration-300 
      ${open ? "bg-black/50 backdrop-blur-sm opacity-100" : "opacity-0 pointer-events-none"}`}>

      <div className="bg-[#1a1617] text-white w-96 rounded-2xl shadow-2xl p-6 flex flex-col gap-5">

        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight text-white">Create Content</h2>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
          >
            <CrosIcon onClose={onClose} />
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          <Input ref={linkRef} name="Link" />
          <Input ref={titleRef} name="Title" />
        </div>

        {/* Type selector */}
        <div className="flex gap-2">
          {[ContentTypes.Youtube, ContentTypes.Twitter].map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all
                ${type === t
                  ? "bg-white text-[#1a1617] shadow"
                  : "bg-white/10 text-white/60 hover:bg-white/15 hover:text-white"
                }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Submit */}
        <button
          onClick={addContent}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 
            text-white font-semibold text-sm tracking-wide hover:opacity-90 active:scale-[0.98] transition-all"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

interface InputProps {
  name: string;
  ref?: any;
}

export function Input({ name, ref }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-white/50 uppercase tracking-widest">
        {name}
      </label>
      <input
        type="text"
        ref={ref}
        placeholder={`Enter ${name.toLowerCase()}...`}
        className="h-10 w-full rounded-xl bg-white/10 border border-white/10 px-3 text-sm text-white 
          placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 
          focus:border-white/20 transition-all"
      />
    </div>
  );
}