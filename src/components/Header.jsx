import { Hospital, Menu, PhoneCall, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navList = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#tips", label: "Tips" },
  { href: "#testimonials", label: "Testimonials" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animation variants
  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1 + 0.3,
        duration: 0.4
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8,
        duration: 0.4
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#0284c7", 
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  const mobileMenuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.2 }
      }
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.2, delay: 0.1 }
      }
    }
  };

  const mobileMenuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.05,
        duration: 0.2
      }
    })
  };

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 20 
      }}
    >
      <div className="container mx-auto flex items-center justify-between p-4 lg:px-8">
    
        <motion.div 
          className="flex items-center space-x-2 cursor-pointer"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 5
            }}
          >
            <Hospital className="h-8 w-8 text-sky-600" />
          </motion.div>
          <span className="text-xl font-bold text-sky-600">
            CareTime Dental 
          </span>
        </motion.div>

        <motion.nav 
          className="hidden md:flex space-x-6 text-gray-700 font-medium"
          initial="hidden"
          animate="visible"
        >
          {navList.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              custom={index}
              variants={navItemVariants}
              whileHover={{ 
                scale: 1.1,
                color: "#0284c7",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              className="relative transition"
            >
              {item.label}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.nav>

     
        <motion.div 
          className="hidden md:flex items-center space-x-2 rounded-2xl"
        //   variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1.2, 1]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            <PhoneCall className="text-sky-600" />
          </motion.div>
          <motion.a
            href="#book"
            className="w-fit rounded-xl bg-sky-600 px-4 py-2 text-sm text-white shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(14, 165, 233, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            
          >
            Book Appointment
          </motion.a>
        </motion.div>

        <motion.div 
          className="md:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="text-gray-700 p-2 rounded-lg hover:bg-sky-50"
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </div>

   
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm shadow-lg overflow-hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.nav className="space-y-3 p-4 text-gray-700 font-medium">
              {navList.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  custom={index}
                  variants={mobileMenuItemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  whileHover={{ 
                    x: 10,
                    color: "#0284c7"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 transition rounded-lg hover:bg-sky-50 px-3"
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <motion.a
                  href="#book"
                  className="block rounded-xl bg-sky-600 px-4 py-3 text-center text-white shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Appointment
                </motion.a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};  

export default Header;