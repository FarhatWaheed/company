import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import { motion } from 'framer-motion';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import FloatingElements from './components/FloatingElements';

// 3D Components
import AnimatedBox from './components/3D/AnimatedBox';
import FloatingSphere from './components/3D/FloatingSphere';
import ParticleField from './components/3D/ParticleField';

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<LoadingScreen />}>
          <Header />
          
          <main>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
          </main>
          
          <Footer />
          
          {/* 3D Background Canvas */}
          <div className="fixed inset-0 -z-10">
            <Canvas
              camera={{ position: [0, 0, 5], fov: 75 }}
              style={{ background: 'transparent' }}
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -5]} intensity={0.5} />
              
              <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <AnimatedBox position={[-3, 2, -2]} />
              </Float>
              
              <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <FloatingSphere position={[3, -1, -3]} />
              </Float>
              
              <ParticleField />
              
              <Environment preset="city" />
            </Canvas>
          </div>
          
          <FloatingElements />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;