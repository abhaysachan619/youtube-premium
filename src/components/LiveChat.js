import { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {

    useEffect(()=>{
        const i = setInterval(()=>{
         // API Polling
         console.log("API Polling");
        },2000);

        return ()=> clearInterval(i);
    },[]);

  return(
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg">
      <ChatMessage 
            name="Abhay Sachan" 
            message="This is Namaste React live! 🙏🏻"
       /> 
    </div>
  );
};

export default LiveChat;