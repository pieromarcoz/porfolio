'use client';
import styles from '../components/Loader/page.module.css'
import {useRef, useEffect, useState} from 'react'
import Header from '../components/Header/page.jsx';
import Image from 'next/image';
import { useScroll, useTransform, motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Project from "../components/Project";

export default function Home() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    })
    /*const [endProgress, setEndProgress] = useState(false);
    useEffect(() => {
        const calculateEndScrollWindowandChangueState = () => {
            const scrollWindow = window.innerHeight - window.innerHeight * 0.8;
            const endScroll = scrollWindow * 0.2;
            if (scrollYProgress.get() >= endScroll) {
                setEndProgress(true);
            }
        }
        calculateEndScrollWindowandChangueState();
        window.addEventListener('scroll', calculateEndScrollWindowandChangueState);
        return () => {
            window.removeEventListener('scroll', calculateEndScrollWindowandChangueState);
        }
    }, [scrollYProgress])
    useEffect(() => {
        if (endProgress) {
            const scrollWindow = window.innerHeight - window.innerHeight * 0.8;
            const endScroll = scrollWindow * 0.2;
            scrollYProgress.set(endScroll);
        }
    }, [endProgress])
    useEffect(() => {
        const scrollWindow = window.innerHeight - window.innerHeight * 0.8;
        const endScroll = scrollWindow * 0.2;
        if (scrollYProgress.get() >= endScroll) {
            setEndProgress(true);
        }
    }, [scrollYProgress])*/

    return (
        <main ref={container} className="relative h-[200vh]">
            <Navbar/>
            <Header/>
            <Project scrollYProgress={scrollYProgress}/>
        </main>
    )
}

