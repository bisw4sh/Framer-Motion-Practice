import { motion } from 'framer-motion'

const Gesture = () => {
  return (
    <div className='h-screen w-full flex flex-col gap-16 justify-center items-center bg-teal-400'>
        <motion.button
        className=' px-8 py-4 rounded-xl text-xl text-slate-900 bg-fuchsia-400'
        initial={{ opacity: 0.6 }}
        whileHover={{
        scale: 1.2,
        transition: { duration: 1 }
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 0.9 }}>
            Button
        </motion.button>

    <motion.circle
    className='h-16 w-16 rounded-xl text-xl text-slate-900 bg-fuchsia-400'
    cx={500}
    animate={{ cx: [null, 100, 200] }}
    transition={{ duration: 3, times: [0, 0.2, 1] }}
    />

  <motion.div
  className='h-16 w-16 rounded-3xl bg-fuchsia-900' 
  animate={{ x: [-100, 0, 100, 0, -100], rotateZ: 360 }}
  transition={{ repeat: 'reverse'}}/>

    </div>
  )
}

export default Gesture