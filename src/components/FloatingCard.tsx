"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type CardColor = "blue" | "orange" | "dark" | "light-purple" | "background";

interface FloatingCardProps {
    color: CardColor;
    rotation: number;
    delay: number;
    icon?: LucideIcon;
    label?: string;
    className?: string;
    children?: React.ReactNode;
}

const colorStyles: Record<CardColor, string> = {
    blue: "bg-[#3B5BF6] text-white shadow-[0_20px_60px_rgba(59,91,246,0.35)]",
    orange: "bg-[#E07838] text-white shadow-[0_20px_60px_rgba(224,120,56,0.35)]",
    dark: "bg-[#2C1A4A] text-[#E07838] shadow-[0_20px_60px_rgba(44,26,74,0.5)]",
    "light-purple": "bg-[#DBCBFF] text-slate-800 shadow-[0_20px_60px_rgba(219,203,255,0.5)]",
    background: "bg-[#E2E8F0] dark:bg-[#111111]",
};

export default function FloatingCard({
    color,
    rotation,
    delay,
    icon: Icon,
    label,
    className,
    children,
}: FloatingCardProps) {
    return (
        <motion.div
            className={cn(
                "absolute flex items-center justify-start gap-5 rounded-full cursor-default will-change-transform",
                colorStyles[color],
                className
            )}
            style={{ rotate: rotation }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: [0, -8, 0],
            }}
            transition={{
                opacity: { duration: 0.5, delay },
                scale: { duration: 0.5, delay },
                y: {
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay + 0.5,
                },
            }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
        >
            {children ? (
                children
            ) : (
                Icon && label && (
                    <>
                        <Icon className="w-12 h-12 shrink-0" />
                        <span className="font-semibold text-[2.2rem] whitespace-nowrap">{label}</span>
                    </>
                )
            )}
        </motion.div>
    );
}
