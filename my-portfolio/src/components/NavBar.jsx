import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { filter} from "framer-motion/client";

const Path = (props) => {
    <Path
    fill='transparent' strokeWidth='3' stroke='white' strokeLinecap='round' {...props}
    />
}

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scope, animate] = useAnimate();
    
    useEffect(() => {
        const menuAnimation = isOpen ? [
            'nav',
            {transform: 'translateX(0%)'},
        ]
    })

    return(
        <div className="nav-bar">NavBar</div>
    )
}