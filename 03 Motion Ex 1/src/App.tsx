import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="p-4">
      <motion.circle
        cx={500}
        animate={{ cx: [null, 100, 200] }}
        transition={{ duration: 3, times: [0, 0.2, 1] }}
      />

      <motion.button
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
        className="border-1 bg-slate-600 p-2 rounded-md "
      >Hello there</motion.button>
    </div>
  );
}
