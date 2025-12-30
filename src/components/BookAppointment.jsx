import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaCalendarAlt, FaChevronRight, FaClock, FaPhone, FaTooth, FaUser, FaCheckCircle } from "react-icons/fa";
import { GiToothbrush } from "react-icons/gi";

const BookAppointment = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "General Checkup",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const services = [
    "General Checkup",
    "Teeth Cleaning",
    "Dental Filling",
    "Root Canal",
    "Teeth Whitening",
    "Orthodontic Consultation",
  ];
  
  const availableTimes = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const validateStep1 = () => {
    return formData.name.trim() !== "" && formData.phone.trim() !== "";
  };
  
  const validateStep2 = () => {
    return formData.date !== "" && formData.time !== "";
  };
  
  const nextStep = () => {
    if (activeStep === 1 && !validateStep1()) {
      alert("Please fill in your name and phone number");
      return;
    }
    if (activeStep === 2 && !validateStep2()) {
      alert("Please select date and time");
      return;
    }
    setActiveStep((prev) => Math.min(prev + 1, 3));
  };
  
  const prevStep = () => setActiveStep((prev) => Math.max(prev - 1, 1));
  
  const handleSubmit = () => {
    console.log("Appointment booked:", formData);
    setIsSubmitted(true);
    // In real app: send to API
  };
  
  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: { opacity: 0, x: 50 }
  };
  
  const progressCircleVariants = {
    inactive: { scale: 1, backgroundColor: "#ffffff" },
    active: { 
      scale: 1.2, 
      backgroundColor: "#0ea5e9",
      transition: { type: "spring", stiffness: 300 }
    },
    completed: { 
      scale: 1.1, 
      backgroundColor: "#10b981", 
    }
  };
  
  return (
    <div
      id="book"
      className="scroll-mt-20 min-h-screen bg-gradient-to-br from-sky-50 to-white py-12 px-4"
    >
      <div className="max-w-4xl mx-auto">

        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Book Your Perfect Smile
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule your dental appointment in just 3 simple steps
          </p>
        </motion.div>
        
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-100 rounded-full z-0"></div>
            <motion.div
              className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-sky-400 to-sky-500 rounded-full z-10"
              initial={{ width: "0%" }}
              animate={{ width: `${(activeStep - 1) * 50}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
            <div className="flex justify-between relative z-20">
              {[1, 2, 3].map((step) => (
                <motion.div
                  key={step}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => activeStep > step && setActiveStep(step)}
                  whileHover={activeStep > step ? { scale: 1.1 } : {}}
                  role="button"
                  aria-label={`Step ${step}: ${["Your info", "Schedule", "Confirm"][step - 1]}`}
                  tabIndex={activeStep > step ? 0 : -1}
                >
                  <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                      activeStep > step
                        ? "bg-emerald-500 text-white shadow-lg"
                        : activeStep === step
                        ? "bg-gradient-to-br from-sky-500 to-sky-600 text-white shadow-lg"
                        : "bg-white text-gray-300 border-2 border-gray-200"
                    }`}
                    variants={progressCircleVariants}
                    animate={
                      activeStep > step ? "completed" :
                      activeStep === step ? "active" : "inactive"
                    }
                  >
                    {activeStep > step ? (
                      <FaCheckCircle className="w-5 h-5" />
                    ) : (
                      step
                    )}
                  </motion.div>
                  <span
                    className={`text-xs font-medium ${
                      activeStep >= step ? "text-sky-600" : "text-gray-400"
                    } transition-colors`}
                  >
                    {["Your info", "Schedule", "Confirm"][step - 1]}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {activeStep === 1 && !isSubmitted && (
              <motion.div
                key="step1"
                className="p-8"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <FaUser className="text-sky-500" />
                  Personal Information
                </h2>
                <div className="space-y-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full name"
                      className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition"
                      required
                    />
                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition"
                      required
                    />
                    <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </motion.div>
            )}
            
            {activeStep === 2 && !isSubmitted && (
              <motion.div
                key="step2"
                className="p-8"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <FaCalendarAlt className="text-sky-500" />
                  Appointment Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition"
                      required
                      min={new Date().toISOString().split("T")[0]}
                    />
                    <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                  <div className="relative">
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none appearance-none transition"
                      required
                    >
                      <option value="">Select Time</option>
                      {availableTimes.map(time => (
                        <option value={time} key={time}>{time}</option>
                      ))}
                    </select>
                    <FaClock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                    <FaChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-gray-400"/>
                  </div>
                  <div className="relative md:col-span-2">
                    <select 
                      name="service" 
                      value={formData.service} 
                      onChange={handleInputChange} 
                      className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none appearance-none transition" 
                      required
                    >
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                    <FaTooth className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                    <FaChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-gray-400"/>
                  </div>
                </div>
              </motion.div>
            )}
            
            {activeStep === 3 && !isSubmitted && (
              <motion.div
                key="step3"
                className="p-8"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="inline-flex items-center justify-center bg-sky-100 p-6 rounded-full mb-6 mx-auto">
                  <GiToothbrush className="text-4xl text-sky-500"/>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Confirm Your Appointment 
                </h2>
                <div className="bg-sky-50 rounded-xl p-6 max-w-md mx-auto mb-8">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span className="font-semibold">{formData.name || "Not provided"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phone:</span>
                      <span className="font-semibold">{formData.phone || "Not provided"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-semibold">{formData.date || "Not selected"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-semibold">{formData.time || "Not selected"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service:</span>
                      <span className="font-semibold">{formData.service}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {isSubmitted && (
              <motion.div
                key="success"
                className="p-12 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <div className="inline-flex items-center justify-center bg-emerald-100 p-6 rounded-full mb-6">
                  <FaCheckCircle className="text-5xl text-emerald-500"/>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Appointment Booked Successfully!
                </h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  We've sent a confirmation to your phone. Please arrive 15 minutes before your appointment.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setIsSubmitted(false);
                    setActiveStep(1);
                    setFormData({
                      name: "",
                      phone: "",
                      date: "",
                      time: "",
                      service: "General Checkup",
                    });
                  }}
                  className="px-8 py-3 bg-sky-600 text-white rounded-xl font-medium shadow-lg"
                >
                  Book Another Appointment
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
          
          {!isSubmitted && (
            <div className="p-8 border-t border-gray-100 flex justify-between">
              <motion.button
                onClick={prevStep}
                disabled={activeStep === 1}
                className={`px-6 py-3 rounded-xl font-medium transition ${
                  activeStep === 1 
                    ? "text-gray-400 cursor-not-allowed" 
                    : "text-sky-600 hover:bg-sky-50"
                }`}
                whileHover={activeStep !== 1 ? { scale: 1.05 } : {}}
                whileTap={activeStep !== 1 ? { scale: 0.95 } : {}}
              >
                Back
              </motion.button>
              <motion.button
                onClick={activeStep === 3 ? handleSubmit : nextStep}
                className="px-8 py-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-xl font-medium shadow-md"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(14, 165, 233, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {activeStep === 3 ? "Confirm Appointment" : "Next Step"}
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BookAppointment;