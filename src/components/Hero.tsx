"use client";

import { Gavel, ListChecks, FileText, Receipt } from "lucide-react";
import FloatingCard from "./FloatingCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const DESIGN_WIDTH = 1440;

        function handleResize() {
            setScale(Math.min(window.innerWidth / DESIGN_WIDTH, 1));
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="relative w-full h-screen overflow-hidden bg-[#eef0f8] dark:bg-black">

            {/* Background pill shapes */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <FloatingCard color="background" rotation={-8.5} delay={0.6} className="top-[48%] -left-[4%] w-[13rem] h-[7rem]" />
                <FloatingCard color="background" rotation={0} delay={0.7} className="top-[63%] -left-[8%] w-[28rem] h-[7rem]" />
                <FloatingCard color="background" rotation={0} delay={0.8} className="top-[78%] -left-[4%] w-[37.5rem] h-[7rem]" />
                <FloatingCard color="background" rotation={5} delay={0.9} className="top-[16%] right-[-4%] w-[20.25rem] h-[7rem]" />
                <FloatingCard color="background" rotation={0} delay={1.0} className="top-[32%] right-[-4%] w-[33.25rem] h-[7rem]" />
                <FloatingCard color="background" rotation={0} delay={1.1} className="top-[48%] right-[-3%] w-[20.25rem] h-[7rem]" />
            </div>

            {/* ═══ DESKTOP / TABLET (md+) — Scaled floating layout ═══ */}
            <div className="hidden md:block relative z-10 h-screen">
                <div
                    className="w-[1440px] h-screen origin-top-left"
                    style={{ transform: `scale(${scale})` }}
                >
                    <motion.div
                        className="absolute top-[7%] left-[10%] max-w-[50%]"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <h1 className="text-[4.5rem] font-normal leading-[1.15] tracking-[-0.02em] text-[#6C5880] dark:text-slate-400">
                            A single platform to<br />
                            <span className="font-semibold dark:text-slate-50">manage</span>{" "}
                            every part of <br />
                            your{" "}
                            <span className="font-semibold dark:text-[#8b80f9]">legal work</span>
                        </h1>
                        <p className="mt-5 text-[1.5rem] leading-relaxed text-[#4B3DD4] dark:text-[#8b80f9]/80 max-w-full">
                            Track matters, coordinate schedules, manage <br /> clients, centralize
                            documents, and handle <br /> communication - all in one system.
                        </p>
                    </motion.div>

                    <FloatingCard
                        color="blue"
                        rotation={10}
                        icon={Receipt}
                        label="Billing"
                        delay={0.1}
                        className="w-[30rem] h-[6.875rem] justify-start pl-14 top-[43%] left-[61%] z-10"
                    />
                    <FloatingCard
                        color="orange"
                        rotation={-10}
                        icon={Gavel}
                        label="Matters"
                        delay={0.2}
                        className="w-[28.125rem] h-[6.875rem] justify-start pl-14 top-[60%] left-[25%] z-30"
                    />
                    <FloatingCard
                        color="light-purple"
                        rotation={4}
                        delay={0.3}
                        className="top-[62%] left-[60%] rounded-full w-[30rem] h-[6.875rem] justify-start px-12 z-40 overflow-hidden"
                    >
                        <div className="flex items-center gap-5 w-full">
                            <div className="w-[6px] h-[4.5rem] bg-[#E07838] rounded-full shrink-0" />
                            <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                                alt="John Doe"
                                className="w-16 h-16 rounded-full bg-white/50 shrink-0"
                            />
                            <div className="flex flex-col min-w-0">
                                <span className="font-bold text-[1.25rem] text-[#2a2a45] truncate">John Doe - Portal</span>
                                <span className="text-[0.9375rem] text-[#A297FE] dark:text-[#a59dfa] leading-tight mt-1">
                                    Hey! Could you please review a <br /> document for me?
                                </span>
                                <span className="text-[0.8125rem] text-[#4B3DD4] mt-1.5 font-semibold">MAT-2233 – 2 h ago</span>
                            </div>
                        </div>
                    </FloatingCard>
                    <FloatingCard
                        color="dark"
                        rotation={0}
                        icon={ListChecks}
                        label="Tasks"
                        delay={0.4}
                        className="w-[30rem] h-[6.875rem] justify-start pl-14 top-[78%] left-[44%] z-20"
                    />
                    <FloatingCard
                        color="dark"
                        rotation={-8}
                        icon={FileText}
                        label="Documents"
                        delay={0.5}
                        className="w-[30rem] h-[6.875rem] justify-start pl-14 top-[78%] left-[84%] z-20"
                    />
                </div>
            </div>

            {/* ═══ MOBILE (< md) — Stacked layout ═══ */}
            <div className="md:hidden relative z-10 flex flex-col items-center px-5 pt-12 pb-8 gap-8">
                <motion.div
                    className="w-full text-center"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <h1 className="text-[2rem] sm:text-[2.5rem] font-normal leading-[1.15] tracking-[-0.02em] text-[#6C5880] dark:text-slate-400">
                        A single platform to{" "}
                        <span className="font-semibold dark:text-slate-50">manage</span>{" "}
                        every part of your{" "}
                        <span className="font-semibold dark:text-[#8b80f9]">legal work</span>
                    </h1>
                    <p className="mt-3 text-[0.95rem] sm:text-[1.05rem] leading-relaxed text-[#4B3DD4] dark:text-[#8b80f9]/80 mx-auto max-w-sm">
                        Track matters, coordinate schedules, manage clients, centralize
                        documents, and handle communication - all in one system.
                    </p>
                </motion.div>

                <div className="w-full max-w-sm flex flex-col gap-4">
                    <FloatingCard color="blue" rotation={4} icon={Receipt} label="Billing" delay={0.1}
                        className="!relative w-[18rem] h-[3.75rem] justify-start pl-6" />
                    <FloatingCard color="orange" rotation={-3} icon={Gavel} label="Matters" delay={0.2}
                        className="!relative w-[18rem] h-[3.75rem] justify-start pl-6" />
                    <FloatingCard color="light-purple" rotation={2} delay={0.3}
                        className="!relative w-[19rem] h-[3.75rem] rounded-full justify-start px-5 overflow-hidden ml-6"
                    >
                        <div className="flex items-center gap-2.5 w-full">
                            <div className="w-[3px] h-[2.5rem] bg-[#E07838] rounded-full shrink-0" />
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="John Doe"
                                className="w-8 h-8 rounded-full bg-white/50 shrink-0" />
                            <div className="flex flex-col min-w-0">
                                <span className="font-bold text-[0.8rem] text-[#2a2a45] truncate">John Doe - Portal</span>
                                <span className="text-[0.65rem] text-[#A297FE] dark:text-[#a59dfa] leading-tight">
                                    Hey! Could you please review a document for me?
                                </span>
                            </div>
                        </div>
                    </FloatingCard>
                    <FloatingCard color="dark" rotation={-2} icon={ListChecks} label="Tasks" delay={0.4}
                        className="!relative w-[18rem] h-[3.75rem] justify-start pl-6 ml-auto" />
                    <FloatingCard color="dark" rotation={5} icon={FileText} label="Documents" delay={0.5}
                        className="!relative w-[18rem] h-[3.75rem] justify-start pl-6 ml-10 lg:ml-20" />
                </div>
            </div>

        </section>
    );
}
