import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Page = ({data}) => {
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div 
    className="h-screen flex justify-center items-center font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: .4}}
    ref={ref}>

      <span
          style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
          }}>
        {data}      
      </span>

    </motion.div>
  )
}

export default Page