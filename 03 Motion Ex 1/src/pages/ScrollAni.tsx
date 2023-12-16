import { useMotionValue, useVelocity } from "framer-motion";
import { motion, useScroll, useMotionValueEvent, useSpring} from 'framer-motion'
import { useEffect } from "react";

export default function ScrollAni() {
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

    const x = useMotionValue(0);
    const xVelocity = useVelocity(x);

    useEffect(() => {
      return xVelocity.on('change', (latestVelocity) => {
        console.log("Velocity", latestVelocity);
      });
    }, []);

  return (
    <motion.div
      className="h-[500vh] flex justify-center items-center bg-teal-100 text-4xl font-semibold"
      style={{ x }}
    >
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 origin-top-left	bg-gradient-to-r from-teal-800 to-teal-400"
      />
    </motion.div>
  );
}
