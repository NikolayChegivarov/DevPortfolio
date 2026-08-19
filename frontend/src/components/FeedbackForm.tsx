import React, { useState } from 'react';
import { sendFeedback } from '../services/api';

const FeedbackForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [status, setStatus] = useState<{
        type: 'idle' | 'loading' | 'success' | 'error';
        message: string;
    }>({ type: 'idle', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Простая валидация
        if (!formData.name || !formData.email || !formData.message) {
            setStatus({
                type: 'error',
                message: 'Пожалуйста, заполните все обязательные поля',
            });
            return;
        }

        setStatus({ type: 'loading', message: 'Отправка...' });

        try {
            const response = await sendFeedback(formData);
            if (response.success) {
                setStatus({
                    type: 'success',
                    message: 'Сообщение успешно отправлено! Я свяжусь с вами в ближайшее время.',
                });
                setFormData({ name: '', email: '', phone: '', message: '' });
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Ошибка отправки. Попробуйте позже или напишите мне напрямую в Telegram.',
            });
            console.error('Ошибка отправки формы:', error);
        }
    };

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-2xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
                    Связаться со мной
                </h2>
                <p className="text-gray-600 text-center mb-8">
                    Оставьте заявку, и я свяжусь с вами в течение часа
                </p>

                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Имя <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Ваше имя"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="your@email.com"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Телефон (опционально)
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="+7 999 123-45-67"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Сообщение <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            placeholder="Расскажите о вашем проекте..."
                            required
                        />
                    </div>

                    {status.message && (
                        <div className={`mb-4 p-3 rounded-md ${
                            status.type === 'success' 
                                ? 'bg-green-50 text-green-700 border border-green-200' 
                                : status.type === 'error' 
                                ? 'bg-red-50 text-red-700 border border-red-200' 
                                : 'bg-blue-50 text-blue-700 border border-blue-200'
                        }`}>
                            {status.message}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={status.type === 'loading'}
                        className={`w-full py-3 px-4 rounded-md text-white font-medium transition-colors ${
                            status.type === 'loading'
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                    >
                        {status.type === 'loading' ? 'Отправка...' : 'Отправить сообщение'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default FeedbackForm;
