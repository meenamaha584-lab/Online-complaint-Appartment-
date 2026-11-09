import React from 'react';

const Input = ({ label, type = 'text', value, onChange, placeholder, required = false, isTextArea = false, options = [] }) => {
    const baseClasses = "w-full bg-white/5 border border-royalGold/30 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-royalGold focus:ring-1 focus:ring-royalGold transition-all";

    return (
        <div className="mb-4 text-left">
            <label className="block text-royalGold font-serif mb-2 text-lg">{label} {required && '*'}</label>
            {isTextArea ? (
                <textarea
                    value={value}
                    onChange={onChange}
                    rows="4"
                    className={baseClasses}
                    placeholder={placeholder}
                    required={required}
                />
            ) : options.length > 0 ? (
                <select
                    value={value}
                    onChange={onChange}
                    className={baseClasses}
                    required={required}
                >
                    <option value="" disabled>{placeholder}</option>
                    {options.map((opt) => (
                        <option key={opt} value={opt} className="bg-gray-900 text-white">{opt}</option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    className={baseClasses}
                    placeholder={placeholder}
                    required={required}
                />
            )}
        </div>
    );
};

export default Input;
