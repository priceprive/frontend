import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Menu, X, Search, BarChart3, TrendingUp, FileText, Users, Mail, Star, ArrowRight, ChevronRight, Check, Zap, Shield, Target, Eye, Layers, Database, PieChart, LineChart, Globe, Settings, Award } from 'lucide-react';



const ServicesPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const competitiveAnalysisServices = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Competitor Benchmarking",
      description: "Measure your performance against industry leaders with key metrics, revealing strengths and areas for improvement.",
      features: ["Performance Metrics", "Industry Comparison", "Gap Analysis", "Actionable Insights"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Market Share Analysis",
      description: "Gain clarity on market distribution and competitor dominance to refine your positioning and growth strategies.",
      features: ["Market Distribution", "Competitor Dominance", "Growth Opportunities", "Strategic Positioning"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Strategic Gap Identification",
      description: "Uncover untapped opportunities and competitor weaknesses to craft winning strategies and gain an edge.",
      features: ["Opportunity Mapping", "Weakness Analysis", "Strategy Development", "Competitive Edge"],
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop"
    }
  ];

  const industryIntelligenceServices = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Market Demand Analysis",
      description: "Understand customer needs and emerging trends to align your offerings with market demand.",
      features: ["Customer Insights", "Trend Analysis", "Demand Forecasting", "Market Alignment"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Regulatory & Compliance Tracking",
      description: "Stay updated on industry regulations and compliance changes to mitigate risks.",
      features: ["Regulation Monitoring", "Compliance Updates", "Risk Assessment", "Policy Analysis"],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Emerging Technologies & Innovations",
      description: "Track new technologies and innovations shaping your industry for a competitive edge.",
      features: ["Tech Monitoring", "Innovation Tracking", "Future Trends", "Competitive Advantage"],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consumer Behavior Insights",
      description: "Analyze purchasing patterns and preferences to tailor strategies that align with market needs.",
      features: ["Behavior Analysis", "Purchase Patterns", "Customer Preferences", "Strategy Alignment"],
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop"
    }
  ];

  const testimonial = {
    rating: 5,
    comment: "Priceprive provided invaluable insights that transformed our competitive strategy and improved our market positioning significantly.",
    author: "Industry Leader"
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#E5E5CB]">
              Competitive Analysis 
              <span className="block bg-gradient-to-r from-[#D5CEA3] via-[#E5E5CB] to-[#D5CEA3] bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-[#D5CEA3] leading-relaxed max-w-4xl mx-auto">
              Stay ahead of the competition with deep, data-driven insights into your rivals' strategies, strengths, and market positioning. Leverage benchmarking, market share analysis, and strategic gap identification to refine your business approach and outperform industry competitors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Competitive Analysis Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {competitiveAnalysisServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-gradient-to-br from-[#3C2A21]/90 to-[#1A120B]/90 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-[#D5CEA3]/20 hover:border-[#E5E5CB]/40 transition-all duration-300 group hover:transform hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-[#D5CEA3]/20 to-[#E5E5CB]/20 rounded-2xl text-[#D5CEA3] group-hover:from-[#D5CEA3]/30 group-hover:to-[#E5E5CB]/30 transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-[#E5E5CB]">{service.title}</h3>
                  </div>
                  <p className="text-[#D5CEA3] leading-relaxed mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-[#D5CEA3]" />
                        <span className="text-sm text-[#E5E5CB]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-[#3C2A21] px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                alt="Testimonial"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-[#D5CEA3] fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl lg:text-3xl font-medium text-[#E5E5CB] leading-relaxed">
                "{testimonial.comment}"
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-1 bg-gradient-to-r from-[#D5CEA3] to-[#E5E5CB] rounded-full"></div>
                <span className="text-[#D5CEA3] font-medium">{testimonial.author}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Intelligence Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#E5E5CB]">Industry Intelligence</h2>
            <p className="text-xl lg:text-2xl text-[#D5CEA3] leading-relaxed max-w-4xl mx-auto">
              Gain a comprehensive view of your industry with real-time data on market dynamics, emerging trends, and key player movements to make informed business decisions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {industryIntelligenceServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="bg-gradient-to-br from-[#3C2A21]/90 to-[#1A120B]/90 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-[#D5CEA3]/20 hover:border-[#E5E5CB]/40 transition-all duration-300 group hover:transform hover:-translate-y-2"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-[#D5CEA3]/20 to-[#E5E5CB]/20 rounded-2xl text-[#D5CEA3] group-hover:from-[#D5CEA3]/30 group-hover:to-[#E5E5CB]/30 transition-all duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#E5E5CB] mb-4">{service.title}</h3>
                    <p className="text-[#D5CEA3] leading-relaxed mb-6">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-[#D5CEA3] flex-shrink-0" />
                          <span className="text-sm text-[#E5E5CB]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3C2A21] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#E5E5CB]">
              Ready to Gain Your 
              <span className="block bg-gradient-to-r from-[#D5CEA3] via-[#E5E5CB] to-[#D5CEA3] bg-clip-text text-transparent">
                Competitive Edge?
              </span>
            </h2>
            <p className="text-xl text-[#D5CEA3] leading-relaxed">
              Transform your business strategy with comprehensive competitive intelligence and industry insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button className="group relative bg-gradient-to-r from-[#D5CEA3] to-[#3C2A21] hover:from-[#E5E5CB] hover:to-[#D5CEA3] text-[#1A120B] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
                <span className="relative z-10 flex items-center justify-center">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="flex items-center justify-center px-8 py-4 border-2 border-[#D5CEA3]/30 hover:border-[#D5CEA3] text-[#E5E5CB] hover:text-[#D5CEA3] rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
                <FileText className="w-5 h-5 mr-2" />
                View Sample Report
              </button>
            </div>
          </motion.div>
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
                <div className="w-12 h-12 bg-gradient-to-br from-[#D5CEA3] to-[#3C2A21] rounded-lg flex items-center justify-center">
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

export default ServicesPage;