import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Target, 
  Lightbulb, 
  Users, 
  Award, 
  CheckCircle,
  ArrowRight 
} from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on measurable outcomes and ROI for every project we undertake."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of trends and leverage cutting-edge technology and strategies."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We build lasting partnerships with our clients."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from design to delivery."
    }
  ];

  const achievements = [
    "500+ Successful Projects",
    "98% Client Retention Rate",
    "50+ Industry Awards",
    "24/7 Support Available"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                About DigitalPro
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
                We're More Than Just a
                <span className="text-gradient"> Digital Agency</span>
              </h2>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Founded in 2020, DigitalPro has been at the forefront of digital innovation, 
              helping businesses transform their online presence and achieve unprecedented growth. 
              Our team of experts combines creativity with data-driven strategies to deliver 
              exceptional results.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Our Achievements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2 group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - Values Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Team Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Expert Team Members</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;