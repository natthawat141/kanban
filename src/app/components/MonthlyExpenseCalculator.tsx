"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function MonthlyExpenseCalculator() {
  const [waterUnit, setWaterUnit] = useState<string>('');
  const [electricUnit, setElectricUnit] = useState<string>('');
  const [phoneMinutes, setPhoneMinutes] = useState<string>('');
  const [expense, setExpense] = useState<number | null>(null);

  const calculateExpense = () => {
    const totalExpense = (Number(waterUnit) * 10) + (Number(electricUnit) * 25) + (Number(phoneMinutes) * 5);
    setExpense(totalExpense);
  };

  return (
    <motion.div
      data-aos="fade-right"
      className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8 text-white"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-4">Monthly Expense Calculator</h2>
      <input
        type="number"
        placeholder="จำนวนยูนิตน้ำ"
        value={waterUnit}
        onChange={(e) => setWaterUnit(e.target.value)}
        className="mb-2 p-2 bg-gray-700 border border-gray-600 rounded w-full text-white"
      />
      <input
        type="number"
        placeholder="จำนวนยูนิตไฟ"
        value={electricUnit}
        onChange={(e) => setElectricUnit(e.target.value)}
        className="mb-2 p-2 bg-gray-700 border border-gray-600 rounded w-full text-white"
      />
      <input
        type="number"
        placeholder="จำนวนนาทีที่ใช้โทรศัพท์"
        value={phoneMinutes}
        onChange={(e) => setPhoneMinutes(e.target.value)}
        className="mb-2 p-2 bg-gray-700 border border-gray-600 rounded w-full text-white"
      />
      <button onClick={calculateExpense} className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded mt-2 text-white font-semibold w-full">คำนวณค่าใช้จ่าย</button>
      {expense !== null && <p className="mt-3 text-green-400">ค่าใช้จ่ายทั้งหมดสำหรับห้องพักในแต่ละเดือนคือ: {expense} บาท</p>}
    </motion.div>
  );
}
