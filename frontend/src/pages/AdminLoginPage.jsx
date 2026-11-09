import React, { useState } from 'react';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

const AdminLoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/auth/login', { username, password });
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard');
        } catch (error) {
            alert('Invalid Credentials');
        }
    };

    return (
        <div className="flex justify-center items-center h-[80vh]">
            <Card className="max-w-md w-full text-center">
                <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-royalGold/20">
                        <Lock size={48} className="text-royalGold" />
                    </div>
                </div>
                <h2 className="text-3xl font-serif text-royalGold mb-6">Admin Portal</h2>
                <form onSubmit={handleLogin}>
                    <Input
                        label="Username"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit" variant="primary" className="w-full mt-4">Login</Button>
                </form>
            </Card>
        </div>
    );
};

export default AdminLoginPage;
