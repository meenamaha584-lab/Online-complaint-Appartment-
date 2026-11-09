import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import api from '../services/api';
import { Star, Smile, Meh, Frown } from 'lucide-react';

const FeedbackPage = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (rating === 0) return alert('Please select a rating!');

        try {
            await api.post('/feedback', { rating, comment });
            setSubmitted(true);
        } catch (error) {
            alert('Error submitting feedback');
        }
    };

    if (submitted) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <Card className="text-center">
                    <h2 className="text-3xl font-bold text-royalGold mb-4">Thank You!</h2>
                    <p className="text-xl">Your feedback matters.</p>
                    <Button className="mt-6" onClick={() => { setSubmitted(false); setRating(0); setComment(''); }}>Give More Feedback</Button>
                </Card>
            </div>
        );
    }

    return (
        <div className="max-w-xl mx-auto p-4">
            <Card className="text-center">
                <h2 className="text-3xl font-serif text-royalGold mb-6">Rate Your Experience</h2>

                <div className="flex justify-center gap-2 mb-8">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <motion.button
                            key={star}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setRating(star)}
                            type="button"
                            className="focus:outline-none"
                        >
                            <Star
                                size={48}
                                fill={star <= rating ? "#D4AF37" : "none"}
                                className={star <= rating ? "text-royalGold" : "text-gray-600"}
                            />
                        </motion.button>
                    ))}
                </div>

                <div className="flex justify-center gap-8 mb-8 text-royalSilver">
                    <div className={`flex flex-col items-center ${rating >= 4 ? 'text-green-400' : ''}`}>
                        <Smile size={32} />
                        <span>Good</span>
                    </div>
                    <div className={`flex flex-col items-center ${rating === 3 ? 'text-yellow-400' : ''}`}>
                        <Meh size={32} />
                        <span>Okay</span>
                    </div>
                    <div className={`flex flex-col items-center ${rating > 0 && rating < 3 ? 'text-red-400' : ''}`}>
                        <Frown size={32} />
                        <span>Bad</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <Input
                        isTextArea
                        placeholder="Additional comments (optional)"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <Button type="submit" variant="primary" className="w-full mt-2">Submit Feedback</Button>
                </form>
            </Card>
        </div>
    );
};

export default FeedbackPage;
