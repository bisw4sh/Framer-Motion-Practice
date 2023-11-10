import { motion } from 'framer-motion'

const Transit = () => {
  return (
    <div className='h-screen w-full bg-slate-800 flex flex-col gap-10 justify-center items-center overflow-hidden'>

        <motion.span className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'
        initial={{x: '-90vw', rotateZ : 180}}
        animate={{x : 0, rotateZ : 0}}
        transition={{delay: .5, type: 'tween',duration: 1.5}}>
            From left to center
        </motion.span>

        <motion.span className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'
        initial={{y: '-90vh', rotateZ : 180}}
        animate={{y : 0, rotateZ : 0}}
        transition={{delay: .5, type: 'tween',duration: 1.5}}>
            From down to center
        </motion.span>

        <motion.span className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'
        initial={{x: '100vw', rotateZ : 180}}
        animate={{x : 0, rotateZ : 0}}
        transition={{delay: .5, type: 'tween',duration: 1.5}}>
            From right to center
        </motion.span>

        <motion.span className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'
        initial={{y: '-90vh', rotateZ : 180}}
        animate={{y : 0, rotateZ : 0}}
        transition={{delay: .5, type: 'tween',duration: 1.5}}>
            From up to center
        </motion.span>

    </div>
  )
}

export default Transit