import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Menu, X, Eye, EyeOff, Mail, Lock, User, ArrowRight, Shield, Zap } from 'lucide-react';

// Navbar Component

// Auth Components
const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    company: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen w-screen bg-[#1A120B] text-[#E5E5CB] overflow-x-hidden">
      {/* Navbar */}
      <Navbar scrollY={scrollY} />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#D5CEA3]/10 to-[#3C2A21]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-gradient-to-br from-[#E5E5CB]/5 to-[#D5CEA3]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-br from-[#3C2A21]/10 to-[#E5E5CB]/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Auth Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Features */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[#E5E5CB] mb-4">
                  {isLogin ? 'Welcome Back to' : 'Join'} <br />
                  <span className="bg-gradient-to-r from-[#D5CEA3] via-[#E5E5CB] to-[#D5CEA3] bg-clip-text text-transparent">
                    PricePrive
                  </span>
                </h1>
                <p className="text-xl text-[#D5CEA3] leading-relaxed">
                  {isLogin 
                    ? 'Continue your competitive intelligence journey with advanced analytics and insights.'
                    : 'Transform competitor data into winning strategies with our powerful analytics platform.'
                  }
                </p>
              </div>

              {/* Feature Points */}
              <div className="space-y-6">
                {[
                  { icon: <Shield className="w-6 h-6" />, title: "Secure & Reliable", desc: "Enterprise-grade security for your data" },
                  { icon: <Zap className="w-6 h-6" />, title: "Real-time Analytics", desc: "Get instant insights from competitor data" },
                  { icon: <ArrowRight className="w-6 h-6" />, title: "Easy Integration", desc: "Seamless setup in just a few minutes" }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  >
                    <div className="p-3 bg-gradient-to-br from-[#D5CEA3]/20 to-[#E5E5CB]/20 rounded-xl text-[#D5CEA3] flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#E5E5CB] mb-1">{feature.title}</h3>
                      <p className="text-[#D5CEA3]">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-[#E5E5CB]">500+</div>
                  <div className="text-sm text-[#D5CEA3]">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-[#E5E5CB]">99.9%</div>
                  <div className="text-sm text-[#D5CEA3]">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-[#E5E5CB]">24/7</div>
                  <div className="text-sm text-[#D5CEA3]">Support</div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Auth Form */}
            <motion.div 
              className="relative w-full max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative bg-gradient-to-br from-[#3C2A21]/90 to-[#1A120B]/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-[#D5CEA3]/20 hover:border-[#E5E5CB]/40 transition-all duration-300 overflow-hidden group">
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D5CEA3]/10 via-transparent to-[#E5E5CB]/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  {/* Tab Switcher */}
                  <div className="flex bg-[#1A120B]/50 rounded-2xl p-1 mb-8">
                    <button
                      onClick={() => setIsLogin(true)}
                      className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                        isLogin
                          ? 'bg-gradient-to-r from-[#D5CEA3] to-[#3C2A21] text-[#1A120B] shadow-lg'
                          : 'text-[#D5CEA3] hover:text-[#E5E5CB]'
                      }`}
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => setIsLogin(false)}
                      className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                        !isLogin
                          ? 'bg-gradient-to-r from-[#D5CEA3] to-[#3C2A21] text-[#1A120B] shadow-lg'
                          : 'text-[#D5CEA3] hover:text-[#E5E5CB]'
                      }`}
                    >
                      Sign Up
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name - Only for Sign Up */}
                    {!isLogin && (
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[#D5CEA3]">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D5CEA3]" />
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            className="w-full pl-12 pr-4 py-4 bg-[#1A120B]/50 border border-[#3C2A21] rounded-xl focus:border-[#D5CEA3] focus:ring-2 focus:ring-[#D5CEA3]/20 transition-all duration-300 text-[#E5E5CB] placeholder-[#D5CEA3]/50"
                            required={!isLogin}
                          />
                        </div>
                      </div>
                    )}

                    {/* Company - Only for Sign Up */}
                    {!isLogin && (
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[#D5CEA3]">Company (Optional)</label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D5CEA3]">
                            <div className="w-5 h-5 bg-[#D5CEA3] rounded-sm flex items-center justify-center">
                              <span className="text-[#1A120B] text-xs font-bold">C</span>
                            </div>
                          </div>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your company name"
                            className="w-full pl-12 pr-4 py-4 bg-[#1A120B]/50 border border-[#3C2A21] rounded-xl focus:border-[#D5CEA3] focus:ring-2 focus:ring-[#D5CEA3]/20 transition-all duration-300 text-[#E5E5CB] placeholder-[#D5CEA3]/50"
                          />
                        </div>
                      </div>
                    )}

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#D5CEA3]">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D5CEA3]" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          className="w-full pl-12 pr-4 py-4 bg-[#1A120B]/50 border border-[#3C2A21] rounded-xl focus:border-[#D5CEA3] focus:ring-2 focus:ring-[#D5CEA3]/20 transition-all duration-300 text-[#E5E5CB] placeholder-[#D5CEA3]/50"
                          required
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#D5CEA3]">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D5CEA3]" />
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="Enter your password"
                          className="w-full pl-12 pr-12 py-4 bg-[#1A120B]/50 border border-[#3C2A21] rounded-xl focus:border-[#D5CEA3] focus:ring-2 focus:ring-[#D5CEA3]/20 transition-all duration-300 text-[#E5E5CB] placeholder-[#D5CEA3]/50"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#D5CEA3] hover:text-[#E5E5CB] transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password - Only for Sign Up */}
                    {!isLogin && (
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[#D5CEA3]">Confirm Password</label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D5CEA3]" />
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder="Confirm your password"
                            className="w-full pl-12 pr-12 py-4 bg-[#1A120B]/50 border border-[#3C2A21] rounded-xl focus:border-[#D5CEA3] focus:ring-2 focus:ring-[#D5CEA3]/20 transition-all duration-300 text-[#E5E5CB] placeholder-[#D5CEA3]/50"
                            required={!isLogin}
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#D5CEA3] hover:text-[#E5E5CB] transition-colors"
                          >
                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Remember Me / Forgot Password */}
                    {isLogin && (
                      <div className="flex items-center justify-between">
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-[#D5CEA3] bg-[#1A120B] border-[#3C2A21] rounded focus:ring-[#D5CEA3] focus:ring-2"
                          />
                          <span className="text-sm text-[#D5CEA3]">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-[#D5CEA3] hover:text-[#E5E5CB] transition-colors">
                          Forgot password?
                        </a>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full group relative bg-gradient-to-r from-[#D5CEA3] to-[#3C2A21] hover:from-[#E5E5CB] hover:to-[#D5CEA3] text-[#1A120B] py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isLogin ? 'Sign In to PricePrive' : 'Create Your Account'}
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>

                    {/* Terms - Only for Sign Up */}
                    {!isLogin && (
                      <p className="text-xs text-[#D5CEA3]/80 text-center leading-relaxed">
                        By creating an account, you agree to our{' '}
                        <a href="#" className="text-[#D5CEA3] hover:text-[#E5E5CB] transition-colors">Terms of Service</a>{' '}
                        and{' '}
                        <a href="#" className="text-[#D5CEA3] hover:text-[#E5E5CB] transition-colors">Privacy Policy</a>
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthPage;