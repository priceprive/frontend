import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar';
import { Star, BarChart3, TrendingUp, Search, FileText, Users, Mail, Menu, X, ArrowRight, ChevronRight, Check, Zap, Shield, BarChart, PieChart, LineChart } from 'lucide-react';

const PricePrive = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);

  // Animation for cards
  useEffect(() => {
    const cardInterval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(cardInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Web Crawling",
      description: "Effortlessly extract and analyze web data for smarter decisions."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Comprehensive insights on stock, performance, and key business data."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Insight Reports",
      description: "Tailored reports for informed decision-making, monitor market trends and stay competitive."
    }
  ];

  const testimonials = [
    {
      rating: 5,
      comment: "PricePrive's insights helped us understand our competitors better and improve our pricing strategy significantly.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      rating: 5,
      comment: "The detailed reports provided by PricePrive have been invaluable for our inventory management and forecasting.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b590?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const heroCards = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "Track competitor activities 24/7",
      metric: "99.9%",
      metricLabel: "Uptime"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Deep insights from complex data",
      metric: "2.4M+",
      metricLabel: "Data Points"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Market Intelligence",
      description: "Stay ahead of market trends",
      metric: "500+",
      metricLabel: "Companies"
    }
  ];

  return (
    <div className="min-h-screen w-screen bg-[#1A120B] text-[#E5E5CB] overflow-x-hidden">
      {/* Header */}
      <Navbar scrollY={scrollY} />

            {/* Desktop Navigation */}
            
      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
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
              {/* Main Heading */}
              <div className="overflow-hidden mt-15">
                <motion.h1 
                  className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-[#E5E5CB]"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <motion.span 
                    className="block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                  >
                    Transform
                  </motion.span>
                  <motion.span 
                    className="block bg-gradient-to-r from-[#D5CEA3] via-[#E5E5CB] to-[#D5CEA3] bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                  >
                    Competitor Data
                  </motion.span>
                  <motion.span 
                    className="block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                  >
                    Into Winning Strategies
                  </motion.span>
                </motion.h1>
              </div>

              {/* Subtitle */}
              <motion.p 
                className="text-xl lg:text-2xl text-[#D5CEA3] leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              >
                Unlock the power of real-time competitive intelligence with advanced analytics that drive smarter business decisions.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
              >
                <button className="group relative bg-gradient-to-r from-[#D5CEA3] to-[#3C2A21] hover:from-[#E5E5CB] hover:to-[#D5CEA3] text-[#1A120B] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
                  <span className="relative z-10 flex items-center justify-center">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="flex items-center justify-center px-8 py-4 border-2 border-[#D5CEA3]/30 hover:border-[#D5CEA3] text-[#E5E5CB] hover:text-[#D5CEA3] rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
                  <FileText className="w-5 h-5 mr-2" />
                  View Demo
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="flex items-center space-x-8 pt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
              >
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#E5E5CB]">500+</div>
                  <div className="text-sm lg:text-base text-[#D5CEA3]">Companies Trust Us</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#E5E5CB]">50M+</div>
                  <div className="text-sm lg:text-base text-[#D5CEA3]">Data Points Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#E5E5CB]">99.9%</div>
                  <div className="text-sm lg:text-base text-[#D5CEA3]">Accuracy Rate</div>
                </div>
              </motion.div>
            </div>

            {/* Right Visual - Animated Cards */}
            <motion.div 
              className="relative w-full max-w-lg h-[400px] mx-auto lg:mx-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
            >
              {heroCards.map((card, index) => {
                const isActive = currentCard === index;
                const isPrevious = currentCard === (index - 1 + heroCards.length) % heroCards.length;
                const isNext = currentCard === (index + 1) % heroCards.length;
                
                return (
                  <div
                    key={index}
                    className={`absolute w-full h-full transition-all duration-700 ease-in-out transform ${
                      isActive
                        ? 'opacity-100 translate-x-0 translate-y-0 z-30 scale-100'
                        : isPrevious
                        ? 'opacity-60 -translate-x-8 translate-y-4 z-20 scale-95'
                        : isNext
                        ? 'opacity-60 translate-x-8 -translate-y-4 z-10 scale-95'
                        : 'opacity-0 translate-x-0 z-0 scale-90'
                    }`}
                  >
                    <div className="relative bg-gradient-to-br from-[#3C2A21]/90 to-[#1A120B]/90 backdrop-blur-lg rounded-3xl p-8 h-full shadow-2xl border border-[#D5CEA3]/20 transition-all duration-300 hover:border-[#E5E5CB]/40 overflow-hidden group/card hover:shadow-[0_0_15px_rgba(213,206,163,0.3)]">
                      {/* Glowing border effect */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D5CEA3]/20 via-transparent to-[#E5E5CB]/20 opacity-0 group-hover/card:opacity-100 transition-all duration-500"></div>
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-start space-x-6 mb-6">
                          <div className="p-4 bg-gradient-to-br from-[#D5CEA3]/20 to-[#E5E5CB]/20 rounded-2xl text-[#D5CEA3] flex-shrink-0 group-hover/card:from-[#D5CEA3]/30 group-hover/card:to-[#E5E5CB]/30 transition-all duration-300">
                            {card.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-[#E5E5CB] mb-2 group-hover/card:text-[#D5CEA3] transition-colors duration-300">{card.title}</h3>
                            <p className="text-[#D5CEA3] text-lg">{card.description}</p>
                          </div>
                        </div>
                        <div className="mt-auto pt-6 border-t border-[#D5CEA3]/10">
                          <div className="flex items-center space-x-3">
                            <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#D5CEA3] to-[#E5E5CB] bg-clip-text text-transparent">{card.metric}</span>
                            <span className="text-sm lg:text-base text-[#D5CEA3] bg-[#1A120B]/30 px-3 py-1 rounded-full">
                              {card.metricLabel}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Service Cards */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mt-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
          >
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-[#3C2A21]/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-[#D5CEA3]/20 hover:border-[#E5E5CB]/40"
              >
                <div className="text-[#D5CEA3] mb-4 group-hover:text-[#E5E5CB] transition-colors duration-300 transform group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#E5E5CB]">{service.title}</h3>
                <p className="text-[#D5CEA3] leading-relaxed">{service.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#3C2A21] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#E5E5CB]">Competitor Insights Analysis</h2>
            <p className="text-xl text-[#D5CEA3] max-w-3xl mx-auto">Unlock Competitor <br />
              Insights with <br />
              <span className="text-[#D5CEA3]">PricePrive</span>
            </p>
            <p className="text-lg text-[#D5CEA3] leading-relaxed">
              At PricePrive, we bring clarity to the competitive market with powerful 
              scraping and analysis. Gain real-time visibility into stock status and 
              pricing trends with our in-depth reports—giving you the edge to make 
              smarter, faster decisions.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-[#3C2A21] to-[#1A120B] p-8 rounded-3xl shadow-2xl transform hover:rotate-2 transition-transform duration-300 border border-[#D5CEA3]/20">
              <div className="bg-[#E5E5CB] h-48 rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-24 h-24 text-[#3C2A21]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Competitor Insights Analysis</h2>
            <p className="text-xl text-amber-200/80 max-w-3xl mx-auto">
              We provide comprehensive reports on competitor metrics including 
              stock levels, pricing, and inventory analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="group cursor-pointer">
              <div className="bg-[#3C2A21] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 border border-amber-400/20 hover:border-amber-300/40">
                <div className="h-48 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl mb-6 flex items-center justify-center">
                  <TrendingUp className="w-16 h-16 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">End to End Analysis</h3>
                <p className="text-amber-200/80 leading-relaxed">
                  Unlock the full potential of your data with our seamless extraction, 
                  processing, and in-depth insights, driving smarter decisions.
                </p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-[#3C2A21] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 border border-amber-400/20 hover:border-amber-300/40">
                <div className="h-48 bg-gradient-to-br from-orange-500 to-amber-400 rounded-2xl mb-6 flex items-center justify-center">
                  <FileText className="w-16 h-16 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Custom Reports Delivered</h3>
                <p className="text-amber-200/80 leading-relaxed">
                  Get tailored, data-driven reports designed to meet your unique business 
                  needs, transforming raw data into actionable intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#3C2A21] px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-[#1A120B] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-400/20 hover:border-amber-300/40"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed text-white">{testimonial.comment}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt="Customer" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div className="w-8 h-1 bg-amber-400 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Competitor Insights</h2>
            <p className="text-xl text-amber-200/80 max-w-3xl mx-auto">
              Gain a strategic edge with deep competitor analysis, uncovering trends, 
              strengths, and opportunities to stay ahead in your industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-center space-x-8 group">
              <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-amber-300/20">
                <BarChart3 className="w-16 h-16 text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Data Analysis</h3>
                <p className="text-amber-200/80 leading-relaxed">
                  Transform raw data into meaningful insights with our advanced analytics, 
                  helping you make data-driven decisions with confidence.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-8 group">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-amber-400 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-amber-300/20">
                <TrendingUp className="w-16 h-16 text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Market Trends</h3>
                <p className="text-amber-200/80 leading-relaxed">
                  Track evolving industry patterns with data-driven insights, helping you 
                  adapt and capitalize on emerging opportunities.
                </p>
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
              <h3 className="text-xl font-bold mb-6 text-amber-400">Services</h3>
              <div className="space-y-3">
                <p className="text-amber-100 hover:text-amber-400 transition-colors cursor-pointer">Competitor Insights</p>
                <p className="text-amber-100 hover:text-amber-400 transition-colors cursor-pointer">Competitor Insights Analysis</p>
                <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">AI SUMMARIZER</a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-amber-400">Resources</h3>
              <div className="space-y-3">
                <p className="text-amber-100 hover:text-amber-400 transition-colors cursor-pointer">Data Analysis</p>
                <p className="text-amber-100 hover:text-amber-400 transition-colors cursor-pointer">Market Research</p>
                <p className="text-amber-100 hover:text-amber-400 transition-colors cursor-pointer">Performance Metrics</p>
                <p className="text-amber-100 hover:text-amber-400 transition-colors cursor-pointer">Inventory Insights</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-amber-400">Pricing</h3>
              <div className="space-y-3">
                <p className="text-amber-100 hover:text-amber-400 transition-colors cursor-pointer">Basic Plan</p>
                <p className="text-amber-100 hover:text-amber-400 transition-colors cursor-pointer">Advanced Plan</p>
                <p className="text-amber-100 hover:text-amber-400 transition-colors cursor-pointer">Custom Plan</p>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">PP</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Price Prive</h3>
                  <p className="text-amber-200 flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    support@priceprive.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-400/20 mt-12 pt-8 text-center">
            <p className="text-amber-200">© 2024 PricePrive. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PricePrive;