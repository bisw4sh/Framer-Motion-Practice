import { motion } from 'framer-motion'

type Props = {
  imgSrc: string;
  desc: string;
}

export default function Meme({imgSrc, desc}: Props) {
  return (
    <div className="h-screen flex justify-between items-center bg-purple-500 p-4 my-2  rounded-xl gap-16">
      <motion.img
        initial={{ x: -100, opacity: 0.5 }}
        whileInView={{ x: 0, opacity: 1 }}
        src={imgSrc}
        alt="a meme"
        className='h-2/3 rounded-xl'
      />
      <motion.p
        initial={{ x: 100, opacity: 0.5 }}
        whileInView={{ x: 0, opacity: 1 }}
        className='text-2xl font-semibold'
      >
        {desc}
      </motion.p>
    </div>
  )
}