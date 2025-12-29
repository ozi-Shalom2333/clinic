import { FaSmileBeam, FaTooth, FaXRay } from "react-icons/fa";
import { GiToothbrush } from "react-icons/gi";
import { motion } from "framer-motion";

const services = [
    {
        icon: <FaTooth className="w-10 h-10 text-sky-500"/>,
        title: "Comprehensive Dental Exam",
        desc:"Thorough evaluation of your oral health with personalized treatment planning."
    },
    {
        icon: <GiToothbrush className="w-10 h-10 text-green-500"/>,
        title: "Professional Teeth Cleaning",
        desc:"Gentle removal of plaque and tartar using ultrasonic technology."
    },
    {
        icon: <FaSmileBeam className="w-10 h-10 text-yellow-500"/>,
        title: "Cosmetic Dentistry",
        desc:"Transform your smile with teeth whitening, veneers, and composite bonding."
    },
    {
        icon: <FaXRay className="w-10 h-10 text-purple-500"/>,
        title: "Digital Dental X-Rays",
        desc:"Low-radiation imaging for accurate diagnosis of hidden dental issues."
    },
];

const Services = () => {
    return (
        <section id="services" className="scroll-mt-20 py-24 bg-gradient-to-br from-white to-sky-50">
            <div className="container mx-auto px-4">
                {/* Animated Title */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-sky-900 mb-4">
                        Our Dental Services
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We provide comprehensive dental care using the latest technology 
                        to ensure your smile stays healthy and beautiful.
                    </p>
                </motion.div>

                {/* Animated Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ 
                                duration: 0.5,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{ 
                                scale: 1.05,
                                y: -10,
                                transition: { duration: 0.2 }
                            }}
                            className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl 
                                     border border-sky-100 hover:border-sky-300
                                     cursor-pointer"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <motion.div
                                    whileHover={{ 
                                        scale: 1.3,
                                        rotate: 360,
                                        transition: { duration: 0.5 }
                                    }}
                                >
                                    {service.icon}
                                </motion.div>
                            </div>
                            <h3 className="text-lg font-semibold text-sky-800 text-center mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm text-center leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Optional: Floating elements for visual interest */}
                <motion.div 
                    className="absolute top-20 left-10 w-32 h-32 bg-sky-100 rounded-full -z-10"
                    animate={{ 
                        y: [0, 20, 0],
                    }}
                    transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute bottom-20 right-10 w-24 h-24 bg-blue-50 rounded-full -z-10"
                    animate={{ 
                        y: [20, 0, 20],
                    }}
                    transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
            </div>
        </section>
    );
};

export default Services;