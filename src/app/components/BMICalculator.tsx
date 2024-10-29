"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function BMICalculator() {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [bmi, setBmi] = useState<string | null>(null);

  const calculateBMI = () => {
    const heightInMeters = Number(height) / 100;
    const bmiValue = Number(weight) / (heightInMeters ** 2);
    setBmi(bmiValue.toFixed(2));
  };

  return (
    <motion.div
      data-aos="fade-up"
      className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-4">BMI Calculator</h2>
      <input
        type="number"
        placeholder="น้ำหนัก (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="mb-2 p-2 bg-gray-700 border border-gray-600 rounded w-full text-white"
      />
      <input
        type="number"
        placeholder="ส่วนสูง (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        className="mb-2 p-2 bg-gray-700 border border-gray-600 rounded w-full text-white"
      />
      <button onClick={calculateBMI} className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded mt-2 text-white font-semibold w-full">คำนวณ BMI</button>
      {bmi && <p className="mt-3 text-green-400">ค่าดัชนีมวลกาย (BMI) ของคุณคือ: {bmi}</p>}
    </motion.div>
  );
}
