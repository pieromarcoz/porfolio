'use client';
import styles from '../components/Loader/page.module.css'
import {useRef, useEffect, useState} from 'react'
import Header from '../components/Header/page.jsx';
import Image from 'next/image';
import { useScroll, useTransform, motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Project from "../components/Project";
import Lenis from "lenis";
export default function Home() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    })

    useEffect( () => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <main ref={container} className="relative h-[200vh]">
            <Navbar/>
            <Header/>
            <Project scrollYProgress={scrollYProgress}/>
        </main>
    )
}

