"use client";
import { motion } from "framer-motion";

const text = "From idea to launch. · Clean, human-centered products built to solve real problems. · Design with clarity and intention. · ";

export default function MarqueeTicker() {
  return (
    <div className="overflow-hidden bg-[#f5f0e8] py-4 border-y border-[#222]">
      <div className="flex">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <span className="text-[#0a0a0a] text-sm font-medium tracking-widest uppercase mx-8">{text}{text}</span>
          <span className="text-[#0a0a0a] text-sm font-medium tracking-widest uppercase mx-8">{text}{text}</span>
        </motion.div>
      </div>
    </div>
  );
}
