import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Mail, Phone, MapPin, Send, CheckCircle, User, MessageSquare, Search, BarChart3, TrendingUp } from 'lucide-react';

const ContactPage = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'First name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      info: "support@priceprive.com",
      description: "Get in touch via email for detailed inquiries"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Speak directly with our team"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      info: "San Francisco, CA",
      description: "Come visit our headquarters"
    }
  ];

  return (
    <div className="min-h-screen w-screen bg-[#1A120B] text-[#E5E5CB] overflow-x-hidden">
      <Navbar scrollY={scrollY} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#D5CEA3]/10 to-[#3C2A21]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-32 w-80 h-80 bg-gradient-to-br from-[#E5E5CB]/5 to-[#D5CEA3]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-br from-[#3C2A21]/10 to-[#E5E5CB]/5 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto relative w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="block text-[#E5E5CB]">Get in</span>
                  <span className="block bg-gradient-to-r from-[#D5CEA3] via-[#E5E5CB] to-[#D5CEA3] bg-clip-text text-transparent">
                    Touch
                  </span>
                  <span className="block text-[#E5E5CB]">With Us</span>
                </h1>
              </div>

              <p className="text-xl lg:text-2xl text-[#D5CEA3] leading-relaxed max-w-lg">
                Reach out to us for insights on competitor analysis, stock, pricing, and inventory data.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-[#3C2A21]/30 backdrop-blur-sm rounded-2xl border border-[#D5CEA3]/20 hover:border-[#E5E5CB]/40 transition-all duration-300 hover:bg-[#3C2A21]/50 group cursor-pointer"
                  >
                    <div className="p-3 bg-gradient-to-br from-[#D5CEA3]/20 to-[#E5E5CB]/20 rounded-xl text-[#D5CEA3] group-hover:from-[#D5CEA3]/30 group-hover:to-[#E5E5CB]/30 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#E5E5CB] group-hover:text-[#D5CEA3] transition-colors duration-300">{item.title}</h3>
                      <p className="text-[#D5CEA3] font-medium">{item.info}</p>
                      <p className="text-sm text-[#D5CEA3]/70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hero Image */}
              <div className="mt-12">
                <div className="relative bg-gradient-to-br from-[#3C2A21]/90 to-[#1A120B]/90 rounded-3xl p-8 shadow-2xl border border-[#D5CEA3]/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D5CEA3]/5 to-[#E5E5CB]/10"></div>
                  <div className="relative flex items-center justify-center h-48">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#D5CEA3] to-[#E5E5CB] rounded-2xl flex items-center justify-center">
                        <Search className="w-8 h-8 text-[#1A120B]" />
                      </div>
                      <div className="w-16 h-16 bg-gradient-to-br from-[#E5E5CB] to-[#D5CEA3] rounded-2xl flex items-center justify-center">
                        <BarChart3 className="w-8 h-8 text-[#1A120B]" />
                      </div>
                      <div className="w-16 h-16 bg-gradient-to-br from-[#D5CEA3] to-[#E5E5CB] rounded-2xl flex items-center justify-center">
                        <TrendingUp className="w-8 h-8 text-[#1A120B]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#3C2A21]/90 to-[#1A120B]/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-[#D5CEA3]/20 relative overflow-hidden">
                {/* Glowing effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D5CEA3]/10 via-transparent to-[#E5E5CB]/10"></div>
                
                <div className="relative z-10">
                  {!isSubmitted ? (
                    <div className="space-y-6">
                      <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-[#E5E5CB] mb-2">Send us a Message</h2>
                        <p className="text-[#D5CEA3]">We'd love to hear from you</p>
                      </div>

                      {/* Name Field */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-[#D5CEA3]">
                          First Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D5CEA3]/60" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your first name here"
                            className={`w-full pl-12 pr-4 py-4 bg-[#1A120B]/50 border rounded-2xl text-[#E5E5CB] placeholder-[#D5CEA3]/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                              errors.name 
                                ? 'border-red-400 focus:ring-red-400/50' 
                                : 'border-[#D5CEA3]/30 focus:border-[#D5CEA3] focus:ring-[#D5CEA3]/50'
                            }`}
                          />
                        </div>
                        {errors.name && (
                          <p className="text-red-400 text-sm">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-[#D5CEA3]">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D5CEA3]/60" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Your email address here"
                            className={`w-full pl-12 pr-4 py-4 bg-[#1A120B]/50 border rounded-2xl text-[#E5E5CB] placeholder-[#D5CEA3]/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                              errors.email 
                                ? 'border-red-400 focus:ring-red-400/50' 
                                : 'border-[#D5CEA3]/30 focus:border-[#D5CEA3] focus:ring-[#D5CEA3]/50'
                            }`}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-400 text-sm">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Message Field */}
                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium text-[#D5CEA3]">
                          Your Message *
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#D5CEA3]/60" />
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Your message here"
                            rows="4"
                            className={`w-full pl-12 pr-4 py-4 bg-[#1A120B]/50 border rounded-2xl text-[#E5E5CB] placeholder-[#D5CEA3]/50 focus:outline-none focus:ring-2 resize-none transition-all duration-300 ${
                              errors.message 
                                ? 'border-red-400 focus:ring-red-400/50' 
                                : 'border-[#D5CEA3]/30 focus:border-[#D5CEA3] focus:ring-[#D5CEA3]/50'
                            }`}
                          />
                        </div>
                        {errors.message && (
                          <p className="text-red-400 text-sm">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform ${
                          isSubmitting
                            ? 'bg-[#D5CEA3]/50 text-[#1A120B]/70 cursor-not-allowed'
                            : 'bg-gradient-to-r from-[#D5CEA3] to-[#E5E5CB] hover:from-[#E5E5CB] hover:to-[#D5CEA3] text-[#1A120B] hover:scale-105 shadow-xl hover:shadow-2xl'
                        }`}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="w-6 h-6 border-2 border-[#1A120B]/30 border-t-[#1A120B] rounded-full animate-spin mr-2"></div>
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            Submit your request now
                            <Send className="w-5 h-5 ml-2" />
                          </div>
                        )}
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#E5E5CB] mb-2">Message Sent!</h3>
                      <p className="text-[#D5CEA3] mb-6">Thank you for reaching out. We'll get back to you soon!</p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-3 bg-gradient-to-r from-[#D5CEA3] to-[#E5E5CB] text-[#1A120B] rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
                      >
                        Send Another Message
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3C2A21] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#D5CEA3]">Services</h3>
              <div className="space-y-3">
                <p className="text-[#E5E5CB] hover:text-[#D5CEA3] transition-colors cursor-pointer">Competitor Insights</p>
                <p className="text-[#E5E5CB] hover:text-[#D5CEA3] transition-colors cursor-pointer">Competitor Insights Analysis</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-[#D5CEA3]">Resources</h3>
              <div className="space-y-3">
                <p className="text-[#E5E5CB] hover:text-[#D5CEA3] transition-colors cursor-pointer">Data Analysis</p>
                <p className="text-[#E5E5CB] hover:text-[#D5CEA3] transition-colors cursor-pointer">Market Research</p>
                <p className="text-[#E5E5CB] hover:text-[#D5CEA3] transition-colors cursor-pointer">Performance Metrics</p>
                <p className="text-[#E5E5CB] hover:text-[#D5CEA3] transition-colors cursor-pointer">Inventory Insights</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-[#D5CEA3]">Pricing</h3>
              <div className="space-y-3">
                <p className="text-[#E5E5CB] hover:text-[#D5CEA3] transition-colors cursor-pointer">Basic Plan</p>
                <p className="text-[#E5E5CB] hover:text-[#D5CEA3] transition-colors cursor-pointer">Advanced Plan</p>
                <p className="text-[#E5E5CB] hover:text-[#D5CEA3] transition-colors cursor-pointer">Custom Plan</p>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D5CEA3] to-[#E5E5CB] rounded-lg flex items-center justify-center">
                  <span className="text-[#1A120B] font-bold text-xl">PP</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#E5E5CB]">Price Prive</h3>
                  <p className="text-[#D5CEA3] flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    support@priceprive.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#D5CEA3]/20 mt-12 pt-8 text-center">
            <p className="text-[#D5CEA3]">© 2024 PricePrive. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;