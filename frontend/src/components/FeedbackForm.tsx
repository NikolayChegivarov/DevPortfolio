import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sendFeedback } from '../services/api';
import { scrollReveal, fadeInUp } from '../utils/animations';

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
        <motion.section 
            className="py-12 bg-gray-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={scrollReveal}
        >
            <div className="max-w-2xl mx-auto px-4">
                <motion.h2 
                    className="text-3xl font-bold text-gray-900 text-center mb-4"
                    variants={fadeInUp}
                >
                    Связаться со мной
                </motion.h2>
                <motion.p 
                    className="text-gray-600 text-center mb-8"
                    variants={fadeInUp}
                >
                    Оставьте заявку, и я свяжусь с вами в течение часа
                </motion.p>

                <motion.form 
                    onSubmit={handleSubmit} 
                    className="bg-white rounded-lg shadow-md p-8"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Имя <span className="text-red-500">*</span>
                        </label>
                        <motion.input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Ваше имя"
                            required
                            whileFocus={{ scale: 1.01 }}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <motion.input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="your@email.com"
                            required
                            whileFocus={{ scale: 1.01 }}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Телефон (опционально)
                        </label>
                        <motion.input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="+7 999 123-45-67"
                            whileFocus={{ scale: 1.01 }}
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Сообщение <span className="text-red-500">*</span>
                        </label>
                        <motion.textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            placeholder="Расскажите о вашем проекте..."
                            required
                            whileFocus={{ scale: 1.01 }}
                        />
                    </div>

                    {status.message && (
                        <motion.div 
                            className={`mb-4 p-3 rounded-md ${
                                status.type === 'success' 
                                    ? 'bg-green-50 text-green-700 border border-green-200' 
                                    : status.type === 'error' 
                                    ? 'bg-red-50 text-red-700 border border-red-200' 
                                    : 'bg-blue-50 text-blue-700 border border-blue-200'
                            }`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {status.message}
                        </motion.div>
                    )}

                    <motion.button
                        type="submit"
                        disabled={status.type === 'loading'}
                        className={`w-full py-3 px-4 rounded-md text-white font-medium transition-colors ${
                            status.type === 'loading'
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {status.type === 'loading' ? 'Отправка...' : 'Отправить сообщение'}
                    </motion.button>
                </motion.form>
            </div>
        </motion.section>
    );
};

export default FeedbackForm;

