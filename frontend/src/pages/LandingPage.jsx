import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import { Crown, MessageCircle, FileWarning } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-10"
            >
                <div className="inline-block p-4 rounded-full bg-royalGold/20 mb-4 border border-royalGold/50">
                    <Crown size={64} className="text-royalGold drop-shadow-lg" />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-royalGold via-white to-royalGold">
                    Royal Residents
                </h1>
                <p className="text-xl md:text-2xl text-royalSilver max-w-2xl mx-auto">
                    Experience premium community living. Your voice is our command.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
                <Link to="/complaint">
                    <Card className="hover:bg-white/5 transition-colors cursor-pointer group h-full flex flex-col items-center justify-center gap-4">
                        <div className="p-4 rounded-full bg-red-500/20 group-hover:bg-red-500/30 transition-colors">
                            <FileWarning size={48} className="text-red-400 group-hover:text-red-300" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Register Complaint</h2>
                        <p className="text-royalSilver">Report issues immediately.</p>
                        <Button variant="primary" className="mt-4">Start Now</Button>
                    </Card>
                </Link>

                <Link to="/feedback">
                    <Card className="hover:bg-white/5 transition-colors cursor-pointer group h-full flex flex-col items-center justify-center gap-4">
                        <div className="p-4 rounded-full bg-green-500/20 group-hover:bg-green-500/30 transition-colors">
                            <MessageCircle size={48} className="text-green-400 group-hover:text-green-300" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Give Feedback</h2>
                        <p className="text-royalSilver">Rate your experience.</p>
                        <Button variant="secondary" className="mt-4">Rate Us</Button>
                    </Card>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
