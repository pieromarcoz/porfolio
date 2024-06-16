import {motion, useTransform} from "framer-motion";
import {Playfair_Display, Inter} from "next/font/google";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {useEffect, useState} from "react";
import Image from "next/image";
import {Copy} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "./ui/tooltip";

const playfair = Playfair_Display({subsets: ["latin"], weight: '400'});
const inter = Inter({subsets: ["latin"], weight: '400'});
const HoverBackground = ({hoveredIndex}) => {
    const [position, setPosition] = useState({top: 0, height: 0});

    useEffect(() => {
        if (hoveredIndex !== null) {
            const element = document.getElementById(`accordion-item-${hoveredIndex}`);
            if (element) {
                const rect = element.getBoundingClientRect();
                setPosition({top: element.offsetTop, height: rect.height});
            }
        }
    }, [hoveredIndex]);

    return (
        <div
            className="absolute left-0 w-full bg-black transition-all duration-300 ease-out"
            style={{
                top: `${position.top}px`,
                height: `${position.height}px`,
                opacity: hoveredIndex !== null ? 1 : 0,
            }}
        />
    );
};
export default function Project({scrollYProgress}) {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])
    const accordionItems = [
        {
            value: "item-1",
            project: "Yoom App",
            year: "2024",
            description: "Built with the latest Next.js and TypeScript, this project replicates Zoom, a widely used video conferencing tool. It enables users to securely log in, create meetings and access various meeting functionalities such as recording, screen sharing, and managing participants.",
            demo: "https://yoomapp-pieromg.vercel.app/",
            stack: ["Next.js 14", "TypeScript", "Clerk", "getstream", "shadcn", "Tailwind CSS"],
            images: ["/yoom1.png", "/yoom2.png", "/yoom3.png"]
        },
        {
            value: "item-2",
            project: "DigitalHippo",
            year: "2023",
            description: "Developed using Next.js 14 and TypeScript, this project is a full-fledged e-commerce marketplace for digital products. It features a robust admin dashboard, user authentication, and allows users to both purchase and sell digital items. The platform includes a locally persisted shopping cart, product verification system, and custom email notifications.",
            demo: "https://digitalhippo-pieromg.up.railway.app/",
            demoCMS: "https://digitalhippo-pieromg.up.railway.app/sell",
            copyCredentialsdemoCMS: "admin@gmail.com admin123",
            stack: ["Next.js 14", "tRPC", "TypeScript", "Payload CMS", "shadcn", "Tailwind CSS"],
            images: ["/digital1.webp", "/digital3.png", "/digital5.png"]
        }
    ];
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <motion.div style={{scale, rotate}} className={"py-40 relative min-h-screen w-full flex items-center bg-white "}>
            <div className={`${playfair.className}  text-center w-full mx-4`}>
                <p className={'text-black text-5xl lg:text-[90px] pb-6 lg:pb-20'}>PROJECTS</p>
                <div className={`relative w-full py-4 ${inter.className}`}>
                    <HoverBackground hoveredIndex={hoveredIndex}/>
                    <div className={'head_table w-full grid grid-cols-3 items-center py-4 border-b border-black'}>
                        <p className={'text-xs text-left'}>PROJECT</p>
                        <p className={'text-xs text-center'}>CATEGORY</p>
                        <p className={'text-xs text-right'}>YEAR</p>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                        {accordionItems.map((item, index) => (
                            <AccordionItem
                                key={item.value}
                                value={item.value}

                            >
                                <AccordionTrigger
                                    id={`accordion-item-${index}`}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className="bg-transparent relative grid grid-cols-3 items-center w-full hover:underline-offset-0 transition-all duration-300 hover:no-underline hover:first-of-type:pl-2 hover:last-of-type:pr-2"
                                >
                                    <p className={`text-xs ${hoveredIndex === index ? 'text-white' : 'text-gray-900'} text-left`}>
                                        {item.project}
                                    </p>
                                    <p className={`text-xs ${hoveredIndex === index ? 'text-white' : 'text-gray-900'} text-center`}>
                                        Development
                                    </p>
                                    <p className={`text-xs ${hoveredIndex === index ? 'text-white' : 'text-gray-900'} text-right`}>
                                        {item.year}
                                    </p>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div
                                        className={`relative z-10 p-4 transition-colors duration-300`}>
                                        <div
                                            className={'flex flex-col space-y-4 *:text-black items-start [&>:not(:last-child)]:max-w-2xl'}>
                                            <p className={'text-xl leading-6 text-start'}>{item.description}</p>
                                            <div className={'flex gap-3 items-center'}>
                                                <a href={item.demo} target={'_blank'} rel={'noreferrer'}
                                                   className={'underline'}>Live demo</a>
                                                {item.demoCMS && <a href={item.demoCMS} target={'_blank'} rel={'noreferrer'}
                                                                    className={'underline'}>CMS demo</a>}
                                                {item.copyCredentialsdemoCMS &&
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger><Copy height={15} width={15} className={'text-xs cursor-pointer'} onClick={() => navigator.clipboard.writeText(item.copyCredentialsdemoCMS)}/></TooltipTrigger>
                                                            <TooltipContent>
                                                                <p>Copy credentials!</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                }
                                            </div>
                                            <div className={'flex flex-col space-y-1 items-start'}>
                                            {item.stack?.map((stack, index) => (
                                                    <li key={index} className={'text-sm'}>{stack}</li>
                                                ))}
                                            </div>
                                            <div className={'flex flex-row w-full gap-2 overflow-x-auto'}>
                                                {item.images?.map((image, index) => (
                                                    <Image key={index} src={image} alt={'Demo Image'} width={360}
                                                           height={391} className={'object-contain object-center rounded '}/>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </motion.div>
    )
}
