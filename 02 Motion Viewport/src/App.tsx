import { motion } from "framer-motion";
import Memes from "./components/Memes";

export default function App() {
  return (
    <main className="flex flex-col items-center py-16 bg-purple-400">
      <motion.div
        className="h-64 w-64 bg-slate-700 rounded-xl"
        whileHover={{ scale: 1.2}}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      ></motion.div>
      <Memes />
    </main>
  )
}
