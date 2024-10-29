"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Banner from "./components/banner";
import BMICalculator from "./components/BMICalculator";
import MineralWaterCalculator from "./components/MineralWaterCalculator";
import MonthlyExpenseCalculator from "./components/MonthlyExpenseCalculator";
import Footer from "./components/Footer";

const calculators = [
  { 
    id: 1, 
    component: <BMICalculator />,
    title: "BMI Calculator",
    prompt: "จงเขียนโปรแกรมในการรับค่าจากแป้มพิมพ์ 2 ค่าคือ น้ำหนัก (weight) และส่วนสูง (height) (หน่วยเป็นเซนติเมตร) คำนวณหาค่าดัชนีมวลกาย (BMI) โดยใช้สูตรดังนี้\nBMI = weight / (height * height)"
  },
  {
    id: 2,
    component: <MonthlyExpenseCalculator />,
    title: "Monthly Expense Calculator",
    prompt: "จงเขียนโปรแกรมในการคำนวณค่าใช้จ่ายห้องพักในแต่ละเดือนของอพาร์ตเม้นท์แห่งหนึ่งซึ่งประกอบไปด้วย ค่าน้ำ ค่าไฟ และค่าโทรศัพท์ โดยมีอัตราในการคิดค่าใช้จ่ายดังนี้:\n• ค่าน้ำคิดยูนิตละ 10 บาท\n• ค่าไฟคิดยูนิตละ 25 บาท\n• ค่าโทรศัพท์คิดนาทีละ 5 บาท"
  },
  {
    id: 3,
    component: <MineralWaterCalculator />,
    title: "Mineral Water Calculator",
    prompt: "จงเขียนโปรแกรมในการคำนวณเงินจ่ายจากการซื้อน้ำแร่ของลูกค้า โดยคิดจากน้ำแร่ขวดละ 10 บาท และถ้าซื้อครบทุกๆ 1 โหล (12 ขวด) จะคิดโหลละ 100 บาท และส่วนที่เหลือให้คิดราคาเป็นขวดแล้วรวมภาษี 7%"
  }
];

const pageTransition = {
  type: "spring",
  stiffness: 70,
  damping: 15,
  mass: 1,
};

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

export default function Home() {
  const [currentCalculator, setCurrentCalculator] = useState(0);
  const [direction, setDirection] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextCalculator = () => {
    setDirection(1);
    setCurrentCalculator((prev) => (prev + 1) % calculators.length);
  };

  const prevCalculator = () => {
    setDirection(-1);
    setCurrentCalculator((prev) => (prev - 1 + calculators.length) % calculators.length);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#0a0a1f] to-gray-900 text-white relative overflow-hidden">
        {/* Animated Background Grid */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        />

        <Navbar />
        <Banner />

        <div className="container mx-auto p-6 relative">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            การบ้าน week 7
          </motion.h1>

          {/* Navigation Container */}
          <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
            <div className="relative w-full h-full max-w-[1920px] mx-auto">
              {/* Left Button */}
              <motion.div 
                className="absolute left-8 top-1/2 -translate-y-1/2 pointer-events-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={prevCalculator}
                  className="group bg-gray-800/80 backdrop-blur-sm w-14 h-14 rounded-full
                           flex items-center justify-center
                           hover:bg-gray-700 transition-all duration-300 
                           border border-gray-700 hover:border-white/40
                           shadow-[0_0_15px_rgba(0,0,0,0.3)]
                           hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                  <svg 
                    className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15 19l-7-7 7-7" 
                    />
                  </svg>
                </button>
              </motion.div>

              {/* Right Button */}
              <motion.div 
                className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={nextCalculator}
                  className="group bg-gray-800/80 backdrop-blur-sm w-14 h-14 rounded-full
                           flex items-center justify-center
                           hover:bg-gray-700 transition-all duration-300 
                           border border-gray-700 hover:border-white/40
                           shadow-[0_0_15px_rgba(0,0,0,0.3)]
                           hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                  <svg 
                    className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center">
            {/* Problem Text */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${calculators[currentCalculator].id}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 10
                }}
                className="w-full max-w-2xl mb-8 bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl 
                         border border-gray-700/50 hover:border-gray-600/50
                         shadow-lg hover:shadow-xl transition-all duration-300
                         hover:bg-gray-800/60"
              >
                <motion.h2 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                  {calculators[currentCalculator].title}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-300 whitespace-pre-line leading-relaxed"
                >
                  {calculators[currentCalculator].prompt}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/* Calculator Component */}
            <div className="w-full max-w-md mb-12 relative">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={calculators[currentCalculator].id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={pageTransition}
                  className="w-full bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl 
                           border border-gray-700/50 hover:border-gray-600/50
                           shadow-[0_0_20px_rgba(0,0,0,0.3)]
                           hover:shadow-[0_0_30px_rgba(0,0,0,0.4)]
                           transition-all duration-300"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, ...pageTransition }}
                  >
                    {calculators[currentCalculator].component}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Indicator */}
            <div className="flex gap-3 mt-4">
              {calculators.map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ 
                    scale: 1,
                    opacity: 1,
                    width: index === currentCalculator ? 32 : 16
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentCalculator 
                      ? 'bg-gradient-to-r from-blue-400 to-purple-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]' 
                      : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}