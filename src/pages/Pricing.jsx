import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, BarChart3, TrendingUp, FileText, Users, Mail, Star, ArrowRight, ChevronRight, Check, Zap, Shield, Target, Eye, Layers, Database, PieChart, LineChart, Globe, Settings, Award, Download, Filter, Calendar, Activity, ChevronLeft, DollarSign, Clock, Infinity, Crown, Sparkles, MessageCircle } from 'lucide-react';

// Navbar Component


const PricingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState('basic');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pricingPlans = [
    {
      id: 'free',
      name: 'FREE',
      description: '"It\'s on us until we earn your trust."',
      price: null,
      popular: false,
      icon: <Sparkles className="w-8 h-8" />,
      features: [
        'Basic competitor insights',
        'Limited reports access',
        'Email support',
        'Community access'
      ],
      cta: 'Get Started Free'
    },
    {
      id: 'basic',
      name: 'BASIC',
      pricing: [
        { urls: '2K URLs', price: '$173' },
        { urls: '10K URLs', price: '$390' },
        { urls: '50K URLs', price: '$803' }
      ],
      popular: true,
      icon: <Target className="w-8 h-8" />,
      features: [
        'Dynamic Value Insights',
        'Competitive Market Pulse',
        'Customer Cost Compass',
        'Actionable Pricing Metrics',
        'Priority email support',
        'Basic analytics dashboard'
      ],
      cta: 'Start Basic Plan'
    },
    {
      id: 'advanced',
      name: 'ADVANCED',
      pricing: [
        { urls: '2K URLs', price: '$309' },
        { urls: '10K URLs', price: '$883' },
        { urls: '50K URLs', price: '$1549' }
      ],
      popular: false,
      icon: <Crown className="w-8 h-8" />,
      features: [
        'Price History Hub',
        'Integrated Analytical Engine',
        'Web Intelligence Extractor',
        'Visual Data Mapper',
        'Custom Data Grabber',
        'Product Evolution Tracker',
        'Smart Store Watch',
        'Advanced reporting suite'
      ],
      cta: 'Choose Advanced'
    },
    {
      id: 'customized',
      name: 'CUSTOMIZED',
      description: '"50K+ URLs? Let\'s tailor a plan for you."',
      price: null,
      popular: false,
      icon: <Settings className="w-8 h-8" />,
      features: [
        'Everything in Advanced',
        'Custom integrations',
        'Dedicated account manager',
        'White-label solutions',
        'API access',
        '24/7 phone support'
      ],
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Industries',
      role: 'Strategy Director',
      rating: 5,
      comment: 'PricePrive has transformed how we approach competitive analysis. The insights are invaluable.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      company: 'RetailMax Solutions',
      role: 'CEO',
      rating: 5,
      comment: 'The pricing intelligence we get has directly improved our profit margins by 15%.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face'
    },
    {
      name: 'Emma Rodriguez',
      company: 'GlobalTech Ventures',
      role: 'Product Manager',
      rating: 5,
      comment: 'Best investment we\'ve made. The competitive insights are incredibly detailed and actionable.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face'
    }
  ];

  const faqs = [
    {
      question: 'How does the pricing work?',
      answer: 'Our pricing is based on the number of URLs you want to monitor. Each plan includes different features and support levels to match your business needs.'
    },
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.'
    },
    {
      question: 'What\'s included in the free plan?',
      answer: 'The free plan includes basic competitor insights, limited report access, and community support to help you get started.'
    },
    {
      question: 'Do you offer custom solutions?',
      answer: 'Absolutely! Our Customized plan is designed for enterprises with specific needs. Contact our sales team to discuss your requirements.'
    }
  ];

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
              Pricing
              <span className="block bg-gradient-to-r from-[#D5CEA3] via-[#E5E5CB] to-[#D5CEA3] bg-clip-text text-transparent">
                That Scales With You
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-[#D5CEA3] leading-relaxed max-w-4xl mx-auto">
              Build on index for free with your company. Upgrade for unlimited dashboards, editors, connections and dedicated enterprise features.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className={`relative group ${
                  plan.popular 
                    ? 'transform scale-105 lg:scale-110 z-10' 
                    : 'hover:scale-105'
                } transition-all duration-300`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-[#D5CEA3] to-[#3C2A21] text-[#1A120B] px-6 py-2 rounded-full font-bold text-sm">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`h-full bg-gradient-to-br from-[#3C2A21]/90 to-[#1A120B]/90 backdrop-blur-lg rounded-3xl shadow-2xl border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-[#D5CEA3] shadow-[#D5CEA3]/20' 
                    : 'border-[#D5CEA3]/30 hover:border-[#D5CEA3]/60'
                }`}>
                  <div className="p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#D5CEA3]/20 to-[#E5E5CB]/20 rounded-2xl text-[#D5CEA3] mb-4">
                        {plan.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-[#E5E5CB] mb-2">{plan.name}</h3>
                      
                      {plan.description && (
                        <p className="text-[#D5CEA3] italic leading-relaxed">{plan.description}</p>
                      )}

                      {plan.pricing && (
                        <div className="space-y-3 mt-6">
                          {plan.pricing.map((tier, tierIndex) => (
                            <div key={tierIndex} className="flex justify-between items-center">
                              <span className="text-2xl font-bold text-[#E5E5CB]">{tier.price}/</span>
                              <span className="text-[#D5CEA3]">{tier.urls}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <div className="flex-1 mb-8">
                      <ul className="space-y-4">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-[#D5CEA3] flex-shrink-0 mt-0.5" />
                            <span className="text-[#E5E5CB]">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <button 
                      className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-[#D5CEA3] to-[#3C2A21] hover:from-[#E5E5CB] hover:to-[#D5CEA3] text-[#1A120B] shadow-lg hover:shadow-xl'
                          : 'bg-gradient-to-r from-[#D5CEA3]/20 to-[#E5E5CB]/20 hover:from-[#D5CEA3]/30 hover:to-[#E5E5CB]/30 text-[#E5E5CB] border border-[#D5CEA3]/30 hover:border-[#D5CEA3]/60'
                      }`}
                      onClick={() => setShowPopup(true)}
                    >
                      <span className="flex items-center justify-center">
                        {plan.cta}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A120B]/80 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br from-[#3C2A21] to-[#1A120B] rounded-3xl p-8 max-w-md w-full border border-[#D5CEA3]/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#E5E5CB] mb-4">Pricing Information</h3>
                <p className="text-[#D5CEA3] leading-relaxed mb-6">
                  "Prices may vary based on data availability, significance, complexity, and other relevant factors."
                </p>
                <button
                  onClick={() => setShowPopup(false)}
                  className="bg-gradient-to-r from-[#D5CEA3]/20 to-[#E5E5CB]/20 hover:from-[#D5CEA3]/30 hover:to-[#E5E5CB]/30 text-[#E5E5CB] font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-[#D5CEA3]/30"
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Features Comparison */}
      <section className="py-20 bg-[#3C2A21]/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#E5E5CB]">Why Choose PricePrive?</h2>
            <p className="text-xl text-[#D5CEA3] leading-relaxed max-w-3xl mx-auto">
              Our comprehensive platform delivers the insights you need to stay competitive and make informed pricing decisions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Real-Time Data',
                description: 'Get up-to-the-minute pricing information and competitor insights to make quick decisions'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Enterprise Security',
                description: 'Bank-level security with SOC 2 compliance ensures your data is always protected'
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Proven Results',
                description: 'Join 10,000+ businesses that have improved their profitability with our platform'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#D5CEA3]/20 to-[#E5E5CB]/20 rounded-2xl text-[#D5CEA3] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#E5E5CB] mb-4">{feature.title}</h3>
                <p className="text-[#D5CEA3] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#E5E5CB]">What Our Customers Say</h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-gradient-to-br from-[#3C2A21]/90 to-[#1A120B]/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-[#D5CEA3]/20 hover:border-[#D5CEA3]/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#D5CEA3] fill-current" />
                  ))}
                </div>
                <p className="text-[#E5E5CB] leading-relaxed mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-[#E5E5CB]">{testimonial.name}</div>
                    <div className="text-sm text-[#D5CEA3]">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#3C2A21] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#E5E5CB]">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-[#1A120B]/90 to-[#3C2A21]/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-[#D5CEA3]/20"
              >
                <h3 className="text-xl font-semibold text-[#E5E5CB] mb-3">{faq.question}</h3>
                <p className="text-[#D5CEA3] leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#E5E5CB]">
              Ready to Get Started?
              <span className="block bg-gradient-to-r from-[#D5CEA3] via-[#E5E5CB] to-[#D5CEA3] bg-clip-text text-transparent">
                Choose Your Plan Today
              </span>
            </h2>
            <p className="text-xl text-[#D5CEA3] leading-relaxed">
              Join thousands of businesses leveraging PricePrive to make data-driven pricing decisions and stay ahead of the competition
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button className="group relative bg-gradient-to-r from-[#D5CEA3] to-[#3C2A21] hover:from-[#E5E5CB] hover:to-[#D5CEA3] text-[#1A120B] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
                <span className="relative z-10 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="flex items-center justify-center px-8 py-4 border-2 border-[#D5CEA3]/30 hover:border-[#D5CEA3] text-[#E5E5CB] hover:text-[#D5CEA3] rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Sales
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

export default PricingPage;