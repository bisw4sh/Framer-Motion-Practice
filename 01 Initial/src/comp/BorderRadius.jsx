import { motion } from 'framer-motion'

const BorderRadius = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
    <motion.div
    className="h-64 w-64 bg-teal-900"
    animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
    }}
    transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
    }}/>
    </div>
  )
}

export default BorderRadius