import { motion } from "framer-motion";

const stairsAnimation = {
    initial: { top: "0%" },
    animate: { top: "100%" },
    exit: { top: ["100%", "0%"] }
};

const reverseIndex = (index) => 6 - index;

const Stairs = () => {
    return (
        <div className="h-full w-full flex">
            {[...Array(6)].map((_, index) => (
                <motion.div
                    key={index}
                    variants={stairsAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: reverseIndex(index) * 0.1
                    }}
                    className="h-full w-full bg-white relative"
                />
            ))}
        </div>
    );
};

export default Stairs;