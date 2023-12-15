import { useRef } from "react";
import { motion } from "framer-motion";

export default function Draggable() {

  const constraintsRef = useRef(null);

  return (
    <motion.div ref={constraintsRef}>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragSnapToOrigin={true}
        whileDrag={{ opacity: 0.5, scale: 1.5 }}
        transition={{mass: 0.5, bounce: 0.25, duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        dragElastic={0.5}
        className="h-16 w-16 rounded-full bg-teal-500"
      />
    </motion.div>
  );
}
