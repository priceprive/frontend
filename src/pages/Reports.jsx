import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Menu, X, Search, BarChart3, TrendingUp, FileText, Users, Mail, Star, ArrowRight, ChevronRight, Check, Zap, Shield, Target, Eye, Layers, Database, PieChart, LineChart, Globe, Settings, Award, Download, Filter, Calendar, Activity, ChevronLeft } from 'lucide-react';

// Navbar Component (same as services page)

const ReportsPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentReportIndex, setCurrentReportIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const reportTypes = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Intelligence & Analytics",
      description: "Gain a clear view of your company's operations, financial health, and key performance metrics to drive smarter business decisions.",
      features: ["Performance Dashboards", "Financial Analytics", "KPI Tracking", "Operational Insights"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      reportCount: "150+ Reports Available"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Market Research & Competitive Analysis",
      description: "Stay ahead with data-driven reports on industry trends, competitor strategies, and customer behavior to refine your market approach.",
      features: ["Market Trends", "Competitor Intelligence", "Customer Insights", "Strategic Planning"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      reportCount: "200+ Reports Available"
    }
  ];

  const featuredReports = [
    {
      title: "Q4 2024 Competitive Landscape Analysis",
      category: "Market Intelligence",
      date: "December 2024",
      description: "Comprehensive analysis of competitive positioning and market share dynamics across key industry segments.",
      metrics: ["25 Competitors Analyzed", "15 Market Segments", "12 Month Trend Analysis"],
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop"
    },
    {
      title: "Customer Behavior & Purchasing Patterns Report",
      category: "Consumer Analytics",
      date: "November 2024",
      description: "Deep dive into customer preferences, buying behaviors, and emerging consumption trends in your industry.",
      metrics: ["10K+ Customer Surveys", "5 Geographic Markets", "24 Product Categories"],
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop"
    },
    {
      title: "Technology Innovation & Market Impact Study",
      category: "Innovation Intelligence",
      date: "October 2024",
      description: "Analysis of emerging technologies and their potential impact on market dynamics and competitive strategies.",
      metrics: ["50 Tech Innovations", "8 Industry Verticals", "3 Year Forecast"],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop"
    },
    {
      title: "Global Supply Chain Analytics Report",
      category: "Supply Chain Intelligence",
      date: "September 2024",
      description: "Comprehensive analysis of global supply chain trends, disruptions, and optimization opportunities.",
      metrics: ["200+ Supply Networks", "15 Country Analysis", "Risk Assessment Matrix"],
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop"
    },
    {
      title: "Digital Transformation & ROI Analysis",
      category: "Digital Strategy",
      date: "August 2024",
      description: "In-depth study of digital transformation initiatives and their return on investment across various industries.",
      metrics: ["100+ Companies Studied", "20 Digital Technologies", "5 Year Performance Data"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
    }
  ];

  const testimonial = {
    rating: 5,
    comment: "The detailed reports from PricePrive have been instrumental in shaping our strategic decisions and market positioning.",
    author: "Sarah Chen, Strategy Director",
    company: "TechCorp Industries"
  };

  const nextReport = () => {
    setCurrentReportIndex((prev) => (prev + 1) % featuredReports.length);
  };

  const prevReport = () => {
    setCurrentReportIndex((prev) => (prev - 1 + featuredReports.length) % featuredReports.length);
  };

  const goToReport = (index) => {
    setCurrentReportIndex(index);
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
              Intelligence Reports
              <span className="block bg-gradient-to-r from-[#D5CEA3] via-[#E5E5CB] to-[#D5CEA3] bg-clip-text text-transparent">
                & Analytics
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-[#D5CEA3] leading-relaxed max-w-4xl mx-auto">
              Transform raw data into actionable insights with our comprehensive business intelligence reports. From competitive analysis to market research, get the intelligence you need to make informed strategic decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Report Types Section - Stacked Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {reportTypes.map((report, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                  <img 
                    src={report.image} 
                    alt={report.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#D5CEA3]/90 backdrop-blur-sm text-[#1A120B] px-4 py-2 rounded-full text-sm font-semibold">
                    {report.reportCount}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A120B]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-gradient-to-br from-[#D5CEA3]/20 to-[#E5E5CB]/20 rounded-3xl text-[#D5CEA3]">
                    {report.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-[#E5E5CB]">{report.title}</h3>
                </div>
                <p className="text-[#D5CEA3] leading-relaxed text-lg">{report.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {report.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#D5CEA3] flex-shrink-0" />
                      <span className="text-[#E5E5CB]">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="bg-gradient-to-r from-[#D5CEA3]/20 to-[#E5E5CB]/20 hover:from-[#D5CEA3]/30 hover:to-[#E5E5CB]/30 text-[#E5E5CB] font-semibold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center space-x-3 border border-[#D5CEA3]/30 group">
                  <Eye className="w-5 h-5" />
                  <span>Browse Reports</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Large Report Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="h-96 rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"
                alt="Analytics Dashboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A120B]/80 via-[#1A120B]/40 to-transparent"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-2xl mx-auto text-center px-8">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#E5E5CB]">
                    Comprehensive Market Intelligence Platform
                  </h2>
                  <p className="text-xl text-[#D5CEA3] mb-8 leading-relaxed">
                    Access real-time analytics, competitive insights, and market intelligence through our advanced reporting dashboard
                  </p>
                  <button className="bg-gradient-to-r from-[#D5CEA3] to-[#3C2A21] hover:from-[#E5E5CB] hover:to-[#D5CEA3] text-[#1A120B] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-2 mx-auto">
                    <Activity className="w-5 h-5" />
                    <span>View Live Dashboard</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Reports Carousel Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#E5E5CB]">Featured Reports</h2>
            <p className="text-xl lg:text-2xl text-[#D5CEA3] leading-relaxed max-w-4xl mx-auto">
              Discover our latest and most comprehensive intelligence reports, featuring cutting-edge analysis and actionable insights
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={prevReport}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-gradient-to-r from-[#D5CEA3]/20 to-[#E5E5CB]/20 hover:from-[#D5CEA3]/40 hover:to-[#E5E5CB]/40 backdrop-blur-sm rounded-full flex items-center justify-center text-[#E5E5CB] transition-all duration-300 border border-[#D5CEA3]/30 hover:border-[#D5CEA3]/60 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
            
            <button
              onClick={nextReport}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-gradient-to-r from-[#D5CEA3]/20 to-[#E5E5CB]/20 hover:from-[#D5CEA3]/40 hover:to-[#E5E5CB]/40 backdrop-blur-sm rounded-full flex items-center justify-center text-[#E5E5CB] transition-all duration-300 border border-[#D5CEA3]/30 hover:border-[#D5CEA3]/60 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            {/* Carousel Content */}
            <div className="overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReportIndex}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-gradient-to-br from-[#3C2A21]/90 to-[#1A120B]/90 backdrop-blur-lg shadow-2xl border border-[#D5CEA3]/20"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative h-80 lg:h-96 overflow-hidden">
                      <img 
                        src={featuredReports[currentReportIndex].image} 
                        alt={featuredReports[currentReportIndex].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-6 left-6 bg-[#D5CEA3]/90 backdrop-blur-sm text-[#1A120B] px-4 py-2 rounded-full text-sm font-semibold">
                        {featuredReports[currentReportIndex].category}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A120B]/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#1A120B]/60"></div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center space-x-3 text-[#D5CEA3] text-sm mb-4">
                        <Calendar className="w-5 h-5" />
                        <span className="font-medium">{featuredReports[currentReportIndex].date}</span>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold text-[#E5E5CB] mb-4 leading-tight">
                        {featuredReports[currentReportIndex].title}
                      </h3>
                      
                      <p className="text-[#D5CEA3] leading-relaxed mb-6 text-lg">
                        {featuredReports[currentReportIndex].description}
                      </p>
                      
                      <div className="space-y-3 mb-8">
                        {featuredReports[currentReportIndex].metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-[#D5CEA3] rounded-full"></div>
                            <span className="text-[#E5E5CB] font-medium">{metric}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <button className="flex-1 bg-gradient-to-r from-[#D5CEA3]/20 to-[#E5E5CB]/20 hover:from-[#D5CEA3]/30 hover:to-[#E5E5CB]/30 text-[#E5E5CB] font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 border border-[#D5CEA3]/30">
                          <Eye className="w-5 h-5" />
                          <span>Preview</span>
                        </button>
                        <button className="bg-gradient-to-r from-[#D5CEA3] to-[#3C2A21] hover:from-[#E5E5CB] hover:to-[#D5CEA3] text-[#1A120B] font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center space-x-2">
                          <Download className="w-5 h-5" />
                          <span>Download</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center space-x-3 mt-8">
              {featuredReports.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToReport(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReportIndex 
                      ? 'bg-[#D5CEA3] scale-125' 
                      : 'bg-[#D5CEA3]/30 hover:bg-[#D5CEA3]/60'
                  }`}
                />
              ))}
            </div>

            {/* Report Counter */}
            <div className="text-center mt-6">
              <span className="text-[#D5CEA3] font-medium">
                {currentReportIndex + 1} of {featuredReports.length}
              </span>
            </div>
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
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-1 bg-gradient-to-r from-[#D5CEA3] to-[#E5E5CB] rounded-full"></div>
                  <span className="text-[#D5CEA3] font-medium">{testimonial.author}</span>
                </div>
                <p className="text-[#E5E5CB] text-sm ml-20">{testimonial.company}</p>
              </div>
            </motion.div>
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
              Ready to Access 
              <span className="block bg-gradient-to-r from-[#D5CEA3] via-[#E5E5CB] to-[#D5CEA3] bg-clip-text text-transparent">
                Premium Intelligence?
              </span>
            </h2>
            <p className="text-xl text-[#D5CEA3] leading-relaxed">
              Join thousands of businesses leveraging our comprehensive reports to make data-driven decisions and stay ahead of the competition
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button className="group relative bg-gradient-to-r from-[#D5CEA3] to-[#3C2A21] hover:from-[#E5E5CB] hover:to-[#D5CEA3] text-[#1A120B] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
                <span className="relative z-10 flex items-center justify-center">
                  Browse All Reports
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="flex items-center justify-center px-8 py-4 border-2 border-[#D5CEA3]/30 hover:border-[#D5CEA3] text-[#E5E5CB] hover:text-[#D5CEA3] rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
                <Download className="w-5 h-5 mr-2" />
                Sample Report
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

export default ReportsPage;