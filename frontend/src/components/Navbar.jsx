import React from 'react';
import { Link } from 'react-router-dom';
import { Crown } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="p-6 flex justify-between items-center backdrop-blur-sm fixed w-full z-50 top-0">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold font-serif text-royalGold">
                <Crown size={32} />
                <span>Royal Residents</span>
            </Link>
            <div className="flex gap-6">
                <Link to="/" className="text-royalSilver hover:text-royalGold transition-colors">Home</Link>
                <Link to="/complaint" className="text-royalSilver hover:text-royalGold transition-colors">Complaint</Link>
                <Link to="/feedback" className="text-royalSilver hover:text-royalGold transition-colors">Feedback</Link>
                <Link to="/admin" className="text-royalSilver hover:text-royalGold transition-colors">Admin</Link>
            </div>
        </nav>
    );
};

export default Navbar;
