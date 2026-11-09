import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import api from '../services/api';
import { CheckCircle } from 'lucide-react';

const ComplaintPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        flatNumber: '',
        ageGroup: '',
        category: '',
        description: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        // Handle both input/textarea and select
        const { value } = e.target;
        // Determine key based on matching state keys since we don't pass name prop in reusable Input yet
        // Wait, simpler to Just modify Input to accept name or pass setter wrapper.
        // Let's rely on mapping.
    };

    // Revised handler
    const updateField = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await api.post('/complaints', formData);
            setSubmitted(true);
        } catch (error) {
            alert('Failed to submit complaint. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <Card className="text-center">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex justify-center mb-4">
                        <CheckCircle size={64} className="text-green-500" />
                    </motion.div>
                    <h2 className="text-3xl font-bold text-royalGold mb-2">Complaint Registered!</h2>
                    <p className="text-gray-300">We will Resolve it soon.</p>
                    <Button className="mt-6" onClick={() => setSubmitted(false)}>File Another</Button>
                </Card>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto p-4">
            <Card>
                <h2 className="text-3xl font-serif text-center mb-6 text-royalGold">Register Complaint</h2>
                <form onSubmit={handleSubmit}>
                    <Input
                        label="Name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        required
                    />
                    <Input
                        label="Flat / House Number"
                        placeholder="e.g. A-101"
                        value={formData.flatNumber}
                        onChange={(e) => updateField('flatNumber', e.target.value)}
                        required
                    />
                    <Input
                        label="Age Group"
                        placeholder="Select Age Group"
                        options={['Kid', 'Adult', 'Senior']}
                        value={formData.ageGroup}
                        onChange={(e) => updateField('ageGroup', e.target.value)}
                        required
                    />
                    <Input
                        label="Category"
                        placeholder="Select Category"
                        options={['Water', 'Electricity', 'Lift', 'Noise', 'Security', 'Other']}
                        value={formData.category}
                        onChange={(e) => updateField('category', e.target.value)}
                        required
                    />
                    <Input
                        label="Description"
                        isTextArea
                        placeholder="Describe your issue..."
                        value={formData.description}
                        onChange={(e) => updateField('description', e.target.value)}
                    />
                    <Button type="submit" variant="primary" className="w-full mt-4">
                        {loading ? 'Submitting...' : 'Submit Complaint'}
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default ComplaintPage;
