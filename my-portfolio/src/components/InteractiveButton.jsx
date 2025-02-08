import {useRef, useState} from 'react';
import {motion} from 'framer-motion';

const CYCLE_PER_LETTER =2;
const SHUFFLE_TIME = 50;
const CHARS = '!@#$%^&*():{};|,<>/?';

export default function InteractiveButton({text}) {
    return (
       <div className='flex justify-center items-center min-h-[200px] p-4'> 
        <CustomButton text={text}/>
       </div>
    )
}

const CustomButton = ({text}) => {
    const intervalRef = useRef(null);
    const [displayText, setDisplayText] = useState(text);

    const scramble = () =>{
        let pos=0;
        intervalRef.current = setInterval(()=>{
           const scrambled = text.split('').map((char, index) =>{})
    })
}
}