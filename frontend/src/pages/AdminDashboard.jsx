import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [complaints, setComplaints] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [activeTab, setActiveTab] = useState('complaints');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cRes = await api.get('/complaints');
                setComplaints(cRes.data);
                const fRes = await api.get('/feedback');
                setFeedbacks(fRes.data);
            } catch (error) {
                alert('Session expired or unauthorized');
                navigate('/admin');
            }
        };
        fetchData();
    }, [navigate]);

    const updateStatus = async (id, newStatus) => {
        try {
            await api.patch(`/complaints/${id}`, { status: newStatus });
            setComplaints(prev => prev.map(c => c.id === id ? { ...c, status: newStatus } : c));
        } catch (error) {
            alert('Failed to update status');
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending': return 'text-yellow-400';
            case 'In Progress': return 'text-blue-400';
            case 'Solved': return 'text-green-400';
            default: return 'text-white';
        }
    };

    return (
        <div className="container mx-auto p-4 max-w-6xl">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-serif text-royalGold">Dashboard</h2>
                <Button variant="secondary" onClick={() => { localStorage.removeItem('token'); navigate('/admin'); }}>Logout</Button>
            </div>

            <div className="flex gap-4 mb-6">
                <button
                    onClick={() => setActiveTab('complaints')}
                    className={`pb-2 px-4 text-xl transition-colors border-b-2 ${activeTab === 'complaints' ? 'border-royalGold text-royalGold' : 'border-transparent text-gray-500'}`}
                >
                    Complaints ({complaints.length})
                </button>
                <button
                    onClick={() => setActiveTab('feedback')}
                    className={`pb-2 px-4 text-xl transition-colors border-b-2 ${activeTab === 'feedback' ? 'border-royalGold text-royalGold' : 'border-transparent text-gray-500'}`}
                >
                    Feedback ({feedbacks.length})
                </button>
            </div>

            {activeTab === 'complaints' ? (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {complaints.map((c) => (
                        <Card key={c.id} className="relative">
                            <div className="flex justify-between items-start mb-2">
                                <span className="bg-white/10 px-2 py-1 rounded text-sm text-royalGold border border-royalGold/30">{c.category}</span>
                                <span className={`font-bold ${getStatusColor(c.status)}`}>{c.status}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-1">{c.name}</h3>
                            <p className="text-sm text-gray-400 mb-2">Flat: {c.flatNumber} • {c.ageGroup}</p>
                            <p className="bg-black/30 p-3 rounded mb-4 text-gray-200">{c.description}</p>

                            <div className="flex gap-2">
                                {c.status !== 'Pending' && <button onClick={() => updateStatus(c.id, 'Pending')} className="text-xs px-2 py-1 border border-yellow-500 text-yellow-500 rounded hover:bg-yellow-500/10">Mark Pending</button>}
                                {c.status !== 'In Progress' && <button onClick={() => updateStatus(c.id, 'In Progress')} className="text-xs px-2 py-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-500/10">Mark In Progress</button>}
                                {c.status !== 'Solved' && <button onClick={() => updateStatus(c.id, 'Solved')} className="text-xs px-2 py-1 border border-green-500 text-green-500 rounded hover:bg-green-500/10">Mark Solved</button>}
                            </div>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {feedbacks.map((f) => (
                        <Card key={f.id}>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-2xl text-royalGold">{'★'.repeat(f.rating)}<span className="text-gray-600">{'★'.repeat(5 - f.rating)}</span></span>
                                <span className="ml-auto text-sm text-gray-500">{new Date(f.createdAt).toLocaleDateString()}</span>
                            </div>
                            {f.comment && <p className="text-gray-200">"{f.comment}"</p>}
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
