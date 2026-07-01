"use client";
import { useState } from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for getting in touch! We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[99999] p-4">
      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-xs text-[#1d77ba] font-bold uppercase tracking-wider mb-1">Contact Us</p>
            <h3 className="text-2xl font-bold text-gray-900">Get in Touch</h3>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1d77ba]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1d77ba]"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1d77ba]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Inquiry about services"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1d77ba]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="How can we help you?"
              required
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1d77ba] resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#f15a27] text-white rounded-xl hover:bg-[#dc4512] transition-colors font-bold text-center mt-2 shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
