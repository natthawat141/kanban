'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

const Space = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 text-white p-10 rounded-lg shadow-lg relative">
      <div className="absolute inset-0 bg-opacity-20 bg-gradient-to-b from-transparent via-purple-700 to-transparent pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-sky-300" data-aos="fade-down">การบ้านจาก week 8</h2>
        
        <p className="text-lg leading-relaxed mb-8" data-aos="fade-up" data-aos-delay="200">
          1. จงเขียนโปรแกรมในการรับค่าจากแป้นพิมพ์ 2 ค่าคือ น้ำหนัก (weight) และส่วนสูง (height) (หน่วยเป็น
          เซนติเมตร) คำนวณหาค่าดัชนีมวลกาย (BMI) โดยใช้สูตรดังนี้ <br />
          <span className="font-bold text-sky-200">BMI = weight / (height * height)</span>
        </p>
        
       
      </div>
    </div>
  );
};

export default Space;
