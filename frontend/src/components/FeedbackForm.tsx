import React, { useState } from 'react';
import { sendFeedback } from '../services/api';

const FeedbackForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await sendFeedback(formData);
            if (response.success) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
                setTimeout(() => setStatus('idle'), 3000);
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Ошибка отправки. Попробуйте позже.');
            console.error('Ошибка отправки:', error);
        }
    };

    return (
        <section style={{ padding: '40px 20px', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '30px', color: '#333' }}>
                Свяжитесь со мной
            </h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#555' }}>Ваше имя *</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ padding: '10px 15px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '1rem', outline: 'none' }}
                        placeholder="Иван Петров"
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#555' }}>Email *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ padding: '10px 15px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '1rem', outline: 'none' }}
                        placeholder="ivan@example.com"
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#555' }}>Телефон</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{ padding: '10px 15px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '1rem', outline: 'none' }}
                        placeholder="+7 999 123-45-67"
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#555' }}>Сообщение *</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        style={{ padding: '10px 15px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '1rem', resize: 'vertical', outline: 'none', fontFamily: 'inherit' }}
                        placeholder="Расскажите о вашем проекте..."
                        rows={4}
                    />
                </div>
                <button 
                    type="submit" 
                    style={{
                        padding: '12px 30px',
                        backgroundColor: status === 'loading' ? '#6c757d' : status === 'success' ? '#28a745' : '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s',
                        marginTop: '10px',
                    }}
                    disabled={status === 'loading'}
                >
                    {status === 'loading' && 'Отправка...'}
                    {status === 'success' && '✅ Отправлено!'}
                    {status === 'error' && '❌ Ошибка'}
                    {status === 'idle' && 'Отправить сообщение'}
                </button>
                {status === 'error' && (
                    <p style={{ color: '#dc3545', textAlign: 'center', marginTop: '10px' }}>{errorMessage}</p>
                )}
            </form>
        </section>
    );
};

export default FeedbackForm;
