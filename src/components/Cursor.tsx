import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const Cursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const springConfig = { damping: 25, stiffness: 150 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable = target.closest('a, button, [role="button"]');
            setIsHovered(!!isClickable);
        };

        window.addEventListener("mousemove", moveMouse);
        window.addEventListener("mouseover", handleHover);

        return () => {
            window.removeEventListener("mousemove", moveMouse);
            window.removeEventListener("mouseover", handleHover);
        };
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-indigo-500/50 pointer-events-none z-[999]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    scale: isHovered ? 1.5 : 1,
                    backgroundColor: isHovered ? "rgba(99, 102, 241, 0.1)" : "transparent",
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-indigo-500 rounded-full pointer-events-none z-[1000]"
                animate={{
                    x: mousePos.x - 3,
                    y: mousePos.y - 3,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0 }}
            />
        </>
    );
};

export default Cursor;
