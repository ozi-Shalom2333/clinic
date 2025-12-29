import { FaUserMd } from 'react-icons/fa'
import about from '../../public/about.jpg'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 scroll-mt-20 bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
      
            <motion.div 
              className="w-full lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
               <motion.img 
                 src={about} 
                 alt="Modern dental clinic with state-of-the-art equipment and friendly staff"
                 loading="lazy"
                 className='w-80 lg:w-[420px] rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300'
                 whileHover={{ 
                   scale: 1.05,
                   rotate: 2,
                   transition: { duration: 0.3 }
                 }}
                 animate={{
                   y: [0, -10, 0]
                 }}
                 transition={{
                   y: {
                     duration: 4,
                     repeat: Infinity,
                     ease: "easeInOut"
                   }
                 }}
               />
            </motion.div>
            
            <motion.div 
              className='w-full lg:w-1/2 space-y-6 text-center lg:text-left'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
               <motion.div 
                 className='flex items-center justify-center lg:justify-start space-x-2'
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={{ duration: 0.6, delay: 0.4 }}
               >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 5
                  }}
                >
                  <FaUserMd className='text-sky-600 w-7 h-7'/>
                </motion.div>
                <h2 className='text-3xl font-bold text-sky-900'>
                    About Our Clinic
                </h2>
               </motion.div>
               
               <motion.p 
                 className='text-gray-700 text-lg leading-relaxed'
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={{ duration: 0.6, delay: 0.6 }}
               >
                At <span className="font-semibold text-sky-700">CareTime Dental</span>, we're committed to providing exceptional dental care in a comfortable, modern environment. Our experienced team uses the latest technology to ensure your visit is both effective and pleasant.
               </motion.p>
               
               <motion.p 
                 className='text-gray-700 text-lg leading-relaxed'
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={{ duration: 0.6, delay: 0.8 }}
               >
                We believe in personalized care for every patient, taking the time to understand your needs and concerns. From routine checkups to advanced cosmetic procedures, we're here to help you achieve and maintain a healthy, beautiful smile.
               </motion.p>

         
               <motion.div 
                 className="grid grid-cols-2 gap-4 pt-4"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 1 }}
               >
                 <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                   <div className="text-2xl font-bold text-sky-600">10+</div>
                   <div className="text-sm text-gray-600">Years Experience</div>
                 </div>
                 <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                   <div className="text-2xl font-bold text-sky-600">5,000+</div>
                   <div className="text-sm text-gray-600">Happy Patients</div>
                 </div>
               </motion.div>
            </motion.div>
        </div>

     
        <motion.div 
          className="absolute bottom-10 left-5 w-20 h-20 bg-sky-100 rounded-full -z-10"
          animate={{ 
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
    </section>
  )
}

export default About