import { motion } from 'framer-motion'

const ShapeShifter = () => {
  return (
    <motion.div
    className='h-screen w-full bg-fuchsia-800 flex gap-16 justify-center items-center'>
        <motion.div
        className='h-96 w-96 rounded-full bg-teal-400 flex justify-center items-center'
        initial={{rotateZ: 0, x: 0}}
        animate={{rotateZ: 360, x: 385}}
        exit={{x:0}}
        transition={{
            repeat: 100,
            repeatType: "reverse",
            duration: 2}}
        >
        </motion.div>

        <motion.div
        className='h-96 w-96 bg-teal-400 rounded-2xl'
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}
        transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
        }}
        />

        <motion.div
        className='h-16 w-16 bg-slate-600'
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
        scale: 0.8,
        rotate: -90,
        borderRadius: "100%"
        }}
        />
    </motion.div>
  )
}

export default ShapeShifter