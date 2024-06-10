import {motion, useTransform} from "framer-motion";
import {useEffect} from "react";
import {Playfair_Display} from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: '400' });

export default function Project({scrollYProgress}) {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])


    return (
        <motion.div style={{scale, rotate}} className={"relative h-screen bg-white grid place-content-center"}>
            <div className={`${playfair.className} text-[90px] text-center`}>
                <p>PROJECTS</p>
            </div>
        </motion.div>
    )
}
