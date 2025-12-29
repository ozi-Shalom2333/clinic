import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react"
import { FaShieldAlt, FaSmile } from "react-icons/fa";
import { FaTooth } from "react-icons/fa6";
import { GiToothbrush, GiWaterDrop } from "react-icons/gi";

const Tips = () => {
    const [activeTip, setActiveTip] = useState(0);
    
    const tips = [
        {
            title: "Proper Brushing Technique",
            content: "Brush twice daily with fluoride toothpaste for two minutes each time. Use a soft-bristled brush at a 45-degree angle to your gums in gentle circular motions.",
            icon: <GiToothbrush className="w-8 h-8 text-sky-500"/>
        },
        {
            title: "Cavity Prevention",
            content: "Limit sugary foods and drinks, floss daily, and use fluoride mouthwash. Regular dental cleanings help remove plaque that can lead to cavities.",
            icon: <FaTooth className="w-8 h-8 text-blue-500"/> 
        },
        {
            title: "Gum Care",
            content: "Massage gums gently while brushing and floss carefully along the gum line. Watch for signs of gum disease like redness, swelling, or bleeding.",
            icon: <GiWaterDrop className="w-8 h-8 text-pink-500"/> 
        },
        {
            title: "Tooth Protection",
            content: "Wear a mouthguard during sports, avoid using teeth as tools, and don't chew on hard objects like ice or pen caps.",
            icon: <FaShieldAlt className="w-8 h-8 text-amber-500"/>
        },
        {
            title: "Regular Checkup",
            content: "Visit your dentist every 6 months for professional cleaning and examination. Early detection of dental issues saves time, money, and discomfort.",
            icon: <FaSmile className="w-8 h-8 text-emerald-500"/> 
        },
    ]

    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const tipButtonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { type: "spring", stiffness: 200 }
        },
        hover: { scale: 1.05, backgroundColor: "rgba(14, 165, 233, 0.1)" },
        tap: { scale: 0.95 }
    }

    const contentVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { 
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        },
        exit: { opacity: 0, x: 30 }
    }

    const dotVariants = {
        inactive: { scale: 1, backgroundColor: "#d1d5db" },
        active: { 
            scale: 1.5, 
            backgroundColor: "#0ea5e9",
            transition: { type: "spring", stiffness: 300 }
        },
        hover: { scale: 1.2, backgroundColor: "#7dd3fc" }
    }

    return (
        <section id="tips" className="scroll-mt-20 max-w-6xl mx-auto px-4 py-12 md:py-20">
            {/* Header */}
            <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                    Dental Care Tips
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Expert advice to maintain optimal oral health and prevent dental issues
                </p>
            </motion.div>

    
            <motion.div 
                className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {tips.map((tip, index) => (
                    <motion.button 
                        key={index}
                        onClick={() => setActiveTip(index)}
                        variants={tipButtonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        aria-selected={activeTip === index}
                        role="tab"
                        className={`p-4 rounded-xl transition-all duration-300 flex flex-col items-center ${
                            activeTip === index 
                            ? 'bg-white shadow-lg border-b-4 border-sky-400 shadow-sky-100' 
                            : 'bg-gray-50 hover:bg-blue-50'
                        }`}
                    >
                        <div className="mb-2">
                            {tip.icon}
                        </div>
                        <h3 className="font-medium text-gray-800 text-sm md:text-base">
                            {tip.title}
                        </h3>
                    </motion.button>
                ))}
            </motion.div>

      
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTip}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="bg-gradient-to-r from-sky-50 to-blue-100 rounded-2xl p-6 md:p-8 shadow-sm"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <motion.div 
                            className="flex-shrink-0 bg-white p-6 rounded-xl shadow-md"
                            whileHover={{ 
                                scale: 1.1,
                                rotate: 360,
                                transition: { duration: 0.5 }
                            }}
                        >
                            {tips[activeTip].icon}
                        </motion.div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                {tips[activeTip].title}
                            </h3>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                {tips[activeTip].content}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

         
            <motion.div 
                className="mt-8 flex justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="flex space-x-3">
                    {tips.map((_, index) => (
                        <motion.button 
                            key={index}
                            onClick={() => setActiveTip(index)}
                            variants={dotVariants}
                            animate={activeTip === index ? "active" : "inactive"}
                            whileHover="hover"
                            whileTap={{ scale: 0.8 }}
                            className={`w-3 h-3 rounded-full ${activeTip === index ? 'bg-sky-500' : 'bg-gray-300'}`}
                            aria-label={`Go to tip ${index + 1}: ${tips[index].title}`}
                        />
                    ))}
                </div>
            </motion.div>

            <motion.div 
                className="flex justify-center gap-4 mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <motion.button
                    onClick={() => setActiveTip(prev => prev === 0 ? tips.length - 1 : prev - 1)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-sky-600 hover:text-sky-700 font-medium"
                >
                    ← Previous Tip
                </motion.button>
                <motion.button
                    onClick={() => setActiveTip(prev => prev === tips.length - 1 ? 0 : prev + 1)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 font-medium"
                >
                    Next Tip →
                </motion.button>
            </motion.div>
        </section>
    )
}

export default Tips;