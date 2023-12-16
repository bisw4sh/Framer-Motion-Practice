import { motion } from "framer-motion";
import Draggable from "../components/Draggable";
import Arrow from "../components/Arrow";
import Time from "../components/Time";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-teal-100 p-4 flex flex-col items-center gap-5">
      <motion.button
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
        className="border-1 bg-slate-600 p-2 rounded-md "
      >
        Hello there
      </motion.button>

      <motion.a
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="bg-teal-300 p-3 rounded-md"
      >
        Hello
      </motion.a>

      <Draggable />
      <Arrow />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className="h-16 w-16 rounded-full bg-teal-500 flex justify-center items-center p-1"
        onClick={() => window.location.reload()}
      >
        Refresh
      </motion.div>
      <Time />
    </div>
  );
}
