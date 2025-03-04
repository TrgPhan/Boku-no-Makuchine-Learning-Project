'use client';

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairsTrans = () => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial="initial"
                animate="animate"
                exit="exit"
                className="fixed inset-0 pointer-events-none z-40 overflow-hidden"
            >
                <Stairs />

                {/* Overlay layer */}
                <motion.div
                    className="absolute inset-0 bg-black"
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: {
                            delay: 0.5 + (6 * 0.1), // Đồng bộ delay với animation stairs
                            duration: 0.4,
                            ease: "easeInOut"
                        }
                    }}
                />
            </motion.div>
        </AnimatePresence>
    );
};

export default StairsTrans;