'use client'
import styles from './page.module.css'
import { useState, useEffect } from 'react';
import { Gwendolyn, VT323, Playfair_Display } from "next/font/google";
const gwendolyn = Gwendolyn({ subsets: ["latin"], weight: '400' });
const vt323 = VT323({ subsets: ["latin"], weight: '400' });
const playfair = Playfair_Display({ subsets: ["latin"], weight: '400' });
export default function Home() {
    const [windowsWidth, setWindowsWidth] = useState(0);

    useEffect(() => {
        setWindowsWidth(window.innerWidth);
    }, [])

    const getBlocks = () => {
        const blockSize = windowsWidth * 0.05;
        const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
        return [...Array(nbOfBlocks).keys()].map((_, index) => {
            return <div onMouseEnter={(e) => {colorize(e.target)}} key={index}></div>
        })
    }

    const colorize = (el) => {
        el.style.backgroundColor = 'white'
        setTimeout( () => {
            el.style.backgroundColor = 'transparent';
        }, 300)
    }

    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <div className={`${playfair.className} flex flex-col items-center justify-center leading-[77px]`}>
                    <div className={'flex gap-3'}>
                        <p><span className={`${gwendolyn.className} text-[140px] mr-3`}>P</span>iero</p>
                        <p><span className={`${gwendolyn.className} text-[140px] mr-3`}>M</span>arcos</p>
                    </div>
                    <p>FULLSTACK DEVELOPER</p>
                    <p className={`${vt323.className} text-[110px]`}>☼Developer☀</p>
                    <p>CURRENTLY</p>
                    <p className={`${vt323.className} text-[110px]`}>FOLIO<span className={`${gwendolyn.className} text-[110px]`}>©️</span>2024<span
                        className={`${vt323.className} text-[110px]`}>⚗✨</span></p>
                </div>
            </div>
            <div className={styles.grid}>
                {
                    windowsWidth > 0 && [...Array(20).keys()].map((_, index) => {
                        return <div key={index} className={styles.column}>
                            {
                                getBlocks()
                            }
                        </div>
                    })
                }
            </div>
        </div>
    )
}