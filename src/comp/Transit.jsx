import { motion } from 'framer-motion'

const Transit = () => {
  return (
    <div className='h-screen w-full bg-slate-800 flex justify-center items-center'>

        <motion.span className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'
        initial={{x: '-90vw'}}
        animate={{x : 0}}
        transition={{delay: .5, type: 'tween'}}>
            From left to position
        </motion.span>

    </div>
  )
}

export default Transit