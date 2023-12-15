import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../controllers/useCursor";

export default function Cursor() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <div className="min-h-screen flex justify-center items-center bg-teal-100 text-4xl font-semibold cursor-crosshair	">
      The cursor
      <motion.div
        ref={ref}
        className="h-32 w-32 bg-rose-400 rounded-full opacity-50"
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.001,
        }}
      />
    </div>
  );
}
