"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function MineralWaterCalculator() {
  const [bottleCount, setBottleCount] = useState<string>('');
  const [totalPrice, setTotalPrice] = useState<string | null>(null);

  const calculateWaterExpense = () => {
    const dozens = Math.floor(Number(bottleCount) / 12);
    const remainingBottles = Number(bottleCount) % 12;
    const basePrice = (dozens * 100) + (remainingBottles * 10);
    const totalWithTax = basePrice * 1.07;
    setTotalPrice(totalWithTax.toFixed(2));
  };

  return (
    <motion.div
      data-aos="fade-left"
      className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8 text-white"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-4">Mineral Water Purchase Calculator</h2>
      <input
        type="number"
        placeholder="จำนวนขวดน้ำแร่ที่ต้องการซื้อ"
        value={bottleCount}
        onChange={(e) => setBottleCount(e.target.value)}
        className="mb-2 p-2 bg-gray-700 border border-gray-600 rounded w-full text-white"
      />
      <button onClick={calculateWaterExpense} className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded mt-2 text-white font-semibold w-full">คำนวณราคาน้ำแร่</button>
      {totalPrice && <p className="mt-3 text-green-400">จำนวนเงินที่ต้องจ่ายรวมภาษี: {totalPrice} บาท</p>}
    </motion.div>
  );
}
