import { CalendarCheck } from "lucide-react";
import hero from "../../public/hero.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.5
    }
  }
};

const Hero = () => {
  return (
    <section id="home" className="scroll-mt-20 bg-sky-50 py-16 overflow-hidden">
      {/* Main container with whileInView */}
      <motion.div 
        className="container mx-auto flex flex-col-reverse items-center justify-between gap-10 px-4 sm:px-8 lg:flex-row lg:px-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"  // Changed from animate to whileInView
        viewport={{ once: true, amount: 0.3 }}  // Will animate once when 30% visible
      >
        {/* Text Content */}
        <div className="max-w-xl space-y-8 text-center lg:text-left">
          <motion.h1 
            className="text-3xl font-bold leading-tight text-sky-900 sm:text-4xl lg:text-5xl"
            variants={itemVariants}
          >
            Brighten Your Smile <br /> 
            <span className="text-sky-600">
              with Expert Dental Care
            </span>
          </motion.h1>

          <motion.p 
            className="text-sm text-gray-700 lg:text-lg"
            variants={itemVariants}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex
            modi saepe exercitationem eum fuga cumque nostrum nisi fugit quo!
          </motion.p>

          <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(14, 165, 233, 0.4)"
            }}
            className="w-fit mx-auto md:m-0"
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#book"
              className="w-fit inline-flex items-center rounded-xl bg-sky-600 px-4 py-2 text-base font-medium text-white transition hover:bg-sky-700 sm:px-6 sm:py-3 shadow-lg"
            >
              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <CalendarCheck className="mr-2 h-5 w-5" />
              </motion.div>
              Book Appointment
            </a>
          </motion.div>
        </div>

        {/* Image with floating animation */}
        <motion.div 
          className="flex justify-center"
          variants={imageVariants}
          whileHover={{ 
            scale: 1.05,
            transition: { type: "spring", stiffness: 400 }
          }}
        >
          <motion.img
            src={hero}
            alt="Smiling patient receiving dental care"
            loading="lazy"
            className="w-80 rounded-3xl lg:w-[429px] shadow-2xl"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 0.5, 0]
            }}
            transition={{ 
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              },
              rotate: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        </motion.div>
      </motion.div>

      {/* Background decorative elements - these will always animate */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-sky-100 to-white rounded-full -z-10 opacity-70"
        animate={{ 
          y: [0, 40, 0],
          x: [0, 20, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-sky-200 to-white rounded-full -z-10 opacity-50"
        animate={{ 
          y: [40, 0, 40],
          x: [20, 0, 20]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
    
      <motion.div 
        className="absolute top-1/2 left-5 text-sky-300 -z-10"
        animate={{ 
          rotate: 360,
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <CalendarCheck size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;