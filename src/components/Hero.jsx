import { motion } from 'framer-motion'
import { ComputersCanvas } from "./canvas"
import { styles } from '../styles'


//#a663ccƒ
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div 
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} 
      flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#595959]' /> 
          <div className="w-1 sm:h-80 h-40 grey-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-[#757575]`}>
              Hi, I'm <span className='text-[#a25dcb]'>Chonny</span>
            </h1>
            <p className={`#${styles.heroSubText} mt-2 text-white-100`}>
            I am a full stack web developer <br className='sm:block hidden' />
            dedicated to crafting innovative digital solutions 
            for an unparalleled online experience. Let's craft your ideas into web reality!
            </p>
          </div>
        </div>

        <ComputersCanvas />

        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center
            items-start p-2'>
              <motion.dev
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
    </section>
  )
}

export default Hero