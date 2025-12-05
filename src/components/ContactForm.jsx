import { useState } from 'react';
import { sendContactMessage } from '../services/api';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            await sendContactMessage(formData);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' })  // Clears form on success
        } catch (error) {
            console.error("FULL ERROR DETAILS:", error);
            setStatus('error');
        }
    };

    return (
        <section className="bg-white p-6 rounded-lg shadow-md w-full mt-8">
            <h2 className="text-3xl font-bold tect-gray-800 mb-6 text-center">Get in touch</h2>

            {status === 'success' ? (
                <div className="bg-green-100 tect-green-700 p-4 rounded text-center">
                    <p className="font-bold">Message Sent!</p>
                    <p>Thanks for reaching out. I will get back to you soon.</p>
                    <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-sm underlinehover:text-green-900"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Name</label>
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Name"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="your.email@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="How can I help you?"
                        ></textarea>
                    </div>

                    {status === 'error' && (
                        <div className="text-red-500 text-sm text-center">
                            Failed to send message. Please try again.
                        </div>
                    )}

                    <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`w-full py-3 px-4 rounded font-bold text-white transition
                        ${status === 'submitting'
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-slate-800 hover:bg-slate-700'}`
                        }
                    >
                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            )}
        </section> 
    );
};

export default ContactForm;
