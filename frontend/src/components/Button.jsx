import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, type = 'button', variant = 'primary', className = '' }) => {
    const baseStyles = "py-3 px-8 rounded-full font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all duration-300";

    const variants = {
        primary: "bg-gradient-to-r from-royalGold to-yellow-600 text-royalBlack hover:shadow-royalGold/50",
        secondary: "bg-transparent border-2 border-royalGold text-royalGold hover:bg-royalGold/10",
        danger: "bg-red-600 text-white hover:bg-red-700",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </motion.button>
    );
};

export default Button;
