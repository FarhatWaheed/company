import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Globe, 
  Smartphone, 
  BarChart3, 
  Search, 
  Share2, 
  Palette,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: ["Responsive Design", "Performance Optimization", "SEO Ready", "Security Focused"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android", "Cross-Platform", "App Store Optimization", "Push Notifications"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: BarChart3,
      title: "Digital Strategy",
      description: "Comprehensive digital strategies that align with your business goals and drive growth.",
      features: ["Market Analysis", "Competitor Research", "Growth Planning", "ROI Optimization"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Search,
      title: "SEO & Analytics",
      description: "Search engine optimization and data analytics to improve your online visibility and performance.",
      features: ["Keyword Research", "Technical SEO", "Analytics Setup", "Performance Tracking"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: Share2,
      title: "Social Media",
      description: "Social media management and marketing strategies to build your brand and engage audiences.",
      features: ["Content Creation", "Community Management", "Paid Advertising", "Influencer Marketing"],
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600"
    },
    {
      icon: Palette,
      title: "Brand Design",
      description: "Complete brand identity design including logos, guidelines, and marketing materials.",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Visual Identity"],
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Complete Digital Solutions
            <span className="text-gradient"> for Your Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of digital services designed to help your business 
            thrive in the modern digital landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`relative group cursor-pointer ${service.bgColor} rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={hoveredCard === index ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                    transition={{ delay: featureIndex * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle className={`w-4 h-4 ${service.iconColor} flex-shrink-0`} />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 group-hover:shadow-lg transition-all duration-300`}
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:${service.color} rounded-2xl transition-all duration-300`} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help your business achieve its goals 
              and reach new heights of success.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Get Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;