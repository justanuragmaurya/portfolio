"use client"
import { Bricolage_Grotesque } from "next/font/google";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { RainbowButton } from "./magicui/rainbow-button";
import { useRef, useState } from "react";
import axios from "axios"
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { contactForm } from "@/lib/data";

const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function Contact(){
    const [loading,setLoading]= useState<boolean>(false);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const handleClick = async()=>{
        setLoading(true);
        if(emailRef.current?.value=="" || messageRef.current?.value=="" ){
            console.log("Empty");
            setLoading(false);
            return
        }
        try {
            await axios.post("/api/contact",{
                email:emailRef.current?.value,
                message:messageRef.current?.value
            });
            
            // Clear the form after successful submission
            if(emailRef.current) emailRef.current.value = "";
            if(messageRef.current) messageRef.current.value = "";
            
            toast("✅ Message Sent");
        } catch (error) {
            toast.error("Failed to send message");
            console.error("Error sending message:", error);
        } finally {
            setLoading(false);
        }
    }
    
    return(
        <div className="flex flex-col mb-10 p-5">
            <hr className="my-10 w-1/2 mx-auto"/>
            <h1 className={`${font.className} font-semibold text-3xl mx-auto`}>{contactForm.title}</h1>
            <div className="w-full mt-5">
                <h1>{contactForm.emailLabel}</h1>
                <Input ref={emailRef} placeholder={contactForm.emailPlaceholder}/>
            </div>
            <div className="w-full mt-5">
                <h1>{contactForm.messageLabel}</h1>
                <Textarea ref={messageRef} placeholder={contactForm.messagePlaceholder} className="h-32"/>
            </div>
            <RainbowButton onClick={handleClick} disabled={loading} className="mt-5">{loading?<div className="flex items-center gap-2"><Loader2 className="animate-spin"/>{contactForm.sendingButton}</div>:contactForm.sendButton}</RainbowButton>
        </div>
    )
}