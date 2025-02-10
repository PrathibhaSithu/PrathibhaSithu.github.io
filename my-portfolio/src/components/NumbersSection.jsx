import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Numbers } from "./data/config";

export default function NumbersSection(){
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {threshold:0.1}
        );

        if(sectionRef.current){
            observer.observe(sectionRef.current);
        }

        return () =>{
            if(sectionRef.current){
                observer.unobserve(sectionRef.current)
            }
        }
    },[]);

    return(
        <section className="mx-auto w-full relative text-white mt-40 flex justify-center"></section>
    )
}